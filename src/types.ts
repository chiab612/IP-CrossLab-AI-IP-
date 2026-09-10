export type MediaType = 'movie' | 'game' | 'youtube' | 'novel' | 'commercial';

export interface ScoreItem {
  score: number;
  analysis: string;
  keyStrength: string;
}

export interface MediaDirectionBase {
  mediaType: MediaType;
  mediaName: string;
  badge: string;
  icon: string;
  title: string;
  score: number;
  targetAudience: string;
  coreSellingPoint: string;
  contentDirection: string;
  commercialOpportunity: string;
}

export interface CharacterInfo {
  name: string;
  role: string;
  profile: string;
  arc: string;
}

export interface MoviePlan extends MediaDirectionBase {
  mediaType: 'movie';
  logline: string;
  storyCore: string;
  mainCharacters: CharacterInfo[];
  worldSetting: string;
  threeActStructure: {
    act1: string;
    act2: string;
    act3: string;
  };
  visualStyle: string;
  targetViewers: string;
  trailerConcept: {
    hook: string;
    climax: string;
    closingShot: string;
  };
}

export interface EnemyInfo {
  name: string;
  type: string;
  mechanics: string;
}

export interface GamePlan extends MediaDirectionBase {
  mediaType: 'game';
  gameConcept: string;
  genre: string;
  coreGameplay: string;
  playerCharacter: string;
  worldLore: string;
  mainEnemies: EnemyInfo[];
  levelConcepts: string[];
  combatSystem: string;
  uniqueMechanics: string[];
  targetPlatforms: string[];
}

export interface YouTubeEpisode {
  ep: number;
  title: string;
  concept: string;
}

export interface YouTubePlan extends MediaDirectionBase {
  mediaType: 'youtube';
  channelPositioning: string;
  firstVideoTitle: string;
  videoHook: string;
  videoOutline: string[];
  thumbnailConcept: {
    visual: string;
    textOverlay: string;
    emotion: string;
  };
  seoKeywords: string[];
  nextEpisodes: YouTubeEpisode[];
}

export interface NovelChapterArc {
  arc: string;
  chapters: string;
  keyEvent: string;
}

export interface NovelPlan extends MediaDirectionBase {
  mediaType: 'novel';
  synopsis: string;
  narrativePOV: string;
  chapterRoadmap: NovelChapterArc[];
  artStyle: string;
  readerAppeal: string;
  merchandisingPitch: string;
}

export interface CommercialRoadmapNode {
  stage: string;
  phase: string;
  action: string;
  keyMetric: string;
}

export interface CommercialPlan extends MediaDirectionBase {
  mediaType: 'commercial';
  targetMarket: string;
  targetDemographic: string;
  brandCollabDirections: string[];
  eventCollabDirections: string[];
  merchandisingDirections: string[];
  licensingDirections: string[];
  overseasMarketDirections: string[];
  commercialRoadmap: CommercialRoadmapNode[];
}

export interface StrategyMatrixItem {
  mediaType: MediaType;
  name: string;
  icon: string;
  marketPotential: number; // 1-10
  productionDifficulty: number; // 1-10 (higher = harder)
  costLevel: '極低' | '低' | '中等' | '高' | '極高';
  costScore: number; // 1-10
  socialVirality: number; // 1-10
  extensibility: number; // 1-10
  monetizationSpeed: '極快' | '快' | '中期' | '長期';
  verdict: string;
}

export interface RecommendedRoadmapStep {
  phase: string;
  media: string;
  mediaType: MediaType;
  timeline: string;
  action: string;
  expectedOutcome: string;
  riskFactor: string;
}

export interface IpAnalysisResult {
  id: string;
  query: string;
  targetMarket: string;
  createdAt: string;
  overallScore: number;
  oneLinerVerdict: string;
  potentials: {
    game: ScoreItem;
    movie: ScoreItem;
    youtube: ScoreItem;
    novel: ScoreItem;
    commercial: ScoreItem;
  };
  directions: {
    movie: MoviePlan;
    game: GamePlan;
    youtube: YouTubePlan;
    novel: NovelPlan;
    commercial: CommercialPlan;
  };
  strategyMatrix: StrategyMatrixItem[];
  recommendedRoadmap: RecommendedRoadmapStep[];
}

export type ActiveTab = 'home' | 'explore' | 'quantum' | 'projects' | 'profile';

export interface QuantumOptimizationParams {
  totalBudgetMillion: number; // e.g. 15 (Million USD/NTD)
  riskTolerance: 'conservative' | 'balanced' | 'aggressive';
  targetHorizonMonths: number; // e.g. 24
  primaryFocus: MediaType;
}

export interface QuantumMediaAllocation {
  mediaType: MediaType;
  name: string;
  percentage: number;
  amountMillion: number;
  launchWindow: string;
  role: string;
  quantumSynergyTag: string;
  synergyGain: number; // %
}

export interface QuantumAllocationResult {
  bitstring: string; // e.g. "|10110>"
  qubitsCount: number;
  circuitDepth: number;
  shots: number;
  groundStateEnergy: number;
  classicalExpectedRoi: number; // %
  quantumExpectedRoi: number; // %
  roiLiftPercentage: number; // %
  cannibalizationRiskReduction: number; // %
  synergyMultiplier: number; // e.g. 3.2x
  allocations: QuantumMediaAllocation[];
  convergenceCurve: Array<{ step: number; energy: number }>;
  qubitProbabilities: Array<{ state: string; prob: number; isOptimal?: boolean }>;
}
