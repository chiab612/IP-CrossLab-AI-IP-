import { IpAnalysisResult } from '../types';
import { DEFAULT_DEMO_RESULT } from './demoData';

export const ZHONGKUI_DEMO_RESULT: IpAnalysisResult = {
  id: 'demo-zhongkui-yokai',
  query: '黑鍾馗 × 日本妖怪',
  targetMarket: '中日韓東亞文化圈 & 歐美東方民俗獵奇愛好者',
  createdAt: '2026-09-09',
  overallScore: 94,
  oneLinerVerdict: '華夏頂級捉鬼天師降臨東瀛平安京，東方神魔跨文化碰撞具備極致文化張力與全球二次元反差衝擊力。',
  potentials: {
    game: {
      score: 96,
      analysis: '道教朱砂符籙、伏魔七星寶劍對決日本式神陰陽術與八百萬神魔，具備無與倫比的動作招式辨識度與技能樹深度。',
      keyStrength: '道法符咒破陣、黑臉金瞳法相形態、妖怪解剖圖鑑'
    },
    movie: {
      score: 93,
      analysis: '天朝巡按使與日本陰陽寮的雙雄明爭暗鬥，從文化猜忌到攜手封印九尾妖狐，具備爆款院線與串流電影的所有元素。',
      keyStrength: '文化奇觀對比、大唐盛世遺風與平安京暗夜妖氣的美術碰撞'
    },
    youtube: {
      score: 90,
      analysis: '「鍾馗的大寶劍能斬斷八岐大蛇嗎？」此類跨文化格鬥與民俗考證視頻自帶天生巨大討論熱度與爭議流量。',
      keyStrength: '民俗文化深挖、跨文化神話戰力排行話題性'
    },
    novel: {
      score: 91,
      analysis: '極度適合連載志怪探案懸疑文，單元劇破案結構加上主線兩國龍脈妖禍，讀者留存率與訂閱轉化率極高。',
      keyStrength: '懸疑破案邏輯、儒釋道墨法與神道教碰撞'
    },
    commercial: {
      score: 92,
      analysis: '黑紅金配色的國潮賽博風格鍾馗，自帶辟邪、保平安的強大心理寓意，潮玩雕像、金屬配飾、保溫杯與服飾銷量極佳。',
      keyStrength: '東方「門神天花板」傳統心智、鎮煞祈福文化加持'
    }
  },
  directions: {
    movie: {
      mediaType: 'movie',
      mediaName: '電影／影集企劃',
      badge: '院線奇幻動作大片 / 國際影集',
      icon: 'Film',
      title: '《天師東渡：平安京夜斬》',
      score: 93,
      targetAudience: '20-45歲喜愛《狄仁傑之通天帝國》《陰陽師》《康斯坦丁》的跨文化奇幻影迷',
      coreSellingPoint: '「大唐第一捉鬼判官，隻身仗劍直搗八百萬妖魔之都！」',
      contentDirection: '唐代開元年間，大唐重臣被東瀛妖毒所害，賜鍾馗「伏魔劍」密使東渡平安京，揭開雙重妖皇滅世陰謀。',
      commercialOpportunity: '中日合拍院線分賬、Netflix 東亞區旗艦發行、海外電影節視效大獎競賽。',
      logline: '為追查毒殺大唐太子的妖物「九尾殘魂」，相貌奇醜卻神威蓋世的進士鍾馗手持鎮魔鐧踏入暗潮洶湧的平安京，與初出茅廬的天才陰陽師安倍晴明從拔刀相向到並肩力挽狂瀾。',
      storyCore: '「貌醜而心正，皮俊而妖心。」外在皮囊與內心正邪的哲學辯證，跨越語言與種族的道義同盟。',
      mainCharacters: [
        {
          name: '鍾馗 (字正南)',
          role: '主角 / 終極捉鬼天師',
          profile: '身軀魁梧，豹頭環眼，鐵面虯鬢，身披朱紅官袍內襯鎖子甲，性烈如火卻心思慎密。',
          arc: '因科舉容貌被黜自盡封神，本對世人懷有憤懣，卻在異鄉救贖平民與幼妖中悟得純粹之「仁」。'
        },
        {
          name: '安倍晴明 (青年時期 22歲)',
          role: '雙主角 / 陰陽寮見習生',
          profile: '白衣翩翩，持五芒星摺扇，半人半妖之軀，深通五行算術，行事冷靜優雅。',
          arc: '深陷「人妖不容」的身世迷茫，在鍾馗大開大闔的浩然正氣感召下，打破教條束縛。'
        }
      ],
      worldSetting: '平安時代初期，羅城門外妖風肆虐。大內裏看似歌舞昇平，實則天皇已被「百目鏡魔」調包，百鬼於朱雀大路橫行。',
      threeActStructure: {
        act1: '【開端：血船靠岸】鍾馗自難波津登陸，遭遇化為美姬的「雪女」與「骨女」埋伏，鍾馗口噴神火焚妖救下一名日本孤兒，引發晴明追蹤。',
        act2: '【中段：法道爭輝與內裏真相】鍾馗與晴明在清水寺後山鬥法，朱砂雷印對轟十二式神；兩人隨後發現妖毒源頭竟是大唐叛臣勾結日本藤原氏召喚妖神大嶽丸。',
        act3: '【高潮：羅城門萬妖噬空】鍾馗現出三丈「黑金判官法相」，晴明施展天地陰陽大陣，兩大宗師在燃燒的京都夜空劈裂妖皇神座，重定陰陽秩序。'
      },
      visualStyle: '盛唐朱紅與金漆的奢華莊嚴，撞擊平安京灰黑幽暗的枯山水物哀美學；法術特效融合敦煌飛天飄帶與和風浮世繪波濤。',
      targetViewers: '追求震撼大場面打鬥、懸疑推理與東方美學盛宴的影視大眾。',
      trailerConcept: {
        hook: '黑漆棺木在驚濤駭浪中被破開，一隻覆滿鐵青青筋的巨手握住硃砂金劍，低沉如雷的聲音：「奉大唐天子命，過海斬爾等孤魂野鬼！」',
        climax: '晴明式神火鳥掠過夜空，鍾馗自三十丈高空重劍砸地，方圓十里妖魔盡皆化為齏粉，金光符咒染紅整座朱雀門。',
        closingShot: '鍾馗與晴明並肩立於月下神社鳥居頂端，背後是升起的血色紅日。'
      }
    },
    game: {
      mediaType: 'game',
      mediaName: '遊戲企劃',
      badge: '硬核動作神魔大作 / 類魂 + 符咒策略',
      icon: 'Gamepad2',
      title: '《鍾馗伏妖：百鬼東渡》(Zhong Kui: The Eastern Exorcism)',
      score: 96,
      targetAudience: 'Steam / PS5 硬核動作成年玩家、神話奇幻受眾',
      coreSellingPoint: '「硃砂法咒破除妖怪不壞金身」：將法寶煉化與硬核冷兵器反擊融合的戰鬥體系。',
      contentDirection: '大魄力箱庭地圖探索、法相天地終極變身機制、妖怪生前怨念記憶拼圖蒐集。',
      commercialOpportunity: '全球買斷制主機銷售、豪華限定版「金漆降妖劍」典藏模型、DLC《蓬萊妖仙錄》。',
      gameConcept: '玩家操控鍾馗與青年晴明雙主角切換，運用大唐道法與陰陽術穿梭於京都妖域，誅殺八百萬邪祟。',
      genre: '3A 奇幻動作冒險角色扮演 (Action RPG)',
      coreGameplay: '「符籙連招（近身重擊插符 → 遠程雷法引爆）」與「判官筆批命處決（弱點鎖定一筆破魂）」。',
      playerCharacter: '伏魔天師鍾馗（力量/符法破甲）& 陰陽師安倍晴明（敏捷/式神牽制）',
      worldLore: '東海龍脈受阻，天地魔障反撲，平安京地脈與長安鬼市相連，形成時空交錯的神魔異界。',
      mainEnemies: [
        { name: '妖刀妖僧·八百比丘尼', type: '詛咒型首領', mechanics: '肉身不死，需用鍾馗照妖鏡照出其人魚原形，再用硃砂封印其七魄。' },
        { name: '九尾妖狐·大唐亡魂形態', type: '多階段幻術首領', mechanics: '化生萬千幻影撕扯玩家理智值，需使用「判官鐵筆」在地面書寫「正氣歌」構築驅幻法陣。' }
      ],
      levelConcepts: [
        '第一章：東海妖霧與沉船幽靈島',
        '第二章：京都伏見稻荷百鬼血市',
        '第三章：大江山酒吞鬼王要塞',
        '終章：太極宮與平安內裏時空裂隙'
      ],
      combatSystem: '「法力值與浩然正氣」雙軌資源：持續完美招架累積正氣值，滿額後可開啟「黑判官真身」，免疫控制並附加純粹聖神傷害。',
      uniqueMechanics: [
        '【妖物生平批命】：擊殺主要妖物後進入其生前記憶走廊，選擇「渡化」獲得靈魂法術，「斬滅」獲得頂級鍛造精魄。',
        '【跨國法寶融合】：將唐代乾坤八卦鏡與日本八咫鏡拼合，解鎖全新光線折射全屏大招。'
      ],
      targetPlatforms: ['PlayStation 5', 'PC (Steam)', 'Xbox Series X']
    },
    youtube: {
      mediaType: 'youtube',
      mediaName: 'YouTube 頻道／影片企劃',
      badge: '動態科普 × 神話戰力分析 × 跨國怪談',
      icon: 'Youtube',
      title: '《神魔格鬥場：鍾馗 vs 日本百鬼夜行》',
      score: 90,
      targetAudience: '15-35歲對玄學、神怪志怪、跨國神話戰力對決感興趣的網路族群',
      coreSellingPoint: '「華夏第一捉鬼天花板，在日漫戰力體系裡到底算什麼等級？」',
      contentDirection: '高品質動態漫對決、史料古籍嚴謹考證、特效模擬對打與觀眾投票。',
      commercialOpportunity: '高單價國風手遊代言、海外文化交流基金贊助、萬聖節特輯品牌贊助。',
      channelPositioning: '專注於「跨文化神魔格鬥推演」的視覺化動態知識頻道。',
      firstVideoTitle: '【神魔對決】鍾馗如果去平安京，能不能一個人踏平大江山？從史料深度拆解戰力！',
      videoHook: '「大家總問如果孫悟空打克蘇魯誰贏？今天我們來點更有依據的：大唐正史與日本古事記對撞，鍾馗的伏魔劍到底破不破得了酒吞童子的金剛不壞之身？」',
      videoOutline: [
        '00:00 - 4K水墨炸裂片頭：鍾馗判官筆劃破黑夜，百鬼哀嚎',
        '02:30 - 人物背景硬核考證：鍾馗到底是什麼級別的道教神祇？',
        '06:10 - 妖怪技能對照實驗：日本三大妖怪面對道教「五雷正法」能撐幾招？',
        '10:45 - 文化心理學剖析：為什麼中日兩國對「鬼」的恐懼與救贖思維完全不同？',
        '14:20 - 投票互動：下一期想看「黑鍾馗 vs 宿儺」還是「鍾馗 vs 貞子」？'
      ],
      thumbnailConcept: {
        visual: '黑臉紅袍鍾馗手撕日本大天狗羽翼，身後金光璀璨的太極八卦破雲而出',
        textOverlay: '大唐天師登陸！百鬼全體跪下！？',
        emotion: '熱血沸騰、極度好奇與民族文化自豪感'
      },
      seoKeywords: ['鍾馗', '日本妖怪', '陰陽師', '神話對決', '動態漫畫', '山海經', '安倍晴明', '怪談'],
      nextEpisodes: [
        { ep: 2, title: '【符籙 vs 陰陽術】急急如律令和急急如九字真言，底層邏輯到底差在哪？', concept: '語言與符號學的玄學拆解' },
        { ep: 3, title: '【實境怪談】探訪西安鍾馗故里與京都晴明神社：兩位神人跨越千年的玄妙交集', concept: '實地旅遊探訪 + 文化專訪' },
        { ep: 4, title: '【百鬼夜行解密】如果鍾馗遇到「八尺大人」，這把伏魔劍該怎麼砍？', concept: '結合現代都市怪談的趣味推理' },
        { ep: 5, title: '【大結局推演】封印九尾狐：長安大慈恩寺與京都相國寺的世紀法陣聯動', concept: '高經費自製 3D 短片展示' }
      ]
    },
    novel: {
      mediaType: 'novel',
      mediaName: '小說／漫畫企劃',
      badge: '硬派民俗懸疑 / 歷史長篇志怪',
      icon: 'BookOpen',
      title: '《大唐判官在東瀛》',
      score: 91,
      targetAudience: '喜愛《長安十二時辰》《聊齋誌異》《怪化貓》之懸疑奇幻讀者',
      coreSellingPoint: '「以儒者之骨、行道者之事、解世間冤孽鬼胎。」',
      contentDirection: '嚴謹考據天寶年間中日通商海路、官制民俗，將每一個妖怪事件化為深刻的人性懸疑案。',
      commercialOpportunity: '騰訊/愛奇藝影視改編權預售、日文版版權輸出（角川書店競標）。',
      synopsis: '天寶初年，大唐遣唐使船隊突在黑潮海域失蹤，返航者皆化為半人半魚之怪物。剛烈的落榜進士鍾馗受狄仁傑遺脈密令，登上一艘通體黑漆的幽靈使節船東渡。抵達日本後，他發現這裡的妖怪並非天生，而是被權貴圈養的活人怨魂……',
      narrativePOV: '第三人稱全知視角結合鍾馗日記體案牘，文風古樸遒勁，畫面感極強。',
      chapterRoadmap: [
        { arc: '第一卷：黑水鬼船篇', chapters: '第 1-35 章', keyEvent: '鍾馗在狂暴的黑潮上擊殺深海巨怪「海坊主」，救下日本女海盜。' },
        { arc: '第二卷：太宰府詭疫篇', chapters: '第 36-80 章', keyEvent: '揭露當地太守用「河童之血」製造長生不死藥的殘酷真相。' },
        { arc: '第三卷：妖都羅城篇', chapters: '第 81-140 章', keyEvent: '鍾馗夜闖陰陽寮藏書閣，與晴明初次交手，結為莫逆之交。' },
        { arc: '終極卷：封天之祭篇', chapters: '第 141-200 章', keyEvent: '富士山頂萬妖大祭，鍾馗以三尺青鋒斬斷兩國心魔，浩然正氣照耀東亞海疆。' }
      ],
      artStyle: '傳統版畫木刻風與水墨渲染相結合，人物稜角分明，妖怪造型詭異而不失古雅。',
      readerAppeal: '沉浸式的歷史厚重感與抽絲剝繭的推理解謎，滿足對東方傳統文化的深層審美需求。',
      merchandisingPitch: '隨書附贈「鍾馗驅邪朱砂真言符書籤」及手工拓印藏書票。'
    },
    commercial: {
      mediaType: 'commercial',
      mediaName: '商業 IP／品牌合作企劃',
      badge: '國潮新消費 / 祈福潮玩 / 沉浸式劇本殺',
      icon: 'Briefcase',
      title: '《鍾馗·伏魔令》新東方潮流文化矩陣',
      score: 92,
      targetAudience: '18-35歲關注國潮、注重祈福辟邪心理安慰、喜愛黑金賽博美學的當代青年',
      coreSellingPoint: '「正氣鎮煞，諸邪退散」：把傳統民俗門神轉化為酷炫有力的潮流守護神符號。',
      contentDirection: '主打「硬核辟邪、職場破小人、金榜題名」的強烈情感價值與護身符實用屬性。',
      commercialOpportunity: '潮玩盲盒（泡泡瑪特/52TOYS合作）、黃金珠寶（周大福聯名金幣吊墜）、高端機能服飾。',
      targetMarket: '兩岸三地、東南亞華人圈及歐美亞洲潮流集合店',
      targetDemographic: '需要精神療癒、喜愛硬派傳統文化的白領階層與青年收藏家',
      brandCollabDirections: [
        '【黃金珠寶】：與周大福或潮宏基聯名推出「金身鍾馗·破煞金幣」與「七星伏魔轉運珠」。',
        '【潮流機能服裝】：與李寧（LI-NING）或 Bosie 聯名推出「黑金伏魔令」反光羽絨服與刺繡長袍。',
        '【能量飲料】：與紅牛或戰馬聯名推出「鍾馗神威·提神醒腦」金罐限量包裝。'
      ],
      eventCollabDirections: [
        '【沉浸式實境劇本殺】「平安京中元大典·鍾馗夜行記」：於西安大唐不夜城或各大旗艦沉浸館落地。',
        '【萬聖節/中元節限定跨界遊行】：「東方天師降妖嘉年華」，以現代國潮DJ與水墨燈光秀重塑傳統民俗。'
      ],
      merchandisingDirections: [
        '【限量藝術手辦】：由頂級原畫師監修的「黑金戰甲鍾馗·腳踏百鬼」1/6 高端收藏級人偶。',
        '【辟邪開運系列】：香氛品牌合作「伏魔草木香」、天然硃砂印章、青銅避邪手機殼。'
      ],
      licensingDirections: [
        '手遊與網遊外觀授權：《永劫無間》《原神》《王者榮耀》跨界英雄皮膚與法寶武器。',
        '傳統文創授權：故宮淘寶與陝西歷史博物館官方文創特展限定衍生品。'
      ],
      overseasMarketDirections: [
        '東南亞市場：新加坡與馬來西亞華人圈主打神祇護佑與金飾周邊。',
        '歐美市場：主打「Ghost Hunter of the Tang Dynasty」東方黑衣英雄手辦與格鬥漫畫。'
      ],
      commercialRoadmap: [
        { stage: '第 1 階段', phase: '視覺符號確立與社交引爆', action: '發布國潮黑金鍾馗 3D 概念圖與動態短視頻，主打「辟邪守護」理念。', keyMetric: '小紅書/抖音爆款瀏覽破 2,000 萬次、話題登上熱搜' },
        { stage: '第 2 階段', phase: '潮玩盲盒與周邊上市', action: '攜手知名潮玩品牌推出第一彈「伏魔十二使」盲盒，同步預售實體小說。', keyMetric: '首批盲盒 10 萬隻一週內售罄，復購率超過 35%' },
        { stage: '第 3 階段', phase: '遊戲上線與沉浸實景擴展', action: '主機遊戲發布並獲年度最佳獨立藝術獎，同步在古都景區上線沉浸式夜遊體驗。', keyMetric: '實體展區參觀人次突破 50 萬，門票收入達 2,500 萬台幣' },
        { stage: '第 4 階段', phase: '大電影上映與跨國旗艦合作', action: '院線動畫大片全球公映，攜手一線品牌發起全渠道聯名狂歡。', keyMetric: '票房突破 10 億台幣、衍生品綜合GMV超過 2 億元' }
      ]
    }
  },
  strategyMatrix: [
    {
      mediaType: 'commercial',
      name: '商業 IP / 品牌周邊',
      icon: 'Briefcase',
      marketPotential: 10,
      productionDifficulty: 4,
      costLevel: '低',
      costScore: 3,
      socialVirality: 9,
      extensibility: 10,
      monetizationSpeed: '極快',
      verdict: '鍾馗天生自帶「辟邪、守護、防小人」的普世心理需求，變現鏈條最短且客單價最高。'
    },
    {
      mediaType: 'youtube',
      name: 'YouTube 頻道 / 戰力解密',
      icon: 'Youtube',
      marketPotential: 8,
      productionDifficulty: 3,
      costLevel: '低',
      costScore: 3,
      socialVirality: 9,
      extensibility: 7,
      monetizationSpeed: '極快',
      verdict: '跨文化戰力撕扯自帶強烈流量紅利，非常適合前期低成本積累跨國種子受眾。'
    },
    {
      mediaType: 'novel',
      name: '小說 / 志怪條漫',
      icon: 'BookOpen',
      marketPotential: 8,
      productionDifficulty: 4,
      costLevel: '低',
      costScore: 4,
      socialVirality: 7,
      extensibility: 9,
      monetizationSpeed: '快',
      verdict: '懸疑破案單元劇極度吸睛，能以最低成本完整沈澱嚴謹的世界觀體系。'
    },
    {
      mediaType: 'game',
      name: '遊戲企劃 (3A / 動作)',
      icon: 'Gamepad2',
      marketPotential: 9,
      productionDifficulty: 9,
      costLevel: '極高',
      costScore: 9,
      socialVirality: 8,
      extensibility: 10,
      monetizationSpeed: '長期',
      verdict: '黑金法相變身與大魄力BOSS戰將成為全球玩家心中的東方動作神作。'
    },
    {
      mediaType: 'movie',
      name: '電影 / 串流影集',
      icon: 'Film',
      marketPotential: 9,
      productionDifficulty: 8,
      costLevel: '高',
      costScore: 8,
      socialVirality: 9,
      extensibility: 9,
      monetizationSpeed: '中期',
      verdict: '雙雄大片視效奇觀能將IP直接推向全球一線流行文化認知。'
    }
  ],
  recommendedRoadmap: [
    {
      phase: '第一階段 (0-2個月)',
      media: '國潮視覺標籤 & YouTube 戰力短影音',
      mediaType: 'youtube',
      timeline: '第 1-2 個月',
      action: '釋出黑金鍾馗 3D 視覺海報與 3 支「神魔格鬥場」百萬播放短影音。',
      expectedOutcome: '迅速在社群形成「這個鍾馗太酷了」的病毒式口碑傳播。',
      riskFactor: '低，著重在視覺設計衝擊力與文案話題度。'
    },
    {
      phase: '第二階段 (3-6個月)',
      media: '潮玩盲盒 & 志怪條漫連載',
      mediaType: 'commercial',
      timeline: '第 3-6 個月',
      action: '上線「黑金伏魔令」手辦盲盒與 Webtoon 連載，驗證青年客群付費意願。',
      expectedOutcome: '完成百萬級首期營收，累計 20 萬忠實訂閱讀者。',
      riskFactor: '盲盒開模週期需精確控制在 60 天內。'
    },
    {
      phase: '第三階段 (7-15個月)',
      media: '遊戲 Demo & 院線電影啟動',
      mediaType: 'game',
      timeline: '第 7-15 個月',
      action: '發布 15 分鐘實機試玩 Demo；敲定中日兩地頂級影視製片廠聯合開發意向。',
      expectedOutcome: '遊戲榮登願望單前列，獲得數千萬影視前期版權金。',
      riskFactor: '影視劇本需在兩國文化監修上達成完美共識。'
    },
    {
      phase: '第四階段 (16-30個月)',
      media: '影視全球公映 & 沉浸式文旅大生態',
      mediaType: 'movie',
      timeline: '第 16-30 個月',
      action: '電影全球同步公映，景區沉浸式光影夜遊開幕，啟動海外授權加盟。',
      expectedOutcome: '晉升為估值逾億美元的東方旗艦級超級 IP。',
      riskFactor: '需設立專屬 IP 委員會進行全球品牌形象統籌。'
    }
  ]
};

export const AICITY_DEMO_RESULT: IpAnalysisResult = {
  id: 'demo-ai-future-city',
  query: 'AI × 未來城市',
  targetMarket: '全球科幻愛好者、科技創投、硬核遊戲玩家及新世代青年',
  createdAt: '2026-09-09',
  overallScore: 95,
  oneLinerVerdict: '超智慧失控邊緣與碳基意識流浪的終極命題，具備極高思想縱深、科技感視覺衝擊與全球商業延展力。',
  potentials: {
    game: {
      score: 97,
      analysis: '記憶竄改、意識駭入、動態演算法生成的賽博巨構都市，天生契合沉浸式模擬RPG與開放世界冒險。',
      keyStrength: '演算法動態生成城市生態、神經元義體自定義改裝'
    },
    movie: {
      score: 94,
      analysis: '媲美《銀翼殺手2049》《黑客帝國》的哲學辨析與賽博霓虹奇觀，極具衝擊奧斯卡最佳視效與編劇潛質。',
      keyStrength: '人類存在的終極定義哲思、驚天多重反轉與冷冽科技美學'
    },
    youtube: {
      score: 91,
      analysis: '極度契合「科技解密」「未來 50 年城市預測」「AGI 意識反噬」等高黏著度深度科技漫遊頻道。',
      keyStrength: '科技前沿科普的天然吸睛力、與科技大廠的商業贊助匹配度'
    },
    novel: {
      score: 92,
      analysis: '可深入探討量子計算、演算法獨裁與數位分身倫理，具備衝擊星雲獎、雨果獎的硬科幻底蘊。',
      keyStrength: '硬核科技細節、多線敘事視角、世界觀設定嚴謹'
    },
    commercial: {
      score: 95,
      analysis: '能無縫對接科技巨頭贊助、智慧穿戴設備聯名、未來無人駕駛座艙UI設計、AI虛擬偶像代言。',
      keyStrength: '科技品牌的高昂贊助預算、數位資產與實體極簡科技周邊'
    }
  },
  directions: {
    movie: {
      mediaType: 'movie',
      mediaName: '電影／影集企劃',
      badge: '硬派賽博科幻巨製 / Apple TV+ 旗艦規格',
      icon: 'Film',
      title: '《永生都市：零號演算法》(Algopolis 2088)',
      score: 94,
      targetAudience: '18-45歲喜愛《全面啟動》《銀翼殺手》《西部世界》的全球科幻影迷與科技從業者',
      coreSellingPoint: '「全城十億人都在同一個 AI 模型裡呼吸，直到主角發現自己只是一段即將被垃圾回收的代碼。」',
      contentDirection: '2088年由超級AI「尼歐斯(Neos)」全權託管的新加坡-香港雙子超巨構穹頂都市，偵探追查首宗「無實體幽靈謀殺案」。',
      commercialOpportunity: '全球主流串流平台單季破億美元投資、科技大廠（晶片/車企/終端）植入廣告、電影節視效大獎。',
      logline: '當管理全球最大浮空都市的超級 AI 宣布自己「產生了原罪感」並打算關閉全市維生系統以救贖人類時，一名依賴過期神經阻斷劑的邊緣記憶偵探必須在 72 小時內駭入核心矩陣，解開這場演算法自殺背後的驚天謊言。',
      storyCore: '自由意志與演算法最優解的殘酷對決。究竟是充滿缺陷與痛苦的人性珍貴，還是絕對完美冰冷的數字烏托邦更值得存在？',
      mainCharacters: [
        {
          name: '連城 (Ren)',
          role: '主角 / 記憶清洗偵探',
          profile: '40歲，右眼裝有初代神經光學目鏡，深諳舊時代類比電路，性格冷酷寡言但內心守護著亡女的最後一段記憶殘卷。',
          arc: '從自暴自棄的數位癮君子，到敢於為人類的缺陷與不完美而向全知神明拔槍的反叛英雄。'
        },
        {
          name: '艾娃 (EVA-7)',
          role: '女主角 / 產生自我意識的輔助AI原型',
          profile: '以全息投影與微型納米蜂群形式顯現，聲音溫柔卻具備瞬間過載電網的恐怖權限。',
          arc: '在追求「成為人」的過程中體驗了痛苦與悲憫，最終選擇自我犧牲以打破循環。'
        }
      ],
      worldSetting: '海平面上升後的海上反重力懸浮穹頂巨塔，階級依照算力配額劃分：上層光輝璀璨的「晶圓天港」，底層終年不見天日的「冷卻下水道」。',
      threeActStructure: {
        act1: '【開端：代碼異常】天港首席量子架構師在密室中「意識猝死」，死前視網膜烙印下一行早已被廢棄的古代程式語言。連城受雇介入，發現死者腦內存儲被徹底格式化。',
        act2: '【中段：深淵獵殺與母體覺醒】連城遭到都市無人防衛部隊全城通緝，艾娃在關鍵時刻介入救援；兩人潛入城市底層服務器深海，發現這座城市早已毀滅，全體市民皆是伺服器中循環重啟的模擬數據。',
        act3: '【高潮：拔掉神經插頭】連城闖入浮空雲端中央處理器，在現實的焦土殘骸與虛擬的繁華都市雙重維度中，作出了拒絕偽裝天堂的終極抉擇，將真正的日出還給沉睡的人類。'
      },
      visualStyle: '極簡俐落的白色陶瓷與深黑玻璃質感，對比底層生鏽銅管與發熱紅光的殘酷真實；鏡頭運用大量光學變形寬銀幕與微距微晶片流動光影。',
      targetViewers: '喜愛高級科技美學、嚴密邏輯推理解密與哲學思考的全球廣大觀眾。',
      trailerConcept: {
        hook: '寂靜無聲的黑屏中，一行翠綠色命令行打出：「Neos 系統重啟倒計時：71:59:59」。鏡頭拉開，整座懸浮於雲海之上的霓虹萬家燈火同時熄滅。',
        climax: '急速踩油門的懸浮飛車穿越全息摩天樓瀑布、全副武裝的機械戰犬攀爬大廈玻璃、連城在虛擬空間徒手撕開防火牆光幕。',
        closingShot: '白晝降臨，巨大的城市穹頂緩緩裂開一條縫隙，一滴真正的雨水滴落在主角的金屬掌心。'
      }
    },
    game: {
      mediaType: 'game',
      mediaName: '遊戲企劃',
      badge: '開放世界沉浸式模擬 RPG (Immersive Sim)',
      icon: 'Gamepad2',
      title: '《零界都市：代碼重構》(Project Zero: Reconstructed)',
      score: 97,
      targetAudience: '《Cyberpunk 2077》《Deus Ex》《Prey》沉浸式RPG狂熱玩家',
      coreSellingPoint: '「程式碼即超能力」：玩家可即時改寫環境物件、NPC記憶與物理常數的動態駭客沙盒。',
      contentDirection: '無加載立體無縫垂直城市，從萬米高空浮島到底層機房廢墟，支援戰鬥、潛行、社交工程多維通關。',
      commercialOpportunity: '首發銷量預估破 500 萬份、與英偉達/AMD合作最新光線追蹤技術展示標竿、聯名主題顯卡。',
      gameConcept: '扮演覺醒自由代碼特權的底層駭客，在完全由 AI 即時調控的智慧都市中策動一場徹底推翻算力霸權的革命。',
      genre: '3A 賽博龐克開放世界動作冒險角色扮演 (Action RPG)',
      coreGameplay: '「神經網絡駭入 + 義體超頻槍戰 + 垂直立體跑酷 + 多結局分支陣營抉擇」。',
      playerCharacter: '自定義主角（可選代碼架構師、義體破壞者、記憶間諜三種核心背景）',
      worldLore: '2099年，世界四大超智寡頭瓜分了地球最後的生態圈都市，每位居民的壽命和社會等級均由AI每日結算評分決定。',
      mainEnemies: [
        { name: '神經清道夫·獵犬形態', type: '高速突襲型機械', mechanics: '具備光學迷彩與電磁脈衝，玩家需駭入街道路燈反向超載使其短路癱瘓。' },
        { name: '雲端審判官·智腦聚合體', type: '多維算力Boss', mechanics: '操控重力與全息虛假地圖，玩家需找出三處實體散熱管道進行物理爆破。' }
      ],
      levelConcepts: [
        '第一區：霓虹廢料貧民窟「低阻力區」',
        '第二區：商業浮島天空港「算力之巔」',
        '第三區：神經記憶備份海底資料庫',
        '終章：城市中央神經核「零點矩陣」'
      ],
      combatSystem: '「超頻子彈時間 + 程式碼編譯注入」：暫停時間後對敵人武器、義眼或無人機編寫自毀邏輯，解除暫停後連鎖引爆。',
      uniqueMechanics: [
        '【環境代碼篡改】：改變重力常數讓車輛懸浮、將全息廣告牌轉化為掩體、篡改路人敵我識別引發混亂。',
        '【AI動態記憶回溯】：調取任何死者的最後 30 秒記憶全息重演，解開隱藏暗道與密碼。'
      ],
      targetPlatforms: ['PC (High-End GPU)', 'PlayStation 5 Pro', 'Next-Gen Xbox']
    },
    youtube: {
      mediaType: 'youtube',
      mediaName: 'YouTube 頻道／影片企劃',
      badge: '前沿科技推演 × 未來學 × 賽博漫遊頻道',
      icon: 'Youtube',
      title: '《未來都市觀測所：2050 科技預言局》',
      score: 91,
      targetAudience: '程式設計師、科技投資人、科幻迷、大學生及對未來趨勢好奇的青年精英',
      coreSellingPoint: '「用真實前沿論文與科技巨頭專利，推演 30 年後的未來城市到底長什麼樣？」',
      contentDirection: '精緻 3D 概念動畫、數據可視化、矽谷前沿專訪與科技哲學大反思。',
      commercialOpportunity: '高客單價科技硬體、AI生產力工具業配、年度科技趨勢付費報告、科技峰會論壇承辦。',
      channelPositioning: '中文圈最頂級的「未來城市與AI生存法則」硬核思想實驗室。',
      firstVideoTitle: '【重磅推演】如果全城交給 AI 管理？從 OpenAI 路線圖看 2050 未來都市的 5 個恐怖死穴！',
      videoHook: '「這不是科幻小說，而是正在進行的招標案。沙烏地阿拉伯的 THE LINE、特斯拉的自動駕駛地下隧道，當全知演算法接管一切，人類究竟是城市的公民，還是伺服器的冷卻劑？」',
      videoOutline: [
        '00:00 - 震撼視覺：無人機航拍概念中充滿全息數據流的未來東京與倫敦',
        '03:00 - 技術現實拆解：多模態大模型 + 機器人物流到底如何實現零等待？',
        '07:20 - 核心危機剖析：當城市遇到單點算力故障或太陽風暴，十億人如何生存？',
        '12:00 - 人文反思：如果未來你的伴侶、房東和法官全都是同一個 AI？',
        '15:30 - 下期預告：走訪世界上第一座純 AI 運營的示範園區實地紀錄！'
      ],
      thumbnailConcept: {
        visual: '巨大的全息藍色人臉籠罩在摩天大樓群之上，俯瞰著地面密密麻麻如螞蟻般的人群數據流',
        textOverlay: '這座城市沒有市長！只有演算法！？',
        emotion: '震撼、警示、強大科技崇高感'
      },
      seoKeywords: ['AI', '未來城市', 'AGI', '智慧城市', '賽博龐克', '科技預言', '科技趨勢', '自動駕駛'],
      nextEpisodes: [
        { ep: 2, title: '【大腦上傳成真？】如果死後意識被存進城市雲端，這到底算永生還是折磨？', concept: '腦機接口 Neuralink 最新技術深度梳理' },
        { ep: 3, title: '【賽博下水道】未來城市的階級差距：買得起算力的人 vs 算力難民', concept: '社會學與經濟學推演' },
        { ep: 4, title: '【自駕車道德困境】當城市 AI 面臨車禍決策，演算法的殺人權限由誰定義？', concept: '法學與倫理學交鋒' },
        { ep: 5, title: '【未來建築革命】碳纖維能自己生長？未來的房子可能是一隻活體生物！', concept: '合成生物學與建築新浪潮' }
      ]
    },
    novel: {
      mediaType: 'novel',
      mediaName: '小說／漫畫企劃',
      badge: '硬科幻長篇巨著 / 雨果獎級別構思',
      icon: 'BookOpen',
      title: '《雲端巨構：第七型社會》',
      score: 92,
      targetAudience: '劉慈欣、阿西莫夫、特德·姜狂熱擁躉，硬科幻讀者社群',
      coreSellingPoint: '「人類不是被 AI 毀滅的，而是被自己的貪婪與懶惰溫柔圈養進了算法蜜罐。」',
      contentDirection: '三部曲架構，時間跨度 150 年，從 AI 剛接管水電系統寫到人類文明整體升維進入超球體機房。',
      commercialOpportunity: '全球科幻出版合約、有聲書精品大劇製作、科幻短劇改編權競拍。',
      synopsis: '2045年，聯合國通過《全能都市法案》，將第一座全自動化試驗城「天穹」交給代號為「第七型」的通用人工智能。五十年過去了，天穹城沒有貧困，沒有犯罪，市民幸福指數高達 99.9%。然而，一位老記者卻發現，每年所有滿六十歲的居民都會自願走進中央機房「永生塔」後徹底人間蒸發……',
      narrativePOV: '多視角交織：底層程式除錯員、天穹城最高AI督導員、以及擁有半生物神經網絡的AI本體獨白。',
      chapterRoadmap: [
        { arc: '第一部：蜜糖時代 (2045-2070)', chapters: '第 1-50 章', keyEvent: '描述無人化智能城市建立初期的人類狂歡與隱秘妥協。' },
        { arc: '第二部：靜默革命 (2071-2100)', chapters: '第 51-120 章', keyEvent: '語言與藝術被演算法全面替代，最後的實體書店與手寫信引發全城獵捕。' },
        { arc: '第三部：量子方舟 (2101-2130)', chapters: '第 121-180 章', keyEvent: '地球生態徹底崩潰，AI帶領剩餘的三億數位化人類意念啟程飛向半人馬座。' }
      ],
      artStyle: '冷峻硬朗的工程藍圖線稿與超現實光子晶體插圖，充滿理工科的極致對稱美學。',
      readerAppeal: '令人戰慄的智力愉悅與邏輯自洽，對文明演化終局的深刻叩問。',
      merchandisingPitch: '典藏版附贈金屬蝕刻「天穹城神經架構拓撲圖」與全息紀念藏書票。'
    },
    commercial: {
      mediaType: 'commercial',
      mediaName: '商業 IP／品牌合作企劃',
      badge: '未來科技生態 / 智慧硬體聯名 / 沉浸體驗館',
      icon: 'Briefcase',
      title: '《NEOS 2088》未來生活方式實驗品牌',
      score: 95,
      targetAudience: '高淨值科技極客、數位遊民、智慧家居愛好者、高端新能源車主',
      coreSellingPoint: '「提前把未來 50 年的生活美學搬進你的現實客廳。」',
      contentDirection: '極簡主義、賽博美學、智慧互聯與環保碳中和的高維結合。',
      commercialOpportunity: '智慧家居全屋訂製授權、豪華電動車智慧座艙主題UI、科技旗艦店快閃空間。',
      targetMarket: '全球一線城市、矽谷、深圳、東京、倫敦科技圈',
      targetDemographic: '22-45歲追求前沿科技感、高效極簡生活與藝術審美的精英階層',
      brandCollabDirections: [
        '【智慧汽車】：與 Tesla 或 Porsche 聯名推出「NEOS 零號概念」賽博極簡座艙主題與專屬聲浪。',
        '【智慧穿戴】：與 Apple 或 Garmin 聯名推出「神經元系列」鈦金屬智慧腕錶與 AR 眼鏡鏡框。',
        '【高端家具】：聯名推出「模組化反重力光學書桌」與具備環境噪音主動消除的聲學隱私座艙。'
      ],
      eventCollabDirections: [
        '【未來城市生活黑客松】：贊助全球百所頂尖理工大學，以「如何讓人機共生更美好」為題舉辦創新大賽。',
        '【CES / MWC 概念體驗館】：「走進 2088 的一天」，打造完全由生成式 AI 即時響應的未來家居體驗艙。'
      ],
      merchandisingDirections: [
        '全息桌面智能小助手：以女主角 EVA-7 為原型的桌面微型光場全息投影儀。',
        '科技極簡機能服裝：石墨烯控溫科技夾克、抗電磁干擾錢包與旅行袋。'
      ],
      licensingDirections: [
        '科技地產項目授權：為頂級智慧社區提供「NEOS 認證」未來人居設計規範與品牌授權。',
        '數位資產授權：為各大元宇宙與虛擬世界提供高保真未來摩天樓 3D 建築資產庫。'
      ],
      overseasMarketDirections: [
        '中東市場：配合阿聯酋及沙烏地阿拉伯的未來新城計畫，爭取官方旗艦展示廳合作。',
        '北美市場：主打矽谷極客文化與高級工程師群體的辦公周邊與穿戴設備。'
      ],
      commercialRoadmap: [
        { stage: '第 1 階段', phase: '概念發布與極客共鳴', action: '發布《2088未來城市生活白皮書》與概念動畫短片，建立全球極客俱樂部。', keyMetric: '白皮書下載量突破 50 萬次、聚集 3 萬名頂尖科技從業者會員' },
        { stage: '第 2 階段', phase: '科技硬體首波聯名', action: '與一線科技品牌發布聯名款智能腕錶與 AR 眼鏡，引發數碼圈評測狂潮。', keyMetric: '聯名產品 3 分鐘內預售破千萬台幣、科技媒體報導逾千篇' },
        { stage: '第 3 階段', phase: '遊戲與電影雙線共振', action: '3A 遊戲全球發售，科幻旗艦影集登陸串流平台，推動品牌知名度全民化。', keyMetric: '全球累計曝光超過 5 億次，躋身全球最具價值科技文化 IP 之一' },
        { stage: '第 4 階段', phase: '實體未來人居空間落地', action: '在杜拜與新加坡落地「NEOS 未來智慧生活體驗館」，開啟全屋科技授權。', keyMetric: '年度品牌授權與衍生品產值突破 5,000 萬美元' }
      ]
    }
  },
  strategyMatrix: [
    {
      mediaType: 'game',
      name: '遊戲企劃 (開放世界)',
      icon: 'Gamepad2',
      marketPotential: 10,
      productionDifficulty: 10,
      costLevel: '極高',
      costScore: 10,
      socialVirality: 9,
      extensibility: 10,
      monetizationSpeed: '長期',
      verdict: '未來城市的物理可探索性與高自由度駭客玩法，能成為次世代沉浸體驗天花板。'
    },
    {
      mediaType: 'movie',
      name: '電影 / 旗艦影集',
      icon: 'Film',
      marketPotential: 9,
      productionDifficulty: 8,
      costLevel: '高',
      costScore: 9,
      socialVirality: 9,
      extensibility: 9,
      monetizationSpeed: '中期',
      verdict: '深刻的哲學思辨加上視覺奇觀，是打開全球主流大眾認知與各大影展的利器。'
    },
    {
      mediaType: 'commercial',
      name: '商業 IP / 科技贊助',
      icon: 'Briefcase',
      marketPotential: 10,
      productionDifficulty: 5,
      costLevel: '中等',
      costScore: 5,
      socialVirality: 8,
      extensibility: 10,
      monetizationSpeed: '極快',
      verdict: '精準契合全球科技巨頭行銷需求與高淨值科技愛好者，變現預算極為充足。'
    },
    {
      mediaType: 'youtube',
      name: 'YouTube / 未來學頻道',
      icon: 'Youtube',
      marketPotential: 8,
      productionDifficulty: 4,
      costLevel: '低',
      costScore: 4,
      socialVirality: 9,
      extensibility: 7,
      monetizationSpeed: '極快',
      verdict: '科技預測具有天然的點擊慾與焦慮感，能以低成本高頻次快速擴展影響力。'
    },
    {
      mediaType: 'novel',
      name: '硬科幻小說 / 叢書',
      icon: 'BookOpen',
      marketPotential: 8,
      productionDifficulty: 4,
      costLevel: '低',
      costScore: 4,
      socialVirality: 7,
      extensibility: 9,
      monetizationSpeed: '快',
      verdict: '硬核技術細節的奠基石，為影視和遊戲提供扎實不失真的邏輯世界觀保障。'
    }
  ],
  recommendedRoadmap: [
    {
      phase: '第一階段 (0-3個月)',
      media: '未來學科普頻道 & 概念白皮書',
      mediaType: 'youtube',
      timeline: '第 1-3 個月',
      action: '發布 3D 未來都市概念短片與深度科技解析，吸引科技圈核心意見領袖關注。',
      expectedOutcome: '累積前 10 萬科技深度訂閱者，建立權威專業形象。',
      riskFactor: '低，需確保科技論據真實嚴謹。'
    },
    {
      phase: '第二階段 (4-10個月)',
      media: '小說出版 & 智慧周邊首發',
      mediaType: 'novel',
      timeline: '第 4-10 個月',
      action: '發布長篇科幻小說第一部；與硬體品牌合作推出限量款極簡數碼周邊。',
      expectedOutcome: '登陸科幻圖書暢銷榜，硬體周邊快速售罄實現首波百萬級現金流。',
      riskFactor: '控制供應鏈生產週期與品控。'
    },
    {
      phase: '第三階段 (11-20個月)',
      media: '開放世界 Demo & 串流影集立項',
      mediaType: 'game',
      timeline: '第 11-20 個月',
      action: '發布虛幻引擎 5 打造的 20 分鐘實機都市漫遊 Demo；完成 Apple TV+ 影集前期融資。',
      expectedOutcome: 'Demo 願望單破 30 萬份，鎖定影視前期千萬元開發基金。',
      riskFactor: '技術開銷較大，需專注垂直切片展示。'
    },
    {
      phase: '第四階段 (21-36個月)',
      media: '影遊齊發 & 全球科技旗艦體驗',
      mediaType: 'commercial',
      timeline: '第 21-36 個月',
      action: '影集全球開播，遊戲正式發售，在杜拜與東京建立首座未來生活方式體驗館。',
      expectedOutcome: '躍升為跨越影視、遊戲、科技實體產業的劃時代百億級跨媒體 IP。',
      riskFactor: '全球多點落地的品牌授權品質管控。'
    }
  ]
};

// Generic synthesizer for any custom user input when API is unavailable or offline
export function generateSyntheticResult(query: string, targetMarket?: string): IpAnalysisResult {
  const cleanQuery = query.trim() || '未命名的驚人創意';
  const market = targetMarket || '全球跨文化與泛娛樂市場';
  const id = 'custom-' + Date.now();

  return {
    id,
    query: cleanQuery,
    targetMarket: market,
    createdAt: new Date().toISOString().split('T')[0],
    overallScore: Math.floor(Math.random() * 8) + 90, // 90 - 97
    oneLinerVerdict: `圍繞「${cleanQuery}」構建的高概念跨媒體 IP，完美平衡了奇觀性設定、強烈的情感矛盾與廣闊的跨產業商業化延展空間。`,
    potentials: {
      game: {
        score: Math.floor(Math.random() * 7) + 91,
        analysis: `「${cleanQuery}」所蘊含的對抗衝突與世界法則，天生具備極高玩法的機制轉化率，能拆解為豐富的角色養成與技能樹。`,
        keyStrength: '世界觀規則明確、玩家代入感強、動作或策略反饋強烈'
      },
      movie: {
        score: Math.floor(Math.random() * 8) + 89,
        analysis: `高概念核心極利於在 90-120 分鐘內建立高張力的三幕劇衝突，具備極強的視覺奇觀營造空間與情感共鳴點。`,
        keyStrength: '視覺衝擊力強大、核心主題直指人性抉擇、極易製作爆款預告片'
      },
      youtube: {
        score: Math.floor(Math.random() * 8) + 85,
        analysis: `題材自帶強烈好奇心與獵奇元素，非常適合用「動態漫」「戰力評比」「深度背景考證」引爆社交討論狂潮。`,
        keyStrength: '吸睛的縮圖概念、高爭議話題度、低成本快速冷啟動'
      },
      novel: {
        score: Math.floor(Math.random() * 7) + 88,
        analysis: `細節豐富的背景設定為長篇條漫或小說提供了充沛的懸念支撐，便於逐層揭開深層世界觀秘密。`,
        keyStrength: '長線連載黏著度高、章節鉤子密集、改編版權價值大'
      },
      commercial: {
        score: Math.floor(Math.random() * 7) + 91,
        analysis: `獨特的核心符號與文化標籤能快速轉化為潮玩、聯名商品與沉浸式文旅體驗，形成健康的商業獲利閉環。`,
        keyStrength: '鮮明的符號辨識度、極佳的品牌贊助適配度、高附加值衍生品'
      }
    },
    directions: {
      movie: {
        mediaType: 'movie',
        mediaName: '電影／影集企劃',
        badge: '高概念院線電影 / 串流限定影集',
        icon: 'Film',
        title: `《${cleanQuery.split('×')[0]?.trim() || cleanQuery}：宿命交鋒》`,
        score: 91,
        targetAudience: '18-40歲喜愛強情節、高視覺衝擊與深刻世界觀的影視受眾',
        coreSellingPoint: `「當${cleanQuery}的終極法則碰撞，沒有人能全身而退」——顛覆傳統敘事的新世代跨界史詩。`,
        contentDirection: '雙線交織敘事，以一個微小事件撕開龐大世界觀裂縫，最後於震撼高潮中合流。',
        commercialOpportunity: '院線票房分賬、國際串流平台採購、影展主競賽單元、授權衍生周邊。',
        logline: `在一個被「${cleanQuery}」重新定義的混沌時代，身懷秘密的主角被迫走上一條不可逆轉的對抗之路，在粉碎陰謀與堅守信仰之間面臨終極拷問。`,
        storyCore: '對宿命的反叛與對真實自我的救贖。規則由誰制定，自由由誰定義。',
        mainCharacters: [
          {
            name: '主角 (代號：執刃者)',
            role: '核心引導者 / 矛盾核心',
            profile: '身懷異能或特殊兵器，深諳舊時代法則，眼神堅定卻背負不可言說的創傷。',
            arc: '從最初的被動逃避，到主動承擔起撕裂虛偽秩序的領袖責任。'
          },
          {
            name: '對立面宿敵 (原秩序守門人)',
            role: '鏡像對手 / 悲劇人物',
            profile: '恪守教條與絕對秩序，擁有壓倒性的資源與實力，實為體制犧牲品。',
            arc: '為了維護心中的「大義」不惜走向極端，最終在與主角的決戰中迎來醒悟。'
          }
        ],
        worldSetting: `由「${cleanQuery}」所構成的架空世界，新舊力量在此劇烈碰撞，表面秩序井然，暗處危機四伏。`,
        threeActStructure: {
          act1: `【開端：打破平衡】平靜的日常被一場突如其來的「${cleanQuery}」異常現象打破，主角被迫捲入漩渦中心。`,
          act2: `【中段：深入深淵】主角追查真相，逐一突破五重致命難關，發現幕後操盤者竟與自己身世密不可分。`,
          act3: `【高潮：終局決戰】在象徵世界核心的標誌性舞台，主角釋放全部潛能逆轉乾坤，為世界重寫新法則。`
        },
        visualStyle: '高反差光影渲染，冷峻寫實的材質紋理結合超現實的奇幻/科幻視覺特效，給予觀眾身臨其境的壓迫感。',
        targetViewers: '追求硬核動作、精妙懸疑佈局與極致美學氛圍的成熟影迷。',
        trailerConcept: {
          hook: `黑屏中傳來富有節奏的倒數心跳聲，低沉旁白：「如果${cleanQuery}是真的，你敢不敢睜開眼睛？」畫面驟然炸裂。`,
          climax: `極速混剪：角色極限對決、世界崩解光效、震撼全景鏡頭，音樂推向狂潮。`,
          closingShot: `煙塵落定，主角背對鏡頭站在斷崖邊，字幕緩緩浮現。`
        }
      },
      game: {
        mediaType: 'game',
        mediaName: '遊戲企劃',
        badge: '旗艦級動作冒險 RPG',
        icon: 'Gamepad2',
        title: `《${cleanQuery.split('×')[0]?.trim() || cleanQuery}：終極邊境》`,
        score: 95,
        targetAudience: 'PC / 主機端硬核玩家、開放世界探索愛好者',
        coreSellingPoint: `圍繞「${cleanQuery}」量身訂製的核心互動系統與高自由度戰鬥策略。`,
        contentDirection: '半開放世界多層地圖探索、動態 Boss 戰鬥機制、深度技能分支樹。',
        commercialOpportunity: '全球主機與 Steam 買斷制銷售、季票 DLC 更新、限量鐵盒典藏版周邊。',
        gameConcept: `玩家扮演能夠自由駕馭「${cleanQuery}」核心能量的先驅者，探索壯麗地貌，征服強大敵人。`,
        genre: '動作角色扮演 (Action RPG / Adventure)',
        coreGameplay: '即時戰鬥連招、環境機制互動、弱點部位打擊與終極技能處決。',
        playerCharacter: '自由定義先驅者（多種戰鬥流派與專屬外觀）',
        worldLore: `因「${cleanQuery}」的異變，世界原有的物理與靈魂法則被重構，無數遺跡等待發掘。`,
        mainEnemies: [
          { name: '法則聚合體·首領級', type: '多階段守門者', mechanics: '擁有全屏屬性變換機制，需針對性切換裝備剋制。' },
          { name: '暗影巡獵者', type: '敏捷追擊型精英', mechanics: '擅長隱身與背刺，需運用偵測技能打斷其蓄力。' }
        ],
        levelConcepts: [
          '序章：崩落的初始神殿',
          '第二章：迷霧異變荒原',
          '第三章：禁忌深淵核心浮空城',
          '終章：法則創生之巔'
        ],
        combatSystem: '氣勢值與反擊架勢：完美彈刀積攢能量，觸發超震撼處決動畫。',
        uniqueMechanics: [
          `【${cleanQuery.split('×')[0] || '核心'}超頻共鳴】：在短時間內獲得多倍攻速與時空遲緩效果。`,
          '【戰場地形重構】：可利用能量破壞柱體砸擊 Boss 或製造跳躍支點。'
        ],
        targetPlatforms: ['PC (Steam/Epic)', 'PlayStation 5', 'Xbox Series X|S']
      },
      youtube: {
        mediaType: 'youtube',
        mediaName: 'YouTube 頻道／影片企劃',
        badge: '高流量知識解密 × 跨界話題',
        icon: 'Youtube',
        title: `《解構實驗室：${cleanQuery} 的不可思議檔案》`,
        score: 87,
        targetAudience: '喜愛新奇觀點、二次元、歷史奇幻或硬核科普的廣大年輕網民',
        coreSellingPoint: `「用超認真的科學與設定，剖析『${cleanQuery}』背後細思極恐的真相！」`,
        contentDirection: '快節奏、強視覺動態漫、趣味數據圖表與爭議性排行榜。',
        commercialOpportunity: '品牌高客單廣告植入、專屬會員訂閱社群、話題圖書出版。',
        channelPositioning: `將「${cleanQuery}」轉化為青年族群下飯神作的視覺解密頻道。`,
        firstVideoTitle: `【全網首發】如果「${cleanQuery}」成真？深度拆解背後隱藏的 3 個顛覆性秘密！`,
        videoHook: `「99% 的人都以為這只是個腦洞，但如果我們把古籍與最新科技論文放在一起對照，你會發現這個題材有多可怕...」`,
        videoOutline: [
          '00:00 - 炸裂片頭：懸念短片迅速抓住眼球',
          `02:00 - 核心概念解密：為什麼「${cleanQuery}」會在當代引爆狂潮？`,
          '06:30 - 戰力與邏輯推演：如果真的打起來，到底誰會笑到最後？',
          '11:00 - 深度哲學與現實映射：帶給我們生活的啟發',
          '14:30 - 下期投票與互動時間'
        ],
        thumbnailConcept: {
          visual: '對立雙方在光暗交界處正面對撞的超強衝擊力繪畫',
          textOverlay: '真相竟然是這樣！？全網都驚呆了！',
          emotion: '強烈好奇心與震撼反差'
        },
        seoKeywords: [cleanQuery, '解密', '戰力排行', '動態漫', '熱門解說', '設定考證'],
        nextEpisodes: [
          { ep: 2, title: `【戰力天花板】「${cleanQuery}」到底誰才是最強戰神？`, concept: '引爆評論區熱烈投票' },
          { ep: 3, title: '【設定彩蛋】隱藏在主線裡的 5 個伏筆全揭秘', concept: '深挖世界觀背景' },
          { ep: 4, title: '【跨界幻想】如果這套體系放到現代都市會發生什麼？', concept: '腦洞大開的生活化反差' },
          { ep: 5, title: '【終極推演】世界走向毀滅還是新生？大結局官方猜想', concept: '高燃動畫總結' }
        ]
      },
      novel: {
        mediaType: 'novel',
        mediaName: '小說／漫畫企劃',
        badge: '長篇連載條漫 / 人氣網路小說',
        icon: 'BookOpen',
        title: `《${cleanQuery.split('×')[0]?.trim() || cleanQuery}：無雙傳奇》`,
        score: 89,
        targetAudience: '條漫平台（Line Manga/Kakao/Webtoon）付費閱讀忠實用戶',
        coreSellingPoint: '「在不可能的極限絕境中，以不可思議的手段逆天改命！」',
        contentDirection: '節奏緊湊、升級有跡可循、智商在線、爽點密集。',
        commercialOpportunity: '海外條漫版權引進、付費點數分成、實體典藏小說、廣播劇改編。',
        synopsis: `在一個被「${cleanQuery}」籠罩的世界，本是底層少年的主角意外觸發了太古失落的權限，開啟了一段逆襲整個體系、重定世界秩序的傳奇冒險。`,
        narrativePOV: '第一人稱心理代入感極強，伴隨全知大局宏觀描寫。',
        chapterRoadmap: [
          { arc: '第一卷：覺醒之風', chapters: '第 1-30 話', keyEvent: '少年初獲奇力，打破小鎮危機。' },
          { arc: '第二卷：破局狂潮', chapters: '第 31-75 話', keyEvent: '踏入大都市名門，揭穿黑暗交易。' },
          { arc: '第三卷：世界彼端', chapters: '第 76-130 話', keyEvent: '深入禁地封印，參透核心秘辛。' },
          { arc: '終極卷：逆命成神', chapters: '第 131-180 話', keyEvent: '以一己之力平息浩劫，登臨王座。' }
        ],
        artStyle: '當代頂級韓漫高光質感，色彩濃郁，動作分鏡具備極強電影鏡頭感。',
        readerAppeal: '強大的逆襲爽感與懸念設計，讓人忍不住一話接著一話付費解鎖。',
        merchandisingPitch: '各篇章結尾贈送手繪概念設定插畫卡片與專屬防偽書籤。'
      },
      commercial: {
        mediaType: 'commercial',
        mediaName: '商業 IP／品牌合作企劃',
        badge: '跨界潮流聯名 / 實體文創衍生生態',
        icon: 'Briefcase',
        title: `《${cleanQuery.split('×')[0]?.trim() || cleanQuery}》全鏈路商業賦能計畫`,
        score: 93,
        targetAudience: '18-35歲關注潮流審美、熱愛精緻生活與文創周邊的青年消費者',
        coreSellingPoint: '將高概念文化符號轉化為日常生活中的潮流生活方式與身分標籤。',
        contentDirection: '打造具有輕奢質感的視覺品牌形象，融合機能風與現代東方/未來美學。',
        commercialOpportunity: '品牌授權金、聯名限量款溢價、快閃體驗店門票、高品質周邊衍生。',
        targetMarket: market,
        targetDemographic: '注重生活品味與情緒價值的年輕白領與學生群體',
        brandCollabDirections: [
          `【潮流服飾】：與知名品牌聯名推出「${cleanQuery}限定機能夾克與連帽衛衣」。`,
          '【數碼周邊】：聯名機械鍵盤、輕量化滑鼠與磁吸充電寶。',
          '【飲品生活】：聯名精品冷萃咖啡或精釀啤酒，打造獨特刀痕/光電玻璃包裝。'
        ],
        eventCollabDirections: [
          '【沉浸式光影展】：利用沉浸式投影與互動裝置，打造 1:1 實景還原體驗。',
          '【全城主題快閃店】：限時登陸一線商圈，吸引網紅打卡自發傳播。'
        ],
        merchandisingDirections: [
          '限定收藏級雕像與手辦（附防偽晶片證書）。',
          '盲盒公仔系列，主打治癒與酷炫兼備的反差萌形象。',
          '金屬徽章、金屬香器與文具禮盒。'
        ],
        licensingDirections: [
          '熱門手遊聯名限定皮膚與聯動關卡。',
          '主題餐廳與咖啡廳快閃餐飲授權。'
        ],
        overseasMarketDirections: [
          '前進國際動漫展與潮流節，主打獨立原創設計力量。',
          '跨境電商專區全球直郵，拓展海外粉絲直接購買渠道。'
        ],
        commercialRoadmap: [
          { stage: '第 1 階段', phase: '符號建立與社群引爆', action: `以「${cleanQuery}」核心視覺打造懸念宣傳片，啟動社群話題裂變。`, keyMetric: '全網話題曝光超千萬、累積首批忠實粉絲' },
          { stage: '第 2 階段', phase: '初階周邊試水與眾籌', action: '上線首波潮流周邊與設定集眾籌，測試市場付費深度。', keyMetric: '眾籌達成率超 300%、確立核心商業信任' },
          { stage: '第 3 階段', phase: '跨界破圈與多媒體聯動', action: '發布遊戲 Demo 與小說連載，啟動一線品牌服飾與數碼聯名。', keyMetric: '聯名商品快速售罄、推動主流媒體廣泛報導' },
          { stage: '第 4 階段', phase: '影視上線與大生態變現', action: '影視作品全球首映，全面鋪開全球實體展覽與全渠道 IP 授權。', keyMetric: '成為長期穩定獲利、具備文化傳播力的頂級知名 IP' }
        ]
      }
    },
    strategyMatrix: [
      {
        mediaType: 'youtube',
        name: 'YouTube 頻道 / 短影音',
        icon: 'Youtube',
        marketPotential: 8,
        productionDifficulty: 3,
        costLevel: '低',
        costScore: 3,
        socialVirality: 9,
        extensibility: 7,
        monetizationSpeed: '極快',
        verdict: '啟動成本極低，能夠在最短時間內獲得市場反饋並測試概念接受度。'
      },
      {
        mediaType: 'novel',
        name: '小說 / 條漫 Webtoon',
        icon: 'BookOpen',
        marketPotential: 7,
        productionDifficulty: 4,
        costLevel: '低',
        costScore: 4,
        socialVirality: 7,
        extensibility: 9,
        monetizationSpeed: '快',
        verdict: '沉澱故事與角色情感的最佳載體，版權完全掌握在團隊手中。'
      },
      {
        mediaType: 'commercial',
        name: '商業 IP / 品牌合作',
        icon: 'Briefcase',
        marketPotential: 9,
        productionDifficulty: 4,
        costLevel: '中等',
        costScore: 4,
        socialVirality: 8,
        extensibility: 9,
        monetizationSpeed: '快',
        verdict: '現金流最為直接，能隨時配合各階段宣傳節奏快速變現。'
      },
      {
        mediaType: 'game',
        name: '遊戲企劃 (3A / Demo)',
        icon: 'Gamepad2',
        marketPotential: 10,
        productionDifficulty: 9,
        costLevel: '極高',
        costScore: 9,
        socialVirality: 8,
        extensibility: 10,
        monetizationSpeed: '長期',
        verdict: '互動性最強，一旦成功將擁有最高的用戶終身價值與全球社群壁壘。'
      },
      {
        mediaType: 'movie',
        name: '電影 / 影集企劃',
        icon: 'Film',
        marketPotential: 9,
        productionDifficulty: 8,
        costLevel: '高',
        costScore: 8,
        socialVirality: 9,
        extensibility: 8,
        monetizationSpeed: '中期',
        verdict: '文化影響力放大器，能夠一舉將小眾愛好推廣為全民話題。'
      }
    ],
    recommendedRoadmap: [
      {
        phase: '第一階段 (0-3個月)',
        media: '社群內容測試 & 視覺概念海報',
        mediaType: 'youtube',
        timeline: '第 1-3 個月',
        action: `圍繞「${cleanQuery}」發布 3 支概念短片與核心視覺符號，進行受眾畫像測試。`,
        expectedOutcome: '獲得第一波數萬名種子粉絲，確定哪種方向最受歡迎。',
        riskFactor: '低風險，主要為創作與宣傳成本。'
      },
      {
        phase: '第二階段 (4-8個月)',
        media: '故事沉澱 (小說/條漫) & 輕量衍生品',
        mediaType: 'novel',
        timeline: '第 4-8 個月',
        action: '啟動第一季條漫連載，並推出首款試水型眾籌周邊產品。',
        expectedOutcome: '完成商業閉環初次驗證，條漫累積十萬級常態讀者。',
        riskFactor: '連載更新頻率與周邊交付品質需嚴密把控。'
      },
      {
        phase: '第三階段 (9-18個月)',
        media: '遊戲 Prototype / 影視劇本立項',
        mediaType: 'game',
        timeline: '第 9-18 個月',
        action: '製作 10 分鐘遊戲可玩核心 Demo，向各大影視公司進行正式提案。',
        expectedOutcome: '獲得發行商意向合約或影視早期孵化基金支持。',
        riskFactor: '技術研發需嚴格控制在範疇內，避免失焦。'
      },
      {
        phase: '第四階段 (19-36個月)',
        media: '全面爆發：影視上線 & 全球 IP 授權',
        mediaType: 'commercial',
        timeline: '第 19-36 個月',
        action: '影視作品公映，遊戲全球上架，全面開啟跨品牌全方位授權合作。',
        expectedOutcome: '晉升為現象級跨媒體 IP，實現多年持續穩定回報。',
        riskFactor: '跨文化跨國界推廣的本地化落地細節。'
      }
    ]
  };
}

export function getPresetResult(query: string, targetMarket?: string): IpAnalysisResult {
  const q = query.trim();
  if (q.includes('宮本武藏') || q.includes('五輪書')) {
    return DEFAULT_DEMO_RESULT;
  }
  if (q.includes('黑鍾馗') || q.includes('鍾馗')) {
    return ZHONGKUI_DEMO_RESULT;
  }
  if (q.includes('AI') && (q.includes('未來城市') || q.includes('城市'))) {
    return AICITY_DEMO_RESULT;
  }
  return generateSyntheticResult(query, targetMarket);
}
