import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';
import { createServer as createViteServer } from 'vite';
import { buildIpAnalysisPrompt } from './src/services/aiPrompt';
import { getPresetResult } from './src/data/presetGenerators';

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json({ limit: '10mb' }));

  // API Routes
  app.get('/api/health', (req, res) => {
    const hasApiKey = Boolean(process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY !== 'MY_GEMINI_API_KEY');
    res.json({
      status: 'ok',
      hasApiKey,
      timestamp: new Date().toISOString()
    });
  });

  app.post('/api/analyze-ip', async (req, res) => {
    const { query, targetMarket } = req.body;

    if (!query || typeof query !== 'string' || !query.trim()) {
      return res.status(400).json({ error: '創意題材不能為空' });
    }

    const trimmedQuery = query.trim();
    const apiKey = process.env.GEMINI_API_KEY;
    const hasValidKey = Boolean(apiKey && apiKey !== 'MY_GEMINI_API_KEY' && apiKey.length > 5);

    // If no API key or in demo mode, use high quality curated presets / synthetic engine
    if (!hasValidKey) {
      console.log(`[IP CrossLab] No Gemini API key detected. Using fallback engine for "${trimmedQuery}"`);
      const fallbackResult = getPresetResult(trimmedQuery, targetMarket);
      return res.json({
        data: fallbackResult,
        source: 'fallback',
        message: '以展示模式 (Preset / Local AI Engine) 產生企劃'
      });
    }

    try {
      console.log(`[IP CrossLab] Requesting Gemini 3.8 Flash for "${trimmedQuery}"`);
      const ai = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build'
          }
        }
      });

      const prompt = buildIpAnalysisPrompt(trimmedQuery, targetMarket);

      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: prompt,
        config: {
          responseMimeType: 'application/json',
          temperature: 0.7
        }
      });

      const text = response.text || '';
      const parsed = JSON.parse(text);

      // Ensure required structure exists
      parsed.id = 'gemini-' + Date.now();
      parsed.query = trimmedQuery;
      parsed.targetMarket = targetMarket || '全球泛娛樂 & 東亞跨文化市場';
      parsed.createdAt = new Date().toISOString().split('T')[0];

      return res.json({
        data: parsed,
        source: 'gemini-3.8-flash'
      });
    } catch (err: any) {
      console.error('[IP CrossLab] Gemini API call error:', err?.message || err);
      // Fallback seamlessly so UI never crashes or white-screens
      const fallbackResult = getPresetResult(trimmedQuery, targetMarket);
      return res.json({
        data: fallbackResult,
        source: 'fallback-after-error',
        errorNotice: 'AI 服務連線超時，已無縫切換至離線跨媒體企劃引擎。'
      });
    }
  });

  // Vite middleware setup
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`[IP CrossLab] Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
