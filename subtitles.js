
const subtitles = [
    {
        japan: 'Японский',
        trascription: 'Траскрипция',
        translitarate: 'Транслитарация',
        translate: 'Перевод',
        time: [1300, 15078]
    },
    {
        japan: '流れてく　時の中ででも　気だるさが　ほらグルグル廻って',
        trascription: 'Nagareteku toki no naka de demo kedarusa ga, hora, GURUGURU mawatte',
        translitarate: 'Нагарэтэку токи но нака дэ дэмо кэдаруса га хора гуругуру маваттэ',
        translate: 'Даже если время течет так незаметно, вечность угнетает меня порой невыносимо.',
        time: [28700, 35900]
    },
    {
        japan: '私から　離れる心も　見えないわ　そう知らない？',
        trascription: 'Watashi kara hanareru kokoro mo mienai wa. Sou, shiranai?',
        translitarate: 'Ватаси кара ханарэру кокоро мо миэнаи ва. Со, сиранаи?',
        translate: 'Если бы ты знал, что совсем не замечаю, как моя душа меня покидает.',
        time: [36000, 42800]
    },
    {
        japan: '自分から　動くこともなく　時の隙間に　流され続けて',
        trascription: 'Jibun kara ugoku koto mo naku, toki no sukima ni nagasare tsuzukete',
        translitarate: 'Дзибун кара угоку кото мо наку токи но сукима ни нагасарэ цудзукэтэ',
        translate: 'Даже если я и смогу замедлить время, повернуть назад эту реку просто невозможно.',
        time: [43128, 49833]
    },
    {
        japan: '知らないわ　周りのことなど　私は私　それだけ',
        trascription: 'Shiranai wa, mawari no koto nado. Watashi wa watashi, sore dake',
        translitarate: 'Сиранаи ва, мавари но кото надо. Ватаси ва ватаси сорэ дакэ',
        translate: 'Что вокруг меня - я не сильно понимаю, только на себя я и полагаюсь.',
        time: [50000, 56981]
    },
    {
        japan: '夢見てる？　なにも見てない？　語るも無駄な　自分の言葉？',
        trascription: 'Yume miteru? Nani mo mitenai? Kataru mo muda na jibun no kotoba?',
        translitarate: 'Юмэмитэру? Нанимо митэнаи? Катару мо муда на дзибун но котоба?',
        translate: 'Вижу ли я сон, иль не вижу ничего? Чего стоят все слова? Бесполезная вода.',
        time: [57000, 63404]
    },
    {
        japan: '悲しむなんて　疲れるだけよ　何も感じず　過ごせばいいの',
        trascription: 'Kanashimu nante, tsukareru dake yo. Nani mo kanjizu, sugoseba ii no',
        translitarate: 'Канасиму нантэ, цукарэру дакэ ё. Нанимо кандзидзу сугосэба ии но',
        translate: 'От тоски спасенья нет, даже ясным летним днём: лучше жить без всяких чувств и не думать ни о чём.',
        time: [63637, 70394]
    },
    {
        japan: '戸惑う言葉　与えられても　自分の心　ただ上の空',
        trascription: 'Tomadou kotoba ataerarete mo, jibun no kokoro tada uwa no sora',
        translitarate: 'Томадоу котоба атаэрарэтэ мо, дзибун но кокоро тада уваносора',
        translate: 'Если ты произнесешь те заветные слова, не достигнут моего они сердца никогда.',
        time: [70557, 77335]
    },
    {
        japan: 'もし私から　動くのならば　すべて変えるのなら　黒にする',
        trascription: 'Moshi watashi kara ugoku no naraba, subete kaeru no nara kuro ni suru',
        translitarate: 'Моси ватаси кара угоку но нараба, субэтэ каэру но нара куро ни суру',
        translate: 'Когда сдвинуться смогу, все изменится тогда, но укутается в тьму, станет чёрным навсегда.',
        time: [77717, 84305]
    },
    {
        japan: 'こんな自分に　未来はあるの？　こんな世界に　私はいるの？',
        trascription: 'Konna jibun ni mirai wa aru no? Konna sekai ni watashi wa iru no?',
        translitarate: 'Конна дзибун ни мираи ва ару но? Конна сэкаи ни ватаси ва иру но?',
        translate: 'Есть ли "завтра" у меня? - вот что я хотела узнать, и должна ли я вообще в этом мире пребывать?',
        time: [84632, 91175]
    },
    {
        japan: '今切ないの？　今悲しいの？　自分の事も　わからないまま',
        trascription: 'Ima setsunai no? Ima kanashii no? Jibun no koto mo wakaranai mama',
        translitarate: 'Има сэцунаи но? Има канасии но? Дзибун но кото мо вакаранаи мама',
        translate: 'Ощущаю ли я боль? Ощущаю ли печаль? Я ответить не могу, и поэтому мне жаль.',
        time: [91175, 98331]
    },
    {
        japan: '歩むことさえ　疲れるだけよ　人のことなど　知りもしないわ',
        trascription: 'Ayumu koto sae tsukareru dake yo. Hito no koto nado shiri mo shinai wa.',
        translitarate: 'Аюму кото саэ цукарэру дакэ ё. Хито но кото надо сири мо синаи ва.',
        translate: 'Больше нету моих сил, так устала от всего, и других людей теперь не пойму я всё равно.',
        time: [98331, 105242]
    },
    {
        japan: 'こんな私も　変われるのなら　もし変われるのなら　白になる',
        trascription: 'Konna watashi mo kawareru no nara, moshi kawareru no nara shiro ni naru?',
        translitarate: 'Конна ватаси мо каварэру но нара, моси каварэру но нара сиро ни нару?',
        translate: 'Может если изменить в себе некую деталь, станет белым этот мир, улетучится печаль?',
        time: [105242, 112000]
    },
    {
        japan: '流れてく　時の中ででも　気だるさがほら　グルグル廻って',
        trascription: 'Nagareteku toki no naka de demo kedarusa ga, hora, GURUGURU mawatte',
        translitarate: 'Нагарэтэку токи но нака дэ дэмо кэдаруса га, хора гуругуру маваттэ',
        translate: 'Даже если время течет так незаметно, вечность угнетает меня порой невыносимо.',
        time: [126592, 133486]
    },
    {
        japan: '私から　離れる心も　見えないわそう　知らない？',
        trascription: 'Watashi kara hanareru kokoro mo mienai wa. Sou, shiranai?',
        translitarate: 'Ватаси кара ханарэру кокоро мо миэнаи ва. Со, сиранаи?',
        translate: 'Если бы ты знал, что совсем не замечаю, как моя душа меня покидает.',
        time: [133638, 140304]
    },
    {
        japan: '自分から　動くこともなく　時の隙間に　流され続けて',
        trascription: 'Jibun kara ugoku koto mo naku, toki no sukima ni nagasare tsuzukete',
        translitarate: 'Дзибун кара угоку кото мо наку, токи но сукима ни нагасарэ цудзукэтэ',
        translate: 'Даже если остановить смогу я время, повернуть назад эту реку просто невозможно.',
        time: [140304, 147398]
    },
    {
        japan: '知らないわ　周りのことなど　私は私　それだけ',
        trascription: 'Shiranai wa, mawari no koto nado. Watashi wa watashi, sore dake?',
        translitarate: 'Сиранаи ва мавари но кото надо. Ватаси ва ватаси сорэ дакэ?',
        translate: 'Что вокруг меня - я не сильно понимаю, только на себя я и полагаюсь.',
        time: [147398, 154317]
    },
    {
        japan: '夢見てる？　なにも見てない？　語るも無駄な　自分の言葉',
        trascription: 'Yume miteru? Nani mo mitenai? Kataru mo muda na jibun no kotoba?',
        translitarate: 'Юмэмитэру? Нанимо митэнаи? Катару мо муда на дзибун но котоба?',
        translate: 'Вижу ли я сон, иль не вижу ничего? Чего стоят все слова? Бесполезная вода.',
        time: [154317, 160903]
    },
    {
        japan: '悲しむなんて　疲れるだけよ　何も感じず　過ごせばいいの',
        trascription: 'Kanashimu nante, tsukareru dake yo. Nani mo kanjizu, sugoseba ii no',
        translitarate: 'Канасиму нантэ, цукарэру дакэ ё. Нанимо кандзидзу сугосэба ии но',
        translate: 'От тоски спасенья нет, даже ясным летним днём: лучше жить без всяких чувств и не думать ни о чём.',
        time: [160903, 167804]
    },
    {
        japan: '戸惑う言葉　与えられても　自分の心　ただ上の空',
        trascription: 'Tomadou kotoba ataerarete mo, jibun no kokoro tada uwa no sora',
        translitarate: 'Томадоу котоба атаэрарэтэ мо, дзибун но кокоро тада уваносора',
        translate: 'Если ты произнесешь те заветные слова, не достигнут моего они сердца никогда.',
        time: [167804, 174824]
    },
    {
        japan: 'もし私から　動くのならば　すべて変えるのなら　黒にする',
        trascription: 'Moshi watashi kara ugoku no naraba, subete kaeru no nara kuro ni suru.',
        translitarate: 'Моси ватаси кара угоку но нараба, субэтэ каэру но нара куро ни суру.',
        translate: 'Когда сдвинуться смогу, все изменится тогда. Но укутается в тьму, станет чёрным навсегда.',
        time: [174824, 181689]
    },
    {
        japan: '動くのならば　動くのならば　すべて壊すわ　すべて壊すわ',
        trascription: 'Ugoku no naraba, ugoku no naraba, subete kowasu wa, subete kowasu wa',
        translitarate: 'Угоку но нараба, угоку но нараба, субэтэ ковасу ва субэтэ ковасу ва',
        translate: 'Если сделаю свой ход, если сделаю свой ход, я разрушу этим всё, я разрушу этим всё.',
        time: [181994,188689]
    },
    {
        japan: '悲しむならば　悲しむならば　私の心　白く変われる？',
        trascription: 'Kanashimu naraba, kanashimu naraba, watashi no kokoro shiroku kawareru?',
        translitarate: 'Канасиму нараба, канасиму нараба, ватаси но кокоро сироку каварэру?',
        translate: 'Если буду я грустить, если буду я грустить, то смогу ли я тогда своё сердце отбелить?',
        time: [188689,195624]
    },
    {
        japan: '貴方の事も　私のことも　全ての事も　まだ知らないの',
        trascription: 'Anata no koto mo, watashi no koto mo, subete no koto mo, mada shiranai no',
        translitarate: 'Аната но кото мо, ватаси но кото мо, субэтэ но кото мо, мада сиранаи но',
        translate: 'До сих пор ни о тебе, до сих пор ни о себе, я не знаю ничего, лишь доверилась судьбе.',
        time: [195624,202467]
    },
    {
        japan: '重い目蓋を　開けたのならば　すべて壊すのなら　黒になれ！！',
        trascription: 'Omoi mabuta wo aketa no naraba, subete kowasu no nara kuro ni nare!!',
        translitarate: 'Омои мабута о акэта но нараба ,субэтэ ковасу но нара куро ни нарэ!!',
        translate: 'Если я смогу открыть свои сонные глаза, то затем разрушу всё - крась всё в чёрный цвет тогда!!',
        time: [202467, 209522]
    }
]
