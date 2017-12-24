javascript:
(function()
{

	var ex_list=[], ma_list=[], re_list=[], datalist=[], addr="", your_id="", your_rating="";
	var hashtag = "%e8%88%9e%e3%83%ac%e3%83%bc%e3%83%88%e8%a7%a3%e6%9e%90";	// 舞レート解析
	var mra_update_mlist = "2017.12.14";	/* 公式の楽曲リスト更新日 タイトルに表示*/
	var mra_update_llist = "2017.12.20";	/* Lv.情報、名前変更日 */
	var mra_update_algorithm = "2017.12.19";
	var maimai_inner_lv = [
		{levels:["8-", "11-", ""],	name:"ようこそジャパリパークへ", nick:"ジャパリパーク"},
		{levels:["8-", "11.8", ""],	name:"前前前世", nick:""},
		{levels:["9-", "11.9", ""],	name:"REVIVER オルタンシア・サーガ -蒼の騎士団- オリジナルVer.", nick:"REVIVER"},
		{levels:["9-", "11.4", ""],	name:"あ・え・い・う・え・お・あお!!", nick:"あえいうえおあお"},
		{levels:["9-", "11+", ""], 	name:"日本の米は世界一", nick:"日本米世界一"},
		{levels:["8-", "11.2", ""],	name:"PERFECT HUMAN", nick:""},
		{levels:["8+", "11.7", ""],	name:"SUSHI食べたい feat.ソイソース", nick:"SUSHI食べたい"},
		{levels:["8-", "11.9", ""],	name:"ポップミュージックは僕のもの", nick:"ポップミュージック"},
		{levels:["8+", "11.0", ""],	name:"きらっせ☆ウッド村ファーム", nick:"ウッド村"},
		{levels:["8-", "11.7", ""],	name:"シュガーソングとビターステップ", nick:"シュガビタ"},
		{levels:["9-", "11.1", ""],	name:"紅蓮の弓矢", nick:""},
		{levels:["7-", "8.7", ""],	name:"ようかい体操第一", nick:"ようかい体操"},
		{levels:["7-", "9.9", ""],	name:"ゲラゲラポーのうた", nick:"ゲラゲラポー"},
		{levels:["7-", "10.4", ""],	name:"夏祭り", nick:""},
		{levels:["10-", "11.6", ""],	name:"Scatman (Ski Ba Bop Ba Dop Bop)", nick:"Scatman"},
		{levels:["8+", "11.1", ""],	name:"fake!fake!", nick:"fakefake"},
		{levels:["8+", "11-", ""],	name:"HIMITSUスパーク", nick:""},
		{levels:["8-", "11.2", ""],	name:"でんでんぱっしょん", nick:""},
		{levels:["8-", "10.2", ""],	name:"Dragon Night", nick:""},
		{levels:["7+", "10.4", ""],	name:"POP STAR", nick:""},
		{levels:["8-", "10.1", ""],	name:"Love or Lies", nick:""},
		{levels:["7+", "10.1", ""],	name:"jelly", nick:""},
		{levels:["7+", "9.7", ""],	name:"美しく燃える森", nick:""},
		{levels:["8-", "10.6", ""],	name:"Love You", nick:""},
		{levels:["8+", "10.1", ""],	name:"come again", nick:""},
		{levels:["7+", "9.5", "11.3"],	name:"Future", nick:""},
		{levels:["8-", "11.7", ""],	name:"ウッーウッーウマウマ(ﾟ∀ﾟ)", nick:"ウマウマ"},
		{levels:["8+", "10.1", ""],	name:"NIGHT OF FIRE", nick:""},
		{levels:["8-", "10.0", ""],	name:"YATTA!", nick:""},
		{levels:["8+", "10.9", ""],	name:"1/3の純情な感情", nick:""},
		{levels:["8-", "10.0", ""],	name:"バラライカ", nick:""},
		{levels:["8-", "11.1", "11.7"],	name:"若い力 -SEGA HARD GIRLS MIX-", nick:"若い力"},
		{levels:["9+", "12.0", ""],	name:"セハガガガンバッちゃう！！", nick:"セハガール"},
		{levels:["8+", "10.8", ""],	name:"ラブリー☆えんじぇる!!", nick:""},
		{levels:["8+", "10.5", ""],	name:"Stand Up!!!!", nick:"StandUp"},
		{levels:["8+", "12.0", ""],	name:"真・ハンサム体操でズンドコホイ", nick:"ハンサム体操"},
		{levels:["8-", "11.0", ""],	name:"GET!! 夢&DREAM", nick:"夢DREAM"},
		{levels:["8-", "10.4", ""],	name:"君の知らない物語", nick:"君知ら"},
		{levels:["7+", "10.8", ""],	name:"コネクト", nick:""},
		{levels:["9-", "12.4", ""],	name:"SAVIOR OF SONG", nick:"SAVIOR"},
		{levels:["8-", "9.8", ""],	name:"Luminize", nick:""},
		{levels:["8-", "11.0", ""],	name:"秘密の扉から会いにきて", nick:"秘密の扉"},
		{levels:["8-", "10.7", ""],	name:"イチズレシピ", nick:""},
		{levels:["7+", "10.2", ""],	name:"Daydream café", nick:"ごちうさ"},
		{levels:["7-", "10.3", ""],	name:"ふ・れ・ん・ど・し・た・い", nick:"ふれんどしたい"},
		{levels:["7+", "10.5", ""],	name:"Touch Tap Baby", nick:"TouchTap"},
		{levels:["7-", "9.8", ""],	name:"極上スマイル", nick:""},
		{levels:["8+", "10.2", ""],	name:"7 Girls War", nick:""},
		{levels:["8-", "10.7", ""],	name:"Jumping!!", nick:""},
		{levels:["7-", "10.2", ""],	name:"ゆりゆららららゆるゆり大事件", nick:"ゆるゆり大事件"},
		{levels:["9-", "11.2", ""],	name:"いぇす！ゆゆゆ☆ゆるゆり♪♪", nick:"ゆゆゆゆるゆり"},
		{levels:["9-", "11-", ""],	name:"ちょちょちょ！ゆるゆり☆かぷりっちょ！！！", nick:"かぷりっちょ"},
		{levels:["8-", "11-", ""],	name:"未来(ソラ)の歌", nick:"未来の歌"},
		{levels:["9-", "11-", ""],	name:"ホシトハナ", nick:""},
		{levels:["9-", "12.2", ""],	name:"Paradisus-Paradoxum", nick:"Para-Para"},
		{levels:["8-", "11.0", ""],	name:"かくしん的☆めたまるふぉ～ぜっ！", nick:"うまる"},
		{levels:["8+", "11.7", ""],	name:"ファッとして桃源郷", nick:"桃源郷"},
		{levels:["9-", "12.5", ""],	name:"回レ！雪月花", nick:""},
		{levels:["7+", "10.9", ""],	name:"SAKURAスキップ", nick:""},
		{levels:["8+", "11.2", ""],	name:"Now Loading!!!!", nick:"Now Loading"},
		{levels:["9-", "12-", ""],	name:"砂の惑星 feat. HATSUNE MIKU", nick:"砂の惑星"},
		{levels:["10-", "12.7", ""],	name:"拝啓ドッペルゲンガー", nick:"ドッペル"},
		{levels:["9+", "12-", ""],	name:"アンノウン・マザーグース", nick:"マザーグース"},
		{levels:["9+", "12.4", ""],	name:"リンカーネイション", nick:""},
		{levels:["9-", "12.5", ""],	name:"六兆年と一夜物語", nick:"六兆年"},
		{levels:["10+", "12.9", ""],	name:"幸せになれる隠しコマンドがあるらしい", nick:"隠しコマンド"},
		{levels:["8-", "11+", ""],	name:"フラジール", nick:""},
		{levels:["9-", "12.0", ""],	name:"ちがう!!!", nick:""},
		{levels:["9+", "11-", ""],	name:"名探偵連続殺人事件", nick:"名探偵"},
		{levels:["8-", "10.5", ""],	name:"東京レトロ", nick:""},
		{levels:["10-", "12.3", ""],	name:"ARROW", nick:""},
		{levels:["9+", "11.7", ""],	name:"ヘルシーエンド", nick:""},
		{levels:["9-", "12.2", "12.9"],	name:"ロストワンの号哭", nick:"ロストワン"},
		{levels:["9-", "12.2", ""],	name:"千本桜", nick:""},
		{levels:["9-", "11.8", ""],	name:"チュルリラ・チュルリラ・ダッダッダ！", nick:"チュルリラ"},
		{levels:["8-", "12.4", ""],	name:"ウミユリ海底譚", nick:"ウミユリ"},
		{levels:["9+", "11+", ""],	name:"白ゆき", nick:""},
		{levels:["10.0", "12.8", ""],	name:"初音ミクの消失", nick:"消失"},
		{levels:["9-", "11.6", ""],	name:"天ノ弱", nick:""},
		{levels:["9-", "12.3", ""],	name:"厨病激発ボーイ", nick:"厨病"},
		{levels:["10+", "12.7", ""],	name:"脳漿炸裂ガール", nick:"脳漿"},
		{levels:["9-", "12.0", ""],	name:"+♂", nick:""},
		{levels:["9-", "11.9", ""],	name:"おこちゃま戦争", nick:""},
		{levels:["8+", "10.9", ""],	name:"だんだん早くなる", nick:""},
		{levels:["8-", "10.0", ""],	name:"恋愛裁判", nick:""},
		{levels:["8+", "10.6", "11.8"],	name:"からくりピエロ", nick:""},
		{levels:["9-", "11.3", ""],	name:"ゴーストルール", nick:""},
		{levels:["8-", "10.9", ""],	name:"おじゃま虫", nick:""},
		{levels:["9-", "11.7", ""],	name:"ストリーミングハート", nick:""},
		{levels:["9-", "10.3", ""],	name:"妄想税", nick:""},
		{levels:["9-", "12.3", ""],	name:"毒占欲", nick:""},
		{levels:["8+", "10.4", ""],	name:"むかしむかしのきょうのぼく", nick:"むかしむかし"},
		{levels:["8+", "11.9", ""],	name:"二息歩行", nick:""},
		{levels:["9-", "10.9", ""],	name:"モザイクロール", nick:""},
		{levels:["9-", "11.2", ""],	name:"弱虫モンブラン", nick:"モンブラン"},
		{levels:["9+", "11.9", ""],	name:"39", nick:""},
		{levels:["7+", "11.0", ""],	name:"＊ハロー、プラネット。", nick:"ハロプラ"},
		{levels:["8+", "11.9", ""],	name:"Mr. Wonderland", nick:"Wonderland"},
		{levels:["10-", "12.3", ""],	name:"吉原ラメント", nick:"ラメント"},
		{levels:["8-", "11.0", ""],	name:"ココロ", nick:""},
		{levels:["9+", "11.8", ""],	name:"ゆっくりしていってね！！！", nick:"ゆっくり"},
		{levels:["9-", "11.8", ""],	name:"生きてるおばけは生きている", nick:"生きてるおばけ"},
		{levels:["8-", "10.7", ""],	name:"踊れオーケストラ", nick:""},
		{levels:["9-", "11.4", ""],	name:"クノイチでも恋がしたい", nick:"クノイチ"},
		{levels:["7-", "10.3", "11.8"],	name:"いーあるふぁんくらぶ", nick:"いーある"},
		{levels:["8-", "12.1", ""],	name:"赤心性：カマトト荒療治", nick:"カマトト"},
		{levels:["8-", "11.0", ""],	name:"イノコリ先生", nick:""},
		{levels:["9+", "12.5", ""],	name:"ECHO", nick:""},
		{levels:["9-", "11.4", ""],	name:"キミノヨゾラ哨戒班", nick:"キミノヨゾラ"},
		{levels:["8+", "11.1", ""],	name:"しんでしまうとはなさけない！", nick:"しんでしまうとは"},
		{levels:["8+", "11-", ""],	name:"エイリアンエイリアン", nick:"エイリアン"},
		{levels:["8+", "11.4", ""],	name:"パーフェクト生命", nick:""},
		{levels:["8+", "11.4", ""],	name:"やめろ！聴くな！", nick:"やめろ聴くな"},
		{levels:["7+", "9.8", ""],	name:"東京リアルワールド", nick:"リアルワールド"},
		{levels:["8-", "11.0", ""],	name:"すろぉもぉしょん", nick:"すろも"},
		{levels:["9.7", "12.7", ""],	name:"頓珍漢の宴", nick:"頓珍漢"},
		{levels:["8-", "12.0", ""],	name:"ありふれたせかいせいふく", nick:"せいかいせいふく"},
		{levels:["8-", "11.4", ""],	name:"絵の上手かった友達", nick:"絵の上手い"},
		{levels:["10-", "12.0", ""],	name:"腐れ外道とチョコレゐト", nick:"腐れ外道"},
		{levels:["8+", "11.8", ""],	name:"はじめまして地球人さん", nick:"地球人さん"},
		{levels:["8+", "10.3", ""],	name:"アゲアゲアゲイン", nick:""},
		{levels:["9-", "11.5", ""],	name:"M.S.S.Planet", nick:"M.S.S."},
		{levels:["8+", "10.8", ""],	name:"不毛！", nick:""},
		{levels:["9-", "11.8", ""],	name:"ネトゲ廃人シュプレヒコール", nick:"ネトゲ廃人"},
		{levels:["9+", "11.3", ""],	name:"炉心融解", nick:""},
		{levels:["9-", "11.0", ""],	name:"StargazeR", nick:""},
		{levels:["9-", "11.7", ""],	name:"Just Be Friends", nick:""},
		{levels:["8+", "10.8", ""],	name:"LOL -lots of laugh-", nick:"LOL"},
		{levels:["7+", "10.6", ""],	name:"みくみくにしてあげる♪【してやんよ】", nick:"みくみく"},
		{levels:["9+", "11.3", ""],	name:"Sweet Devil", nick:""},
		{levels:["8-", "11.6", ""],	name:"クローバー♣クラブ", nick:"クローバークラブ"},
		{levels:["8-", "11.7", ""],	name:"深海少女", nick:""},
		{levels:["8-", "11.3", ""],	name:"SPiCa", nick:""},
		{levels:["8-", "11.4", ""],	name:"ぽっぴっぽー", nick:""},
		{levels:["9+", "12.5", ""],	name:"Nyan Cat EX", nick:""},
		{levels:["9+", "11.9", ""],	name:"どういうことなの！？", nick:""},
		{levels:["9+", "12.3", ""],	name:"どうしてこうなった", nick:"こなた"},
		{levels:["9-", "12.1", ""],	name:"ダブルラリアット", nick:"ダブラリ"},
		{levels:["10-", "12.6", ""],	name:"magician's operation", nick:"マジオペ"},
		{levels:["8-", "12.3", ""],	name:"トルコ行進曲 - オワタ＼(^o^)／", nick:"オワタ"},
		{levels:["8-", "9.9", ""],	name:"リリリリ★バーニングナイト", nick:"リリリリ"},
		{levels:["8-", "9.9", ""],	name:"イアイア★ナイトオブデザイア", nick:"イアイア"},
		{levels:["7+", "10.4", ""],	name:"ルカルカ★ナイトフィーバー", nick:"ルカルカ"},
		{levels:["7-", "9.9", ""],	name:"メグメグ☆ファイアーエンドレスナイト", nick:"メグメグ"},
		{levels:["8-", "9.2", ""],	name:"教えて!! 魔法のLyric", nick:"Lyric"},
		{levels:["7-", "10.8", ""],	name:"おちゃめ機能", nick:""},
		{levels:["9-", "11.0", ""],	name:"BAD∞END∞NIGHT", nick:"バドエン"},
		{levels:["7-", "10.8", ""],	name:"shake it!", nick:""},
		{levels:["8-", "10.3", ""],	name:"Heart Beats", nick:""},
		{levels:["7-", "9.9", ""],	name:"Sweetiex2", nick:""},
		{levels:["9-", "10.5", "12.1"],	name:"ロミオとシンデレラ", nick:"ロミシン"},
		{levels:["8-", "10.8", ""],	name:"ハッピーシンセサイザ", nick:"ハピシン"},
		{levels:["9-", "10.5", ""],	name:"ダンシング☆サムライ", nick:""},
		{levels:["8-", "10.7", ""],	name:"ハロ／ハワユ", nick:"ハロハワユ"},
		{levels:["8+", "9.7", "11.0"],	name:"Tell Your World", nick:""},
		{levels:["8+", "11.2", ""],	name:"Hand in Hand", nick:""},
		{levels:["10-", "11.6", ""],	name:"アンハッピーリフレイン", nick:"アンハッピー"},
		{levels:["9+", "12.6", ""],	name:"裏表ラバーズ", nick:"裏表"},
		{levels:["8-", "11.5", ""],	name:"ローリンガール", nick:"ローリン"},
		{levels:["7-", "10.6", "12.1"],	name:"ワールズエンド・ダンスホール", nick:"ワールズエンド"},
		{levels:["8-", "9.9", "11.7"],	name:"マトリョシカ", nick:""},
		{levels:["8-", "9.7", ""],	name:"パンダヒーロー", nick:""},
		{levels:["9+", "10.6", ""],	name:"ゴーゴー幽霊船", nick:"幽霊船"},
		{levels:["9-", "11.2", ""],	name:"セツナトリップ", nick:""},
		{levels:["9-", "11-", ""],	name:"放課後ストライド", nick:"ストライド"},
		{levels:["9+", "11.0", ""],	name:"カゲロウデイズ", nick:""},
		{levels:["10-", "12.0", ""],	name:"夜咄ディセイブ", nick:"ディセイブ"},
		{levels:["7+", "10.1", ""],	name:"メランコリック", nick:""},
		{levels:["7+", "9.2", "11.3"],	name:"ZIGG-ZAGG", nick:""},
		{levels:["7+", "10.6", ""],	name:"I ♥", nick:""},
		{levels:["8-", "10.7", ""],	name:"ラブチーノ", nick:""},
		{levels:["9-", "10.5", ""],	name:"スイートマジック", nick:""},
		{levels:["9-", "10.7", ""],	name:"林檎華憐歌", nick:""},
		{levels:["9-", "12.3", ""],	name:"木彫り鯰と右肩ゾンビ", nick:"鯰とゾンビ"},
		{levels:["9-", "12.4", ""],	name:"デッドレッドガールズ", nick:"デッドレッド"},
		{levels:["9-", "10.6", ""],	name:"One Step Ahead", nick:"One Step"},
		{levels:["7-", "10.5", ""],	name:"Link", nick:"Link(ni)"},
		{levels:["7+", "9.8", ""],	name:"ひみつをちょーだい", nick:""},
		{levels:["7+", "10.2", ""],	name:"夏にキスしていいですか？", nick:"夏にキスして"},
		{levels:["9-", "12.0", ""],	name:"すーぱーぬこになりたい", nick:"スーパーぬこ"},
		{levels:["9+", "11.8", ""],	name:"バッド・ダンス・ホール", nick:""},
		{levels:["9-", "11-", ""],	name:"ないせんのうた", nick:"ないせん"},
		{levels:["8+", "11-", ""],	name:"泡沫、哀のまほろば", nick:"まほろば"},
		{levels:["8-", "11.3", ""],	name:"華鳥風月", nick:""},
		{levels:["8-", "11.3", ""],	name:"色は匂へど散りぬるを", nick:"色は匂へど"},
		{levels:["8+", "11.7", ""],	name:"月に叢雲華に風", nick:"月に叢雲"},
		{levels:["8+", "11.7", ""],	name:"宿題が終わらないっ！", nick:"宿題"},
		{levels:["9-", "11.4", ""],	name:"東方スイーツ！～鬼畜姉妹と受難メイド～", nick:"東方スイーツ"},
		{levels:["9-", "11.7", ""],	name:"taboo tears you up", nick:"taboo"},
		{levels:["9+", "11.4", ""],	name:"Starlight Vision", nick:""},
		{levels:["9-", "12.3", ""],	name:"幽闇に目醒めしは", nick:"幽闇"},
		{levels:["8-", "11.6", ""],	name:"物凄い勢いでけーねが物凄いうた", nick:"けーね"},
		{levels:["9-", "11.9", ""],	name:"オーディエンスを沸かす程度の能力 feat.タイツォン", nick:"オーディエンス"},
		{levels:["9+", "11.7", ""],	name:"Club Ibuki in Break All", nick:"Club Ibuki"},
		{levels:["9-", "12.2", ""],	name:"チルノのパーフェクトさんすう教室　⑨周年バージョン", nick:"チルノ9周年"},
		{levels:["8+", "11.7", ""],	name:"チルノのパーフェクトさんすう教室", nick:"チルノ"},
		{levels:["7+", "11.7", ""],	name:"魔理沙は大変なものを盗んでいきました", nick:"魔理沙"},
		{levels:["9-", "12.6", "12.9"],	name:"患部で止まってすぐ溶ける～狂気の優曇華院", nick:"患部～優曇華"},
		{levels:["9-", "10.9", ""],	name:"究極焼肉レストラン！お燐の地獄亭！", nick:"焼肉レストラン"},
		{levels:["9-", "10.8", ""],	name:"お嫁にしなさいっ！", nick:""},
		{levels:["9+","11.9", ""],	name:"キャプテン・ムラサのケツアンカー", nick:"ケツアンカー"},
		{levels:["9-", "11.4", ""],	name:"ひれ伏せ愚民どもっ！", nick:"愚民"},
		{levels:["7-", "11.9", ""],	name:"Grip & Break down !!", nick:"Grip"},
		{levels:["9-", "12.5", ""],	name:"Cosmic Magic Shooter", nick:"Magic Shooter"},
		{levels:["8-", "10.7", ""],	name:"しゅわスパ大作戦☆", nick:"しゅわスパ"},
		{levels:["8+", "10.9", ""],	name:"全人類ノ非想天則", nick:"非想天則"},
		{levels:["9-", "11.7", ""],	name:"Endless, Sleepless Night", nick:"かにぱん"},
		{levels:["9-", "12.0", ""],	name:"No Routine", nick:""},
		{levels:["10+", "12.7", ""],	name:"Scream out! -maimai SONIC WASHER Edit-", nick:"Scream Out"},
		{levels:["9-", "12.9", ""],	name:"幻想のサテライト", nick:"サテライト"},
		{levels:["8-", "11.4", ""],	name:"待チ人ハ来ズ。", nick:"待チ人"},
		{levels:["8-", "11.4", ""],	name:"響縁", nick:""},
		{levels:["9-", "11.2", ""],	name:"囲い無き世は一期の月影", nick:"囲い無き世は"},
		{levels:["9-", "12.7", ""],	name:"儚きもの人間", nick:"儚きもの"},
		{levels:["9-", "11.2", ""],	name:"sweet little sister", nick:""},
		{levels:["9-", "11.0", ""],	name:"ケロ⑨destiny", nick:"ケロ⑨"},
		{levels:["9+", "12.0", ""],	name:"Phantasm Brigade", nick:"Brigade"},
		{levels:["9-", "12.0", ""],	name:"蒼空に舞え、墨染の桜", nick:"墨染"},
		{levels:["8-", "10.4", ""],	name:"フラグメンツ -T.V. maimai edit-", nick:"フラグメンツ"},
		{levels:["8-", "11.4", ""],	name:"橙の幻想郷音頭", nick:"幻想郷音頭"},
		{levels:["8+", "11.1", ""],	name:"Starlight Dance Floor", nick:""},
		{levels:["7+", "11.4", ""],	name:"神々の祈り", nick:""},
		{levels:["8+", "11.0", ""],	name:"願いを呼ぶ季節", nick:""},
		{levels:["8-", "10.7", "11.0"],	name:"明星ロケット", nick:"明星"},
		{levels:["9-", "11.9", "12.4"],	name:"緋色のDance", nick:"緋色"},
		{levels:["9-", "10.9", ""],	name:"YU-MU", nick:""},
		{levels:["9+", "12.0", ""],	name:"エテルニタス・ルドロジー", nick:"ルドロジー"},
		{levels:["8-", "10.6", "11.9"],	name:"エピクロスの虹はもう見えない", nick:"エピクロス"},
		{levels:["9-", "12.0", ""],	name:"四次元跳躍機関", nick:"四次元"},
		{levels:["9-", "12.3", ""],	name:"少女幻葬戦慄曲 ～ Necro Fantasia", nick:"Necro"},
		{levels:["9-", "11.7", ""],	name:"妖精村の月誕祭 ～Lunate Elf", nick:"妖精村"},
		{levels:["8+", "11.5", ""],	name:"Jimang Shot", nick:"じまんぐ"},
		{levels:["8-", "10.7", "11.5"],	name:"ってゐ！ ～えいえんてゐVer～", nick:"ってゐ"},
		{levels:["8-", "11.3", ""],	name:"東方妖々夢 ～the maximum moving about～", nick:"妖々夢"},
		{levels:["8+", "11.1", ""],	name:"Yet Another ”drizzly rain”", nick:"drizzly rain"},
		{levels:["7-", "9.9", ""],	name:"シアワセうさぎ", nick:""},
		{levels:["9-", "11-", ""],	name:"最速最高シャッターガール", nick:"シャッターガール"},
		{levels:["10-", "12.7", ""],	name:"最終鬼畜妹・一部声", nick:"最終鬼畜妹"},
		{levels:["9-", "12.7", ""],	name:"ウサテイ", nick:""},
		{levels:["9+", "10.4", ""],	name:"Help me, ERINNNNNN!!", nick:"えーりん"},
		{levels:["10-", "11.7", "13.2"],	name:"ナイト・オブ・ナイツ", nick:"ナイツ"},
		{levels:["8+", "10.9", "12.3"],	name:"Bad Apple!! feat nomico", nick:"Bad Apple"},
		{levels:["11-", "13-", ""],	name:"Calamity Fortune", nick:"カラミティ"},
		{levels:["9-", "10.8", ""],	name:"CALL HEAVEN!!", nick:""},
		{levels:["8+", "11.0", ""],	name:"Sunshine world tour", nick:""},
		{levels:["9-", "11.5", ""],	name:"終わりなき物語", nick:""},
		{levels:["9-", "11.1", ""],	name:"Our Fighting", nick:""},
		{levels:["8+", "11.9", "11.9"],	name:"Save This World νMIX", nick:"Save This World"},
		{levels:["8+", "10.5", "11.4"],	name:"Living Universe", nick:""},
		{levels:["10-", "10.7", ""],	name:"Ignite Infinity", nick:"Infinity"},
		{levels:["10-", "11.6", ""],	name:"Garden Of The Dragon", nick:"龍宮の園"},
		{levels:["9-", "12.4", ""],	name:"Reach For The Stars", nick:"Reach"},
		{levels:["9-", "11.8", ""],	name:"Live & Learn", nick:"リブラン"},
		{levels:["9-", "12.5", ""],	name:"Back 2 Back", nick:"B2B"},
		{levels:["9-", "11.3", ""],	name:"Windy Hill -Zone 1", nick:"Windy Hill"},
		{levels:["8-", "11.2", "11.3"],	name:"City Escape: Act1", nick:"City Escape"},
		{levels:["9+", "10.1", "11.8"],	name:"Rooftop Run: Act1", nick:"Roottop"},
		{levels:["8+", "11.3", ""],	name:"時空を超えて久しぶり！", nick:"アルル"},
		{levels:["9-", "10.3", ""],	name:"Her Dream Is To Be A Fantastic Sorceress", nick:"アミティ"},
		{levels:["7-", "11.8", ""],	name:"キズナの物語", nick:""},
		{levels:["9+", "12.2", ""],	name:"STAIRWAY TO GENERATION", nick:"STAIRWAY"},
		{levels:["10-", "12.5", ""],	name:"Last Brave ～ Go to zero", nick:"Last Brave"},
		{levels:["11.5", "11.5", ""],	name:"Urban Crusher [Remix]", nick:"アーバン"},
		{levels:["9-", "10.6", ""],	name:"Catch The Future", nick:""},
		{levels:["8-", "11.7", ""],	name:"awake", nick:""},
		{levels:["9+", "12.1", ""],	name:"Terminal Storm", nick:"タミスト"},
		{levels:["10-", "11.7", ""],	name:"After Burner", nick:""},
		{levels:["9+", "12.5", ""],	name:"Space Harrier Main Theme [Reborn]", nick:"スペハリ"},
		{levels:["10-", "11.6", ""],	name:"Quartet Theme [Reborn]", nick:"カルテット"},
		{levels:["9-", "11.2", ""],	name:"Sky High [Reborn]", nick:"Sky High"},
		{levels:["9+", "12.5", ""],	name:"Like the Wind [Reborn]", nick:"Like"},
		{levels:["11-", "11.7", ""],	name:"YA･DA･YO [Reborn]", nick:"ヤダヨ"},
		{levels:["10-", "10.1", ""],	name:"Natural Flow", nick:""},
		{levels:["8-", "9.9", ""],	name:"Crush On You", nick:""},
		{levels:["7+", "9.1", ""],	name:"Sun Dance", nick:""},
		{levels:["8-", "10.1", ""],	name:"In Chaos", nick:""},
		{levels:["10-", "10.5", ""],	name:"Beat Of Mind", nick:""},
		{levels:["9-", "12.1", ""],	name:"JACKY [Remix]", nick:"Jacky"},
		{levels:["10-", "12.2", ""],	name:"Mysterious Destiny", nick:"ミステリアス"},
		{levels:["9+", "10.0", ""],	name:"Riders Of The Light", nick:""},
		{levels:["7-", "11.5", ""],	name:"コトバ・カラフル", nick:""},
		{levels:["8-", "11.9", ""],	name:"天国と地獄", nick:""},
		{levels:["8-", "10.6", ""],	name:"きみのためなら死ねる", nick:"きみ死ね"},
		{levels:["8+", "10.0", ""],	name:"The Great Journey", nick:""},
		{levels:["9-", "10.2", "12.5"],	name:"Burning Hearts ～炎のANGEL～", nick:"Burning Hearts"},
		{levels:["8-", "10.5", ""],	name:"かせげ！ジャリンコヒーロー", nick:"ジャリンコヒーロー"},
		{levels:["9-", "12.3", ""],	name:"ココロスキャンのうた", nick:"ココロスキャン"},
		{levels:["10-", "10.8", ""],	name:"超絶！Superlative", nick:"超絶"},
		{levels:["10-", "11.2", ""],	name:"采配の刻 Power of order", nick:"采配"},
		{levels:["11-", "12.0", ""],	name:"DO RORO DERODERO ON DO RORO", nick:"DO RORO"},
		{levels:["9-", "10.8", ""],	name:"源平大戦絵巻テーマソング", nick:"源平"},
		{levels:["8+", "11.3", ""],	name:"怪盗Rのテーマ", nick:"怪盗R"},
		{levels:["7-", "10.1", ""],	name:"マリアをはげませ", nick:"マリア"},
		{levels:["7+", "10.1", ""],	name:"SHOW TIME", nick:""},
		{levels:["9+", "11.7", ""],	name:"円舞曲、君に", nick:"円舞曲"},
		{levels:["10-", "11.0", ""],	name:"御旗のもとに", nick:"御旗"},
		{levels:["9-", "10.7", ""],	name:"地上の戦士", nick:""},
		{levels:["8-", "8.7", "11.0"],	name:"檄！帝国華撃団(改)", nick:"檄帝"},
		{levels:["9.1", "12.9", ""],	name:"Outlaw's Lullaby", nick:"Outlaw"},
		{levels:["9-", "11.8", ""],	name:"Brand-new Japanesque", nick:"Japanesque"},
		{levels:["9-", "12.6", ""],	name:"鼓動", nick:""},
		{levels:["10-", "11.1", ""],	name:"神室雪月花", nick:""},
		{levels:["7-", "12.1", ""],	name:"KONNANじゃないっ！", nick:"KONNAN"},
		{levels:["9-", "11.6", ""],	name:"セガサターン起動音[H.][Remix]", nick:"セガサターン"},
		{levels:["10+", "12.8", ""],	name:"MilK", nick:""},
		{levels:["10-", "12.8", ""],	name:"GO BACK 2 YOUR RAVE", nick:"GO BACK"},
		{levels:["10-", "12.9", ""],	name:"B.B.K.K.B.K.K.", nick:"BBKK"},
		{levels:["11.0", "12.8", ""],	name:"人里に下ったアタイがいつの間にか社畜になっていた件", nick:"社畜"},
		{levels:["10+", "12.8", ""],	name:"Maxi", nick:""},
		{levels:["9+", "12.1", ""],	name:"KISS CANDY FLAVOR", nick:""},
		{levels:["8+", "11.7", ""],	name:"H-A-J-I-M-A-R-I-U-T-A-!!", nick:"HAJIMARIUTA"},
		{levels:["9-", "11.3", ""],	name:"Star☆Glitter", nick:"StarGlitter"},
		{levels:["10+", "13.0", ""],	name:"conflict", nick:""},
		{levels:["10-", "12.5", ""],	name:"Party 4U ”holy nite mix”", nick:"Party 4U"},
		{levels:["9+", "11.8", ""],	name:"GOODMEN", nick:""},
		{levels:["10+", "12.7", ""],	name:"Sakura Fubuki", nick:"桜吹雪"},
		{levels:["10-", "12.8", ""],	name:"METATRON", nick:""},
		{levels:["9-", "11.5", ""],	name:"オモイヨシノ", nick:""},
		{levels:["9-", "12.5", ""],	name:"L9", nick:""},
		{levels:["10-", "12.9", ""],	name:"Jack-the-Ripper◆", nick:"Ripper"},
		{levels:["11.4", "12.8", ""],	name:"DRAGONLADY", nick:"ドラレ"},
		{levels:["9+", "11.4", ""],	name:"Pursuing My True Self", nick:"Pursuing"},
		{levels:["9+", "11.7", ""],	name:"Signs Of Love (“Never More” ver.)", nick:"Signs Of Love"},
		{levels:["9-", "11.4", ""],	name:"specialist (“Never More” ver.)", nick:"specialist"},
		{levels:["9-", "12.3", ""],	name:"Time To Make History (AKIRA YAMAOKA Remix)", nick:"Time To Make"},
		{levels:["8-", "11.7", ""],	name:"レッツゴー!陰陽師", nick:"陰陽師"},
		{levels:["9-", "11.8", ""],	name:"オパ! オパ! RACER -GMT mashup-", nick:"オパRACER"},
		{levels:["10-", "12.6", ""],	name:"電車で電車でOPA!OPA!OPA! -GMT mashup-", nick:"電OPA"},
		{levels:["10-", "11.7", ""],	name:"リッジでリッジでGO!GO!GO! -GMT mashup-", nick:"リッジでGO"},
		{levels:["7+", "11.3", ""],	name:"電車で電車でGO!GO!GO!GC! -GMT remix-", nick:"電車でGO"},
		{levels:["10-", "11.7", ""],	name:"RIDGE RACER STEPS -GMT remix-", nick:"リッジレーサー"},
		{levels:["9-", "11.5", ""],	name:"ファンタジーゾーン OPA-OPA! -GMT remix-", nick:"OPAOPA"},
		{levels:["10-", "12.5", ""],	name:"DADDY MULK -Groove remix-", nick:"ダディ"},
		{levels:["10.2", "13.1", ""],	name:"FUJIN Rumble", nick:"FUJIN"},
		{levels:["10+", "12.7", ""],	name:"Got more raves？", nick:"ゴモア"},
		{levels:["11.0", "12.9", ""],	name:"夜明けまであと３秒", nick:"夜明けまで"},
		{levels:["10+", "12.9", ""],	name:"Ignis Danse", nick:"Ignis"},
		{levels:["11-", "12.8", ""],	name:"きたさいたま2000", nick:"きさま"},
		{levels:["9-", "12.7", ""],	name:"Scars of FAUNA", nick:"FAUNA"},
		{levels:["10-", "12.6", ""],	name:"FLOWER", nick:""},
		{levels:["", "12.Z", ""],	name:"Magical Flavor", nick:""},
		{levels:["10.0", "12.0", ""],	name:"ユビキリ", nick:""},
		{levels:["10.5", "12.8", ""],	name:"デスパレイト", nick:""},
		{levels:["11.2", "13.3", ""],	name:"Moon of Noon", nick:""},
		{levels:["11-", "12.9", ""],	name:"Ultranova", nick:""},
		{levels:["10-", "12.0", ""],	name:"曖昧mind", nick:""},
		{levels:["9+", "11.9", ""],	name:"Limit Break", nick:""},
		{levels:["9+", "11.7", ""],	name:"オトヒメモリー☆ウタゲーション", nick:"乙姫"},
		{levels:["9+", "12.7", ""],	name:"夢花火", nick:""},
		{levels:["9+", "11.9", ""],	name:"いっしそう電☆舞舞神拳！", nick:"舞舞神拳"},
		{levels:["11.5", "13.2", ""],	name:"Panopticon", nick:"パノプ"},
		{levels:["10.9", "12.9", ""],	name:"四月の雨", nick:""},
		{levels:["11.5", "13.1", ""],	name:"ねぇ、壊れタ人形ハ何処へ棄テらレるノ？", nick:"壊れタ人形"},
		{levels:["10-", "12.4", ""],	name:"Imitation:Loud Lounge", nick:"Imitation"},
		{levels:["10+", "12.9", ""],	name:"HERA", nick:""},
		{levels:["10-", "12.6", ""],	name:"Selector", nick:""},
		{levels:["11.7", "13.3", ""],	name:"AMAZING MIGHTYYYY!!!!", nick:"MIGHTYYYY"},
		{levels:["10.8", "13.2", ""],	name:"CITRUS MONSTER", nick:"シトラス"},
		{levels:["11.0", "12.8", ""],	name:"Hyper Active", nick:""},
		{levels:["10+", "12.8", ""],	name:"Jumble Rumble", nick:"Jumble"},
		{levels:["10-", "12.9", ""],	name:"Nitrous Fury", nick:"ナイトラス"},
		{levels:["10-", "12.4", ""],	name:"Revive The Rave", nick:"Revive"},
		{levels:["10-", "12.7", ""],	name:"GEMINI -M-", nick:"GEMINI"},
		{levels:["9-", "12.4", ""],	name:"スリップフリップ", nick:""},
		{levels:["11.3", "12.9", ""],	name:"天火明命", nick:""},
		{levels:["10-", "12.8", ""],	name:"7thSense", nick:""},
		{levels:["10+", "12.9", ""],	name:"Lividi", nick:""},
		{levels:["10+", "13.3", ""],	name:"Axeria", nick:""},
		{levels:["10-", "12.7", ""],	name:"閃鋼のブリューナク", nick:"ブリューナク"},
		{levels:["10+", "13.3", ""],	name:"ガラテアの螺旋", nick:"ガラテア"},
		{levels:["11.0", "13.0", ""],	name:"Caliburne ～Story of the Legendary sword～", nick:"Caliburne"},
		{levels:["11.5", "13.4", ""],	name:"Our Wrenally", nick:"あわれなり"},
		{levels:["11-", "13.2", ""],	name:"Contrapasso -paradiso-", nick:"コントラ"},
		{levels:["10.0", "13.0", ""],	name:"Oshama Scramble!", nick:"Oshama"},
		{levels:["11.0", "12.8", ""],	name:"Garakuta Doll Play", nick:"ガラクタ"},
		{levels:["10-", "11.9", "11.7"],	name:"Blew Moon", nick:"ぶるむん"},
		{levels:["11-", "12.2", ""],	name:"We Gonna Party", nick:""},
		{levels:["10.4", "12.9", ""],	name:"MYTHOS", nick:""},
		{levels:["10+", "12.4", ""],	name:"Life Feels Good", nick:""},
		{levels:["11.3", "13.1", ""],	name:"Glorious Crown", nick:"グロクラ"},
		{levels:["10.6", "12.9", ""],	name:"Aiolos", nick:""},
		{levels:["9+", "12.6", ""],	name:"LANCE", nick:""},
		{levels:["9-", "12.0", ""],	name:"Dragoon", nick:""},
		{levels:["10-", "12.4", ""],	name:"Death Scythe", nick:"デスサ"},
		{levels:["10-", "11.1", ""],	name:"LUCIA", nick:""},
		{levels:["10-", "12.7", ""],	name:"DON’T  STOP  ROCKIN’", nick:"ドンスト"},
		{levels:["10-", "12.5", ""],	name:"oboro", nick:""},
		{levels:["9.2", "12.6", ""],	name:"CYCLES", nick:""},
		{levels:["9+", "12.3", ""],	name:"Lionheart", nick:""},
		{levels:["10-", "11.3", ""],	name:"Heartbeats", nick:""},
		{levels:["10-", "11.9", ""],	name:"Acceleration", nick:"アクセラ"},
		{levels:["10-", "11.3", ""],	name:"End of Twilight", nick:"Twilight"},
		{levels:["9-", "11.3", ""],	name:"JUMPIN' JUMPIN'", nick:"JUMPIN'"},
		{levels:["9+", "12.4", ""],	name:"L'épilogue", nick:"レピローグ"},
		{levels:["10-", "12.6", ""],	name:"FEEL ALIVE", nick:"フィルアラ"},
		{levels:["9+", "12.2", ""],	name:"FEEL the BEATS", nick:"フィルビー"},
		{levels:["9-", "11.7", ""],	name:"BREAK YOU!!", nick:""},
		{levels:["10.4", "12.8", ""],	name:"KING is BACK!!", nick:"KING is BACK"},
		{levels:["10+", "12.2", ""],	name:"Streak", nick:""},
		{levels:["10+", "12.2", ""],	name:"Spin me harder", nick:"スピンミー"},
		{levels:["11-", "12.2", ""],	name:"Turn around", nick:"タンアラ"},
		{levels:["7-", "10.5", ""],	name:"Link", nick:"Link(ni)"},
		{levels:["11.6", "11.6", ""],	name:"Black Out", nick:""},
		{levels:["11.6", "13.1", ""],	name:"Fragrance", nick:"フレグラ"},
		{levels:["10-", "12.8", ""],	name:"Nerverakes", nick:"ナーブ"},
		{levels:["9-", "11.2", ""],	name:"Sprintrances", nick:"スプリン"},
		{levels:["9+", "12.2", ""],	name:"air's gravity", nick:"エアグラ"},
		{levels:["9+", "11.5", ""],	name:"Night Fly", nick:""},
		{levels:["9+", "11.8", ""],	name:"Feel My Fire", nick:""},
		{levels:["10-", "10.6", "11.6"],	name:"Starlight Disco", nick:"ディスコ"},
		{levels:["9-", "11.9", ""],	name:"記憶、記録", nick:"記憶記録"},
		{levels:["9-", "11.1", ""],	name:"connecting with you", nick:"connecting"},
		{levels:["9-", "11.1", ""],	name:"アージェントシンメトリー", nick:"アージェント"},
		{levels:["9+", "11.2", ""],	name:"Dreampainter", nick:""},
		{levels:["9-", "11.0", ""],	name:"Monochrome Rainbow", nick:"Monochrome"},
		{levels:["10-", "12.1", ""],	name:"Beat of getting entangled", nick:"ビトゲ"},
		{levels:["9-", "11.3", ""],	name:"MIRROR of MAGIC", nick:""},
		{levels:["9-", "10.9", ""],	name:"Cosmic Train", nick:""},
		{levels:["9+", "11.7", ""],	name:"高気圧ねこロック", nick:"ねこロック"},
		{levels:["10-", "13.3", ""],	name:"Prophesy One", nick:"Prophesy"},
		{levels:["9-", "10.7", ""],	name:"BETTER CHOICE", nick:""},
		{levels:["10+", "12.2", ""],	name:"Get Happy", nick:""},
		{levels:["11.6", "13.0", ""],	name:"System “Z”", nick:"System"},
		{levels:["10-", "13.2", ""],	name:"VERTeX", nick:""},
		{levels:["9.5", "13.1", ""],	name:"ジングルベル", nick:"ジングル"},
		{levels:["10-", "12.3", ""],	name:"火炎地獄", nick:""},
		{levels:["9-", "11.8", ""],	name:"Danza zandA", nick:"Danza"},
		{levels:["9+", "11.9", ""],	name:"planet dancer", nick:""},
		{levels:["9-", "10.6", ""],	name:"ナミダと流星", nick:""},
		{levels:["9+", "12.2", ""],	name:"ピーマンたべたら", nick:"ピーマン"},
		{levels:["8-", "9.9", ""],	name:"maimaiちゃんのテーマ", nick:"maimaiちゃん"},
		{levels:["8-", "10.9", ""],	name:"Pixel Voyage", nick:"Pixel"},
		{levels:["8-", "9.7", ""],	name:"Sweets×Sweets", nick:""},
		{levels:["9-", "10.8", ""],	name:"虹と太陽", nick:""},
		{levels:["8-", "10.1", ""],	name:"Color My World", nick:""},
		{levels:["8+", "9.8", ""],	name:"True Love Song", nick:""},
		{levels:["7+", "9.3", ""],	name:"デコボコ体操第二", nick:"デコボコ体操"},
		{levels:["9+", "11.7", ""],	name:"ソーラン☆節", nick:"ソーラン節"},
		{levels:["8+", "11.8", ""],	name:"おても☆Yan", nick:"おてもYan"},
		{levels:["8-", "11.7", ""],	name:"炭★坑★節", nick:"炭坑節"},
		{levels:["7-", "10.6", ""],	name:"ネコ日和。", nick:""},
		{levels:["8+", "10.1", ""],	name:"犬日和。", nick:""},
		{levels:["9+", "10.7", ""],	name:"Endless World", nick:""},
		{levels:["10-", "11.0", ""],	name:"Backyun! －悪い女－", nick:"Backyun"},
		{levels:["10-", "10.1", ""],	name:"BaBan!! －甘い罠－", nick:"BaBan"},
		{levels:["8+", "10.3", ""],	name:"オレンジの夏", nick:""},
		{levels:["9-", "10.8", ""],	name:"ぴぴぱぷぅ！", nick:""},
		{levels:["10-", "12.3", ""],	name:"炎歌 -ほむらうた-", nick:"炎歌"},
		{levels:["9-", "10.6", ""],	name:"泣き虫O'clock", nick:""},
		{levels:["9+", "11.3", ""],	name:"maiム・maiム feat.週刊少年マガジン", nick:"maiム・maiム"},
		{levels:["8-", "11.5", ""],	name:"タカハせ！名人マン", nick:"名人マン"},
		{levels:["9-", "11.5", ""],	name:"みんなのマイマイマー", nick:"マイマイマー"},
		{levels:["8-", "11.2", ""],	name:"welcome to maimai!! with マイマイマー", nick:"welcome maimai"},
		{levels:["8-", "10.7", ""],	name:"ぐるぐるWASH！コインランドリー・ディスコ", nick:"コインランドリー"},
		{levels:["9-", "12.0", ""],	name:"Infantoon Fantasy", nick:"Infantoon"},
		{levels:["9-", "11.7", ""],	name:"幾四音-Ixion-", nick:"幾四音"},
		{levels:["9-", "10.7", ""],	name:"Counselor", nick:""},
		{levels:["8-", "11-", ""],	name:"Invitation", nick:""},
		{levels:["9-", "11.4", ""],	name:"その群青が愛しかったようだった", nick:"群青"},
		{levels:["11-", "12.9", ""],	name:"The wheel to the right", nick:"The wheel"},
		{levels:["9+", "12.0", ""],	name:"光線チューニング", nick:""},
		{levels:["9-", "12.4", ""],	name:"心象蜃気楼", nick:""},
		{levels:["9-", "11.7", ""],	name:"ハート・ビート", nick:"せりな"},
		{levels:["9+", "11.5", ""],	name:"brilliant better", nick:"あーりん"},
		{levels:["7+", "11.2", ""],	name:"フォルテシモBELL", nick:"なずな"},
		{levels:["9-", "12.2", ""],	name:"DETARAME ROCK&ROLL THEORY", nick:"なる"},
		{levels:["8-", "11.7", ""],	name:"私の中の幻想的世界観及びその顕現を想起させたある現実での出来事に関する一考察", nick:"ちゃんなぎ"},
		{levels:["10+", "12.4", ""],	name:"猛進ソリストライフ！", nick:"なっち"},
		{levels:["10-", "12.5", ""],	name:"My Dearest Song", nick:"しろな"},
		{levels:["8+", "12.0", ""],	name:"無敵We are one!!", nick:"We are one"},
		{levels:["9-", "11.7", ""],	name:"Change Our MIRAI！", nick:"MIRAI"},
		{levels:["9+", "11.5", ""],	name:"ドキドキDREAM!!!", nick:"ドキドキDREAM"},
		{levels:["9-", "11.9", ""],	name:"言ノ葉カルマ", nick:""},
		{levels:["8+", "11.3", ""],	name:"悪戯", nick:""},
		{levels:["9-", "11.4", ""],	name:"言ノ葉遊戯", nick:""},
		{levels:["8-", "10.4", ""],	name:"りばーぶ", nick:""},
		{levels:["9-", "10.3", "10.7"],	name:"洗脳", nick:""},
		{levels:["9-", "11.3", ""],	name:"Barbed Eye", nick:""},
		{levels:["9-", "12.0", ""],	name:"空威張りビヘイビア", nick:"ビヘイビア"},
		{levels:["9+", "12.8", ""],	name:"分からない", nick:""},
		{levels:["9+", "11.8", ""],	name:"天国と地獄 -言ノ葉リンネ-", nick:"言ノ葉リンネ"},
		{levels:["9+", "12.2", ""],	name:"相思創愛", nick:""},
		{levels:["10-", "12.4", ""],	name:"咲キ誇レ常世ノ華", nick:"咲キ誇レ"} ];

	function mra_diff2tmp(diff)
	{
		var difftable =
		[["7-", 7.0], ["7+", 7.7], ["8-", 8.0], ["8+", 8.7], ["9-", 9.0], ["9+", 9.7],["10-", 10.0],
		["10+", 10.7], ["11-", 11.0], ["11+", 11.7], ["12-", 12.0], ["12+", 12.7], ["13-", 13.0],
		["12.O", 12.0], ["12.I", 12.1], ["12.Z", 12.2], ["12.E", 12.3], ["12.A", 12.4],
		["12.S", 12.5], ["12.b", 12.6], ["12.L", 12.7], ["12.B", 12.8], ["12.q", 12.9],
		["13.O", 13.0], ["13.I", 13.1], ["13.Z", 13.2], ["13.E", 13.3], ["13.A", 13.4],
		["13.S", 13.5], ["13.b", 13.6], ["13.L", 13.7], ["13.B", 13.8], ["13.q", 13.9]];
		// 'O', 'I', 'Z', 'E', 'A', 'S', 'b', 'L', 'B', 'q'

		for(var i=0; i< difftable.length; i++)
		{
			if(diff == difftable[i][0])
			{
				return 1*difftable[i][1];
			}
		}
		return 1*diff;
	}

	function mra_diff2s(difficallity)
	{
		var tmp = mra_diff2tmp(difficallity),retval=0;
		switch(Math.floor(tmp))
		{
			case 13:
			retval = tmp+0.5;
			break;
			case 12:
			retval = 12.00+(tmp*1-12.00)*(3/2);
			break;
			default:
			retval = tmp;
			break;
		}
		return Math.round(retval*100)/100;
	}

	function mra_diff2sss(difficallity)
	{
		var tmp=mra_diff2tmp(difficallity), retval=0;
		switch(Math.floor(tmp))
		{
			case 13:
			retval = tmp*1+3.0;
			break;
			case 12:
			retval = tmp*2-10.00;
			break;
			case 11:
			retval = 2.00+tmp*1;
			break;
			case 10:
			retval = 7.50+tmp/2;
			break;
			case 9:
			case 8:
			retval = 2.50+tmp*1;
			break;
			case 7:
			default:
			retval = 6.50+tmp/2;
			break;
		}
		return Math.round(retval*100)/100;
	}

	function mra_rate_XtoY(basis, max, gap, n)
	{
		return basis+(max-basis)*n/gap
	}

	function mra_diff2waku(difficallity)
	{
		var waku=0;
		var rate_sss = Math.round(10000*mra_diff2sss(difficallity));
		waku = Math.floor(rate_sss/4400);
		waku += Math.floor(rate_sss/440);
		return (waku/100).toFixed(2);
	}

	function mra_arch2rate_10000(achievement, difficallity)
	{
		var temp = 0;

		var rate_sss = Math.round(10000* mra_diff2sss(difficallity));
		var rate_ss = rate_sss - 10000;
		var rate_s = Math.round(10000* mra_diff2s(difficallity));
		var diff10000 = Math.round(10000*mra_diff2tmp(difficallity));
		var achi_100 = Math.round(achievement*100);
		//		console.log("SSS:" + rate_sss + " S:" + rate_s + " Lv.:" + diff10000 + " " + achi_100 + "%");
		if(achi_100 >= 10000) {
			temp = rate_sss
		} else if (achi_100 >= 9900) {
			temp = mra_rate_XtoY(rate_ss,     rate_sss-2500,  100, achi_100-9900);
		} else if (achi_100 >= 9700) {
			temp = mra_rate_XtoY(rate_s,      rate_ss-2500,   200, achi_100-9700);
		} else if (achi_100 >= 9400) {
			temp = mra_rate_XtoY(diff10000-15000, rate_s-10000,   300, achi_100-9400);
		} else if (achi_100 >= 9000) {
			temp = mra_rate_XtoY(diff10000-20000, diff10000-15000,  400, achi_100-9000);
		} else if (achi_100 >= 8000) {
			temp = mra_rate_XtoY(diff10000-30000, diff10000-20000, 1000, achi_100-8000);
		} else if (achi_100 >= 6000) {
			temp = mra_rate_XtoY(diff10000*0.4, diff10000-40000, 2000, achi_100-6000);
		} else if (achi_100 >= 4000) {
			temp = mra_rate_XtoY(diff10000*0.2, diff10000*0.4, 2000, achi_100-4000);
		} else if (achi_100 >= 2000) {
			temp = mra_rate_XtoY(diff10000*0.1, diff10000*0.2, 1000, achi_100-2000);
		} else if (achi_100 >= 1000) {
			temp = mra_rate_XtoY(0,           diff10000*0.1, 1000, achi_100-1000);
		} else {
			temp = 0;
		}
		//	console.log("achivement:" + achievement + " Lv." + difficallity + " rate value:" + temp + "/" + (Math.floor(temp/100)*100));
		//	temp = Math.floor(temp/100)*100;

		return temp;
	}



var best_ave=0, best_limit=0, hist_limit=0;
var expect_max=0, best_rating=0, top_rate=0, recent_rating=0, hist_rating=0, best_left=0, hist_left=0;
var tweet_rate_str="", 	tweet_best_str="";

function get_nextpage_address(j,html,diff)	//次の楽曲リストページを探す
{
	var nextaddr="";
	var e = $(j).find('a');	// hrefが含まれると思われるものlist
	var e_length=e.length;	// その個数
	for(var i=0; i<e_length; i++)	//楽曲リストページ用ループ
	{
		var url=e[i].getAttribute('href');	// <a>内のリンク先取得
		if(url.indexOf(html + "?d=" + diff) == 0)
		{
			return url;
		}
	}
	for(var i=0; i<e_length; i++)	//楽曲リストページ以外用ループ
	{
		var url=e[i].getAttribute('href');
		if(url.indexOf(html) == 0)
		{
			return url + "&d=" + diff;
		}
	}

	return nextaddr;
}

function get_music_mdata2(achive_list, addr, diff)	//データ取得と次のアドレス
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
				m.find("tbody")[i].children[1].children[2].innerText.trim().replace(/[(達成率) %]/g, "")]
			);
		}
		if(diff != 6)
		nextaddr=get_nextpage_address($(data), "music.html", diff+1);
		else
		nextaddr=get_nextpage_address($(data), "home.html", 0);
	});

	return nextaddr;
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
				achive:[(golliramode == 0)?ex_list[i][1]:0,
				ma_list[i][1],
				(re_count >= re_length)?"---":
				(re_list[re_count][0]==ma_list[i][0])?re_list[re_count++][1]:"---"],
				lv:maimai_inner_lv[lvlist_count].levels,
				rate_values:[0,	0, 0],
				music_rate : 0
			});
			datalist[i].rate_values[0] =
			(golliramode == 0)?mra_arch2rate_10000(datalist[i].achive[0], datalist[i].lv[0]):0;
			datalist[i].rate_values[1] = mra_arch2rate_10000(datalist[i].achive[1], datalist[i].lv[1]);
			//			console.log(datalist[i].name + " : " + datalist[i].lv[1] + " : " + datalist[i].rate_values[1]);
			datalist[i].rate_values[2] = mra_arch2rate_10000(datalist[i].achive[2], datalist[i].lv[2]);
			//			console.log(datalist[i].name + " : " + datalist[i].lv[2] + " : " + datalist[i].rate_values[2]);
			datalist[i].music_rate = Math.max.apply(null, datalist[i].rate_values);

			lvlist_count++;
		}
		else	// 違う場合は空データを入れて終了。
		{
			datalist.push(
				{name:ma_list[i][0],
					nick:"",
					achive:[(golliramode == 0)?ex_list[i][1]:0,
					ma_list[i][1],
					(re_count >= re_length)?"---":
					(re_list[re_count][0]==ma_list[i][0])?re_list[re_count++][1]:"---"],
					lv:["","",""],
					rate_values:[0,	0, 0],
					music_rate : 0
				});
			}
		}
		datalist.sort(function(a,b){return b.music_rate-a.music_rate});
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
		tmp += "<td align=center>" + value + "<\/td>"
		tmp += "<td>" + explain + "<\/td>";
		tmp += "<\/tr>";

		return tmp;
	}

	function print_result_rating(title, value, explain)
	{
		var tmp = "";
		tmp += "<tr>";
		tmp += "<th>" + title + "<\/th>";
		tmp += "<td align=center class=" + get_ratingrank(value) + ">" + value + "<\/td>"
		tmp += "<td>" + explain + "<\/td>";
		tmp += "<\/tr>";

		return tmp;
	}
	function print_result(golliramode, homeaddr)
	{
		var result_str="";

		result_str += "<html>";
		result_str += "<head>";
		result_str += "<title>" + your_id + "の舞レート解析結果 | CYCLES FUNの寝言<\/title>";
		result_str += "<style type='text/css'>";
		result_str += "\ttable { border-collapse: collapse; font-size:0.75em; }";
		result_str += "<\/style>";
		result_str += "<link rel='stylesheet' media='all' type='text/css' href='https://sgimera.github.io/mai_RatingAnalyzer/css/mai_rating.css?'+Date.now() \/>";
		result_str += "<\/head>";

		result_str += "<body>";

		result_str += "<p align=right><a href=\"" + homeaddr + "\">maimai.net HOMEに戻る<\/a><\/p>";

		result_str += "<h3>" + your_id + "のRating情報(History473 ver.)<\/h3>";

		result_str += "<table border=1 align=\"center\">";

		result_str += "<tr>";
		result_str += "<th colspan=3 bgcolor=\"\#000000\"><font color=\"\#ffffff\">基本データ<\/font><\/th>";
		result_str += "<\/tr>";

		result_str += "<tr>";
		result_str += "<th>現在のRating<\/th>";
		result_str += "<td align=center class=";
		result_str += get_ratingrank(Number(your_rating.slice(0, 5)));
		result_str += ">" + your_rating + "<\/td>"
		result_str += "<td>maimai.netで確認できるRating<\/td>";
		result_str += "<\/tr>";

		result_str += print_result_rating("BEST平均", best_ave, "上位30曲の平均レート値");
		result_str += print_result_rating("BEST下限", best_limit, "30位のレート値");
		result_str += print_result_sub("HIST下限", hist_limit, "473位のレート値");

		result_str += "<tr>";
		result_str += "<th colspan=3 bgcolor=\"\#000000\"><font color=\"\#ffffff\">予想到達可能Rating<\/font><\/th>";
		result_str += "<\/tr>";

		result_str += print_result_rating("予想値", expect_max, "BEST枠、RECENT枠、HISTORY枠の合計");
		result_str +=
		print_result_sub("BEST枠", best_rating + "<br>(" + best_left + ")", "(上位30曲の合計)/44<br>()は+0.01する為の必要レート");
		result_str += print_result_sub("RECENT枠", recent_rating, "レート値1位を10回達成");
		result_str +=
		print_result_sub("HISTORY枠", hist_rating + "<br>(" + hist_left + ")", "(上位473曲の合計)/(473*44/4)<br>()は+0.01する為の必要レート");

		result_str += "<\/table>";


		result_str += "<br clear=\"all\">";
		result_str += "<table border=\"1\" align=\"center\">";

		for(var i=0; i<datalist.length; i++)
		{
			var rowspan_num = 3-golliramode - ((datalist[i].lv[2] != "")?0:1);
			var tmp_rate=0;

						if (i == 30) {
							result_str += "<tr>";
							result_str += "<th colspan=5>" + "-----ここまでベスト枠-----"+ "<\/th>"
							result_str += "<\/tr>"
						}

			result_str += "<tr>";
			result_str += "<th colspan=5>" + datalist[i].name + "<\/th>"
			result_str += "<\/tr>"

			result_str += "<tr>";
			result_str += "<td align=\"center\" rowspan=" + rowspan_num + ">" + (i+1) + "<\/td>";
			result_str += "<th rowspan=" + rowspan_num + " ";
			tmp_rate = Math.floor(datalist[i].music_rate/100)/100;
			result_str += "class=" + get_ratingrank(tmp_rate) + ">"
			result_str +=  (tmp_rate.toFixed(2)) + "<\/th>"

			if(datalist[i].lv[2] != "")
			{
				result_str += "<th class=mai_remaster>";
				result_str += (Math.floor(datalist[i].rate_values[2]/100)/100).toFixed(2);
				result_str += "<\/th>";

				result_str += "<th class=mai_remaster>" + datalist[i].lv[2] + "<\/th>";
				result_str += "<th class=mai_remaster>" + datalist[i].achive[2] + "%<\/th>";
				result_str += "<\/tr>";

				result_str += "<tr>";
			}

			result_str += "<th class=mai_master>";
			result_str += (Math.floor(datalist[i].rate_values[1]/100)/100).toFixed(2);
			result_str += "<\/th>";

			result_str += "<th class=mai_master>" + datalist[i].lv[1] + "<\/th>";
			result_str += "<th class=mai_master>" + datalist[i].achive[1] + "%<\/th>";
			result_str += "<\/tr>";

			if(golliramode == 0)
			{
				result_str += "<tr>";
				result_str += "<th class=mai_expert>";
				result_str += (Math.floor(datalist[i].rate_values[0]/100)/100).toFixed(2);
				result_str += "<\/th>";

				result_str += "<th class=mai_expert>" + datalist[i].lv[0] + "<\/th>";
				result_str += "<th class=mai_expert>" + datalist[i].achive[0] + "%<\/th>";
				result_str += "<\/tr>";
			}

		}

		result_str += "<\/table>";
		result_str += "<\/body>";
		result_str += "<\/html>";

		document.open();
		document.write(result_str);
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
		tweet_best_str = your_id + "%20:" + your_rating + "%0D%0A";
		tweet_best_str += "B%3a" + best_rating + "%20%2B%20R%3a";
		tweet_best_str += recent_rating + " %2B%20H%3a"
		tweet_best_str += hist_rating + "%20%3d%20" + expect_max + "%0D%0A%0D%0A";

		for(var i=0; i<10; i++)
		{
			tmp_rate = datalist[i].music_rate;
			tweet_best_str += (Math.floor(tmp_rate/100)/100).toFixed(2) + ": "
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
			(datalist[i].rate_values[0] == tmp_rate)?(tweet_best_str+=" 赤"):
			(datalist[i].rate_values[2] == tmp_rate)?(tweet_best_str+=" 白"):(tweet_best_str+= "");
			tweet_best_str +="%0D%0A";
		}

	}

	function datalist_recalc()
	{
		var listlength=datalist.length, tmplv="", count=0;
		console.log(listlength);

		for(var i=0; i<listlength; i++)
		{
			tmplv=datalist[i].lv[2];
			if( (tmplv != "") && isNaN(tmplv) )
			{
				// re:masterあり
				datalist[i].lv[2]= String(Number(tmplv.slice(0,2)))
				+((((mra_diff2tmp(tmplv)-Number(tmplv.slice(0,2))).toFixed(1))<0.7)?"-":"+");
				datalist[i].rate_values[2] = mra_arch2rate_10000(datalist[i].achive[2], datalist[i].lv[2]);
				count++;
			}

			tmplv=datalist[i].lv[1];
			if( isNaN(tmplv) )
			{
				if(tmplv.slice(0,1) == "1")
				{
					datalist[i].lv[1]= String(Number(tmplv.slice(0,2)))
					+((((mra_diff2tmp(tmplv)-Number(tmplv.slice(0,2))).toFixed(1))<0.7)?"-":"+");
				}
				datalist[i].rate_values[1] = mra_arch2rate_10000(datalist[i].achive[1], datalist[i].lv[1]);
				count++;
			}

			// 曲別レート値の最大が変化するので再計算。
			datalist[i].music_rate = Math.max.apply(null, datalist[i].rate_values);
		}

		datalist.sort(function(a,b){return b.music_rate-a.music_rate});
		return count;

	}

	function analyzing_rating()
	{
		var tmp=0, str="", best30=0, history473=0;
		for(var i=0; i<30; i++)
		{
			tmp = Math.floor(datalist[i].music_rate/100);
			best30+=tmp;
		}

		history473=best30;
		for(var i=30 ;i<473;i++)
		{
			tmp = Math.floor(datalist[i].music_rate/100);
			history473+=tmp;
		}

		best_ave = Math.floor(best30/30)/100;
		top_rate = Math.floor(datalist[0].music_rate/100)/100;
		best_limit = Math.floor(datalist[29].music_rate/100)/100;
		hist_limit = (Math.floor(datalist[472].music_rate/100)/100).toFixed(2);
		if(hist_limit<=0)
		{
			var count=0;
			for(count=0; datalist[count].music_rate > 0; count++);
			hist_limit= (473-count) + "曲不足";
		}

		best_rating = Math.floor(best30/44)/100;	//best30はすでにRating*100
		recent_rating = Math.floor(Math.floor(datalist[0].music_rate/100)*10/44)/100;
		hist_rating = Math.floor(history473/(473*11))/100;	// multiply 4/(473*44)
		//hist_rating = Math.floor(history473/(434*11))/100;	// multiply 4/(473*44)

		best_left = (44 - Math.ceil(best30%44))/100;
		hist_left = (473*11 - Math.ceil(history473%(473*11)))/100;

		expect_max = Math.round((best_rating + recent_rating + hist_rating)*100)/100;

		// tweet用文字列
		tweet_rate_str = your_id + "%20:" + your_rating + "%0D%0A";
		tweet_rate_str += "BEST%2f平均%3a" + (best_ave.toFixed(2)) + "%20下限:" + (best_limit.toFixed(2)) + "%0D%0A";
		tweet_rate_str += "HIST下限%3a" + hist_limit + "%0D%0A";
		tweet_rate_str += "予想到達Rating%3a" + (expect_max.toFixed(2)) + "%0D%0A";
		tweet_rate_str += "B%3a" + (best_rating.toFixed(2));
		tweet_rate_str += "%20%2B%20R%3a" + (recent_rating.toFixed(2));
		tweet_rate_str += "%20%2B%20H%3a" + (hist_rating.toFixed(2)) + "%0D%0A";
	}

	var tmpstr = "--舞レート解析 (trial)--\n\n";
	tmpstr += maimai_inner_lv.length + "songs(" + mra_update_mlist + ") version\n";
	tmpstr += "Last Update : ";
	tmpstr += (mra_update_algorithm >= mra_update_llist)?mra_update_algorithm:mra_update_llist;
	tmpstr += "\n\n";
	tmpstr += "Programmed by @sgimera";
	if(!confirm(tmpstr))
	return;

	var gollira = 0;

	//if(confirm('EXPERTのデータを取得しますか？'))
	if(true)
	{
		addr=get_nextpage_address($(document), "music.html", 4);	// EXPERTリストのアドレス取得
		addr=get_music_mdata2(ex_list, addr, 4);	// EXPERTデータ取得&MASTERリストのアドレス取得
	}
	else
	{
		gollira = 1;
		addr=get_nextpage_address($(document), "music.html", 5);	// EXPERTリストのアドレス取得
	}
	addr=get_music_mdata2(ma_list, addr, 5);	// MASTERのデータ取得&Re:MASTERリストのアドレス取得
	addr=get_music_mdata2(re_list, addr, 6);	// Re:MASTERのデータ取得&HOMEのアドレス取得
	tmpstr = get_your_id(addr);

	data2rating(gollira);	// データ集計
	analyzing_rating();	// 全体データ算出

	// 再計算。未検証扱いの譜面は最低値になる。全譜面データ表示用で、到達Ratingの計算への影響はない。
	var alertstr="";
	alertstr = "未確定譜面数 : " + datalist_recalc() + "\n\n";
	alertstr += "12+とか13-となっているものは内部Lv.未確定です。\n例えば、12+なら12.7、13-なら13.0で計算してます。";

	var alertstr2 = "全譜面データの公開をやめました。\n\n";
	alertstr2 += "内部Lvに興味のある方は、\n私のtwitterの固定ページにある\n新サイトでも眺めてください。\n\n";
	alertstr2 += "到達Rating自体は内部Lv.に従って計算してます。"
	alert(alertstr2);

	//	tweet_best();	//tweet用文言生成
	print_result(gollira, addr);	//全譜面リスト表示

})(); void(0);
