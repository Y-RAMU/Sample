let maimai_url = "https://maimai-net.com/maimai-mobile/";
let user_url = "playerData/";
let master_url = "music/masterGenre/";
let remaster_url = "music/remasterGenre/";

let userData = {
    "name": "",
    "rating": "",
    "title": "",
    "best": ""
}

let musicData = {
    "title": "",
    "diff": "",
    "level": "",
    "score": "",
    "achievement": "",
    "rate": ""
}

let musicList = []

let mergeList = []

let sortedList = []

let mas12p = [
    {
        "title": "ギリギリ最強あいまいみー！",
        "diff": "Master",
        "level": "12.7",
        "score": "",
        "achievement": "",
        "rate": ""
    },
    {
        "title": "拝啓ドッペルゲンガー",
        "diff": "Master",
        "level": "12.7",
        "score": "",
        "achievement": "",
        "rate": ""
    },
    {
        "title": "人生リセットボタン",
        "diff": "Master",
        "level": "12.7",
        "score": "",
        "achievement": "",
        "rate": ""
    },
    {
        "title": "幸せになれる隠しコマンドがあるらしい",
        "diff": "Master",
        "level": "12.9",
        "score": "",
        "achievement": "",
        "rate": ""
    },
    {
        "title": "初音ミクの消失",
        "diff": "Master",
        "level": "12.8",
        "score": "",
        "achievement": "",
        "rate": ""
    },
    {
        "title": "脳漿炸裂ガール",
        "diff": "Master",
        "level": "12.7",
        "score": "",
        "achievement": "",
        "rate": ""
    },
    {
        "title": "頓珍漢の宴",
        "diff": "Master",
        "level": "12.7",
        "score": "",
        "achievement": "",
        "rate": ""
    },
    {
        "title": "ドーナツホール",
        "diff": "Master",
        "level": "12.7",
        "score": "",
        "achievement": "",
        "rate": ""
    },
    {
        "title": "もうみんなしねばいいのに",
        "diff": "Master",
        "level": "12.8",
        "score": "",
        "achievement": "",
        "rate": ""
    },
    {
        "title": "Scream out! -maimai SONIC WASHER Edit-",
        "diff": "Master",
        "level": "12.7",
        "score": "",
        "achievement": "",
        "rate": ""
    },
    {
        "title": "幻想のサテライト",
        "diff": "Master",
        "level": "12.9",
        "score": "",
        "achievement": "",
        "rate": ""
    },
    {
        "title": "儚きもの人間",
        "diff": "Master",
        "level": "12.7",
        "score": "",
        "achievement": "",
        "rate": ""
    },
    {
        "title": "最終鬼畜妹・一部声",
        "diff": "Master",
        "level": "12.7",
        "score": "",
        "achievement": "",
        "rate": ""
    },
    {
        "title": "ウサテイ",
        "diff": "Master",
        "level": "12.7",
        "score": "",
        "achievement": "",
        "rate": ""
    },
    {
        "title": "Reach For The Stars",
        "diff": "Master",
        "level": "12.7",
        "score": "",
        "achievement": "",
        "rate": ""
    },
    {
        "title": "Like the Wind [Reborn]",
        "diff": "Master",
        "level": "12.7",
        "score": "",
        "achievement": "",
        "rate": ""
    },
    {
        "title": "Outlaw's 12.9ullaby",
        "diff": "Master",
        "level": "12.9",
        "score": "",
        "achievement": "",
        "rate": ""
    },
    {
        "title": "ENERGY SYNERGY MATRIX",
        "diff": "Master",
        "level": "12.7",
        "score": "",
        "achievement": "",
        "rate": ""
    },
    {
        "title": "U12.7TRA B+K",
        "diff": "Master",
        "level": "12.7",
        "score": "",
        "achievement": "",
        "rate": ""
    },
    {
        "title": "Brain Power",
        "diff": "Master",
        "level": "12.7",
        "score": "",
        "achievement": "",
        "rate": ""
    },
    {
        "title": "MilK",
        "diff": "Master",
        "level": "12.8",
        "score": "",
        "achievement": "",
        "rate": ""
    },
    {
        "title": "GO BACK 2 YOUR RAVE",
        "diff": "Master",
        "level": "12.8",
        "score": "",
        "achievement": "",
        "rate": ""
    },
    {
        "title": "B.B.K.K.B.K.K.",
        "diff": "Master",
        "level": "12.9",
        "score": "",
        "achievement": "",
        "rate": ""
    },
    {
        "title": "人里に下ったアタイがいつの間にか社畜になっていた件",
        "diff": "Master",
        "level": "12.8",
        "score": "",
        "achievement": "",
        "rate": ""
    },
    {
        "title": "Maxi",
        "diff": "Master",
        "level": "12.8",
        "score": "",
        "achievement": "",
        "rate": ""
    },
    {
        "title": "Sakura Fubuki",
        "diff": "Master",
        "level": "12.7",
        "score": "",
        "achievement": "",
        "rate": ""
    },
    {
        "title": "METATRON",
        "diff": "Master",
        "level": "12.8",
        "score": "",
        "achievement": "",
        "rate": ""
    },
    {
        "title": "麒麟",
        "diff": "Master",
        "level": "12.9",
        "score": "",
        "achievement": "",
        "rate": ""
    },
    {
        "title": "Jack-the-Ripper◆",
        "diff": "Master",
        "level": "12.9",
        "score": "",
        "achievement": "",
        "rate": ""
    },
    {
        "title": "DRAGON12.8ADY",
        "diff": "Master",
        "level": "12.8",
        "score": "",
        "achievement": "",
        "rate": ""
    },
    {
        "title": "電車で電車でOPA!OPA!OPA! -GMT mashup-",
        "diff": "Master",
        "level": "12.7",
        "score": "",
        "achievement": "",
        "rate": ""
    },
    {
        "title": "Got more raves？",
        "diff": "Master",
        "level": "12.7",
        "score": "",
        "achievement": "",
        "rate": ""
    },
    {
        "title": "夜明けまであと３秒",
        "diff": "Master",
        "level": "12.9",
        "score": "",
        "achievement": "",
        "rate": ""
    },
    {
        "title": "きたさいたま2000",
        "diff": "Master",
        "level": "12.8",
        "score": "",
        "achievement": "",
        "rate": ""
    },
    {
        "title": "Scars of FAUNA",
        "diff": "Master",
        "level": "12.7",
        "score": "",
        "achievement": "",
        "rate": ""
    },
    {
        "title": "F12.7OWER",
        "diff": "Master",
        "level": "12.7",
        "score": "",
        "achievement": "",
        "rate": ""
    },
    {
        "title": "keep hopping",
        "diff": "Master",
        "level": "12.9",
        "score": "",
        "achievement": "",
        "rate": ""
    },
    {
        "title": "Mare Maris",
        "diff": "Master",
        "level": "12.9",
        "score": "",
        "achievement": "",
        "rate": ""
    },
    {
        "title": "デスパレイト",
        "diff": "Master",
        "level": "12.8",
        "score": "",
        "achievement": "",
        "rate": ""
    },
    {
        "title": "Ultranova",
        "diff": "Master",
        "level": "12.9",
        "score": "",
        "achievement": "",
        "rate": ""
    },
    {
        "title": "夢花火",
        "diff": "Master",
        "level": "12.7",
        "score": "",
        "achievement": "",
        "rate": ""
    },
    {
        "title": "四月の雨",
        "diff": "Master",
        "level": "12.9",
        "score": "",
        "achievement": "",
        "rate": ""
    },
    {
        "title": "HERA",
        "diff": "Master",
        "level": "12.9",
        "score": "",
        "achievement": "",
        "rate": ""
    },
    {
        "title": "Hyper Active",
        "diff": "Master",
        "level": "12.8",
        "score": "",
        "achievement": "",
        "rate": ""
    },
    {
        "title": "Jumble Rumble",
        "diff": "Master",
        "level": "12.8",
        "score": "",
        "achievement": "",
        "rate": ""
    },
    {
        "title": "Nitrous Fury",
        "diff": "Master",
        "level": "12.9",
        "score": "",
        "achievement": "",
        "rate": ""
    },
    {
        "title": "GEMINI -M-",
        "diff": "Master",
        "level": "12.7",
        "score": "",
        "achievement": "",
        "rate": ""
    },
    {
        "title": "天火明命",
        "diff": "Master",
        "level": "12.9",
        "score": "",
        "achievement": "",
        "rate": ""
    },
    {
        "title": "7thSense",
        "diff": "Master",
        "level": "12.8",
        "score": "",
        "achievement": "",
        "rate": ""
    },
    {
        "title": "12.9ividi",
        "diff": "Master",
        "level": "12.9",
        "score": "",
        "achievement": "",
        "rate": ""
    },
    {
        "title": "閃鋼のブリューナク",
        "diff": "Master",
        "level": "12.7",
        "score": "",
        "achievement": "",
        "rate": ""
    },
    {
        "title": "MYTHOS",
        "diff": "Master",
        "level": "12.8",
        "score": "",
        "achievement": "",
        "rate": ""
    },
    {
        "title": "Aiolos",
        "diff": "Master",
        "level": "12.9",
        "score": "",
        "achievement": "",
        "rate": ""
    },
    {
        "title": "DON’T STOP ROCKIN’",
        "diff": "Master",
        "level": "12.7",
        "score": "",
        "achievement": "",
        "rate": ""
    },
    {
        "title": "KING is BACK!!",
        "diff": "Master",
        "level": "12.8",
        "score": "",
        "achievement": "",
        "rate": ""
    },
    {
        "title": "Nerverakes",
        "diff": "Master",
        "level": "12.8",
        "score": "",
        "achievement": "",
        "rate": ""
    },
    {
        "title": "火炎地獄",
        "diff": "Master",
        "level": "12.7",
        "score": "",
        "achievement": "",
        "rate": ""
    },
    {
        "title": "The wheel to the right",
        "diff": "Master",
        "level": "12.9",
        "score": "",
        "achievement": "",
        "rate": ""
    },
    {
        "title": "分からない",
        "diff": "Master",
        "level": "12.8",
        "score": "",
        "achievement": "",
        "rate": ""
    },
]

let mas13 = [
    {
        "title": "初音ミクの激唱",
        "diff": "Master",
        "level": "13.3",
        "score": "",
        "achievement": "",
        "rate": ""
    },
    {
        "title": "Calamity Fortune",
        "diff": "Master",
        "level": "13.2",
        "score": "",
        "achievement": "",
        "rate": ""
    },
    {
        "title": "Credits",
        "diff": "Master",
        "level": "13.3",
        "score": "",
        "achievement": "",
        "rate": ""
    },
    {
        "title": "conflict",
        "diff": "Master",
        "level": "13.0",
        "score": "",
        "achievement": "",
        "rate": ""
    },
    {
        "title": "FUJIN Rumble",
        "diff": "Master",
        "level": "13.2",
        "score": "",
        "achievement": "",
        "rate": ""
    },
    {
        "title": "Ignis Danse",
        "diff": "Master",
        "level": "13.0",
        "score": "",
        "achievement": "",
        "rate": ""
    },
    {
        "title": "Ragnarok",
        "diff": "Master",
        "level": "13.0",
        "score": "",
        "achievement": "",
        "rate": ""
    },
    {
        "title": "larva",
        "diff": "Master",
        "level": "13.4",
        "score": "",
        "achievement": "",
        "rate": ""
    },
    {
        "title": "Excalibur ～Revived resolution～",
        "diff": "Master",
        "level": "13.5",
        "score": "",
        "achievement": "",
        "rate": ""
    },
    {
        "title": "Caliburne ～Story of the Legendary sword～",
        "diff": "Master",
        "level": "13.0",
        "score": "",
        "achievement": "",
        "rate": ""
    },
    {
        "title": "Justified",
        "diff": "Master",
        "level": "13.0",
        "score": "",
        "achievement": "",
        "rate": ""
    },
    {
        "title": "Moon of Noon",
        "diff": "Master",
        "level": "13.3",
        "score": "",
        "achievement": "",
        "rate": ""
    },
    {
        "title": "Panopticon",
        "diff": "Master",
        "level": "13.2",
        "score": "",
        "achievement": "",
        "rate": ""
    },
    {
        "title": "ねぇ、壊れタ人形ハ何処へ棄テらレるノ？",
        "diff": "Master",
        "level": "13.1",
        "score": "",
        "achievement": "",
        "rate": ""
    },
    {
        "title": "AMAZING MIGHTYYYY!!!!",
        "diff": "Master",
        "level": "13.3",
        "score": "",
        "achievement": "",
        "rate": ""
    },
    {
        "title": "CITRUS MONSTER",
        "diff": "Master",
        "level": "13.2",
        "score": "",
        "achievement": "",
        "rate": ""
    },
    {
        "title": "Axeria",
        "diff": "Master",
        "level": "13.3",
        "score": "",
        "achievement": "",
        "rate": ""
    },
    {
        "title": "ガラテアの螺旋",
        "diff": "Master",
        "level": "13.3",
        "score": "",
        "achievement": "",
        "rate": ""
    },
    {
        "title": "Our Wrenally",
        "diff": "Master",
        "level": "13.4",
        "score": "",
        "achievement": "",
        "rate": ""
    },
    {
        "title": "Contrapasso -paradiso-",
        "diff": "Master",
        "level": "13.2",
        "score": "",
        "achievement": "",
        "rate": ""
    },
    {
        "title": "Oshama Scramble!",
        "diff": "Master",
        "level": "13.0",
        "score": "",
        "achievement": "",
        "rate": ""
    },
    {
        "title": "Garakuta Doll Play",
        "diff": "Master",
        "level": "13.0",
        "score": "",
        "achievement": "",
        "rate": ""
    },
    {
        "title": "Glorious Crown",
        "diff": "Master",
        "level": "13.1",
        "score": "",
        "achievement": "",
        "rate": ""
    },
    {
        "title": "Fragrance",
        "diff": "Master",
        "level": "13.1",
        "score": "",
        "achievement": "",
        "rate": ""
    },
    {
        "title": "Prophesy One",
        "diff": "Master",
        "level": "13.3",
        "score": "",
        "achievement": "",
        "rate": ""
    },
    {
        "title": "System “Z”",
        "diff": "Master",
        "level": "13.0",
        "score": "",
        "achievement": "",
        "rate": ""
    },
    {
        "title": "VERTeX",
        "diff": "Master",
        "level": "13.2",
        "score": "",
        "achievement": "",
        "rate": ""
    },
    {
        "title": "ジングルベル",
        "diff": "Master",
        "level": "13.1",
        "score": "",
        "achievement": "",
        "rate": ""
    },
    {
        "title": "エンドマークに希望と涙を添えて",
        "diff": "Master",
        "level": "13.1",
        "score": "",
        "achievement": "",
        "rate": ""
    },
    {
        "title": "World Vanquisher",
        "diff": "Master",
        "level": "13.0",
        "score": "",
        "achievement": "",
        "rate": ""
    },
    {
        "title": "Xevel",
        "diff": "Master",
        "level": "13.1",
        "score": "",
        "achievement": "",
        "rate": ""
    },
]

let remas12p = [
    {
        "title": "POP TEAM EPIC",
        "diff": "Re:Master",
        "level": "12.7",
        "score": "",
        "achievement": "",
        "rate": ""
    },
    {
        "title": "インビジブル",
        "diff": "Re:Master",
        "level": "12.7",
        "score": "",
        "achievement": "",
        "rate": ""
    },
    {
        "title": "ロストワンの号哭",
        "diff": "Re:Master",
        "level": "12.9",
        "score": "",
        "achievement": "",
        "rate": ""
    },
    {
        "title": "CYBER Sparks",
        "diff": "Re:Master",
        "level": "12.7",
        "score": "",
        "achievement": "",
        "rate": ""
    },
    {
        "title": "患部で止まってすぐ溶ける～狂気の優曇華院",
        "diff": "Re:Master",
        "level": "12.9",
        "score": "",
        "achievement": "",
        "rate": ""
    },
    {
        "title": "Crush On You",
        "diff": "Re:Master",
        "level": "12.9",
        "score": "",
        "achievement": "",
        "rate": ""
    },
    {
        "title": "Sun Dance",
        "diff": "Re:Master",
        "level": "12.9",
        "score": "",
        "achievement": "",
        "rate": ""
    },
]

let remas13 = [
    {
        "title": "カゲロウデイズ",
        "diff": "Re:Master",
        "level": "13.1",
        "score": "",
        "achievement": "",
        "rate": ""
    },
    {
        "title": "ナイト・オブ・ナイツ",
        "diff": "Re:Master",
        "level": "13.2",
        "score": "",
        "achievement": "",
        "rate": ""
    },
    {
        "title": "In Chaos",
        "diff": "Re:Master",
        "level": "13.4",
        "score": "",
        "achievement": "",
        "rate": ""
    },
    {
        "title": "Beat Of Mind",
        "diff": "Re:Master",
        "level": "13.3",
        "score": "",
        "achievement": "",
        "rate": ""
    },
    {
        "title": "Panopticon",
        "diff": "Re:Master",
        "level": "13.2",
        "score": "",
        "achievement": "",
        "rate": ""
    },
    {
        "title": "AMAZING MIGHTYYYY!!!!",
        "diff": "Re:Master",
        "level": "13.3",
        "score": "",
        "achievement": "",
        "rate": ""
    },
    {
        "title": "Garakuta Doll Play",
        "diff": "Re:Master",
        "level": "13.4",
        "score": "",
        "achievement": "",
        "rate": ""
    },
    {
        "title": "Fragrance",
        "diff": "Re:Master",
        "level": "13.3",
        "score": "",
        "achievement": "",
        "rate": ""
    },
]

let GetUserData = function () {
    $.ajax({
        type: "GET",
        url: maimai_url + user_url,
        async: false,
        dataType: "html"
    })
        .done(function (data) {
            let name = $(data).find(".underline")[0].innerText;
            let rating = $(data).find(".underline")[1].innerText;
            let title = $(data).find(".blue")[0].innerText;

            userData.name = name;
            userData.rating = rating;
            userData.title = title;

            // ベスト枠計算
            let sum = 0;
            for (i = 0; i < 30; i++) {
                let data = sortedList[i];
                let rateMas = ("data_Mas" in data) ? parseFloat(data.data_Mas.rate) : 0;
                let rateReMas = ("data_ReMas" in data) ? parseFloat(data.data_ReMas.rate) : 0;

                sum += (rateMas < rateReMas) ? rateReMas : rateMas;
            }

            userData.best = (sum / 30).toFixed(2);
        })
        .fail(function (jqXHR, textStatus, erroThrown) {
            alert(
                "Failed:Connect to UserData\n" +
                "XmlHttpRequest: " + jqXHR + "\n" +
                "TextStatus: " + textStatus + "\n" +
                "ErrorThrown: " + erroThrown
            );
        });
}

let GetMusicData = function (diff_addr) {
    $.ajax({
        type: "GET",
        url: maimai_url + diff_addr,
        async: false
    })
        .done(function (data) {
            let accordion = $(data).find("#accordion");
            let h3List = Array.prototype.slice.call($(accordion).find("h3"));
            let musicTitleList = h3List.map(GetMusicTitle);
            let musicAchievementList = h3List.map(GetMusicAchievement);
            let musicScoreList = Array.prototype.slice.call($(accordion).find(".list"))
                .map(function (data) {
                    return $(data).find("td")[3].innerText.replace(",", "");
                });

            let diff = "";
            if (diff_addr.includes("remaster")) {
                diff = "Re:Master";
            } else {
                diff = "Master";
            }

            PushMusicData(diff, musicTitleList, musicAchievementList, musicScoreList);
        })
        .fail(function (jqXHR, textStatus, erroThrown) {
            alert(
                "Failed:Connect to" + diff_addr + "\n" +
                "XmlHttpRequest: " + jqXHR + "\n" +
                "TextStatus: " + textStatus + "\n" +
                "ErrorThrown: " + erroThrown
            );
        });
}

let GetMusicTitle = function (data) {
    let div = $(data).find("div");

    if (div.length == 0) {
        return data.innerText.trim();
    } else {
        return div[0].innerText.trim();
    }
}

let GetMusicAchievement = function (data) {
    let div = $(data).find("div");

    if (div.length == 0) {
        return "0";
    } else {
        return $(data).find(".achievement")[0].innerText.replace(/[^(\d|\.)]/g, "");
    }
}

let PushMusicData = function (diff, titleList, achievementList, scoreList) {
    for (i = 0; i < titleList.length; i++) {
        let musicData = {
            "title": "",
            "diff": "",
            "level": "",
            "score": "",
            "achievement": "",
            "rate": ""
        }

        musicData.title = titleList[i];
        musicData.diff = diff;
        musicData.score = scoreList[i];
        musicData.achievement = achievementList[i];

        musicList.push(musicData);
    }
}

let DevPrintList = function () {
    console.log(musicList);
}

let CalcRating = function (level, achievement) {
    let rateSSS = parseFloat(RateSSS(level));
    let rateSS = rateSSS - 1.0;
    let rateS = parseFloat(RateS(level));

    if (100.00 <= achievement) {
        return rateSSS.toFixed(2);
    } else if (99.00 <= achievement && achievement < 100.00) {
        return CalcWithLSM(99.00, 100.00, rateSS, rateSSS - 0.25, achievement).toFixed(2);
    } else if (97.00 <= achievement && achievement < 99.00) {
        return CalcWithLSM(97.00, 99.00, rateS, rateSSS - 1.25, achievement).toFixed(2);
    } else {
        return 0;
    }
}

let RateSSS = function (level) {
    if (13.0 <= level) {
        return (level + 3.0);
    } else if (12.0 <= level && level < 13.0) {
        return (14.0 + 2.0 * (level - 12.0));
    } else {
        return 0.0
    }
}

let RateS = function (level) {
    if (13.0 <= level) {
        return (level + 0.5);
    } else if (12.0 <= level && level < 13.0) {
        return (12.0 + 1.5 * (level - 12.0));
    } else {
        return 0.0;
    }
}

let CalcWithLSM = function (x1, x2, y1, y2, p) {
    let a = (y2 - y1) / (x2 - x1);
    let b = y1 - a * x1;

    return (a * p + b);
}

let MergeMusicList = function (list) {
    for (i = 0; i < list.length; i++) {
        for (j = 0; j < musicList.length; j++) {
            if (musicList[j].title == list[i].title && musicList[j].diff == list[i].diff) {
                let label = (list[i].diff == "Master") ? "data_Mas" : "data_ReMas";

                let data_model = {
                    "diff": list[i].diff,
                    "level": list[i].level,
                    "score": musicList[j].score,
                    "achievement": musicList[j].achievement,
                    "rate": ""
                }

                data_model.rate = CalcRating(parseFloat(data_model.level), parseFloat(data_model.achievement));

                let music = mergeList.find(function (e) {
                    return e.title == list[i].title;
                });

                if (typeof music == "undefined") {
                    let data = {
                        "title": list[i].title,
                    };

                    data[label] = data_model;
                    mergeList.push(data);
                } else {
                    music[label] = data_model;
                }
            }
        }
    }
}

let SortList = function () {
    for (i = 0; i < mergeList.length; i++) {
        let data = mergeList[i];
        let rateMas = ("data_Mas" in data) ? data.data_Mas.rate : 0;
        let rateReMas = ("data_ReMas" in data) ? data.data_ReMas.rate : 0;
        let rate = (rateMas < rateReMas) ? rateReMas : rateMas;

        let insertNum = -1;
        for (j = 0; j < sortedList.length; j++) {
            let s_data = sortedList[j];
            let s_rateMas = ("data_Mas" in s_data) ? s_data.data_Mas.rate : 0;
            let s_rateReMas = ("data_ReMas" in s_data) ? s_data.data_ReMas.rate : 0;
            let s_rate = (s_rateMas < s_rateReMas) ? s_rateReMas : s_rateMas;

            if (s_rate < rate) {
                insertNum = j;
                break;
            }
        }

        if (insertNum == -1) {
            sortedList.push(data);
        } else {
            sortedList.splice(insertNum, 0, data);
        }
    }
}

let PrintMusicList = function () {
    let html = "";

    html += "<html><body>";
    html += userData.name  + "<br>";
    html += userData.title + "<br>";
    html += "現在/ベスト : " + userData.rating + "/" + userData.best + "<br>";
    html += "<br>";

    console.log(userData);

    html += "<table border=1>";
    for (i = 0; i < sortedList.length; i++) {
        let data = sortedList[i];

        html += "<tr>";
        html += "<th colspan=\"5\" bgcolor=\"#000000\"><font color=\"#ffffff\">" + (i+1) + ". " + data.title + "</font></th>";
        html +="</tr>";

        if ("data_Mas" in data) {
            html += "<tr>";
            html += "<td bgcolor=\"#8b008b\"><font color=\"#ffffff\">" + data.data_Mas.diff + "</font></td>";
            html += "<td>" + data.data_Mas.level + "</td>";
            html += "<td>" + data.data_Mas.score + "</td>";
            html += "<td>" + data.data_Mas.achievement + "</td>";
            html += "<td>" + data.data_Mas.rate + "</td></tr>";
        }

        if ("data_ReMas" in data) {
            html += "<tr>";
            html += "<td bgcolor=\"#e8d1ff\"><font color=\"#000000\">" + data.data_ReMas.diff + "</font></td>";
            html += "<td>" + data.data_ReMas.level + "</td>";
            html += "<td>" + data.data_ReMas.score + "</td>";
            html += "<td>" + data.data_ReMas.achievement + "</td>";
            html += "<td>" + data.data_ReMas.rate + "</td></tr>";
        }
    }
    html += "</table></body></html>";

    let win = window.open("", "maimai Rate Calculator", "width=500, height=500");
    //win.document.open();
    win.document.write(html);
    //win.document.close();
}


console.log("Get Master...");
GetMusicData(master_url);
console.log("Get Re:Master...");
GetMusicData(remaster_url);
console.log("Merge Master 12+...");
MergeMusicList(mas12p);
console.log("Merge Master 13...");
MergeMusicList(mas13);
console.log("Merge Re:Master 12+...");
MergeMusicList(remas12p);
console.log("Merge Re:Master 13...");
MergeMusicList(remas13);
console.log("Sort List...");
SortList();
console.log("Get UserData...");
GetUserData();
console.log("Print Result");
PrintMusicList();