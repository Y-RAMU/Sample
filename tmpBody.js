javascript:
(function()
{

var ex_list=[], ma_list=[], re_list=[], datalist=[], clist=[], ranklist=[], complist=[], addr="", your_id="", your_rating="";
var hashtag = "%e8%88%9e%e3%83%ac%e3%83%bc%e3%83%88%e8%a7%a3%e6%9e%90";	// 舞レート解析
var mainet_dom = 'https://maimai-net.com/maimai-mobile/';
var mra_update_algorithm = "2018.03.28";

var best_ave=0, best_limit=0, hist_limit=0;
var expect_max=0, best_rating=0, top_rate=0, recent_rating=0, hist_rating=0, best_left=0, hist_left=0;
var tweet_rate_str="", 	tweet_best_str="";

/* data.htmlを使う前提 */
function get_your_id(addr)
{
	$.ajax({type:'GET', url:addr, async: false})
		.done(function(data)
		{
			if($(data).find('.underline').length == 0)
			{
				alert('maimai.netの利用権がない模様。\n1クレ以上プレーしてから再トライしてください。');
				window.location.href=mainet_dom + "home";
			}
			your_id = $(data).find('.underline')[0].innerText.trim();
			your_rating = $.find('.blue')[1].innerText.trim()
				.replace(/（/g, "(").replace(/）/g, ")").replace(/MAX /g, "");
		}
	);
	return;
}

function get_music_mdata_name(md)
{
	var tmp =$(md).find('div');
	if(tmp.length==0)
		return md.innerText.trim();
	else
		return tmp[0].innerText.trim();
}

function get_music_mdata(achive_list, addr)
{
	$.ajax({type:'GET', url:addr, async: false})
		.done(function(data)
		{
			//成功時の処理本体
			var m=$(data).find("#accordion");
			var mlist=Array.prototype.slice.call($(m).find('h3'))
				.map(get_music_mdata_name)
			var slist=Array.prototype.slice.call($(m).find('.list'))
				.map(function(x){return $(x).find('td')[3].innerText.replace(/,/g, '');});
			var m_length=mlist.length;
			for(var i=0; i<m_length; i++)
				achive_list.push([mlist[i], slist[i]]);
		}
	);
	return;
}
	
function get_collection_data(collection_list, addr)	//データ取得と次のアドレス
{
	$.ajax({type:'GET', url:addr, async: false})
		.done(function(data)
		{
			//成功時の処理本体
			var m=Array.prototype.slice.call($(data).find('.on')).map(function(x){ return x.innerText.trim()});
			collection_list = Array.prototype.push.apply(collection_list, m);
		}
	);
	return;
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
				shortage:["", "", ""],
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
				shortage:["", "", ""],
				music_rate : 0
			});
		}
	}
	datalist.sort(sort_condition);

	if(hashtag.slice(-4)=="test")
	{
		best_limit = datalist[29].music_rate;
		for(var i=30; i<mlist_length; i++)
		{
			for(var x=0; x<3; x++)
			{
				datalist[i].shortage[x] =
					mra_shortage_achive(best_limit, datalist[i].lv[x], datalist[i].achive[x])
			}
		}
	}
	
	maimai_inner_lv=[];	//データ消去
	return datalist[0].music_rate;
}
	
function collection_filter(collection_list)
{
	var new_clist=[];
	var c_rank_list =[
		["青皆伝", "青十段", "青九段", "青八段"], ["緑皆伝", "緑十段", "緑九段", "緑八段"],
		["橙皆伝", "橙十段", "橙九段", "橙八段"], ["桃皆伝", "桃十段", "桃九段", "桃八段"],
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
				{ ranklist.push(c_rank_list[j][k]); break; }
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
	return (rating>=15)?("mai_rainbow"):(rating>=14.5)?("mai_gold"):(rating>=14)?("mai_silver"):(rating>=13)?("mai_copper"):
	(rating>=12)?("mai_violet"):(rating>=10)?("mai_red"):(rating>=7)?("mai_yellow"):(rating>=4)?("mai_green"):
	(rating>=1)?("mai_blue"):("mai_white");
}
	
function print_result_sub(title, value, explain)
{
	var tmp = "";
	tmp += "<tr>";
	tmp += "<th>" + title + "<\/th>";
	tmp += "<th align=center class=tweet_info>" + value + "<\/th>"
	tmp += "<td>" + explain + "<\/td>";
	tmp += "<\/tr>";
	
	return tmp;
}

function print_result_rating(title, value, explain, dispbasevalue)
{
	var tmp = "";
	tmp += "<tr>";
	tmp += "<th>" + title + "<\/th>";
	tmp += "<th align=center class='tweet_info " + get_ratingrank(dispbasevalue) + "'>" + value + "<\/hd>"
	tmp += "<td>" + explain + "<\/td>";
	tmp += "<\/tr>";
	
	return tmp;
}
function print_result(golliramode, alldata, homeaddr, trv)
{
	var rslt_str="";
	var rank=ranklist.slice(-1)[0].slice(1,3);

	rslt_str += "<html>";
	rslt_str += "<head>";
	rslt_str += "<title>" + your_id + rank +"の舞レート解析結果 | 新・CYCLES FUNの寝言<\/title>";
	rslt_str += "<style type='text/css'>";
	rslt_str += ".datatable { border-collapse: collapse; font-size:0.90em; }\n";
	rslt_str += ".alltable { border-collapse: collapse; font-size:0.75em; }";
	rslt_str += "<\/style>";
    	rslt_str += "<link rel='stylesheet' media='all' type='text/css' href='https://sgimera.github.io/mai_RatingAnalyzer/css/mai_rating.css?'\/>";
	rslt_str += "<\/head>";
	
	rslt_str += "<body>";
	rslt_str += "<p align=right><a href='" + mainet_dom + "home'>maimai.net HOMEに戻る<\/a><\/p>";
	rslt_str += "<h2>" + your_id + rank +"のRating情報<\/h2>";
	
	var today = new Date();
	var data_str = today.getFullYear() + "\/" + (today.getMonth()+1) + "\/" + today.getDate() + " ";
	data_str += (("0"+today.getHours()).slice(-2)) + ":" + (("0"+today.getMinutes()).slice(-2)) + ":" + (("0"+today.getSeconds()).slice(-2));
	
	rslt_str += "<div id=player_rating_info>";
	rslt_str += "<table class=datatable border=1 align=\"center\">";
	rslt_str += "<tr>";
	rslt_str += "<th colspan=3 bgcolor=\#000000><font color=\#ffffff class=tweet_info>" + your_id + rank + "<\/th>";
	rslt_str += "<\/tr>";
	
	rslt_str += "<tr>";
	rslt_str += "<th colspan=3 bgcolor=\#000000><font color=\#ffffff>" + data_str + "現在<\/font><\/th>";
	rslt_str += "<\/tr>";
	
	rslt_str += print_result_rating("現在のRating", your_rating.replace(/\(/g, '<br>('), "maimai.netで確認できるRating", 
					Number(your_rating.slice(0, 5)));
	rslt_str += print_result_rating("BEST平均", best_ave, "上位30曲の平均レート値", best_ave);
	rslt_str += print_result_rating("BEST下限", best_limit, "30位のレート値", best_limit);
	rslt_str += print_result_sub("HIST下限", hist_limit, mra_history + "位のレート値");

	rslt_str += "<tr>";
	rslt_str += "<th colspan=3 bgcolor=\"\#000000\"><font color=\"\#ffffff\">予想到達可能Rating<\/font><\/th>";
	rslt_str += "<\/tr>";

	rslt_str += print_result_rating("予想値", expect_max, "下の3つの値の合計", expect_max);
	rslt_str +=
		print_result_rating("BEST枠", best_rating + "<br>(" + best_left + ")",
				    "(上位30曲の合計)/44<br>()は+0.01する為の必要レート", best_ave);
	rslt_str +=
		print_result_rating("RECENT枠", recent_rating + "<br>(" + ((trv/100).toFixed(2)) + ")",
				    "レート値1位を10回達成<br>()は1位の単曲レート値", trv/100);
	rslt_str +=
		print_result_sub("HISTORY枠", hist_rating + "<br>(" + hist_left + ")",
				 "(上位" + mra_history +"曲の合計)*(4/" + mra_history + ")/44<br>()は+0.01する為の必要レート");
	rslt_str += "<\/table>";

	rslt_str += "<table class=alltable border=1 align=center>";

	var allspan=(hashtag.slice(-4)=="test")?6:5;

	rslt_str += "<tr>";
	rslt_str += "<th colspan=" + allspan + " bgcolor=\#000000><font color=\#ffffff>" + your_id + rank + "　全譜面データ<br>";
	rslt_str += data_str + "現在<\/font><\/th>";
	rslt_str += "<\/tr>";

	for(var i=0; i<datalist.length; i++)
	{
		var rowspan_num = 3-golliramode - ((datalist[i].lv[2] != "")?0:1);
		var tmp_rate=0;
		var tmplv;
		
		rslt_str += "<tr>";
		rslt_str += "<th colspan=" + allspan + ">" + datalist[i].name + "<\/th>"
		rslt_str += "<\/tr>"
	
		rslt_str += "<tr>";
		rslt_str += "<td align=\"center\" rowspan=" + rowspan_num + ">" + (i+1) + "<\/td>";
		rslt_str += "<th rowspan=" + rowspan_num + " ";
		rslt_str += "class=" + get_ratingrank(datalist[i].music_rate/100) + ">"
		rslt_str += (datalist[i].music_rate/100).toFixed(2)  + "<\/th>"
		
		if(datalist[i].lv[2] != "")
		{
			rslt_str += "<th class=mai_remaster>";
			rslt_str += (datalist[i].rate_values[2]/100).toFixed(2);
			rslt_str += "<\/th>";
	
			tmplv=(datalist[i].lv[2].slice(-1)=='-')?(datalist[i].lv[2].slice(0, -1)):
				(datalist[i].lv[2].slice(-1)=='=')?(datalist[i].lv[2].slice(0, -1)):datalist[i].lv[2];
			rslt_str += "<th class=mai_remaster>" + tmplv + "<\/th>";
			rslt_str += "<th class=mai_remaster>" + (100*datalist[i].achive[2]).toFixed(4) + "%<\/th>";
			if(hashtag.slice(-4)=="test")
				rslt_str += "<td class=mai_remaster>" + (datalist[i].shortage[2]) + "<\/td>";
			rslt_str += "<\/tr>";
			
			rslt_str += "<tr>";
		}
		
		rslt_str += "<th class=mai_master>";
		rslt_str += (datalist[i].rate_values[1]/100).toFixed(2);
		rslt_str += "<\/th>";

		tmplv=(datalist[i].lv[1].slice(-1)=='-')?(datalist[i].lv[1].slice(0, -1)):
			(datalist[i].lv[1].slice(-1)=='=')?(datalist[i].lv[1].slice(0, -1)):datalist[i].lv[1];
		
		rslt_str += "<th class=mai_master>" + tmplv + "<\/th>";
		rslt_str += "<th class=mai_master>" + (100*datalist[i].achive[1]).toFixed(4) + "%<\/th>";
		if(hashtag.slice(-4)=="test")
			rslt_str += "<td class=mai_master>" + (datalist[i].shortage[1]) + "<\/td>";
		rslt_str += "<\/tr>";

		if(golliramode == 0)
		{
			rslt_str += "<tr>";
			rslt_str += "<th class=mai_expert>";
			rslt_str += (datalist[i].rate_values[0]/100).toFixed(2);
			rslt_str += "<\/th>";

			tmplv=(datalist[i].lv[0].slice(-1)=='-')?(datalist[i].lv[0].slice(0, -1)):datalist[i].lv[0];
			rslt_str += "<th class=mai_expert>" + tmplv + "<\/th>";
			rslt_str += "<th class=mai_expert>" + (100*datalist[i].achive[0]).toFixed(4) + "%<\/th>";
			if(hashtag.slice(-4)=="test")
				rslt_str += "<td class=mai_expert>" + (datalist[i].shortage[0]) + "<\/td>";
			rslt_str += "<\/tr>";
		}
	}
	
	rslt_str += "<\/table>";
	}
	rslt_str += "<\/body>";
	rslt_str += "<\/html>";
	
	document.open();
	document.write(rslt_str);
	document.close();
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
	return (tmplv>=13)?"13-":(tmplv>=12.7)?"12+":(tmplv>=12.3)?"12=":(tmplv>=12)?"12-":lv;
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

var tmpstr = "--舞レート解析・あならいざもどき--\n(trial)\n\n";
tmpstr += maimai_inner_lv.length + "songs(" + mra_update_mlist + ") version\n";
tmpstr += "Last Update : ";
tmpstr += (mra_update_algorithm >= mra_update_llist)?mra_update_algorithm:mra_update_llist;
tmpstr += "\n\n";
tmpstr += "Programmed by @sgimera";
	
var gollira = 0;
var disp_all = true;

get_your_id(mainet_dom + 'playerData/');	// プレイヤーデータの取得
get_music_mdata(ex_list, mainet_dom + 'music/expertGenre');	// EXPERTデータ取得
get_music_mdata(ma_list, mainet_dom + 'music/masterGenre');	// MASTERのデータ取得
get_music_mdata(re_list, mainet_dom + 'music/remasterGenre');	// Re:MASTERのデータ取得
get_collection_data(clist, mainet_dom + 'collection/trophy');	// 称号データ取得
get_collection_data(clist, mainet_dom + 'collection/namePlate');	// ネームプレートデータ取得

collection_filter(clist);
	
var top_rate_value = data2rating(gollira);	// データ集計
	
analyzing_rating();	// 全体データ算出
	
{
// 再計算。未検証扱いの譜面は最低値になる。全譜面データ表示用で、到達Ratingの計算への影響はない。
if(hashtag.slice(-4)!="test")
	datalist_recalc();
else
	tweet_best();	//tweet用文言生成
}
print_result(gollira, disp_all, addr, top_rate_value);	//全譜面リスト表示

})(); void(0);
