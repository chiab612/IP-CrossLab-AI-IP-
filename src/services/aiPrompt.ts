export function buildIpAnalysisPrompt(query: string, targetMarket?: string): string {
  const market = targetMarket || '全球泛娛樂 & 東亞跨文化市場';

  return `你是一位世界級跨媒體 IP 首席架構師（Chief Transmedia IP Strategist），曾統籌主導過媲美《英雄聯盟：奧術》《最後生還者》《鬼滅之刃》《巫師》等頂級跨媒體 IP 企劃。

請針對創作者輸入的創意題材，進行深度的「跨媒體 IP 商業與藝術雙維度可行性評估」，並將其轉化為高質感的專業企劃書。

【輸入題材】
${query}

【指定目標市場】
${market}

【嚴格輸出格式規範】
你必須直接輸出合法的 JSON 字串，不要附加額外 markdown 說明或引言。JSON 結構必須包含以下欄位：
{
  "overallScore": 數字(85-98),
  "oneLinerVerdict": "一句話總評該題材的跨媒體核心競爭力",
  "potentials": {
    "game": { "score": 數字(80-99), "analysis": "簡短精闢分析", "keyStrength": "核心優勢標籤" },
    "movie": { "score": 數字(80-99), "analysis": "簡短精闢分析", "keyStrength": "核心優勢標籤" },
    "youtube": { "score": 80-99, "analysis": "簡短精闢分析", "keyStrength": "核心優勢標籤" },
    "novel": { "score": 80-99, "analysis": "簡短精闢分析", "keyStrength": "核心優勢標籤" },
    "commercial": { "score": 80-99, "analysis": "簡短精闢分析", "keyStrength": "核心優勢標籤" }
  },
  "directions": {
    "movie": {
      "mediaType": "movie",
      "mediaName": "電影／影集企劃",
      "badge": "院線電影 / 旗艦影集",
      "icon": "Film",
      "title": "作品標題",
      "score": 數字,
      "targetAudience": "目標受眾年齡層與喜好群體",
      "coreSellingPoint": "核心賣點一句話",
      "contentDirection": "內容敘事方向",
      "commercialOpportunity": "商業機會與發行模式",
      "logline": "一句話故事梗概 (Logline)",
      "storyCore": "故事核心哲學精神與衝突",
      "mainCharacters": [
        { "name": "角色名", "role": "定位", "profile": "外貌特徵與身分背景", "arc": "人物弧光變化" }
      ],
      "worldSetting": "世界觀與時代背景構建",
      "threeActStructure": {
        "act1": "第一幕：鋪墊與觸發事件",
        "act2": "第二幕：對抗、考驗與中點危機",
        "act3": "第三幕：終局高潮對決與餘韻"
      },
      "visualStyle": "色彩、構圖、攝影風格與美術參考",
      "targetViewers": "目標影視受眾畫像",
      "trailerConcept": {
        "hook": "預告片前5秒鉤子",
        "climax": "預告片快剪高潮點",
        "closingShot": "預告片定格鏡頭"
      }
    },
    "game": {
      "mediaType": "game",
      "mediaName": "遊戲企劃",
      "badge": "3A 動作冒險 / 角色扮演",
      "icon": "Gamepad2",
      "title": "遊戲名稱",
      "score": 數字,
      "targetAudience": "目標平台與核心玩家圈層",
      "coreSellingPoint": "核心玩法特色",
      "contentDirection": "遊戲流程與世界探索規劃",
      "commercialOpportunity": "商業變現模式",
      "gameConcept": "Game Concept 核心理念",
      "genre": "遊戲類型 (如: Souls-like / Action RPG)",
      "coreGameplay": "核心玩法循環 (Core Loop)",
      "playerCharacter": "玩家角色操控與成長系統",
      "worldLore": "遊戲世界底層法則與傳說",
      "mainEnemies": [
        { "name": "敵人/首領名稱", "type": "類型", "mechanics": "戰鬥機制與應對方式" }
      ],
      "levelConcepts": ["關卡一概念", "關卡二概念", "關卡三概念", "終章概念"],
      "combatSystem": "戰鬥系統與判定規則",
      "uniqueMechanics": ["特色機制1", "特色機制2"],
      "targetPlatforms": ["PlayStation 5", "PC (Steam)", "Xbox Series X"]
    },
    "youtube": {
      "mediaType": "youtube",
      "mediaName": "YouTube 頻道／影片企劃",
      "badge": "動態科普 × 概念解密",
      "icon": "Youtube",
      "title": "頻道或企劃名稱",
      "score": 數字,
      "targetAudience": "網路短影音與知識受眾",
      "coreSellingPoint": "吸睛亮點",
      "contentDirection": "影片形式與更新節奏",
      "commercialOpportunity": "商業贊助與廣告變現",
      "channelPositioning": "頻道定位",
      "firstVideoTitle": "第一支影片標題（具備高點閱吸睛性）",
      "videoHook": "前 15 秒抓住眼球的爆發性開場 Hook",
      "videoOutline": ["00:00 - 片頭...", "02:00 - ...", "06:00 - ...", "10:00 - ...", "14:00 - 結尾互動"],
      "thumbnailConcept": {
        "visual": "縮圖視覺構圖",
        "textOverlay": "縮圖大字文案",
        "emotion": "引發的情緒"
      },
      "seoKeywords": ["關鍵字1", "關鍵字2", "關鍵字3", "關鍵字4"],
      "nextEpisodes": [
        { "ep": 2, "title": "第2集標題", "concept": "重點內容" },
        { "ep": 3, "title": "第3集標題", "concept": "重點內容" },
        { "ep": 4, "title": "第4集標題", "concept": "重點內容" }
      ]
    },
    "novel": {
      "mediaType": "novel",
      "mediaName": "小說／漫畫企劃",
      "badge": "長篇連載 / 條漫 Webtoon",
      "icon": "BookOpen",
      "title": "小說/漫畫名稱",
      "score": 數字,
      "targetAudience": "閱讀受眾群體",
      "coreSellingPoint": "故事吸引力與爽點",
      "contentDirection": "情節節奏安排",
      "commercialOpportunity": "版權授權與訂閱收入",
      "synopsis": "故事大綱",
      "narrativePOV": "敘事視角與筆觸風格",
      "chapterRoadmap": [
        { "arc": "第一篇章名稱", "chapters": "第 1-30 話", "keyEvent": "關鍵突破事件" },
        { "arc": "第二篇章名稱", "chapters": "第 31-70 話", "keyEvent": "世界觀展開事件" },
        { "arc": "終極篇章名稱", "chapters": "第 71-120 話", "keyEvent": "終極對決事件" }
      ],
      "artStyle": "作畫風格 / 分鏡氛圍",
      "readerAppeal": "讀者情感共鳴與追讀驅動力",
      "merchandisingPitch": "衍生周邊出版品賣點"
    },
    "commercial": {
      "mediaType": "commercial",
      "mediaName": "商業 IP／品牌合作企劃",
      "badge": "跨界聯名 / 實體商業生態",
      "icon": "Briefcase",
      "title": "商業品牌或生態名稱",
      "score": 數字,
      "targetAudience": "高消費力青年與潮牌客群",
      "coreSellingPoint": "品牌價值轉譯點",
      "contentDirection": "跨界聯名矩陣",
      "commercialOpportunity": "長期授權盈利空間",
      "targetMarket": "目標市場區域",
      "targetDemographic": "目標消費畫像",
      "brandCollabDirections": ["【潮流服飾】聯名方向...", "【科技數碼】聯名方向...", "【生活消費】聯名方向..."],
      "eventCollabDirections": ["沉浸式展覽方向...", "景區/商圈聯動方向..."],
      "merchandisingDirections": ["潮玩手辦盲盒...", "高端典藏雕像...", "生活文創周邊..."],
      "licensingDirections": ["手遊聯動授權...", "動漫展授權..."],
      "overseasMarketDirections": ["歐美海外拓銷方向...", "東南亞/日韓拓銷方向..."],
      "commercialRoadmap": [
        { "stage": "第 1 階段", "phase": "冷啟動與社群驗證", "action": "執行行動", "keyMetric": "關鍵成果指標" },
        { "stage": "第 2 階段", "phase": "初階變現與粉絲沉澱", "action": "執行行動", "keyMetric": "關鍵成果指標" },
        { "stage": "第 3 階段", "phase": "跨界破圈與多端聯動", "action": "執行行動", "keyMetric": "關鍵成果指標" },
        { "stage": "第 4 階段", "phase": "全球授權與長青生態", "action": "執行行動", "keyMetric": "關鍵成果指標" }
      ]
    }
  },
  "strategyMatrix": [
    {
      "mediaType": "youtube",
      "name": "YouTube 頻道 / 短影音",
      "icon": "Youtube",
      "marketPotential": 數字(1-10),
      "productionDifficulty": 數字(1-10),
      "costLevel": "低",
      "costScore": 3,
      "socialVirality": 數字(1-10),
      "extensibility": 數字(1-10),
      "monetizationSpeed": "極快",
      "verdict": "一句話評語"
    },
    {
      "mediaType": "novel",
      "name": "小說 / 條漫 Webtoon",
      "icon": "BookOpen",
      "marketPotential": 數字(1-10),
      "productionDifficulty": 數字(1-10),
      "costLevel": "低",
      "costScore": 4,
      "socialVirality": 數字(1-10),
      "extensibility": 數字(1-10),
      "monetizationSpeed": "快",
      "verdict": "一句話評語"
    },
    {
      "mediaType": "commercial",
      "name": "商業 IP / 品牌合作",
      "icon": "Briefcase",
      "marketPotential": 數字(1-10),
      "productionDifficulty": 數字(1-10),
      "costLevel": "中等",
      "costScore": 5,
      "socialVirality": 數字(1-10),
      "extensibility": 數字(1-10),
      "monetizationSpeed": "快",
      "verdict": "一句話評語"
    },
    {
      "mediaType": "game",
      "name": "遊戲企劃 (3A / Demo)",
      "icon": "Gamepad2",
      "marketPotential": 數字(1-10),
      "productionDifficulty": 數字(1-10),
      "costLevel": "極高",
      "costScore": 9,
      "socialVirality": 數字(1-10),
      "extensibility": 數字(1-10),
      "monetizationSpeed": "長期",
      "verdict": "一句話評語"
    },
    {
      "mediaType": "movie",
      "name": "電影 / 影集企劃",
      "icon": "Film",
      "marketPotential": 數字(1-10),
      "productionDifficulty": 數字(1-10),
      "costLevel": "高",
      "costScore": 8,
      "socialVirality": 數字(1-10),
      "extensibility": 數字(1-10),
      "monetizationSpeed": "中期",
      "verdict": "一句話評語"
    }
  ],
  "recommendedRoadmap": [
    {
      "phase": "第一階段 (0-3個月)",
      "media": "社群內容測試 & 視覺冷啟動",
      "mediaType": "youtube",
      "timeline": "第 1-3 個月",
      "action": "行動描述",
      "expectedOutcome": "預期成效",
      "riskFactor": "風險控管"
    },
    {
      "phase": "第二階段 (4-9個月)",
      "media": "條漫連載 & 遊戲 Prototype Demo",
      "mediaType": "game",
      "timeline": "第 4-9 個月",
      "action": "行動描述",
      "expectedOutcome": "預期成效",
      "riskFactor": "風險控管"
    },
    {
      "phase": "第三階段 (10-18個月)",
      "media": "影視提案融資 & 潮流跨界首發",
      "mediaType": "movie",
      "timeline": "第 10-18 個月",
      "action": "行動描述",
      "expectedOutcome": "預期成效",
      "riskFactor": "風險控管"
    },
    {
      "phase": "第四階段 (19-36個月)",
      "media": "全平台發售 & 全球 IP 生態大爆發",
      "mediaType": "commercial",
      "timeline": "第 19-36 個月",
      "action": "行動描述",
      "expectedOutcome": "預期成效",
      "riskFactor": "風險控管"
    }
  ]
}
請用繁體中文回覆，確保企劃內容極具專業度與行業術語，如同好萊塢及頂尖遊戲大廠的內部立項企劃白皮書。`;
}
