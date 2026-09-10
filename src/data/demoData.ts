import { IpAnalysisResult } from '../types';

export const DEFAULT_DEMO_RESULT: IpAnalysisResult = {
  id: 'demo-miyamoto-yokai',
  query: '宮本武藏 × 五輪書 × 日本妖怪',
  targetMarket: '全球泛娛樂 & 東亞跨文化市場',
  createdAt: '2026-09-09',
  overallScore: 92,
  oneLinerVerdict: '歷史劍豪傳奇與江戶妖怪志怪的碰撞，具備高概念（High-Concept）戰鬥系統、強烈東方美學與極高全球跨文化延伸性。',
  potentials: {
    game: {
      score: 95,
      analysis: '「五輪之術（地水火風空）」完美對應現代動作RPG元素機制與妖怪剋制相生，具備媲美《仁王》與《隻狼》的硬核戰鬥底蘊。',
      keyStrength: '五輪劍氣相剋機制、雙刀流操作深度、百鬼夜行BOSS戰設計'
    },
    movie: {
      score: 91,
      analysis: '武藏晚年悟道與妖怪入侵現實的宿命交織，具備史詩三幕劇架構與視覺震撼的東方奇幻暗黑動作美學。',
      keyStrength: '劍術極致與哲學探討、水墨幻術與妖怪變態視覺特效'
    },
    youtube: {
      score: 86,
      analysis: '適合以「歷史考證 × 妖怪傳說剖析 × 五輪心法現代職場思維」切入，極易製作成百萬點閱的知識動態漫與3D預告解說。',
      keyStrength: '冷兵器對決假想、日本怪談獵奇題材的高流量吸睛度'
    },
    novel: {
      score: 89,
      analysis: '能深入挖掘五輪書五卷背後的修真/劍禪境界，並透過長篇連載刻劃妖怪部族與戰國武將的背後恩怨，改編漫畫張力極高。',
      keyStrength: '心理描寫細膩、兵法武學體系完整、連載懸念充沛'
    },
    commercial: {
      score: 94,
      analysis: '雙刀二天一流符號、五輪圖騰、日式水墨妖紋極具潮流辨識度，能廣泛授權一番賞、潮牌聯名、精釀酒標與展覽。',
      keyStrength: '強烈的東方武俠視覺符號、實體刀劍雕塑周邊收藏價值'
    }
  },
  directions: {
    movie: {
      mediaType: 'movie',
      mediaName: '電影／影集企劃',
      badge: '院線電影 / Netflix 迷你影集',
      icon: 'Film',
      title: '《五輪斷妖傳：無道之劍》',
      score: 91,
      targetAudience: '18-40歲喜愛東方暗黑奇幻、武士格鬥與《隻狼》《鬼滅之刃》之影視受眾',
      coreSellingPoint: '「不是斬殺妖怪，而是斬斷人心滋生妖怪的業障」——新世代黑暗武士史詩。',
      contentDirection: '以熊本靈巖洞寫《五輪書》的晚年武藏為引子，倒敘與現世妖怪復甦交織的雙線敘事。',
      commercialOpportunity: '全球串流平台（Netflix/Amazon）高規格發行、國際影展技術獎項角逐、聯名實體周邊。',
      logline: '晚年隱居靈巖洞的宮本武藏在提筆寫下《五輪書》最後一章「空之卷」時，封印百年的日本九大古妖以「心魔」之姿席捲天下，他必須重拾二天一流，在心眼與妖斬之間完成人間最後一戰。',
      storyCore: '對武道至境的執念與執念如何化為妖魔。真正的大妖並非生於山林，而是人類在戰亂與殺戮中被撕裂的狂妄與貪婪。',
      mainCharacters: [
        {
          name: '宮本武藏 (晚年 58歲)',
          role: '主角／二天一流宗師',
          profile: '白髮襤褸卻目光如炬，右目曾被妖狐抓傷留下封印妖瞳，手握雙木刀與古刀和泉守兼定。',
          arc: '從年輕時追逐「天下無雙」的勝負執念，到晚年理解「不爭與守護」的兵法大道，完成救贖。'
        },
        {
          name: '佐佐木小次郎 (幽界亡魂 / 妖羅剎)',
          role: '對手 / 宿命之鏡',
          profile: '巖流島陣亡後的怨靈被八岐殘息侵染，化身為能斬斷空間的「燕返妖魔化身」。',
          arc: '為了向武藏討回未竟的一劍，不惜將自己的魂魄獻祭給妖界，成為悲劇性反派。'
        },
        {
          name: '阿通 (轉世靈媒 / 陰陽師血脈)',
          role: '引導者 / 守護者',
          profile: '掌管五輪祭壇封印的巫女，持有武藏當年遺留的五輪草稿碎片，能看破妖怪真名。',
          arc: '從對武藏殺戮名聲的恐懼，轉為對其晚年大仁大勇的理解，並以五行靈符助其破空。'
        }
      ],
      worldSetting: '寬永年間（1640年代）的江戶初期。天下看似太平，德川幕府表面鎮撫列國，私下卻利用禁忌的妖異秘法收割民魂，導致戰國戰死千萬怨靈激化，百鬼於黃昏之際白晝現形。',
      threeActStructure: {
        act1: '【開端：靈巖異象】靈巖洞前血月升起，傳說中的「土蜘蛛」與「百目妖」襲擊參拜民眾。久不拔刀的宮本武藏以五輪書「地之卷」劍氣化解死局，卻發現妖魔體內殘留著當年巖流島小次郎的怨念符咒。',
        act2: '【中段：五輪歷練與京都陷落】武藏沿東海道北上，逐一解開水（柔刃斬濡女）、火（猛攻破火車妖）、風（無影踏破天狗之境）的劍道破綻。京都皇城被九尾妖狐附身的攝政幕僚掌控，小次郎以妖刀現身將武藏逼入絕境。',
        act3: '【高潮：空之卷·彼岸無雙】武藏在瀕死中真正悟出「空之卷」——無招、無相、心中無劍亦無妖。在化為妖界的伏見稻荷千本鳥居之巔，武藏以竹刀斬滅小次郎心中的魔障，兩道劍光合璧劃破天幕，封閉妖界通道。'
      },
      visualStyle: '《羅生門》黑白冷峻寫實質感結合《攻殼機動隊》式的高反差色彩幻境；戰鬥採真實劍道袈裟斬與慢動作粒子特效，妖怪設計參考水木茂與葛飾北齋浮世繪的非人感怪異美學。',
      targetViewers: '喜愛動作設計（John Wick 式冷兵器打鬥）、黑澤明武士精神與東方暗黑神話的世界各地成年觀眾。',
      trailerConcept: {
        hook: '黑屏中只有沉重喘息與木刀擊地聲，蒼老聲音低語：「天下人都以為我晚年是在著書...」鏡頭驟亮，萬千妖瞳在黑暗洞窟中一齊睜開。',
        climax: '急速剪輯：武藏雙刀旋轉割裂巨型赤鬼妖霧、小次郎燕返黑炎撕裂長空、千隻鴉天狗俯衝皇城，武藏拔刀聲如驚雷。',
        closingShot: '雪地中，武藏轉身將木刀插於地表，背後浮現五輪光環，淡金色字體升起：《五輪斷妖傳：無道之劍》。'
      }
    },
    game: {
      mediaType: 'game',
      mediaName: '遊戲企劃',
      badge: '3A 動作冒險 RPG / 類魂 + 角色扮演',
      icon: 'Gamepad2',
      title: '《五輪斬妖錄：二天境界》(Gorin: The Dual Void)',
      score: 95,
      targetAudience: 'PS5/PC/Xbox 玩家，硬核動作與類魂愛好者（Souls-like / Action RPG）',
      coreSellingPoint: '「五輪架勢切換系統（地·水·火·風·空）」：自由切換五種五行劍路，剋制不同妖怪體系。',
      contentDirection: '半開放世界探索日本戰國廢墟、靈山魔洞與幻妖秘境，雙刀流高操作極限連擊。',
      commercialOpportunity: '首發主機/Steam買斷制（定價 $59.99），後續發售「修羅之章」「黃泉之卷」DLC，推出鐵盒典藏版雙刀模型。',
      gameConcept: '玩家扮演武藏或其繼承弟子，在架空的妖化江戶時代，藉由斬妖奪取五行魄石，逐卷解鎖《五輪書》招式與被動身法。',
      genre: '3A 暗黑動作角色扮演 (Souls-like Action RPG)',
      coreGameplay: '架勢切換（地-防反破盾、水-行雲流水流動迴避、火-壓制性爆發連段、風-高速位移與遠距風刃、空-時空斷裂與心眼必殺）與妖怪魄心奪取。',
      playerCharacter: '宮本武藏（青年期傲氣形態 / 晚年無刀真諦形態可切換）',
      worldLore: '豐臣戰敗後，殘黨召喚黃泉邪神「大嶽丸」，將日本九州至關東撕裂成神道、佛法與妖域共存的荒涼亂世。',
      mainEnemies: [
        { name: '酒吞童子·骨王化身', type: '大型霸體首領', mechanics: '噴吐瘴氣鬼火，需切換「水之架勢」以柔卸力，引導瀑布冷卻其熔岩之軀。' },
        { name: '鞍馬天狗·真幻', type: '超高速空戰首領', mechanics: '空中羽刃與幻影衝刺，玩家需以「風之架勢」捕捉風向軌跡進行空中招架彈反。' },
        { name: '妖化吉岡清十郎', type: '人形太刀劍聖', mechanics: '完美複製一乘寺下松之戰，精通虛晃袈裟斬，需以「地之架勢」石化架刀伺機反擊。' }
      ],
      levelConcepts: [
        '第一章：火燒比叡山與亡魂靈沼',
        '第二章：霧隱吉野山與天狗神殿',
        '第三章：暗黑伏見城百鬼夜行天守閣',
        '終章：黃泉歸宿之島·巖流幻境'
      ],
      combatSystem: '「氣勢值」與「五輪輪轉加成」：當連續使用相生架勢（如水生木、火破金）命中目標弱點時，觸發「五輪共鳴」，召喚法相打出致命處決。',
      uniqueMechanics: [
        '【心眼磨刀石】：在特定神龕冥想五輪心法，微調刀刃剛柔比例，直接改變武器攻速與削韌值。',
        '【百妖繪卷封印】：擊殺妖怪後可將妖魂封入《五輪書》空白頁，化為隨身召喚的輔助式神或附魔附刃。'
      ],
      targetPlatforms: ['PlayStation 5', 'PC (Steam / Epic)', 'Xbox Series X|S']
    },
    youtube: {
      mediaType: 'youtube',
      mediaName: 'YouTube 頻道／影片企劃',
      badge: '高流量知識 × 動態漫 × 戰鬥解密頻道',
      icon: 'Youtube',
      title: '《武藏不講理：五輪兵法與妖魔實戰研究所》',
      score: 86,
      targetAudience: '熱愛歷史解密、二次元動漫、武道探討與自我成長哲學的廣大青年網民',
      coreSellingPoint: '「用科學與真實古兵法，拆解宮本武藏如果真的遇到日本妖怪，五輪書教你怎麼秒殺？」',
      contentDirection: '中長視頻（12-18分鐘）高品質動態漫畫、3D戰鬥復原、歷史實境踏查與哲理金句總結。',
      commercialOpportunity: '高CPM動漫/手遊業配、頻道會員專屬兵法手冊、聯名周邊T恤、出版實體圖文解說書。',
      channelPositioning: '亞洲第一檔將「古典兵法哲學」轉譯為「二次元妖怪對抗」的硬核跨界動態頻道。',
      firstVideoTitle: '【宮本武藏】如果五輪書是拿來斬妖的？二天一流徹底破解「酒吞童子」的五個死穴！',
      videoHook: '「歷史課本沒告訴你的是：武藏在靈巖洞閉關的最後半年，洞口每天清晨都堆滿了非人類的殘肢...今天我們用《五輪書》原文來還原這場未公開的屠妖紀錄！」',
      videoOutline: [
        '00:00 - 震撼片頭：水墨動態漫武藏一刀切開八尺大人的百鬼夜行',
        '02:15 - 歷史考證：《五輪書·火之卷》裡記載的奇詭步伐到底在躲什麼？',
        '06:40 - 戰力數值化：如果把大天狗與九尾狐換算成武將，武藏的五種架勢如何無傷破防？',
        '11:20 - 現代啟示：遇到職場「妖怪型主管」，五輪書的心智破局之道',
        '15:00 - 下集預告與觀眾投票：下一位想看武藏單挑「黑鍾馗」還是「玉藻前」？'
      ],
      thumbnailConcept: {
        visual: '武藏眼神閃爍金光手持雙刀，背後浮現巨大赤紅鬼面被切成兩半的強烈撞擊火花',
        textOverlay: '五輪書根本不是武術！是斬妖秘笈！？',
        emotion: '極度震驚、揭密感與強大格鬥張力'
      },
      seoKeywords: ['宮本武藏', '五輪書', '日本妖怪', '隻狼', '仁王', '歷史都市傳說', '劍道實戰', '動態漫'],
      nextEpisodes: [
        { ep: 2, title: '【風之卷解密】面對速度超越音速的「鐮鼬」，武藏的無影燕返如何先發制人？', concept: '物理力學解析二天一流的加速度與角度' },
        { ep: 3, title: '【巖流島真相】佐佐木小次郎根本不是人類？揭露江戶古文獻中的妖刀村正詛咒', concept: '深挖名刀傳奇與日本妖刀文化' },
        { ep: 4, title: '【空之卷的終極哲學】當一切歸零，你才能看清生活中的「心魔妖怪」', concept: '心理學與禪宗思維結合' },
        { ep: 5, title: '【跨界大亂鬥】宮本武藏 vs 黑鍾馗：東方兩大除魔天花板到底誰勝誰負？', concept: '引爆評論區熱烈投票與跨國社群討論' },
        { ep: 6, title: '【實境探訪】親身進入熊本靈巖洞！這座洞窟真的能阻擋妖怪結界嗎？', concept: '現場實拍 Vlog + 虛擬 AR 妖物投影特效' }
      ]
    },
    novel: {
      mediaType: 'novel',
      mediaName: '小說／漫畫企劃',
      badge: '長篇玄幻小說 / 條漫 Webtoon 連載',
      icon: 'BookOpen',
      title: '《二天妖境：五輪真經》',
      score: 89,
      targetAudience: '起點中文網/KAKAO/Line Manga/ピッコマ 重度玄幻、武俠與日韓奇幻讀者',
      coreSellingPoint: '「以儒釋道三教融匯的五輪劍意，打破百鬼夜行掌控的偽天道！」',
      contentDirection: '每週雙更，節奏明快，等級境界分明（入木、觀水、烈火、御風、凌空五重境界），主角智勇雙全。',
      commercialOpportunity: '平台簽約保底+付費章節分成、Kakao/Line條漫改編權高價競標、實體典藏小說出版。',
      synopsis: '少年武藏因誤食黃泉靈果而能看見附著於天下豪強身上的「妖相」。戰國亂世實為妖怪以人為芻狗的血祭屠場。武藏手無寸鐵立誓創出一套「以凡人之驅逆斬神妖」的兵法，從流浪劍客一路斬妖證道，最終寫下震爍古今的《五輪真經》。',
      narrativePOV: '第一人稱與第三人稱雙重視角，既有武藏個人冷酷敏銳的心理獨白，也有群妖紛爭與天下大勢的宏觀全景。',
      chapterRoadmap: [
        { arc: '第一卷：美作國的食屍鬼', chapters: '第 1-30 話', keyEvent: '少年武藏初醒陰陽眼，以斷柴刀搏殺潛伏於鄉里二十年的狂骨妖。' },
        { arc: '第二卷：京都兵法名門之妖', chapters: '第 31-70 話', keyEvent: '挑戰吉岡道場，揭露名門世家竟以弟子之血供養「茨木童子」的駭人黑幕。' },
        { arc: '第三卷：五輪初成·百妖狩獵', chapters: '第 71-120 話', keyEvent: '深入近江妖林，斬水鬼、降火車，自悟「地、水、火」三大劍招。' },
        { arc: '第四卷：巖流島之約·魔劍降世', chapters: '第 121-160 話', keyEvent: '小次郎入魔，長刀「物干棹」引發滔天海嘯，武藏悟出「風之卷」凌波步破局。' },
        { arc: '終極卷：空之天道·人間無妖', chapters: '第 161-200 話', keyEvent: '登臨富士之巔，以「空」字訣淨化源頭妖祖，以凡人之軀開闢無妖新紀元。' }
      ],
      artStyle: '井上雄彥《浪客行》細膩毛筆墨染筆觸，搭配當代韓式Webtoon高飽和度光影渲染，張力拉滿。',
      readerAppeal: '「底層逆襲」+「極致武癡」+「揭露虛偽秩序」的強烈爽感，武學進階有跡可循。',
      merchandisingPitch: '每卷扉頁附贈武藏手繪五輪解密圖，集滿五卷可拼成完整的浮世繪封印地圖。'
    },
    commercial: {
      mediaType: 'commercial',
      mediaName: '商業 IP／品牌合作企劃',
      badge: '潮流跨界 / 沉浸式展覽 / 衍生品授權',
      icon: 'Briefcase',
      title: '《五輪·二天》(Gorin Niten) 跨界商業 IP 生態',
      score: 94,
      targetAudience: 'Z世代潮流愛好者、高端收藏玩具愛好者、日系潮牌客群、沉浸式文旅體驗遊客',
      coreSellingPoint: '「古兵法美學潮流化」：將武藏雙刀、五輪圖騰與現代街頭穿搭、威士忌、電競周邊完美融合。',
      contentDirection: '打造「符號型新東方潮流標籤」，具備類似《鬼滅》《咒術迴戰》但更具成人輕奢質感的品牌格調。',
      commercialOpportunity: '全球IP授權金、潮牌限量抽籤發售、沉浸式古蹟光影展門票、高端雕像與電競聯名外設。',
      targetMarket: '大中華區、日本、北美街頭潮流圈與全球主機電競周邊市場',
      targetDemographic: '18-35歲具有高消費力與審美品味的潮流青年、二次元藏家及科技數位遊民',
      brandCollabDirections: [
        '【潮流服飾】：與 Undercover / Neighborhood 或 CLOT 聯名，推出「五輪·火之卷」刺繡道袍與「空」字機能防風夾克。',
        '【酒類品牌】：與山崎/三得利或獺祭聯名，推出限量款「二天一流」橡木桶熟成日本威士忌，以刀痕水晶玻璃瓶呈現。',
        '【電競科技】：與 Razer 或 Logitech 聯名推出「五輪武藏限定款」磁軸機械鍵盤與超輕量雙模電競滑鼠（附贈水墨防滑貼）。'
      ],
      eventCollabDirections: [
        '【東京 & 台北沉浸式展覽】「五輪妖界·沉浸式光影武道館」：結合teamLab式投影與動態感應木刀，讓參觀者親身體驗「破空斬妖」。',
        '【日本熊本城聯名觀光季】：「武藏靈巖洞解妖之旅」打卡AR實境，帶動當地文旅經濟與文創伴手禮銷售。'
      ],
      merchandisingDirections: [
        '1/4 頂級收藏雕像：宮本武藏晚年袈裟披風雙刀戰酒吞童子（附獨立LED五輪發光地台）。',
        '盲盒系列：「五輪小萌妖 × Q版武藏小次郎」治癒系桌面手辦（全6款+1隱藏）。',
        '金屬香器與印章：以五輪「地水火風空」為概念的黃銅線香插與篆刻印鑑。'
      ],
      licensingDirections: [
        '手遊聯名授權：《FGO》《陰陽師》《第五人格》聯名限定角色活動與五輪皮膚。',
        '文具與禮盒授權：日本萬年筆品牌聯名「五輪真言」墨水套裝與手帳。'
      ],
      overseasMarketDirections: [
        '北美市場：以「Japanese Cyber-Ronin」風格打入Comic-Con及動漫節，主攻雕像與潮服。',
        '歐洲市場：以「禪學武道與哲學」切入巴黎日本博覽會（Japan Expo）及獨立藝術影展周邊。'
      ],
      commercialRoadmap: [
        { stage: '第 1 階段', phase: '內容驗證與冷啟動', action: '發布首波概念PV與視覺海報，啟動 YouTube 動態漫測試核心受眾黏著度。', keyMetric: '社群互動破百萬、累積首批 5 萬種子 IP 粉絲' },
        { stage: '第 2 階段', phase: '社群裂變與輕量變現', action: '啟動募資平台「五輪武藏概念手辦與兵法手帳」預購，並發布條漫第一季。', keyMetric: '集資金額突破 300 萬台幣、漫畫進入平台新作榜 Top 3' },
        { stage: '第 3 階段', phase: '跨界潮牌與電競破圈', action: '發布聯名潮流服飾與電競外設，宣布 3A 遊戲 Demo 登陸 Steam 新品節。', keyMetric: '全網聲量擴散、遊戲願望單突破 15 萬份' },
        { stage: '第 4 階段', phase: '影視聯動與沉浸展覽', action: '全球串流平台首播動畫影集，同步於東京/台北舉辦沉浸式實體展覽。', keyMetric: '影集擠入多國 Top 10、展覽門票售罄' },
        { stage: '第 5 階段', phase: '全球生態與長青授權', action: '推動手遊全域聯名、高端酒類衍生品與全球連鎖主題快閃店。', keyMetric: '年均 IP 授權營收破千萬美元、成為新一代文化標誌' }
      ]
    }
  },
  strategyMatrix: [
    {
      mediaType: 'youtube',
      name: 'YouTube 頻道 / 影片',
      icon: 'Youtube',
      marketPotential: 8,
      productionDifficulty: 3,
      costLevel: '低',
      costScore: 3,
      socialVirality: 9,
      extensibility: 7,
      monetizationSpeed: '極快',
      verdict: '低成本、高爆發，最適合冷啟動驗證題材社群共鳴與建立種子粉絲群。'
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
      verdict: '構建龐大世界觀與嚴謹設定的最佳土壤，版權掌握度最高，可無縫轉譯。'
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
      verdict: '五輪架勢天生具備玩法相剋機制，是長期最具商業天花板與全球影響力的主力媒介。'
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
      extensibility: 8,
      monetizationSpeed: '中期',
      verdict: '視覺奇觀與敘事高度的最佳載體，能在短時間內引爆大眾流行文化潮流。'
    },
    {
      mediaType: 'commercial',
      name: '商業 IP / 品牌合作',
      icon: 'Briefcase',
      marketPotential: 9,
      productionDifficulty: 5,
      costLevel: '中等',
      costScore: 5,
      socialVirality: 8,
      extensibility: 9,
      monetizationSpeed: '快',
      verdict: '利潤率最高，能貫穿所有階段，隨內容聲量遞增形成強大長尾獲利閉環。'
    }
  ],
  recommendedRoadmap: [
    {
      phase: '第一階段 (0-3個月)',
      media: 'YouTube & 社群內容測試',
      mediaType: 'youtube',
      timeline: '第 1-3 個月',
      action: '發布 3-5 支動態漫戰鬥短片與五輪怪談解密，測試不同妖怪設定在年輕族群的反響。',
      expectedOutcome: '獲得第一波 10 萬訂閱與爆款短影音百萬播放，確立核心視覺識別。',
      riskFactor: '低風險，主要成本為插畫與腳本製作。'
    },
    {
      phase: '第二階段 (4-9個月)',
      media: '條漫連載 & 遊戲 Prototype Demo',
      mediaType: 'game',
      timeline: '第 4-9 個月',
      action: '推出條漫第一季（30話）確立粉絲基盤；同時使用虛幻引擎製作 10 分鐘「五輪切換斬妖 Demo」。',
      expectedOutcome: '登陸 Steam 新品節或發布實機展示，吸引發行商與投資人洽談。',
      riskFactor: '中等，需控管 Demo 範疇，避免過早陷入龐大研發泥淖。'
    },
    {
      phase: '第三階段 (10-18個月)',
      media: '影視改編提案 & 跨界品牌首波聯名',
      mediaType: 'movie',
      timeline: '第 10-18 個月',
      action: '攜完整設定集與 Demo 向串流平台（Netflix/Disney+）進行劇集融資；與潮牌推出首款限量Tee。',
      expectedOutcome: '鎖定影視前期開發合約，潮流周邊秒殺帶動第二波話題效應。',
      riskFactor: '影視開發周期較長，需仰賴版權合約保證創作者主導權。'
    },
    {
      phase: '第四階段 (19-36個月)',
      media: '3A 遊戲正式上線 & 全球 IP 授權矩陣',
      mediaType: 'commercial',
      timeline: '第 19-36 個月',
      action: '遊戲多平台發售，影集全球同步上架，啟動沉浸式光影展與全品類衍生品授權。',
      expectedOutcome: '晉升為具備全球知名度的常青跨媒體 IP，實現多元化持續收益。',
      riskFactor: '跨國多方協同考驗 IP 監修標準與品質一致性。'
    }
  ]
};

export const PRESET_IDEAS = [
  {
    title: '宮本武藏 × 五輪書 × 日本妖怪',
    desc: '劍豪哲學兵法融合百鬼夜行，五輪架勢戰鬥奇觀',
    category: '東方暗黑奇幻',
    market: '全球跨文化泛娛樂'
  },
  {
    title: '黑鍾馗 × 日本妖怪',
    desc: '華夏捉鬼天師奉命東渡平安京，跨文化道法與百鬼夜行激戰',
    category: '跨文化民俗懸疑',
    market: '東亞及海外泛文化'
  },
  {
    title: 'AI × 未來城市',
    desc: '意識上傳後的賽博格亡靈與失控超智，新世代賽博龐克偵探誌',
    category: '近未來科幻思辨',
    market: '全球科幻影視與遊戲'
  }
];

export const DEMO_MIYAMOTO_RESULT = DEFAULT_DEMO_RESULT;
