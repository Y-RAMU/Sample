javascript:
(function()
{
var mra_update_mlist = "2018.03.06";	/* 公式の楽曲リスト更新日 タイトルに表示*/
var mra_update_llist = "2018.03.09";	/* Lv.情報、名前変更日 */
var mra_history = 473;
var maimai_inner_lv = [
	{levels:["8-", "11.2", ""],	 score:[313000, 427620, 0],	 name:"ようこそジャパリパークへ", nick:"ジャパリパーク"},
	{levels:["8-", "(11.8)", ""],	 score:[312500, 514000, 0],	 name:"前前前世", nick:""},
	{levels:["9-", "11.9", ""],	 score:[312500, 479155, 0],	 name:"REVIVER オルタンシア・サーガ -蒼の騎士団- オリジナルVer.", nick:"REVIVER"},
	{levels:["9-", "11.7", ""],	 score:[333000, 549145, 0],	 name:"ヤバい○○", nick:"ヤバい"},
	{levels:["9-", "11.7", ""],	 score:[327000, 619145, 0],	 name:"ミラクル・ショッピング", nick:"ドンキのテーマ"},
	{levels:["9.5", "12+", ""],	 score:[326615, 625260, 0],	 name:"ギリギリ最強あいまいみー！", nick:"あいまいみー"},
	{levels:["9+", "11.6", ""],	 score:[249000, 341640, 0],	 name:"Los! Los! Los!", nick:"LosLosLos"},
	{levels:["9+", "11.9", ""],	 score:[281500, 479655, 0],	 name:"This game", nick:""},
	{levels:["9-", "11.4", ""],	 score:[254000, 404130, 0],	 name:"あ・え・い・う・え・お・あお!!", nick:"あえいうえおあお"},
	{levels:["9-", "11.7", ""],	 score:[367500, 791145, 0],	 name:"日本の米は世界一", nick:"日本米世界一"},
	{levels:["8-", "11.2", ""],	 score:[253000, 396620, 0],	 name:"PERFECT HUMAN", nick:""},
	{levels:["8+", "11.7", ""],	 score:[366000, 533145, 0],	 name:"SUSHI食べたい feat.ソイソース", nick:"SUSHI食べたい"},
	{levels:["8-", "11.9", ""],	 score:[266500, 395155, 0],	 name:"ポップミュージックは僕のもの", nick:"ポップミュージック"},
	{levels:["8+", "(11.0)", ""],	 score:[413000, 659500, 0],	 name:"きらっせ☆ウッド村ファーム", nick:"ウッド村ファーム"},
	{levels:["8-", "(11.7)", ""],	 score:[382500, 566500, 0],	 name:"シュガーソングとビターステップ", nick:"シュガビタ"},
	{levels:["9-", "11.1", ""],	 score:[315000, 372115, 0],	 name:"紅蓮の弓矢", nick:""},
	{levels:["7-", "8+", ""],	 score:[153500, 227000, 0],	 name:"ようかい体操第一", nick:""},
	{levels:["7-", "(9.9)", ""],	 score:[190000, 275000, 0],	 name:"ゲラゲラポーのうた", nick:"ゲラゲラポー"},
	{levels:["7-", "10.4", ""],	 score:[297500, 427120, 0],	 name:"夏祭り", nick:""},
	{levels:["10-", "(11.6)", ""],	 score:[323500, 433000, 0],	 name:"Scatman (Ski Ba Bop Ba Dop Bop)", nick:"Scatman"},
	{levels:["8+", "11.1", ""],	 score:[335000, 493115, 0],	 name:"fake!fake!", nick:""},
	{levels:["8+", "(11.5)", ""],	 score:[331000, 452000, 0],	 name:"HIMITSUスパーク", nick:""},
	{levels:["8-", "11.2", ""],	 score:[246000, 408120, 0],	 name:"でんでんぱっしょん", nick:""},
	{levels:["8-", "10.2", ""],	 score:[232500, 419610, 0],	 name:"Dragon Night", nick:""},
	{levels:["7+", "10.4", ""],	 score:[240500, 326120, 0],	 name:"POP STAR", nick:""},
	{levels:["8-", "10.1", ""],	 score:[173000, 246605, 0],	 name:"Love or Lies", nick:""},
	{levels:["7+", "10.1", ""],	 score:[176000, 208605, 0],	 name:"jelly", nick:""},
	{levels:["7+", "(9.7)", ""],	 score:[150500, 207000, 0],	 name:"美しく燃える森", nick:""},
	{levels:["8-", "10.6", ""],	 score:[144500, 185630, 0],	 name:"Love You", nick:""},
	{levels:["8+", "10.1", ""],	 score:[150500, 177605, 0],	 name:"come again", nick:""},
	{levels:["7+", "(9.5)", "11.3"],	 score:[169000, 203000, 630125],	 name:"Future", nick:""},
	{levels:["8-", "11.7", ""],	 score:[234000, 314645, 0],	 name:"ウッーウッーウマウマ(ﾟ∀ﾟ)", nick:"ウマウマ"},
	{levels:["8+", "10.1", ""],	 score:[164500, 231605, 0],	 name:"NIGHT OF FIRE", nick:""},
	{levels:["8-", "10.0", ""],	 score:[249000, 320100, 0],	 name:"YATTA!", nick:""},
	{levels:["8+", "10.9", ""],	 score:[265500, 344145, 0],	 name:"1/3の純情な感情", nick:"純情な感情"},
	{levels:["8-", "10.0", ""],	 score:[291500, 475100, 0],	 name:"バラライカ", nick:""},
	{levels:["8-", "11.1", "(11.7)"],	 score:[315000, 530615, 488500],	 name:"若い力 -SEGA HARD GIRLS MIX-", nick:"若い力"},
	{levels:["9+", "11.9", ""],	 score:[522500, 773655, 0],	 name:"セハガガガンバッちゃう！！", nick:"セハガール"},
	{levels:["8+", "10.8", ""],	 score:[267500, 402140, 0],	 name:"ラブリー☆えんじぇる!!", nick:"ラブリーえんじぇる"},
	{levels:["8+", "10.7", ""],	 score:[303000, 497635, 0],	 name:"Stand Up!!!!", nick:"Stand Up"},
	{levels:["8+", "12-", ""],	 score:[262000, 431220, 0],	 name:"真・ハンサム体操でズンドコホイ", nick:"ハンサム体操"},
	{levels:["8-", "11.0", ""],	 score:[263500, 452110, 0],	 name:"GET!! 夢&DREAM", nick:"夢DREAM"},
	{levels:["8-", "10.4", ""],	 score:[169000, 227120, 0],	 name:"君の知らない物語", nick:"君知ら"},
	{levels:["7+", "10.8", ""],	 score:[192500, 280640, 0],	 name:"コネクト", nick:""},
	{levels:["9-", "12-", ""],	 score:[212500, 419205, 0],	 name:"SAVIOR OF SONG", nick:"SAVIOR"},
	{levels:["8-", "10.0", ""],	 score:[225500, 309600, 0],	 name:"Luminize", nick:""},
	{levels:["8-", "11.0", ""],	 score:[254500, 407110, 0],	 name:"秘密の扉から会いにきて", nick:"秘密の扉"},
	{levels:["8-", "10.7", ""],	 score:[246000, 417635, 0],	 name:"イチズレシピ", nick:""},
	{levels:["7+", "10.7", ""],	 score:[221500, 405635, 0],	 name:"Daydream café", nick:"ごちうさ"},
	{levels:["7-", "10.3", ""],	 score:[251500, 345115, 0],	 name:"ふ・れ・ん・ど・し・た・い", nick:"ふれんどしたい"},
	{levels:["7+", "10.5", ""],	 score:[240500, 291625, 0],	 name:"Touch Tap Baby", nick:""},
	{levels:["7-", "9.8", ""],	 score:[218000, 337630, 0],	 name:"極上スマイル", nick:""},
	{levels:["8+", "10.2", ""],	 score:[252000, 313110, 0],	 name:"7 Girls War", nick:""},
	{levels:["8-", "10.7", ""],	 score:[258500, 330635, 0],	 name:"Jumping!!", nick:""},
	{levels:["7-", "10.2", ""],	 score:[247000, 392610, 0],	 name:"ゆりゆららららゆるゆり大事件", nick:"ゆるゆり大事件"},
	{levels:["9-", "11.2", ""],	 score:[280000, 481620, 0],	 name:"いぇす！ゆゆゆ☆ゆるゆり♪♪", nick:"ゆゆゆゆるゆり"},
	{levels:["9-", "(11.4)", ""],	 score:[299500, 477500, 0],	 name:"ちょちょちょ！ゆるゆり☆かぷりっちょ！！！", nick:"かぷりっちょ"},
	{levels:["8-", "11.4", ""],	 score:[227500, 405630, 0],	 name:"未来(ソラ)の歌", nick:"未来の歌"},
	{levels:["9.2", "11.0", ""],	 score:[179600, 271110, 0],	 name:"ホシトハナ", nick:""},
	{levels:["9-", "12-", ""],	 score:[218500, 406270, 0],	 name:"Paradisus-Paradoxum", nick:"Para-Para"},
	{levels:["8-", "11.0", ""],	 score:[246000, 388610, 0],	 name:"かくしん的☆めたまるふぉ～ぜっ！", nick:"うまる"},
	{levels:["8+", "(11.7)", ""],	 score:[287500, 524500, 0],	 name:"ファッとして桃源郷", nick:"桃源郷"},
	{levels:["9-", "12-", ""],	 score:[263000, 466795, 0],	 name:"回レ！雪月花", nick:"回レ雪月花"},
	{levels:["7+", "10.9", ""],	 score:[251500, 418145, 0],	 name:"SAKURAスキップ", nick:""},
	{levels:["8+", "(11.2)", ""],	 score:[256000, 363000, 0],	 name:"Now Loading!!!!", nick:""},
	{levels:["9-", "12-", ""],	 score:[312000, 477725, 0],	 name:"砂の惑星 feat. HATSUNE MIKU", nick:"砂の惑星"},
	{levels:["10.4", "12+", ""],	 score:[370620, 644260, 0],	 name:"ドーナツホール", nick:""},
	{levels:["10.5", "12+", ""],	 score:[463625, 809260, 0],	 name:"拝啓ドッペルゲンガー", nick:"ドッペル"},
	{levels:["10-", "12+", ""],	 score:[406000, 777760, 0],	 name:"人生リセットボタン", nick:"リセットボタン"},
	{levels:["9+", "12-", ""],	 score:[348500, 508920, 0],	 name:"アンノウン・マザーグース", nick:"マザーグース"},
	{levels:["9+", "12+", ""],	 score:[386000, 560760, 0],	 name:"ナンセンス文学", nick:""},
	{levels:["9-", "11.7", ""],	 score:[311500, 550645, 0],	 name:"共感覚おばけ", nick:""},
	{levels:["8+", "11.7", ""],	 score:[268500, 391145, 0],	 name:"しねばいいのに", nick:"亀と鯛"},
	{levels:["9-", "11.0", ""],	 score:[349500, 525610, 0],	 name:"好き！雪！本気マジック", nick:"本気マジック"},
	{levels:["8+", "11.0", ""],	 score:[286500, 383110, 0],	 name:"スターナイトスノウ", nick:""},
	{levels:["9+", "11.7", ""],	 score:[392500, 599145, 0],	 name:"白い雪のプリンセスは", nick:"白雪プリンセス"},
	{levels:["9+", "12-", ""],	 score:[372500, 595205, 0],	 name:"リンカーネイション", nick:""},
	{levels:["9-", "12-", ""],	 score:[299500, 472295, 0],	 name:"六兆年と一夜物語", nick:"六兆年"},
	{levels:["10.8", "12+", ""],	 score:[388640, 652945, 0],	 name:"幸せになれる隠しコマンドがあるらしい", nick:"隠しコマンド"},
	{levels:["8-", "11.7", ""],	 score:[284500, 420645, 0],	 name:"フラジール", nick:""},
	{levels:["9-", "12-", ""],	 score:[354000, 694220, 0],	 name:"ちがう!!!", nick:""},
	{levels:["9+", "(11.4)", ""],	 score:[371500, 500500, 0],	 name:"名探偵連続殺人事件", nick:"名探偵"},
	{levels:["8-", "10.5", ""],	 score:[229500, 366125, 0],	 name:"東京レトロ", nick:""},
	{levels:["10-", "12-", ""],	 score:[370000, 470225, 0],	 name:"ARROW", nick:""},
	{levels:["9+", "11.7", ""],	 score:[280000, 437645, 0],	 name:"ヘルシーエンド", nick:""},
	{levels:["9.2", "12-", "12+"],	 score:[369600, 602270, 682445],	 name:"ロストワンの号哭", nick:"ロストワン"},
	{levels:["9-", "12-", ""],	 score:[257000, 395270, 0],	 name:"千本桜", nick:""},
	{levels:["9-", "12-", ""],	 score:[368000, 657220, 0],	 name:"チュルリラ・チュルリラ・ダッダッダ！", nick:"チュルリラ"},
	{levels:["8-", "12-", ""],	 score:[305000, 494205, 0],	 name:"ウミユリ海底譚", nick:"ウミユリ"},
	{levels:["9+", "11.9", ""],	 score:[274000, 537155, 0],	 name:"白ゆき", nick:""},
	{levels:["10.0", "12+", ""],	 score:[443600, 679895, 0],	 name:"初音ミクの消失", nick:"消失"},
	{levels:["9-", "11.6", ""],	 score:[299500, 482140, 0],	 name:"天ノ弱", nick:""},
	{levels:["9-", "12-", ""],	 score:[409500, 670725, 0],	 name:"厨病激発ボーイ", nick:"厨病"},
	{levels:["10.7", "12+", ""],	 score:[307135, 415760, 0],	 name:"脳漿炸裂ガール", nick:"脳漿"},
	{levels:["9-", "12-", ""],	 score:[340500, 640220, 0],	 name:"+♂", nick:""},
	{levels:["9-", "(11.9)", ""],	 score:[309500, 453500, 0],	 name:"おこちゃま戦争", nick:""},
	{levels:["8+", "10.9", "11.2"],	 score:[280500, 431645, 434120],	 name:"だんだん早くなる", nick:""},
	{levels:["8-", "10.0", ""],	 score:[338000, 469600, 0],	 name:"恋愛裁判", nick:""},
	{levels:["8+", "(10.6)", "11.8"],	 score:[241500, 324500, 370650],	 name:"からくりピエロ", nick:""},
	{levels:["9-", "11.3", ""],	 score:[354500, 528625, 0],	 name:"ゴーストルール", nick:""},
	{levels:["8-", "10.9", ""],	 score:[253500, 468645, 0],	 name:"おじゃま虫", nick:""},
	{levels:["9-", "11.7", ""],	 score:[362000, 506645, 0],	 name:"ストリーミングハート", nick:""},
	{levels:["9-", "10.3", ""],	 score:[303500, 377115, 0],	 name:"妄想税", nick:""},
	{levels:["9-", "12-", ""],	 score:[265000, 411725, 0],	 name:"毒占欲", nick:""},
	{levels:["8+", "10.7", ""],	 score:[277500, 368635, 0],	 name:"むかしむかしのきょうのぼく", nick:"むかしむかし"},
	{levels:["8+", "11.9", ""],	 score:[280500, 399155, 0],	 name:"二息歩行", nick:""},
	{levels:["9-", "10.9", ""],	 score:[304500, 423145, 0],	 name:"モザイクロール", nick:""},
	{levels:["9-", "11.2", ""],	 score:[181500, 339120, 0],	 name:"弱虫モンブラン", nick:"モンブラン"},
	{levels:["9+", "11.9", ""],	 score:[218500, 409655, 0],	 name:"39", nick:""},
	{levels:["7+", "11.0", ""],	 score:[227000, 374110, 0],	 name:"＊ハロー、プラネット。", nick:"ハロプラ"},
	{levels:["8+", "12-", ""],	 score:[357000, 497720, 0],	 name:"Mr. Wonderland", nick:"Wonderland"},
	{levels:["10-", "12-", ""],	 score:[387500, 685725, 0],	 name:"吉原ラメント", nick:"ラメント"},
	{levels:["8-", "10.9", ""],	 score:[305000, 469145, 0],	 name:"ココロ", nick:""},
	{levels:["9+", "(11.8)", ""],	 score:[388500, 529500, 0],	 name:"ゆっくりしていってね！！！", nick:"ゆっくり"},
	{levels:["9-", "11.8", ""],	 score:[386000, 538650, 0],	 name:"生きてるおばけは生きている", nick:"生きてるおばけ"},
	{levels:["8-", "10.7", ""],	 score:[315500, 500135, 0],	 name:"踊れオーケストラ", nick:"オーケストラ"},
	{levels:["9-", "11.7", ""],	 score:[411000, 620145, 0],	 name:"クノイチでも恋がしたい", nick:"クノイチ"},
	{levels:["7-", "(10.3)", "11.8"],	 score:[202000, 332500, 531650],	 name:"いーあるふぁんくらぶ", nick:"いーある"},
	{levels:["8-", "12-", ""],	 score:[449000, 696420, 0],	 name:"赤心性：カマトト荒療治", nick:"カマトト"},
	{levels:["8-", "11.0", ""],	 score:[375500, 553110, 0],	 name:"イノコリ先生", nick:""},
	{levels:["9+", "12-", ""],	 score:[371500, 536295, 0],	 name:"ECHO", nick:""},
	{levels:["9-", "11.7", ""],	 score:[392000, 510145, 0],	 name:"キミノヨゾラ哨戒班", nick:"キミノヨゾラ"},
	{levels:["8+", "(11+)", ""],	 score:[382500, 537000, 0],	 name:"しんでしまうとはなさけない！", nick:"しんでしまうとは"},
	{levels:["8+", "(11.1)", ""],	 score:[382500, 597000, 0],	 name:"エイリアンエイリアン", nick:"エイリアン"},
	{levels:["8+", "11.7", ""],	 score:[425000, 665145, 0],	 name:"パーフェクト生命", nick:""},
	{levels:["8+", "11.4", ""],	 score:[433000, 609130, 0],	 name:"やめろ！聴くな！", nick:""},
	{levels:["7+", "(9.8)", ""],	 score:[314000, 488000, 0],	 name:"東京リアルワールド", nick:""},
	{levels:["8-", "11.0", ""],	 score:[304000, 518110, 0],	 name:"すろぉもぉしょん", nick:"すろも"},
	{levels:["9.7", "12+", ""],	 score:[382125, 652260, 0],	 name:"頓珍漢の宴", nick:"頓珍漢"},
	{levels:["8-", "12-", ""],	 score:[285500, 595720, 0],	 name:"ありふれたせかいせいふく", nick:"せかいせいふく"},
	{levels:["8-", "(11.4)", ""],	 score:[296000, 438000, 0],	 name:"絵の上手かった友達", nick:"絵の上手かった"},
	{levels:["10-", "12-", ""],	 score:[296500, 425220, 0],	 name:"腐れ外道とチョコレゐト", nick:"腐れ外道"},
	{levels:["8+", "(11.8)", ""],	 score:[239500, 345500, 0],	 name:"はじめまして地球人さん", nick:"地球人さん"},
	{levels:["8+", "10.3", ""],	 score:[178000, 313115, 0],	 name:"アゲアゲアゲイン", nick:""},
	{levels:["9-", "(11.5)", ""],	 score:[348500, 451000, 0],	 name:"M.S.S.Planet", nick:""},
	{levels:["8+", "11.0", ""],	 score:[350000, 571110, 0],	 name:"不毛！", nick:""},
	{levels:["9-", "11.8", ""],	 score:[400000, 644650, 0],	 name:"ネトゲ廃人シュプレヒコール", nick:"ネトゲ廃人"},
	{levels:["9+", "11.3", ""],	 score:[237500, 343125, 0],	 name:"炉心融解", nick:""},
	{levels:["9-", "11.0", ""],	 score:[312500, 470610, 0],	 name:"StargazeR", nick:""},
	{levels:["9-", "(11.7)", ""],	 score:[316000, 551500, 0],	 name:"Just Be Friends", nick:""},
	{levels:["8+", "10.8", ""],	 score:[325000, 450640, 0],	 name:"LOL -lots of laugh-", nick:"LOL"},
	{levels:["7+", "10.6", ""],	 score:[242500, 343630, 0],	 name:"みくみくにしてあげる♪【してやんよ】", nick:"みくみく"},
	{levels:["9+", "11.3", ""],	 score:[275000, 478125, 0],	 name:"Sweet Devil", nick:""},
	{levels:["8-", "11.6", ""],	 score:[283000, 482140, 0],	 name:"クローバー♣クラブ", nick:"クローバークラブ"},
	{levels:["8-", "11.7", ""],	 score:[239500, 426645, 0],	 name:"深海少女", nick:""},
	{levels:["8-", "11.3", ""],	 score:[264000, 398625, 0],	 name:"SPiCa", nick:""},
	{levels:["8-", "11.4", ""],	 score:[240000, 316630, 0],	 name:"ぽっぴっぽー", nick:""},
	{levels:["9+", "12-", ""],	 score:[256000, 475295, 0],	 name:"Nyan Cat EX", nick:"猫EX"},
	{levels:["9+", "11.9", ""],	 score:[313500, 414655, 0],	 name:"どういうことなの！？", nick:""},
	{levels:["9+", "12-", ""],	 score:[504500, 676225, 0],	 name:"どうしてこうなった", nick:"こなた"},
	{levels:["9-", "12-", ""],	 score:[222500, 384420, 0],	 name:"ダブルラリアット", nick:"ダブラリ"},
	{levels:["10-", "12-", ""],	 score:[236500, 383370, 0],	 name:"magician's operation", nick:"マジオペ"},
	{levels:["8-", "12-", ""],	 score:[274500, 396225, 0],	 name:"トルコ行進曲 - オワタ＼(^o^)／", nick:"オワタ"},
	{levels:["8-", "(9.9)", ""],	 score:[292000, 334500, 0],	 name:"リリリリ★バーニングナイト", nick:"リリリリ"},
	{levels:["8-", "(9.9)", ""],	 score:[198000, 298500, 0],	 name:"イアイア★ナイトオブデザイア", nick:"イアイア"},
	{levels:["7+", "10.4", ""],	 score:[172000, 249620, 0],	 name:"ルカルカ★ナイトフィーバー", nick:"ルカルカ"},
	{levels:["7-", "(9.9)", ""],	 score:[197000, 230000, 0],	 name:"メグメグ☆ファイアーエンドレスナイト", nick:"メグメグ"},
	{levels:["8-", "9.7", ""],	 score:[212000, 303125, 0],	 name:"教えて!! 魔法のLyric", nick:"Lyric"},
	{levels:["7-", "11.0", ""],	 score:[197000, 324110, 0],	 name:"おちゃめ機能", nick:""},
	{levels:["9-", "11.0", ""],	 score:[224500, 385610, 0],	 name:"BAD∞END∞NIGHT", nick:"バドエン"},
	{levels:["7-", "10.8", ""],	 score:[249000, 381140, 0],	 name:"shake it!", nick:""},
	{levels:["8-", "10.3", ""],	 score:[285000, 473115, 0],	 name:"Heart Beats", nick:"Heart Beats(nico)"},
	{levels:["7-", "(9.9)", ""],	 score:[201000, 228000, 0],	 name:"Sweetiex2", nick:""},
	{levels:["9-", "(10.5)", "12-"],	 score:[237500, 276500, 416920],	 name:"ロミオとシンデレラ", nick:"ロミシン"},
	{levels:["8-", "10.8", ""],	 score:[170500, 200140, 0],	 name:"ハッピーシンセサイザ", nick:""},
	{levels:["9-", "10.5", ""],	 score:[323000, 348125, 0],	 name:"ダンシング☆サムライ", nick:"ダンシングサムライ"},
	{levels:["8-", "10.7", ""],	 score:[171000, 315135, 0],	 name:"ハロ／ハワユ", nick:"ハロハワユ"},
	{levels:["8+", "(9.7)", "(11.0)"],	 score:[247000, 292500, 331000],	 name:"Tell Your World", nick:""},
	{levels:["8+", "11.2", ""],	 score:[281500, 451620, 0],	 name:"Hand in Hand", nick:""},
	{levels:["10-", "11.6", ""],	 score:[382500, 532140, 0],	 name:"アンハッピーリフレイン", nick:""},
	{levels:["9+", "12-", ""],	 score:[350000, 430870, 0],	 name:"裏表ラバーズ", nick:""},
	{levels:["8-", "(11.5)", ""],	 score:[232500, 408500, 0],	 name:"ローリンガール", nick:""},
	{levels:["7-", "(10.6)", "12-"],	 score:[202500, 308000, 475420],	 name:"ワールズエンド・ダンスホール", nick:"ワールズエンド"},
	{levels:["8-", "(9.9)", "11.7"],	 score:[232500, 263500, 471645],	 name:"マトリョシカ", nick:""},
	{levels:["8-", "(9.7)", ""],	 score:[186000, 278000, 0],	 name:"パンダヒーロー", nick:""},
	{levels:["9+", "10.6", ""],	 score:[260500, 303630, 0],	 name:"ゴーゴー幽霊船", nick:""},
	{levels:["9-", "(11.2)", ""],	 score:[337000, 468000, 0],	 name:"セツナトリップ", nick:""},
	{levels:["9-", "(11.5)", ""],	 score:[427000, 665000, 0],	 name:"放課後ストライド", nick:"ストライド"},
	{levels:["9+", "11.0", ""],	 score:[269500, 357610, 0],	 name:"カゲロウデイズ", nick:""},
	{levels:["10.6", "12-", ""],	 score:[303630, 493220, 0],	 name:"夜咄ディセイブ", nick:"ディセイブ"},
	{levels:["7+", "10.1", ""],	 score:[194000, 221605, 0],	 name:"メランコリック", nick:""},
	{levels:["7+", "9.2", "11.3"],	 score:[193000, 221100, 321125],	 name:"ZIGG-ZAGG", nick:""},
	{levels:["7+", "10.6", ""],	 score:[245500, 336130, 0],	 name:"I ♥", nick:""},
	{levels:["8-", "10.7", ""],	 score:[267000, 375635, 0],	 name:"ラブチーノ", nick:""},
	{levels:["9-", "10.5", ""],	 score:[278000, 325625, 0],	 name:"スイートマジック", nick:""},
	{levels:["9+", "11.0", ""],	 score:[360500, 435110, 0],	 name:"林檎華憐歌", nick:""},
	{levels:["9-", "12-", ""],	 score:[363000, 677725, 0],	 name:"木彫り鯰と右肩ゾンビ", nick:"鯰とゾンビ"},
	{levels:["9-", "12-", ""],	 score:[388000, 635705, 0],	 name:"デッドレッドガールズ", nick:"デッドレッド"},
	{levels:["9-", "10.6", ""],	 score:[277000, 392630, 0],	 name:"One Step Ahead", nick:""},
	{levels:["7-", "10.5", ""],	 score:[264500, 417125, 0],	 name:"Link", nick:"Link(nico)"},
	{levels:["7+", "(9.8)", ""],	 score:[250000, 345500, 0],	 name:"ひみつをちょーだい", nick:""},
	{levels:["7+", "10.2", ""],	 score:[352500, 518110, 0],	 name:"夏にキスしていいですか？", nick:"夏にキスして"},
	{levels:["9-", "12-", ""],	 score:[426500, 649220, 0],	 name:"すーぱーぬこになりたい", nick:"すーぱーぬこ"},
	{levels:["9+", "12-", ""],	 score:[395500, 584720, 0],	 name:"バッド・ダンス・ホール", nick:"バッドダンスホール"},
	{levels:["9-", "(11.2)", ""],	 score:[473000, 759000, 0],	 name:"ないせんのうた", nick:"ないせん"},
	{levels:["8+", "11.0", ""],	 score:[197000, 318610, 0],	 name:"泡沫、哀のまほろば", nick:"泡沫"},
	{levels:["8-", "(11.3)", ""],	 score:[232000, 463000, 0],	 name:"華鳥風月", nick:""},
	{levels:["8-", "(11.3)", ""],	 score:[272000, 412000, 0],	 name:"色は匂へど散りぬるを", nick:"色は匂へど"},
	{levels:["8+", "11.7", ""],	 score:[223000, 354145, 0],	 name:"月に叢雲華に風", nick:"月に叢雲"},
	{levels:["10+", "12+", ""],	 score:[510500, 688895, 0],	 name:"もうみんなしねばいいのに", nick:"ぱるぱる"},
	{levels:["8+", "(11.7)", ""],	 score:[313000, 543500, 0],	 name:"宿題が終わらないっ！", nick:"宿題"},
	{levels:["9-", "11.4", ""],	 score:[296500, 420130, 0],	 name:"東方スイーツ！～鬼畜姉妹と受難メイド～", nick:"東方スイーツ"},
	{levels:["9-", "(11.7)", ""],	 score:[392500, 701500, 0],	 name:"taboo tears you up", nick:"taboo"},
	{levels:["9+", "(11.4)", ""],	 score:[340500, 432000, 0],	 name:"Starlight Vision", nick:""},
	{levels:["9-", "12-", ""],	 score:[216000, 403225, 0],	 name:"幽闇に目醒めしは", nick:"幽闇"},
	{levels:["8-", "11.6", ""],	 score:[315500, 464640, 0],	 name:"物凄い勢いでけーねが物凄いうた", nick:"けーね"},
	{levels:["9-", "(11.9)", ""],	 score:[275500, 568500, 0],	 name:"オーディエンスを沸かす程度の能力 feat.タイツォン", nick:"オーディエンス"},
	{levels:["9+", "11.7", ""],	 score:[382500, 782145, 0],	 name:"Club Ibuki in Break All", nick:"Club Ibuki"},
	{levels:["9-", "12-", ""],	 score:[618500, 705270, 0],	 name:"チルノのパーフェクトさんすう教室　⑨周年バージョン", nick:"チルノ9周年"},
	{levels:["8+", "11.7", ""],	 score:[259000, 371145, 0],	 name:"チルノのパーフェクトさんすう教室", nick:"チルノ"},
	{levels:["7+", "(11.7)", ""],	 score:[240000, 406000, 0],	 name:"魔理沙は大変なものを盗んでいきました", nick:"魔理沙"},
	{levels:["9.0", "12-", "12+"],	 score:[342590, 547870, 710945],	 name:"患部で止まってすぐ溶ける～狂気の優曇華院", nick:"患部～優曇華"},
	{levels:["9-", "10.9", ""],	 score:[290000, 351145, 0],	 name:"究極焼肉レストラン！お燐の地獄亭！", nick:"焼肉レストラン"},
	{levels:["9-", "11.0", ""],	 score:[285500, 395610, 0],	 name:"お嫁にしなさいっ！", nick:""},
	{levels:["9+", "11.9", ""],	 score:[270500, 455655, 0],	 name:"キャプテン・ムラサのケツアンカー", nick:"ケツアンカー"},
	{levels:["9-", "11.7", ""],	 score:[330000, 643145, 0],	 name:"ひれ伏せ愚民どもっ！", nick:"愚民"},
	{levels:["7-", "(11.9)", ""],	 score:[256500, 519500, 0],	 name:"Grip & Break down !!", nick:"Grip"},
	{levels:["9-", "12-", ""],	 score:[293000, 569295, 0],	 name:"Cosmic Magic Shooter", nick:"Magic Shooter"},
	{levels:["8-", "10.7", ""],	 score:[267000, 438635, 0],	 name:"しゅわスパ大作戦☆", nick:"しゅわスパ"},
	{levels:["8+", "10.9", ""],	 score:[383500, 493145, 0],	 name:"全人類ノ非想天則", nick:"非想天則"},
	{levels:["9-", "11.7", ""],	 score:[336500, 483645, 0],	 name:"Endless, Sleepless Night", nick:"かにぱん"},
	{levels:["9-", "12-", ""],	 score:[356000, 543720, 0],	 name:"No Routine", nick:""},
	{levels:["10+", "12+", ""],	 score:[561500, 805760, 0],	 name:"Scream out! -maimai SONIC WASHER Edit-", nick:"Scream out"},
	{levels:["9.4", "12+", ""],	 score:[353610, 652945, 0],	 name:"幻想のサテライト", nick:"サテライト"},
	{levels:["8-", "11.4", ""],	 score:[252000, 494630, 0],	 name:"待チ人ハ来ズ。", nick:"待チ人"},
	{levels:["8-", "11.4", ""],	 score:[295500, 516130, 0],	 name:"響縁", nick:""},
	{levels:["9-", "11.2", ""],	 score:[323500, 473120, 0],	 name:"囲い無き世は一期の月影", nick:"囲い無き世は"},
	{levels:["9.4", "12+", ""],	 score:[360110, 625260, 0],	 name:"儚きもの人間", nick:""},
	{levels:["9-", "11.7", ""],	 score:[327000, 484145, 0],	 name:"sweet little sister", nick:""},
	{levels:["9-", "11.0", ""],	 score:[374000, 472110, 0],	 name:"ケロ⑨destiny", nick:""},
	{levels:["9+", "12-", ""],	 score:[403500, 646720, 0],	 name:"Phantasm Brigade", nick:"Phantasm"},
	{levels:["9-", "12-", ""],	 score:[367500, 574720, 0],	 name:"蒼空に舞え、墨染の桜", nick:"墨染"},
	{levels:["8-", "10.7", ""],	 score:[307500, 485135, 0],	 name:"フラグメンツ -T.V. maimai edit-", nick:"フラグメンツ"},
	{levels:["8-", "11.4", ""],	 score:[391000, 412630, 0],	 name:"橙の幻想郷音頭", nick:"幻想郷音頭"},
	{levels:["8+", "11.1", ""],	 score:[223500, 423115, 0],	 name:"Starlight Dance Floor", nick:"Dance Floor"},
	{levels:["7+", "11.4", ""],	 score:[171000, 313130, 0],	 name:"神々の祈り", nick:""},
	{levels:["8+", "(11.0)", ""],	 score:[220000, 290500, 0],	 name:"願いを呼ぶ季節", nick:""},
	{levels:["8-", "(10.7)", "(11.0)"],	 score:[197000, 300500, 396500],	 name:"明星ロケット", nick:"明星"},
	{levels:["9-", "(11.9)", "12-"],	 score:[261500, 384000, 523205],	 name:"緋色のDance", nick:"緋色"},
	{levels:["9-", "10.9", ""],	 score:[286000, 417145, 0],	 name:"YU-MU", nick:""},
	{levels:["9+", "12-", ""],	 score:[352500, 577220, 0],	 name:"エテルニタス・ルドロジー", nick:"ルドロジー"},
	{levels:["8-", "(10.6)", "11.9"],	 score:[207500, 335000, 413155],	 name:"エピクロスの虹はもう見えない", nick:"エピクロス"},
	{levels:["9-", "12-", ""],	 score:[256000, 416220, 0],	 name:"四次元跳躍機関", nick:"四次元"},
	{levels:["9-", "12-", ""],	 score:[321000, 685225, 0],	 name:"少女幻葬戦慄曲 ～ Necro Fantasia", nick:"Necro"},
	{levels:["9-", "(11.7)", ""],	 score:[222000, 436000, 0],	 name:"妖精村の月誕祭 ～Lunate Elf", nick:"妖精村"},
	{levels:["8+", "11.7", ""],	 score:[361000, 552145, 0],	 name:"Jimang Shot", nick:"じまんぐ"},
	{levels:["8-", "10.7", "(11.5)"],	 score:[311000, 475635, 637500],	 name:"ってゐ！ ～えいえんてゐVer～", nick:"ってゐ"},
	{levels:["8-", "(11.3)", ""],	 score:[383500, 599500, 0],	 name:"東方妖々夢 ～the maximum moving about～", nick:"妖々夢"},
	{levels:["8+", "11.1", ""],	 score:[313500, 434115, 0],	 name:"Yet Another ”drizzly rain”", nick:"drizzly rain"},
	{levels:["7-", "(9.9)", ""],	 score:[198500, 296000, 0],	 name:"シアワセうさぎ", nick:""},
	{levels:["9-", "11.1", ""],	 score:[312500, 387615, 0],	 name:"最速最高シャッターガール", nick:"シャッターガール"},
	{levels:["10-", "12+", ""],	 score:[390000, 687260, 0],	 name:"最終鬼畜妹・一部声", nick:"最終鬼畜妹"},
	{levels:["9.3", "12+", ""],	 score:[280605, 428260, 0],	 name:"ウサテイ", nick:""},
	{levels:["9+", "10.4", ""],	 score:[326500, 410120, 0],	 name:"Help me, ERINNNNNN!!", nick:"えーりん"},
	{levels:["10-", "11.7", "13.E"],	 score:[393500, 466145, 633780],	 name:"ナイト・オブ・ナイツ", nick:"ナイツ"},
	{levels:["8+", "10.9", "12-"],	 score:[280500, 434645, 550225],	 name:"Bad Apple!! feat nomico", nick:"Bad Apple"},
	{levels:["11.0", "13.E", ""],	 score:[544110, 748280, 0],	 name:"Calamity Fortune", nick:"カラミティ"},
	{levels:["9-", "10.8", ""],	 score:[302500, 424140, 0],	 name:"CALL HEAVEN!!", nick:"CallHeaven"},
	{levels:["8+", "(11.0)", ""],	 score:[285500, 461500, 0],	 name:"Sunshine world tour", nick:"Sunshine"},
	{levels:["9-", "(11.5)", ""],	 score:[330000, 463500, 0],	 name:"終わりなき物語", nick:""},
	{levels:["9-", "(11.1)", ""],	 score:[327500, 456000, 0],	 name:"Our Fighting", nick:""},
	{levels:["8+", "11.9", "11.9"],	 score:[252000, 299155, 488155],	 name:"Save This World νMIX", nick:"Save This World"},
	{levels:["8+", "(10.5)", "(11.4)"],	 score:[161500, 193000, 378500],	 name:"Living Universe", nick:""},
	{levels:["10-", "10.7", ""],	 score:[255000, 250135, 0],	 name:"Ignite Infinity", nick:"Infinity"},
	{levels:["10-", "11.6", ""],	 score:[344500, 544640, 0],	 name:"Garden Of The Dragon", nick:"竜宮の園"},
	{levels:["9-", "12-", ""],	 score:[322000, 367205, 0],	 name:"Reach For The Stars", nick:"リーチ"},
	{levels:["9-", "11.7", ""],	 score:[333000, 561645, 0],	 name:"Live & Learn", nick:"リブラン"},
	{levels:["9-", "12-", ""],	 score:[328500, 383795, 0],	 name:"Back 2 Back", nick:"B2B"},
	{levels:["9-", "11.7", ""],	 score:[313500, 432145, 0],	 name:"Windy Hill -Zone 1", nick:"Windy Hill"},
	{levels:["8-", "11.2", "11.3"],	 score:[229000, 354120, 475625],	 name:"City Escape: Act1", nick:"City Escape"},
	{levels:["9.7", "10.1", "11.8"],	 score:[250125, 304105, 477650],	 name:"Rooftop Run: Act1", nick:"Rooftop"},
	{levels:["8+", "(11.3)", ""],	 score:[210500, 302500, 0],	 name:"時空を超えて久しぶり！", nick:"アルル"},
	{levels:["9-", "10.3", ""],	 score:[217000, 215615, 0],	 name:"Her Dream Is To Be A Fantastic Sorceress", nick:"アミティ"},
	{levels:["7-", "11.8", ""],	 score:[196500, 343150, 0],	 name:"キズナの物語", nick:""},
	{levels:["9+", "12-", ""],	 score:[339500, 471770, 0],	 name:"STAIRWAY TO GENERATION", nick:"STAIRWAY"},
	{levels:["10-", "12-", ""],	 score:[436500, 593295, 0],	 name:"Last Brave ～ Go to zero", nick:"Last Brave"},
	{levels:["11.5", "11.7", ""],	 score:[275635, 304145, 0],	 name:"Urban Crusher [Remix]", nick:"Urban Crusher"},
	{levels:["9-", "10.6", ""],	 score:[211000, 279630, 0],	 name:"Catch The Future", nick:""},
	{levels:["8-", "11.7", ""],	 score:[166500, 301145, 0],	 name:"awake", nick:""},
	{levels:["9+", "12-", ""],	 score:[255000, 367920, 0],	 name:"Terminal Storm", nick:""},
	{levels:["10-", "12-", ""],	 score:[420500, 621220, 0],	 name:"After Burner", nick:""},
	{levels:["9+", "12-", ""],	 score:[198500, 277795, 0],	 name:"Space Harrier Main Theme [Reborn]", nick:"スペハリ"},
	{levels:["10-", "11.6", ""],	 score:[242000, 336140, 0],	 name:"Quartet Theme [Reborn]", nick:"カルテット"},
	{levels:["9-", "11.2", ""],	 score:[228500, 292620, 0],	 name:"Sky High [Reborn]", nick:"Sky High"},
	{levels:["9+", "12-", ""],	 score:[349500, 527795, 0],	 name:"Like the Wind [Reborn]", nick:"ライク"},
	{levels:["(11-)", "(11.7)", ""],	 score:[295500, 302500, 0],	 name:"YA･DA･YO [Reborn]", nick:"ヤダヨ"},
	{levels:["10-", "10.1", ""],	 score:[154500, 215605, 0],	 name:"Natural Flow", nick:""},
	{levels:["8-", "(9.9)", "12+"],	 score:[140500, 205000, 463445],	 name:"Crush On You", nick:""},
	{levels:["7+", "9.1", "12+"],	 score:[131500, 201595, 438945],	 name:"Sun Dance", nick:""},
	{levels:["8.0", "10.1", "13.A"],	 score:[170580, 235105, 567215],	 name:"In Chaos", nick:""},
	{levels:["10-", "(10.5)", "13.E"],	 score:[241500, 264500, 560735],	 name:"Beat Of Mind", nick:""},
	{levels:["9-", "12-", ""],	 score:[208000, 291920, 0],	 name:"JACKY [Remix]", nick:"JACKY"},
	{levels:["10-", "12-", ""],	 score:[319500, 375270, 0],	 name:"Mysterious Destiny", nick:"ミステリアス"},
	{levels:["9+", "10.0", ""],	 score:[262000, 344600, 0],	 name:"Riders Of The Light", nick:"Riders"},
	{levels:["7-", "(11.5)", ""],	 score:[185000, 462000, 0],	 name:"コトバ・カラフル", nick:""},
	{levels:["8-", "(11.9)", ""],	 score:[537000, 389500, 0],	 name:"天国と地獄", nick:""},
	{levels:["8-", "10.6", ""],	 score:[279500, 320630, 0],	 name:"きみのためなら死ねる", nick:"きみしね"},
	{levels:["8+", "10.0", ""],	 score:[246000, 356600, 0],	 name:"The Great Journey", nick:""},
	{levels:["9-", "10.2", "12-"],	 score:[250500, 301110, 495295],	 name:"Burning Hearts ～炎のANGEL～", nick:"Burning Hearts"},
	{levels:["8-", "10.5", ""],	 score:[318000, 323125, 0],	 name:"かせげ！ジャリンコヒーロー", nick:"ジャリンコヒーロー"},
	{levels:["9-", "12-", ""],	 score:[326500, 414225, 0],	 name:"ココロスキャンのうた", nick:"ココロスキャン"},
	{levels:["10-", "10.8", ""],	 score:[253500, 364640, 0],	 name:"超絶！Superlative", nick:"超絶"},
	{levels:["10-", "(11.2)", ""],	 score:[345500, 432500, 0],	 name:"采配の刻 Power of order", nick:"采配"},
	{levels:["(11-)", "12-", ""],	 score:[276000, 351720, 0],	 name:"DO RORO DERODERO ON DO RORO", nick:"どろろ"},
	{levels:["9-", "10.8", ""],	 score:[278000, 322140, 0],	 name:"源平大戦絵巻テーマソング", nick:"源平"},
	{levels:["8+", "11.3", ""],	 score:[236000, 327625, 0],	 name:"怪盗Rのテーマ", nick:"怪盗R"},
	{levels:["7-", "10.1", ""],	 score:[226000, 296605, 0],	 name:"マリアをはげませ", nick:"マリア"},
	{levels:["7+", "10.1", ""],	 score:[142000, 217605, 0],	 name:"SHOW TIME", nick:""},
	{levels:["9+", "(11.7)", ""],	 score:[214000, 280500, 0],	 name:"円舞曲、君に", nick:"円舞曲"},
	{levels:["10-", "(11.0)", ""],	 score:[169500, 255000, 0],	 name:"御旗のもとに", nick:"御旗"},
	{levels:["9-", "10.7", ""],	 score:[182500, 260635, 0],	 name:"地上の戦士", nick:""},
	{levels:["8-", "8+", "(11.0)"],	 score:[182000, 196500, 409000],	 name:"檄！帝国華撃団(改)", nick:"檄帝"},
	{levels:["(9.1)", "12+", ""],	 score:[256000, 505445, 0],	 name:"Outlaw's Lullaby", nick:"Outlaw"},
	{levels:["9-", "(11.8)", ""],	 score:[230000, 317500, 0],	 name:"Brand-new Japanesque", nick:"Japanesque"},
	{levels:["9-", "12-", ""],	 score:[227500, 340870, 0],	 name:"鼓動", nick:""},
	{levels:["10+", "11.1", ""],	 score:[101000, 202615, 0],	 name:"神室雪月花", nick:""},
	{levels:["7-", "12-", ""],	 score:[228500, 371920, 0],	 name:"KONNANじゃないっ！", nick:"KONNAN"},
	{levels:["9-", "11.6", ""],	 score:[186500, 300140, 0],	 name:"セガサターン起動音[H.][Remix]", nick:"セガサターン起動音"},
	{levels:["11.7", "13.S", ""],	 score:[210645, 443735, 0],	 name:"Credits", nick:""},
	{levels:["11.2", "12+", ""],	 score:[414620, 599945, 0],	 name:"麒麟", nick:""},
	{levels:["10+", "12+", ""],	 score:[471000, 545395, 0],	 name:"MilK", nick:""},
	{levels:["10-", "12+", ""],	 score:[441500, 692395, 0],	 name:"GO BACK 2 YOUR RAVE", nick:"GO BACK"},
	{levels:["10.6", "12+", ""],	 score:[428130, 592445, 0],	 name:"B.B.K.K.B.K.K.", nick:"BBKK"},
	{levels:["11.0", "12+", ""],	 score:[603110, 740895, 0],	 name:"人里に下ったアタイがいつの間にか社畜になっていた件", nick:"社畜"},
	{levels:["10+", "12+", ""],	 score:[417000, 706895, 0],	 name:"Maxi", nick:""},
	{levels:["9+", "12-", ""],	 score:[387000, 531920, 0],	 name:"KISS CANDY FLAVOR", nick:"KISS CANDY"},
	{levels:["8+", "(11.7)", ""],	 score:[276500, 487500, 0],	 name:"H-A-J-I-M-A-R-I-U-T-A-!!", nick:"はじまりうた"},
	{levels:["9-", "(11.3)", ""],	 score:[277000, 455500, 0],	 name:"Star☆Glitter", nick:"StarGlitter"},
	{levels:["10+", "13.I", ""],	 score:[499000, 645230, 0],	 name:"conflict", nick:"コンフリ"},
	{levels:["10-", "12-", ""],	 score:[329000, 492795, 0],	 name:"Party 4U ”holy nite mix”", nick:"Party 4U"},
	{levels:["9+", "11.8", ""],	 score:[392500, 642650, 0],	 name:"GOODMEN", nick:""},
	{levels:["10.7", "12+", ""],	 score:[242635, 443260, 0],	 name:"Sakura Fubuki", nick:"桜吹雪"},
	{levels:["10-", "12+", ""],	 score:[386000, 586895, 0],	 name:"METATRON", nick:""},
	{levels:["9-", "11.5", ""],	 score:[367500, 499635, 0],	 name:"オモイヨシノ", nick:""},
	{levels:["9-", "12-", ""],	 score:[341000, 567795, 0],	 name:"L9", nick:""},
	{levels:["10-", "12+", ""],	 score:[447000, 629445, 0],	 name:"Jack-the-Ripper◆", nick:"Ripper"},
	{levels:["(11.4)", "12+", ""],	 score:[345500, 368395, 0],	 name:"DRAGONLADY", nick:"ドラレ"},
	{levels:["9+", "11.4", ""],	 score:[330000, 466630, 0],	 name:"Pursuing My True Self", nick:"Pursuing"},
	{levels:["9+", "(11.7)", ""],	 score:[359500, 424500, 0],	 name:"Signs Of Love (“Never More” ver.)", nick:"Signs Of Love"},
	{levels:["9-", "(11.4)", ""],	 score:[344500, 420000, 0],	 name:"specialist (“Never More” ver.)", nick:"specialist"},
	{levels:["9-", "12-", ""],	 score:[344000, 587725, 0],	 name:"Time To Make History (AKIRA YAMAOKA Remix)", nick:"Time To Make"},
	{levels:["8-", "11.7", ""],	 score:[240500, 466145, 0],	 name:"レッツゴー!陰陽師", nick:"陰陽師"},
	{levels:["9-", "(11.8)", ""],	 score:[285000, 388500, 0],	 name:"オパ! オパ! RACER -GMT mashup-", nick:"オパRACER"},
	{levels:["10-", "12-", ""],	 score:[341500, 514370, 0],	 name:"電車で電車でOPA!OPA!OPA! -GMT mashup-", nick:"電車でOPA"},
	{levels:["10-", "11.7", ""],	 score:[395500, 717645, 0],	 name:"リッジでリッジでGO!GO!GO! -GMT mashup-", nick:"リッジでGO"},
	{levels:["7+", "11.3", ""],	 score:[276000, 405625, 0],	 name:"電車で電車でGO!GO!GO!GC! -GMT remix-", nick:"電車でGO"},
	{levels:["10-", "(11.7)", ""],	 score:[293000, 477000, 0],	 name:"RIDGE RACER STEPS -GMT remix-", nick:"RIDGE RACER"},
	{levels:["9-", "(11.5)", ""],	 score:[297000, 418000, 0],	 name:"ファンタジーゾーン OPA-OPA! -GMT remix-", nick:"OPA-OPA"},
	{levels:["10-", "12-", ""],	 score:[254000, 437795, 0],	 name:"DADDY MULK -Groove remix-", nick:"ダディ"},
	{levels:["10.2", "13.I", ""],	 score:[345610, 526930, 0],	 name:"FUJIN Rumble", nick:"FUJIN"},
	{levels:["10+", "12+", ""],	 score:[315500, 612760, 0],	 name:"Got more raves？", nick:"ゴモア"},
	{levels:["11.0", "12+", ""],	 score:[405110, 673945, 0],	 name:"夜明けまであと３秒", nick:"夜明けまで"},
	{levels:["10+", "12+", ""],	 score:[425500, 810445, 0],	 name:"Ignis Danse", nick:"Ignis"},
	{levels:["(11-)", "12+", ""],	 score:[371500, 576895, 0],	 name:"きたさいたま2000", nick:"きたさいたま"},
	{levels:["9.6", "12+", ""],	 score:[316620, 509260, 0],	 name:"Scars of FAUNA", nick:"FAUNA"},
	{levels:["10-", "12-", ""],	 score:[338500, 572370, 0],	 name:"FLOWER", nick:""},
	{levels:["11.5", "13.A", ""],	 score:[474135, 639805, 0],	 name:"Excalibur ～Revived resolution～", nick:"Excalibur"},
	{levels:["", "12-", ""],	 score:[0, 510720, 0],	 name:"Kinda Way", nick:""},
	{levels:["10+", "12-", ""],	 score:[326500, 488920, 0],	 name:"Signature", nick:""},
	{levels:["9-", "12-", ""],	 score:[273500, 413270, 0],	 name:"Magical Flavor", nick:""},
	{levels:["(10.0)", "12-", ""],	 score:[400000, 598720, 0],	 name:"ユビキリ", nick:""},
	{levels:["10.5", "12+", ""],	 score:[378625, 509895, 0],	 name:"デスパレイト", nick:""},
	{levels:["11.2", "13.E", ""],	 score:[539120, 699735, 0],	 name:"Moon of Noon", nick:"Moon Noon"},
	{levels:["11.0", "12+", ""],	 score:[381610, 588945, 0],	 name:"Ultranova", nick:""},
	{levels:["10-", "12-", ""],	 score:[417500, 515720, 0],	 name:"曖昧mind", nick:""},
	{levels:["9+", "11.9", ""],	 score:[453000, 583155, 0],	 name:"Limit Break", nick:""},
	{levels:["9+", "11.7", ""],	 score:[402000, 570145, 0],	 name:"オトヒメモリー☆ウタゲーション", nick:"乙姫の宴"},
	{levels:["9.7", "12+", ""],	 score:[465125, 771260, 0],	 name:"夢花火", nick:""},
	{levels:["9+", "12-", ""],	 score:[434000, 748720, 0],	 name:"いっしそう電☆舞舞神拳！", nick:"舞舞神拳"},
	{levels:["11.5", "13.Z", ""],	 score:[386135, 732280, 0],	 name:"Panopticon", nick:"パノプ"},
	{levels:["10.9", "12+", ""],	 score:[276145, 507445, 0],	 name:"四月の雨", nick:""},
	{levels:["11.5", "13.I", ""],	 score:[448635, 649930, 0],	 name:"ねぇ、壊れタ人形ハ何処へ棄テらレるノ？", nick:"壊れタ人形"},
	{levels:["10-", "12-", ""],	 score:[400500, 470705, 0],	 name:"Imitation:Loud Lounge", nick:"Imitation"},
	{levels:["10+", "12+", ""],	 score:[509500, 828445, 0],	 name:"HERA", nick:""},
	{levels:["10-", "12-", ""],	 score:[374000, 689370, 0],	 name:"Selector", nick:""},
	{levels:["11.7", "13.E", ""],	 score:[563145, 830735, 0],	 name:"AMAZING MIGHTYYYY!!!!", nick:"MIGHTY"},
	{levels:["10+", "13.E", ""],	 score:[460500, 752280, 0],	 name:"CITRUS MONSTER", nick:"シトラス"},
	{levels:["(11.0)", "12+", ""],	 score:[487000, 720395, 0],	 name:"Hyper Active", nick:""},
	{levels:["10+", "12+", ""],	 score:[462000, 701395, 0],	 name:"Jumble Rumble", nick:"Jumble"},
	{levels:["10.3", "12+", ""],	 score:[353615, 391445, 0],	 name:"Nitrous Fury", nick:"ナイトラス"},
	{levels:["10-", "12-", ""],	 score:[428500, 689705, 0],	 name:"Revive The Rave", nick:"Revive"},
	{levels:["10-", "12+", ""],	 score:[400500, 711260, 0],	 name:"GEMINI -M-", nick:"GEMINI"},
	{levels:["9-", "12-", ""],	 score:[350000, 711205, 0],	 name:"スリップフリップ", nick:""},
	{levels:["11.3", "12+", ""],	 score:[552125, 672445, 0],	 name:"天火明命", nick:""},
	{levels:["10.0", "12+", ""],	 score:[411100, 702895, 0],	 name:"7thSense", nick:""},
	{levels:["10+", "12+", ""],	 score:[443500, 634945, 0],	 name:"Lividi", nick:""},
	{levels:["10.8", "13.Z", ""],	 score:[385640, 607735, 0],	 name:"Axeria", nick:""},
	{levels:["10-", "12+", ""],	 score:[368500, 586260, 0],	 name:"閃鋼のブリューナク", nick:"ブリューナク"},
	{levels:["11.0", "13.E", ""],	 score:[345110, 538235, 0],	 name:"ガラテアの螺旋", nick:"ガラテア"},
	{levels:["11.0", "13.I", ""],	 score:[488610, 699230, 0],	 name:"Caliburne ～Story of the Legendary sword～", nick:"Caliburne"},
	{levels:["11.5", "13.A", ""],	 score:[467135, 628215, 0],	 name:"Our Wrenally", nick:"あわれなり"},
	{levels:["11.5", "13.O", ""],	 score:[460635, 763280, 0],	 name:"Contrapasso -paradiso-", nick:"コントラ"},
	{levels:["10.0", "13.O", ""],	 score:[652600, 821730, 0],	 name:"Oshama Scramble!", nick:"おしゃま"},
	{levels:["11.0", "12+", ""],	 score:[498110, 613895, 0],	 name:"Garakuta Doll Play", nick:"ガラクタ"},
	{levels:["10-", "11.9", "11.7"],	 score:[332000, 488155, 589145],	 name:"Blew Moon", nick:"ぶるむん"},
	{levels:["(11-)", "12-", ""],	 score:[245000, 308270, 0],	 name:"We Gonna Party", nick:"Party"},
	{levels:["10-", "12+", ""],	 score:[366000, 482945, 0],	 name:"MYTHOS", nick:""},
	{levels:["10+", "12-", ""],	 score:[398500, 447205, 0],	 name:"Life Feels Good", nick:""},
	{levels:["(11.3)", "13.Z", ""],	 score:[544000, 781430, 0],	 name:"Glorious Crown", nick:"グロクラ"},
	{levels:["10-", "12+", ""],	 score:[459000, 681445, 0],	 name:"Aiolos", nick:""},
	{levels:["9+", "12-", ""],	 score:[385500, 578870, 0],	 name:"LANCE", nick:""},
	{levels:["9-", "12-", ""],	 score:[341000, 485220, 0],	 name:"Dragoon", nick:""},
	{levels:["10-", "12-", ""],	 score:[334500, 522705, 0],	 name:"Death Scythe", nick:"デスサイズ"},
	{levels:["10-", "11.1", ""],	 score:[320000, 390115, 0],	 name:"LUCIA", nick:""},
	{levels:["10.2", "12+", ""],	 score:[393610, 596760, 0],	 name:"DON’T  STOP  ROCKIN’", nick:"ドンスト"},
	{levels:["10-", "12-", ""],	 score:[359500, 444795, 0],	 name:"oboro", nick:""},
	{levels:["9-", "12-", ""],	 score:[329500, 507370, 0],	 name:"CYCLES", nick:""},
	{levels:["9+", "12-", ""],	 score:[194500, 327225, 0],	 name:"Lionheart", nick:""},
	{levels:["10-", "(11.3)", ""],	 score:[295000, 401500, 0],	 name:"Heartbeats", nick:""},
	{levels:["10-", "(11.9)", ""],	 score:[244000, 278000, 0],	 name:"Acceleration", nick:"アクセラ"},
	{levels:["10-", "11.3", ""],	 score:[347500, 411625, 0],	 name:"End of Twilight", nick:"Twilight"},
	{levels:["9-", "11.3", ""],	 score:[350500, 475125, 0],	 name:"JUMPIN' JUMPIN'", nick:"JUMPIN'"},
	{levels:["9+", "12-", ""],	 score:[343500, 493205, 0],	 name:"L'épilogue", nick:"レピローグ"},
	{levels:["10-", "12-", ""],	 score:[208500, 343370, 0],	 name:"FEEL ALIVE", nick:"フィルアラ"},
	{levels:["9+", "12-", ""],	 score:[378000, 617770, 0],	 name:"FEEL the BEATS", nick:"フィルビー"},
	{levels:["9-", "12-", ""],	 score:[408000, 583220, 0],	 name:"BREAK YOU!!", nick:"BREAK YOU"},
	{levels:["10.4", "12+", ""],	 score:[422620, 896895, 0],	 name:"KING is BACK!!", nick:"KING's BACK"},
	{levels:["10+", "12-", ""],	 score:[167000, 262770, 0],	 name:"Streak", nick:""},
	{levels:["10+", "12-", ""],	 score:[209500, 244770, 0],	 name:"Spin me harder", nick:"スピンミー"},
	{levels:["(11-)", "12-", ""],	 score:[233000, 306770, 0],	 name:"Turn around", nick:"タンアラ"},
	{levels:["10+", "10.9", ""],	 score:[209500, 260145, 0],	 name:"Link", nick:"Link(org)"},
	{levels:["(11.6)", "(11.6)", ""],	 score:[199000, 284000, 0],	 name:"Black Out", nick:""},
	{levels:["11.6", "13.Z", ""],	 score:[188140, 333930, 0],	 name:"Fragrance", nick:"フレグラ"},
	{levels:["10.3", "12+", ""],	 score:[180615, 325395, 0],	 name:"Nerverakes", nick:"ナーブ"},
	{levels:["9-", "11.7", ""],	 score:[169500, 255645, 0],	 name:"Sprintrances", nick:"スプリン"},
	{levels:["9+", "12-", ""],	 score:[162500, 238770, 0],	 name:"air's gravity", nick:"エアグラ"},
	{levels:["9+", "11.6", ""],	 score:[158500, 243140, 0],	 name:"Night Fly", nick:""},
	{levels:["9+", "11.8", ""],	 score:[183500, 231650, 0],	 name:"Feel My Fire", nick:""},
	{levels:["10-", "(10.6)", "(11.6)"],	 score:[188000, 225000, 306500],	 name:"Starlight Disco", nick:"Disco"},
	{levels:["9-", "(11.9)", ""],	 score:[296500, 589000, 0],	 name:"記憶、記録", nick:"記憶記録"},
	{levels:["9-", "11.1", ""],	 score:[395500, 575115, 0],	 name:"connecting with you", nick:"connecting"},
	{levels:["9-", "11.1", ""],	 score:[326500, 488115, 0],	 name:"アージェントシンメトリー", nick:"アージェント"},
	{levels:["9+", "11.2", ""],	 score:[252000, 358120, 0],	 name:"Dreampainter", nick:""},
	{levels:["9-", "(11.0)", ""],	 score:[247000, 364000, 0],	 name:"Monochrome Rainbow", nick:"Monochrome"},
	{levels:["10-", "12-", ""],	 score:[344500, 474920, 0],	 name:"Beat of getting entangled", nick:"ビトゲ"},
	{levels:["9-", "11.3", ""],	 score:[308000, 408125, 0],	 name:"MIRROR of MAGIC", nick:"MIRROR"},
	{levels:["9-", "10.9", ""],	 score:[252000, 389145, 0],	 name:"Cosmic Train", nick:""},
	{levels:["9+", "12-", ""],	 score:[498500, 623220, 0],	 name:"高気圧ねこロック", nick:"ねこロック"},
	{levels:["10.5", "13.E", ""],	 score:[457625, 736735, 0],	 name:"Prophesy One", nick:"Prophesy"},
	{levels:["9-", "11.0", ""],	 score:[252000, 364110, 0],	 name:"BETTER CHOICE", nick:""},
	{levels:["10+", "12-", ""],	 score:[319000, 506770, 0],	 name:"Get Happy", nick:""},
	{levels:["11.6", "13.I", ""],	 score:[309140, 537230, 0],	 name:"System “Z”", nick:"System"},
	{levels:["10.2", "13.Z", ""],	 score:[356610, 597280, 0],	 name:"VERTeX", nick:""},
	{levels:["9.5", "13.I", ""],	 score:[221115, 414930, 0],	 name:"ジングルベル", nick:"ジングル"},
	{levels:["10-", "12-", ""],	 score:[332500, 619725, 0],	 name:"火炎地獄", nick:""},
	{levels:["9-", "12-", ""],	 score:[269500, 442920, 0],	 name:"Danza zandA", nick:"Danza"},
	{levels:["9+", "11.9", ""],	 score:[316500, 447655, 0],	 name:"planet dancer", nick:""},
	{levels:["9-", "10.6", ""],	 score:[280000, 443630, 0],	 name:"ナミダと流星", nick:""},
	{levels:["9+", "12-", ""],	 score:[315000, 590270, 0],	 name:"ピーマンたべたら", nick:"ピーマン"},
	{levels:["8-", "10.0", ""],	 score:[183500, 264600, 0],	 name:"maimaiちゃんのテーマ", nick:"maimaiちゃん"},
	{levels:["8-", "10.9", ""],	 score:[211000, 381645, 0],	 name:"Pixel Voyage", nick:"Pixel"},
	{levels:["8-", "(9.7)", ""],	 score:[160500, 235000, 0],	 name:"Sweets×Sweets", nick:"Sweets×2"},
	{levels:["9-", "10.8", ""],	 score:[162500, 227640, 0],	 name:"虹と太陽", nick:""},
	{levels:["8-", "10.1", ""],	 score:[126000, 168105, 0],	 name:"Color My World", nick:""},
	{levels:["8+", "(9.8)", ""],	 score:[129500, 189000, 0],	 name:"True Love Song", nick:""},
	{levels:["7+", "(9.3)", ""],	 score:[175000, 218000, 0],	 name:"デコボコ体操第二", nick:"デコボコ体操"},
	{levels:["9+", "(11.7)", ""],	 score:[257500, 310000, 0],	 name:"ソーラン☆節", nick:"ソーラン節"},
	{levels:["8+", "(11.8)", ""],	 score:[248000, 364500, 0],	 name:"おても☆Yan", nick:"おてもYan"},
	{levels:["8-", "(11.8)", ""],	 score:[211000, 218500, 0],	 name:"炭★坑★節", nick:"炭坑節"},
	{levels:["7-", "10.6", ""],	 score:[168500, 234130, 0],	 name:"ネコ日和。", nick:""},
	{levels:["8+", "10.1", ""],	 score:[222500, 273605, 0],	 name:"犬日和。", nick:""},
	{levels:["9+", "10.7", ""],	 score:[251000, 326635, 0],	 name:"Endless World", nick:""},
	{levels:["10-", "11.0", ""],	 score:[244000, 336110, 0],	 name:"Backyun! －悪い女－", nick:"Backyun"},
	{levels:["10.7", "10.1", ""],	 score:[230135, 288605, 0],	 name:"BaBan!! －甘い罠－", nick:"BaBan"},
	{levels:["8+", "10.3", ""],	 score:[183000, 263115, 0],	 name:"オレンジの夏", nick:""},
	{levels:["9-", "10.8", ""],	 score:[298500, 357140, 0],	 name:"ぴぴぱぷぅ！", nick:""},
	{levels:["10-", "12-", ""],	 score:[262000, 315225, 0],	 name:"炎歌 -ほむらうた-", nick:"炎歌"},
	{levels:["9-", "10.6", ""],	 score:[252500, 360630, 0],	 name:"泣き虫O'clock", nick:""},
	{levels:["9+", "11.3", ""],	 score:[433000, 595125, 0],	 name:"maiム・maiム feat.週刊少年マガジン", nick:"maiム・maiム"},
	{levels:["8-", "11.5", ""],	 score:[298000, 409635, 0],	 name:"タカハせ！名人マン", nick:"名人マン"},
	{levels:["9-", "(11.5)", ""],	 score:[333000, 568000, 0],	 name:"みんなのマイマイマー", nick:"マイマイマー"},
	{levels:["8-", "11.2", ""],	 score:[464500, 565620, 0],	 name:"welcome to maimai!! with マイマイマー", nick:"welcome maimai"},
	{levels:["8-", "10.7", ""],	 score:[241500, 374135, 0],	 name:"ぐるぐるWASH！コインランドリー・ディスコ", nick:"コインランドリー"},
	{levels:["9-", "12-", ""],	 score:[433000, 752220, 0],	 name:"Infantoon Fantasy", nick:"Infantoon"},
	{levels:["9-", "11.7", ""],	 score:[408500, 676645, 0],	 name:"幾四音-Ixion-", nick:"幾四音"},
	{levels:["9-", "10.7", ""],	 score:[400500, 556635, 0],	 name:"Counselor", nick:""},
	{levels:["8-", "11.5", ""],	 score:[355500, 545635, 0],	 name:"Invitation", nick:""},
	{levels:["9-", "11.4", ""],	 score:[406500, 520630, 0],	 name:"その群青が愛しかったようだった", nick:"群青"},
	{levels:["11-", "12+", ""],	 score:[742500, 1080445, 0],	 name:"The wheel to the right", nick:"ホイール"},
	{levels:["9+", "12-", ""],	 score:[460500, 810220, 0],	 name:"光線チューニング", nick:""},
	{levels:["9-", "12-", ""],	 score:[376000, 645205, 0],	 name:"心象蜃気楼", nick:""},
	{levels:["9-", "12-", ""],	 score:[457000, 617220, 0],	 name:"ハート・ビート", nick:"せりな"},
	{levels:["9.9", "11.5", ""],	 score:[394635, 669635, 0],	 name:"brilliant better", nick:"あーりん"},
	{levels:["7+", "11.2", ""],	 score:[326000, 429620, 0],	 name:"フォルテシモBELL", nick:"なずな"},
	{levels:["9-", "12-", ""],	 score:[439000, 618770, 0],	 name:"DETARAME ROCK&ROLL THEORY", nick:"なる"},
	{levels:["8-", "11.7", ""],	 score:[352000, 571145, 0],	 name:"私の中の幻想的世界観及びその顕現を想起させたある現実での出来事に関する一考察", nick:"ちゃんなぎ"},
	{levels:["10+", "12-", ""],	 score:[440000, 655205, 0],	 name:"猛進ソリストライフ！", nick:"なっち"},
	{levels:["10-", "12-", ""],	 score:[369000, 584295, 0],	 name:"My Dearest Song", nick:"しろな"},
	{levels:["10.0", "12-", ""],	 score:[361100, 443420, 0],	 name:"SPICY SWINGY STYLE", nick:"せりな2"},
	{levels:["9.8", "12-", ""],	 score:[470130, 595720, 0],	 name:"Bang Babang Bang!!!", nick:"あーりん2"},
	{levels:["8-", "11.0", ""],	 score:[245000, 415110, 0],	 name:"Tic Tac DREAMIN’", nick:"なずな2"},
	{levels:["8+", "12-", ""],	 score:[394000, 692720, 0],	 name:"無敵We are one!!", nick:"We are one"},
	{levels:["9-", "11.7", ""],	 score:[465000, 632645, 0],	 name:"Change Our MIRAI！", nick:"MIRAI"},
	{levels:["9.9", "11.6", ""],	 score:[453135, 643640, 0],	 name:"ドキドキDREAM!!!", nick:""},
	{levels:["9-", "11.9", ""],	 score:[356500, 579155, 0],	 name:"言ノ葉カルマ", nick:""},
	{levels:["8+", "11.3", ""],	 score:[294500, 509125, 0],	 name:"悪戯", nick:""},
	{levels:["9-", "11.4", ""],	 score:[309500, 492130, 0],	 name:"言ノ葉遊戯", nick:""},
	{levels:["8-", "10.4", ""],	 score:[244000, 362120, 0],	 name:"りばーぶ", nick:""},
	{levels:["9-", "(10.3)", "10.7"],	 score:[311000, 435500, 490135],	 name:"洗脳", nick:""},
	{levels:["9-", "11.7", ""],	 score:[388500, 542645, 0],	 name:"Barbed Eye", nick:""},
	{levels:["9-", "12-", ""],	 score:[411500, 645220, 0],	 name:"空威張りビヘイビア", nick:"ビヘイビア"},
	{levels:["9.8", "12+", ""],	 score:[345630, 648395, 0],	 name:"分からない", nick:""},
	{levels:["9+", "(11.8)", ""],	 score:[367000, 513500, 0],	 name:"天国と地獄 -言ノ葉リンネ-", nick:"言ノ葉リンネ"},
	{levels:["9+", "12-", ""],	 score:[383000, 603770, 0],	 name:"相思創愛", nick:""},
	{levels:["10-", "12-", ""],	 score:[343500, 634205, 0],	 name:"咲キ誇レ常世ノ華", nick:"咲キ誇レ"}
];

function mra_diff2tmp(lv)
{
	var lvtable =
		[["7-", 7.0], ["7+", 7.7], ["8-", 8.0], ["8+", 8.7], ["9-", 9.0], ["9+", 9.7],["10-", 10.0], 
 		 ["10+", 10.7], ["11-", 11.0], ["11+", 11.7], ["12-", 12.0], ["12=", 12.3], ["12+", 12.7], ["13-", 13.0], ["", 0],
		 ["12.O", 12.0], ["12.I", 12.1], ["12.Z", 12.2], ["12.E", 12.3], ["12.A", 12.4],
      		 ["12.S", 12.5], ["12.b", 12.6], ["12.L", 12.7], ["12.B", 12.8], ["12.q", 12.9],
		 ["13.O", 13.0], ["13.I", 13.1], ["13.Z", 13.2], ["13.E", 13.3], ["13.A", 13.4],
		 ["13.S", 13.5], ["13.b", 13.6], ["13.L", 13.7], ["13.B", 13.8], ["13.q", 13.9]];
	var tmplv=(lv.slice(0,1)=="(")?(lv.slice(1,-1)):lv;
	for(var i=0; i< lvtable.length; i++)
	{
		if(tmplv == lvtable[i][0])
		{
			return lvtable[i][1];
		}
	}
	return Number(tmplv);
}

function mra_diff2s(lv)
{
	var tmp = Math.round(100*mra_diff2tmp(lv)), retval=0;
	switch(Math.floor(tmp/100))
	{
		case 13:
			retval = tmp+50;
			break;
		case 12:
			retval = tmp+(tmp%1200)/2;
			break;
		default:
			retval = tmp;
			break;
	}
	return retval/100;
}

function mra_diff2sss(lv)
{
	var tmp=Math.round(100*mra_diff2tmp(lv)), retval=0;
	switch(Math.floor(tmp/100))
	{
		case 13:
			retval = tmp+300;
			break;
		case 12:
			retval = tmp*2-1000;
			break;
		case 11:
			retval = tmp+200;
			break;
		case 10:
			retval = 750+tmp/2;
			break;
		case 9:
		case 8:
			retval = 250+tmp;
			break;
		case 7:
		default:
			retval = 650+tmp/2;
			break;
	}
	return retval/100;
}

function mra_rate_XtoY(basis, max, gap, n)
{
	return basis+(max-basis)*n/gap
}

function mra_diff2waku(lv)
{
	var waku=0;
	var rate_sss = Math.round(100*mra_diff2sss(lv));
	waku = Math.floor(rate_sss/4.4);
	waku += Math.floor(waku/10);
	return (waku/100).toFixed(2);
}

function mra_arch2rate_100(achi, lv)	//achiは百分率ではなく小数。99%なら0.99
{
	var temp = 0;
	var rate_sss = Math.round(100*mra_diff2sss(lv));
	var rate_s = Math.round(100* mra_diff2s(lv));
	var lv100 = Math.round(100*mra_diff2tmp(lv));
	temp = (achi >= 1.00)?(rate_sss):
		(achi >= 0.99)?(mra_rate_XtoY(rate_sss-100, rate_sss-25,  0.01,  achi-0.99)):
		(achi >= 0.97)?(mra_rate_XtoY(rate_s,       rate_sss-125, 0.02,  achi-0.97)):
		(achi >= 0.94)?(mra_rate_XtoY(lv100-150,    rate_s-100,   0.03,  achi-0.94)):
		(achi >= 0.90)?(mra_rate_XtoY(lv100-200,    lv100-150,    0.04,  achi-0.90)):
		(achi >= 0.80)?(mra_rate_XtoY(lv100-300,    lv100-200,    0.10, achi-0.80)):
		(achi >= 0.60)?(mra_rate_XtoY(lv100*0.4,    lv100-300,    0.20, achi-0.60)):
		(achi >= 0.40)?(mra_rate_XtoY(lv100*0.2,    lv100*0.4,    0.20, achi-0.40)):
		(achi >= 0.20)?(mra_rate_XtoY(lv100*0.1,    lv100*0.2,    0.10, achi-0.20)):
		(achi >= 0.10)?(mra_rate_XtoY(0,            lv100*0.1,    0.10, achi-0.10)):0;
	return Math.floor(temp);
}
	
var ex_list=[], ma_list=[], re_list=[], datalist=[], clist=[], ranklist=[], complist=[], addr="", your_id="", your_rating="";
var hashtag = "%e8%88%9e%e3%83%ac%e3%83%bc%e3%83%88%e8%a7%a3%e6%9e%90";	// 舞レート解析
var mra_update_algorithm = "2018.03.10";

var best_ave=0, best_limit=0, hist_limit=0;
var expect_max=0, best_rating=0, top_rate=0, recent_rating=0, hist_rating=0, best_left=0, hist_left=0;
var tweet_rate_str="", 	tweet_best_str="";

function get_nextpage_address(j,html,suffix)	//次の楽曲リストページを探す
{
	var e = $(j).find('a');	// hrefが含まれると思われるものlist
	var e_length=e.length;	// その個数
	for(var i=0; i<e_length; i++)	//楽曲リストページ用ループ
	{
		var url=e[i].getAttribute('href');	// <a>内のリンク先取得
		if(url.indexOf(html + suffix) == 0)
			return url;
	}
	for(var i=0; i<e_length; i++)	//楽曲リストページ以外用ループ
	{
		var url=e[i].getAttribute('href');
		if(url.indexOf(html) == 0)
			return url + suffix;
	}
}

function get_music_mdata(achive_list, addr, nextpage, nextsuffix)	//データ取得と次のアドレス
{
	var nextaddr="";

	$.ajax({type:'GET', url:addr, async: false})
		.done(function(data)
		{
			//成功時の処理本体
			var m=$(data).find("#accordion");
			var m_length=m.find("h3").length;
			for(var i=0; i<m_length; i++)
			{
				achive_list.push(
					[m.find("h3")[i].innerText.trim(), 
					 $(m.find('tbody')[i]).find('td')[4].innerText]
					);
			}
			nextaddr=get_nextpage_address($(data), nextpage, nextsuffix);				
		});

	return nextaddr;
}

function get_collection_data(collection_list, addr, nextpage, nextsuffix)	//データ取得と次のアドレス
{
	var nextaddr="";
	$.ajax({type:'GET', url:addr, async: false})
		.done(function(data)
		{
			//成功時の処理本体
			var m=Array.prototype.slice.call($(data).find('.on')).map(function(x){ return x.innerText.trim()});
			collection_list = Array.prototype.push.apply(collection_list, m);
			nextaddr=get_nextpage_address($(data), nextpage, nextsuffix);				
	});

	return nextaddr;
}

function true_achive(score, score100per)
{
	var true_100per=score100per - (score100per%500)
	if(score == "---" || score100per == 0)
		return 0;
	else
		return Number(score)/(score100per - (score100per%500));
}
	
function sort_condition(a,b)
{
	var lv_a, lv_b, achi_a, achi_b;
	if(b.music_rate != a.music_rate)
	{
		return b.music_rate - a.music_rate;
	}
	lv_a=a.lv.map(mra_diff2tmp).sort(function(a,b){return b-a;});
	lv_b=b.lv.map(mra_diff2tmp).sort(function(a,b){return b-a;});
	for(var i=0; i<3; i++)
	{
		if(lv_a[i] != lv_b[i])
			return lv_b[i] - lv_a[i];
	}
	achi_a=Math.max.apply(null, a.achive);
	achi_b=Math.max.apply(null, b.achive);
	return achi_b - achi_a;
}
	
function true_level(lvlist, scorelist)
{
	var levellist=[], tmplv=0;
	for(var n=0; n<3; n++)
	{
		tmplv=mra_diff2tmp(lvlist[n]);
		(Math.floor(tmplv)<12||scorelist[n]%500==0)?(levellist.push(lvlist[n])):
		(levellist.push(Math.floor(tmplv) + "." + [20,60,30,21,17,35,50,28,55,65].indexOf((scorelist[n]/5)%100-2*Math.floor(tmplv))));
	}
	
	return levellist;
}
	
function data2rating(golliramode)
{
	var mlist_length=ma_list.length, re_length=re_list.length, re_count=0, lvlist_count=0;

	for(var i=0; i<mlist_length; i++)
	{
		//lv表と取得データの名前が一致なら処理を進める
		if(ma_list[i][0] == maimai_inner_lv[lvlist_count].name)
		{
			datalist.push({
				name:ma_list[i][0],
				nick:maimai_inner_lv[lvlist_count].nick,
				achive:[(golliramode == 0)?true_achive(ex_list[i][1], maimai_inner_lv[lvlist_count].score[0]):0,
				true_achive(ma_list[i][1], maimai_inner_lv[lvlist_count].score[1]),
				(re_count >= re_length)?"---":
					(re_list[re_count][0]==ma_list[i][0])?
						true_achive(re_list[re_count++][1], maimai_inner_lv[lvlist_count].score[2]):"---"],
				lv:true_level(maimai_inner_lv[lvlist_count].levels, maimai_inner_lv[lvlist_count].score),
				rate_values:[0,	0, 0],
				music_rate : 0
			});
			datalist[i].rate_values[0] =
				(golliramode == 0)?mra_arch2rate_100(datalist[i].achive[0], datalist[i].lv[0]):0;
			datalist[i].rate_values[1] = mra_arch2rate_100(datalist[i].achive[1], datalist[i].lv[1]);
			datalist[i].rate_values[2] = mra_arch2rate_100(datalist[i].achive[2], datalist[i].lv[2]);
			datalist[i].music_rate = Math.max.apply(null, datalist[i].rate_values);
			
			lvlist_count++;
		}
		else	// 違う場合は空データを入れて終了。
		{
			datalist.push(
				{name:ma_list[i][0],
				 nick:"",
				achive:[0,0,(re_count >= re_length)?"---":
							(re_list[re_count][0]==ma_list[i][0])?0:"---"],
				lv:["","",""],
				rate_values:[0,	0, 0],
				music_rate : 0
			});
		}
	}
	datalist.sort(sort_condition);
	maimai_inner_lv=[];	//データ消去
	return datalist[0].music_rate;
}
	
function collection_filter(collection_list)
{
	var new_clist=[];
	var c_rank_list =[
//		["元皆伝(旧)", "元十段(旧)", "元九段(旧)", "元八段(旧)"],
		["青皆伝", "青十段", "青九段", "青八段"],
//		["緑皆伝(旧)", "緑十段(旧)", "緑九段(旧)", "緑八段(旧)"],
		["緑皆伝", "緑十段", "緑九段", "緑八段"],
//		["橙皆伝(旧)", "橙十段(旧)", "橙九段(旧)", "橙八段(旧)"],
		["橙皆伝", "橙十段", "橙九段", "橙八段"],
		["桃皆伝", "桃十段", "桃九段", "桃八段"],
		["紫皆伝", "紫十段", "紫九段", "紫八段"]
	];

	var c_comp_list=[
		["舞舞", "神", "極", "覇者"], ["真舞舞", "真神", "真将", "真極"],
		["超舞舞", "超神", "超将", "超極"], ["檄舞舞", "檄神", "檄将", "檄極"],
		["橙舞舞", "橙神", "橙将", "橙極"], ["暁舞舞", "暁神", "暁将", "暁極"],
		["桃舞舞", "桃神", "桃将", "桃極"], ["櫻舞舞", "櫻神", "櫻将", "櫻極"],
		["紫舞舞", "紫神", "紫将", "紫極"], ["菫舞舞", "菫神", "菫将", "菫極"]
	];
	var c_length = collection_list.length;
	var cf_length;
	var check=false;
	
	cf_length=c_rank_list.length;
	for(var j=0; j<cf_length; j++)
	{
		for(var k=0; k<4; k++)
		{
			if(collection_list.indexOf(c_rank_list[j][k]) >=0)
			{
				ranklist.push(c_rank_list[j][k]);
				break;
			}
		}
		if(k>=4)
			ranklist.push("");
	}

	cf_length=c_comp_list.length;
	var tmplist=[], tmp_comp="";
	for(var j=0; j<cf_length; j++)
	{
		tmplist=[];
		for(var k=0; k<4; k++)
		{
			tmp_comp=c_comp_list[j][k];
			if(collection_list.indexOf(tmp_comp) >=0)
			{
				switch(tmp_comp.slice(-1))
				{
					case "神": tmplist.push(tmp_comp); k=4; break;
					case "将": if(tmplist.length != 0) k=4; tmplist.push(tmp_comp); break;
					case "極": tmplist.push(tmp_comp); k=4; break;
					default: tmplist.push(tmp_comp); break;
				}
			}
		}
		if(k>=4)
			(tmplist.length>=2)?(complist.push(tmplist[0].slice(0,2)+tmplist[1].slice(-1))):
			(tmplist.length==1)?(complist.push(tmplist[0])):(complist.push(""));
	}
	
	return;
}
	
function get_ratingrank(rating)
{
	return (rating>=15)?("mai_rainbow"):
	(rating>=14.5)?("mai_gold"):
	(rating>=14)?("mai_silver"):
	(rating>=13)?("mai_copper"):
	(rating>=12)?("mai_violet"):
	(rating>=10)?("mai_red"):
	(rating>=7)?("mai_yellow"):
	(rating>=4)?("mai_green"):
	(rating>=1)?("mai_blue"):("mai_white");
}
	
function print_result_sub(title, value, explain)
{
	var tmp = "";
	tmp += "<tr>";
	tmp += "<th>" + title + "<\/th>";
	tmp += "<th align=center>" + value + "<\/th>"
	tmp += "<td>" + explain + "<\/td>";
	tmp += "<\/tr>";
	
	return tmp;
}

function print_result_rating(title, value, explain, dispbasevalue)
{
	var tmp = "";
	tmp += "<tr>";
	tmp += "<th>" + title + "<\/th>";
	tmp += "<th align=center class=" + get_ratingrank(dispbasevalue) + ">" + value + "<\/hd>"
	tmp += "<td>" + explain + "<\/td>";
	tmp += "<\/tr>";
	
	return tmp;
}
	
function sort_diff () {
	var new_datalist = [];
	var count = 0;
	var diff = 13.5;
	
	while (new_datalist.length != datalist.length) {
		for (var i=0; i<datalist.length; i++) {
			var tmplv=(datalist[i].lv[1].slice(-1)=='-')?(datalist[i].lv[1].slice(0, -1)):
					(datalist[i].lv[1].slice(-1)=='=')?(datalist[i].lv[1].slice(0, -1)):datalist[i].lv[1];
			if (tmplv == diff) {
				new_datalist[count] = datalist[i];
				count++;
			}
		}
		diff = diff - 0.1;
	}
	
	while (rateData.rows[0]) {
		rateData.deleteRow(0);	
	}
}

function print_result(golliramode, homeaddr, trv)
{
	var rslt_str="";
	var rank=ranklist.slice(-1)[0].slice(1,3);

	rslt_str += "<html>";
	rslt_str += "<head>";
	rslt_str += "<title>" + your_id + rank +"の舞レート解析結果 | CYCLES FUNの寝言<\/title>";
	rslt_str += "<script type='text/javascript' src='http://html2canvas.hertzen.com/dist/html2canvas.min.js'><\/script>"
	rslt_str += "<style type='text/css'>";
	rslt_str += "\ttable { border-collapse: collapse; font-size:0.75em; }";
	rslt_str += "<\/style>";
    	rslt_str += "<link rel='stylesheet' media='all' type='text/css' href='https://sgimera.github.io/mai_RatingAnalyzer/css/mai_rating.css?'\/>";
	rslt_str += "<\/head>";
	
	rslt_str += "<body>";
	rslt_str += "<p align=right><a href=\"" + homeaddr + "\">maimai.net HOMEに戻る<\/a><\/p>";
	rslt_str += "<h2>" + your_id + rank +"のRating情報<\/h2>";
	
	var today = new Date();
	var data_str = today.getFullYear() + "\/" + (today.getMonth()+1) + "\/" + today.getDate() + " ";
	data_str += (("0"+today.getHours()).slice(-2)) + ":" + (("0"+today.getMinutes()).slice(-2)) + ":" + (("0"+today.getSeconds()).slice(-2));
	
	rslt_str += "<div id=player_rating_info>";
	rslt_str += "<table border=1 align=\"center\">";
	rslt_str += "<tr>";
	rslt_str += "<th colspan=3 bgcolor=\#000000><font color=\#ffffff>" + your_id + rank + "　基本データ<br>";
	rslt_str += data_str + "現在<\/font><\/th>";
	rslt_str += "<\/tr>";
	
	rslt_str += print_result_rating("現在のRating", your_rating.replace(/\(/g, '<br>('), "maimai.netで確認できるRating", Number(your_rating.slice(0, 5)));
	rslt_str += print_result_rating("BEST平均", best_ave, "上位30曲の平均レート値", best_ave);
	rslt_str += print_result_rating("BEST下限", best_limit, "30位のレート値", best_limit);
	rslt_str += print_result_sub("HIST下限", hist_limit, mra_history + "位のレート値");

	rslt_str += "<tr>";
	rslt_str += "<th colspan=3 bgcolor=\"\#000000\"><font color=\"\#ffffff\">予想到達可能Rating<\/font><\/th>";
	rslt_str += "<\/tr>";

	rslt_str += print_result_rating("予想値", expect_max, "下の3つの値の合計", expect_max);
	rslt_str +=
		print_result_rating("BEST枠", best_rating + "<br>(" + best_left + ")", "(上位30曲の合計)/44<br>()は+0.01する為の必要レート", best_ave);
	rslt_str += print_result_rating("RECENT枠", recent_rating + "<br>(" + ((trv/100).toFixed(2)) + ")", "レート値1位を10回達成<br>()は1位の単曲レート値", trv/100);
	rslt_str +=
		print_result_sub("HISTORY枠", hist_rating + "<br>(" + hist_left + ")",
				 "(上位" + mra_history +"曲の合計)/(" + mra_history + "*44/4)<br>()は+0.01する為の必要レート");
	rslt_str += "<\/table>";
	
	rslt_str += "<p> <input type=\"button\" value=\"test\" onclick=\"console.log(\"Hello\")\"> <\/p>";
	
	rslt_str += "<table id=\"rateData\" border=1 align=center>";

	for(var i=0; i<datalist.length; i++)
	{
		var rowspan_num = 2 - ((datalist[i].lv[2] != "")?0:1);
		var tmp_rate=0;
		var tmplv, tmprate;		
		var nextrate = 0;
		var nextrank = "SSS";
		
		rslt_str += "<tr>";
		rslt_str += "<th colspan=5>" + datalist[i].name + "<\/th>"
		rslt_str += "<\/tr>"
	
		rslt_str += "<tr>";
		rslt_str += "<td align=\"center\" rowspan=" + rowspan_num + ">" + (i+1) + "<\/td>";
		rslt_str += "<th rowspan=" + rowspan_num + " ";
		rslt_str += "class=" + get_ratingrank(datalist[i].music_rate/100) + ">"
		rslt_str += (datalist[i].music_rate/100).toFixed(2)  + "<\/th>"
		
		if(datalist[i].lv[2] != "")
		{
			
			tmplv=(datalist[i].lv[2].slice(-1)=='-')?(datalist[i].lv[2].slice(0, -1)):
				(datalist[i].lv[2].slice(-1)=='=')?(datalist[i].lv[2].slice(0, -1)):datalist[i].lv[2];
			
			tmprate = (datalist[i].rate_values[2]/100).toFixed(2);
		
			if (datalist[i].achive[2] < 0.97) {
				nextrate = mra_diff2s(tmplv) - tmprate;
				nextrank = "S";
			}
			else if ((0.97<=datalist[i].achive[2]) && (datalist[i].achive[2]<0.99)) {
				nextrate = (mra_diff2sss(tmplv)-1) - tmprate;
				nextrank = "SS";
			}
			else if ((0.99<=datalist[i].achive[2]) && (datalist[i].achive[2]<1)) {
				nextrate = mra_diff2sss(tmplv) - tmprate;
				nextrank = "SSS";
			}
			
			rslt_str += "<th class=mai_remaster>";
			//rslt_str += (datalist[i].rate_values[2]/100).toFixed(2);
			rslt_str += "" + tmprate + "(" + nextrank + " - " + nextrate.toFixed(2) + ")";
			rslt_str += "<\/th>";
	
			rslt_str += "<th class=mai_remaster>" + tmplv + "<\/th>";
			//rslt_str += "<th class=mai_remaster>" + (100*datalist[i].achive[2]).toFixed(4) + "%<\/th>";
			rslt_str += "<th class=mai_remaster>" + (Math.floor((100*datalist[i].achive[2])*100)/100).toFixed(2) + "%<\/th>";
			rslt_str += "<\/tr><tr>";
			
		}
		
		
		tmplv=(datalist[i].lv[1].slice(0,1)=='(')?(datalist[i].lv[1].slice(1, -1)):datalist[i].lv[1];
		
		tmprate = (datalist[i].rate_values[1]/100).toFixed(2);
		
		if (datalist[i].achive[1] < 0.97) {
			nextrate = mra_diff2s(tmplv) - tmprate;
			nextrank = "S";
		}
		else if ((0.97<=datalist[i].achive[1]) && (datalist[i].achive[1]<0.99)) {
			nextrate = (mra_diff2sss(tmplv)-1) - tmprate;
			nextrank = "SS";
		}
		else if ((0.99<=datalist[i].achive[1]) && (datalist[i].achive[1]<1)) {
			nextrate = mra_diff2sss(tmplv) - tmprate;
			nextrank = "SSS";
		}
		
		rslt_str += "<th class=mai_master>";
		rslt_str += "" + tmprate + "(" + nextrank + " - " + nextrate.toFixed(2) + ")";
		rslt_str += "<\/th>";
		
		rslt_str += "<th class=mai_master>" + tmplv + "<\/th>";
		rslt_str += "<th class=mai_master>" + (Math.floor((100*datalist[i].achive[1])*100)/100).toFixed(2) + "%<\/th>";
		rslt_str += "<\/tr>";
	}
	
	rslt_str += "<\/table>";
	rslt_str += "<\/body>";
	rslt_str += "<\/html>";
	
	document.open();
	document.write(rslt_str);
	document.close();
}

function get_your_id(addr)
{
	$.ajax({type:'GET', url:addr, async: false})
		.done(function(data)
		{
			//成功時の処理本体
			var m=$(data).find('.status_data')[0];
			your_id = m.children[1].innerText;
			your_rating = m.children[7].innerText.trim().replace(/MAX /g, "");
		});
	return your_id;
}
	
function tweet_best(id)
{
	tweet_best_str = your_id + (ranklist.slice(-1)[0].slice(1,3)) + "%20:" + your_rating + "%0D%0A";
	tweet_best_str += "B%3a" + best_rating + "%20%2B%20R%3a";
	tweet_best_str += recent_rating + " %2B%20H%3a"
	tweet_best_str += hist_rating + "%20%3d%20" + expect_max + "%0D%0A%0D%0A";
	
	for(var i=0; i<10; i++)
	{
		tmp_rate = datalist[i].music_rate;
		tweet_best_str += (tmp_rate/100).toFixed(2) + ": "
		if(datalist[i].nick != "")
		{
			tweet_best_str += datalist[i].nick;
		}
		else if(datalist[i].name.length < 15)
		{
			tweet_best_str += datalist[i].name;
		}
		else
		{
			tweet_best_str += datalist[i].name.slice(0, 14) + "%ef%bd%9e";
		}
		(datalist[i].rate_values[1] == tmp_rate)?(tweet_best_str+=""):
		(datalist[i].rate_values[2] == tmp_rate)?(tweet_best_str+=" 白"):(tweet_best_str+= " 赤");
		tweet_best_str +="%0D%0A";
	}

}

function uso_level(lv)
{
	switch(lv.slice(-1))
	{
		case "+":
		case "-":
		case ")":
			return lv;
		default:
			break;
	}
	var tmplv=mra_diff2tmp(lv);
	//return (tmplv>=13)?"13-":(tmplv>=12.7)?"12+":(tmplv>=12.3)?"12=":(tmplv>=12)?"12-":lv;
	return lv;
}
		
	
function datalist_recalc()
{
	var listlength=datalist.length, tmplv="", count=0;
	
	for(var i=0; i<listlength; i++)
	{
		//datalist[i].lv[2]=uso_level(datalist[i].lv[2]);
		datalist[i].rate_values[2] = mra_arch2rate_100(datalist[i].achive[2], datalist[i].lv[2]);

		//datalist[i].lv[1]=uso_level(datalist[i].lv[1]);
		datalist[i].rate_values[1] = mra_arch2rate_100(datalist[i].achive[1], datalist[i].lv[1]);

		// 曲別レート値の最大が変化するので再計算。
		datalist[i].music_rate = Math.max.apply(null, datalist[i].rate_values);
	}
	
	datalist.sort(sort_condition);
	return count;

}
	
function analyzing_rating()
{
	var tmp=0, str="", best30=0, history473=0;
	for(var i=0; i<30; i++)
	{
		best30 += datalist[i].music_rate;
	}	
	history473=best30;
	for(var i=30 ;i<mra_history;i++)
	{
		history473 += datalist[i].music_rate;
	}

	best_ave = (Math.floor(best30/30)/100).toFixed(2);
	top_rate = (Math.floor(datalist[0].music_rate)/100).toFixed(2);
	best_limit = (Math.floor(datalist[29].music_rate)/100).toFixed(2);
	hist_limit = (Math.floor(datalist[mra_history-1].music_rate)/100).toFixed(2);
	if(Number(hist_limit)<=0)
	{
		var count=0;
		for(count=0; datalist[count].music_rate > 0; count++);
		hist_limit= (mra_history-count) + "曲不足";
	}
	
	best_rating = Math.floor(best30/44);	//best30はすでにRating*100
	recent_rating = Math.floor(datalist[0].music_rate*10/44);
	hist_rating = Math.floor(history473/(mra_history*11));	// multiply 4/(473*44)
	
	best_left = (44 - Math.ceil(best30%44))/100;
	hist_left = (mra_history*11 - Math.ceil(history473%(mra_history*11)))/100;

	expect_max = (Math.floor(best_rating + recent_rating + hist_rating)/100).toFixed(2);
	best_rating = (best_rating/100).toFixed(2);
	recent_rating = (recent_rating/100).toFixed(2);
	hist_rating = (hist_rating/100).toFixed(2);

	// tweet用文字列
	tweet_rate_str = your_id + (ranklist.slice(-1)[0].slice(1,3)) + "%20:" + your_rating + "%0D%0A";
	tweet_rate_str += "BEST平均%3a" + best_ave + "%0D%0A";
	tweet_rate_str += "BEST下限%3a" + best_limit + "%0D%0A";
	tweet_rate_str += "HIST下限%3a" + hist_limit + "%0D%0A";
	tweet_rate_str += "予想到達Rating%3a" + expect_max + "%0D%0A";
	tweet_rate_str += "B%3a" + best_rating + "%20%2B%20R%3a" + recent_rating + "%20%2B%20H%3a" + hist_rating + "%0D%0A";
}

var tmpstr = "--舞レート解析--\n(trial)\n\n";
tmpstr += maimai_inner_lv.length + "songs(" + mra_update_mlist + ") version\n";
tmpstr += "Last Update : ";
tmpstr += (mra_update_algorithm >= mra_update_llist)?mra_update_algorithm:mra_update_llist;
tmpstr += "\n\n";
tmpstr += "Programmed by @sgimera";
if(!confirm(tmpstr))
	return;
	
var gollira = 0;
	
addr=get_nextpage_address($(document), 'music.html', '&d=4');	// EXPERTリストのアドレス取得
addr=get_music_mdata(ex_list, addr, 'music.html', '&d=5');	// EXPERTデータ取得&MASTERリストのアドレス取得
addr=get_music_mdata(ma_list, addr, 'music.html', '&d=6');	// MASTERのデータ取得&Re:MASTERリストのアドレス取得
addr=get_music_mdata(re_list, addr, 'collection.html', '&c=3');	// Re:MASTERのデータ取得&HOMEのアドレス取得
addr=get_collection_data(clist, addr, 'collection.html', '&c=4');	// 称号データ取得＆ネームプレートアドレス取得
addr=get_collection_data(clist, addr, 'home.html', '');	// ネームプレートデータ取得＆Homeアドレス取得
get_your_id(addr);
	
collection_filter(clist);
	
var top_rate_value = data2rating(gollira);	// データ集計
	
analyzing_rating();	// 全体データ算出
	
// 再計算。未検証扱いの譜面は最低値になる。全譜面データ表示用で、到達Ratingの計算への影響はない。
if(hashtag.slice(-4)!="test")
	datalist_recalc();
else
	tweet_best();	//tweet用文言生成

print_result(gollira, addr, top_rate_value);	//全譜面リスト表示

})(); void(0);
