import { IpAnalysisResult } from '../types';
import { getPresetResult } from '../data/presetGenerators';

export interface AnalysisResponse {
  data: IpAnalysisResult;
  source: 'gemini-3.8-flash' | 'fallback' | 'fallback-after-error' | 'client-fallback';
  message?: string;
  errorNotice?: string;
}

export async function analyzeCreativeIp(query: string, targetMarket?: string): Promise<AnalysisResponse> {
  try {
    const res = await fetch('/api/analyze-ip', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query,
        targetMarket
      })
    });

    if (!res.ok) {
      throw new Error(`HTTP error ${res.status}`);
    }

    const result = await res.json();
    return result;
  } catch (error) {
    console.warn('[IP CrossLab Client] Failed to fetch from backend, utilizing client-side engine:', error);
    // Instant smooth client-side fallback
    const fallbackData = getPresetResult(query, targetMarket);
    return {
      data: fallbackData,
      source: 'client-fallback',
      message: '以展示模式 (Offline Client-Side Engine) 產生企劃'
    };
  }
}

export async function checkServerHealth(): Promise<{ hasApiKey: boolean; status: string }> {
  try {
    const res = await fetch('/api/health');
    if (!res.ok) return { hasApiKey: false, status: 'offline' };
    return await res.json();
  } catch {
    return { hasApiKey: false, status: 'client-only' };
  }
}
