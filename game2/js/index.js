let talent = [{
    "id": "1001",
    "name": "随身玉佩",
    "description": "或许有护佑作用",
    "grade": 0
},
{
    "id": "1002",
    "name": "红肚兜",
    "description": "小时候死亡率降低",
    "grade": 0
},
{
    "id": "1003",
    "name": "生而为男",
    "description": "性别一定为男",
    "grade": 1,
    "exclusive": [
        "1004",
        "1025",
        "1024"
    ]
},
{
    "id": "1004",
    "name": "生而为女",
    "description": "性别一定为女",
    "grade": 1,
    "exclusive": [
        "1003",
        "1024",
        "1025"
    ]
},
{
    "id": "1005",
    "name": "动漫高手",
    "description": "入宅的可能性翻6倍",
    "grade": 2
},
{
    "id": "1006",
    "name": "乐观",
    "description": "快乐+1",
    "grade": 0,
    "effect": {
        "SPR": 1
    }
},
{
    "id": "1007",
    "name": "天赋异禀",
    "description": "初始可用属性点+2",
    "grade": 1,
    "status": 2
},
{
    "id": "1008",
    "name": "天生抑郁",
    "description": "快乐-3",
    "grade": 0,
    "effect": {
        "SPR": -3
    }
},
{
    "id": "1009",
    "name": "网络巨魔",
    "description": "快乐+2",
    "grade": 1,
    "effect": {
        "SPR": 2
    }
},
{
    "id": "1010",
    "name": "天龙人",
    "description": "你拥有北京户口",
    "grade": 2,
    "effect": {
        "MNY": 1
    },
    "exclusive": [
        "1012",
        "1013",
        "1014"
    ]
},
{
    "id": "1011",
    "name": "独生子女",
    "description": "你没有兄弟姐妹",
    "grade": 0
},
{
    "id": "1012",
    "name": "乡间微风",
    "description": "你出生在农村",
    "grade": 0,
    "exclusive": [
        "1010",
        "1013",
        "1014"
    ]
}]
$('.wrap>button').click(function () {
    $(".wrap").css("display", "none");
    $(".wrap2").css("display", "block");
})
$('.wrap2>button').click(function () {
    $(".wrap2").css("display", "none");
    $(".main").css("display", "block");
    $('*').css('background-color', '#fff')
})
// 10连抽天赋
let set = new Set();
while (set.size < 10) {
    set = Array.from(set);
    let num = Math.floor(Math.random() * talent.length);
    set.push(talent[num]);
    set = new Set(set)
}
set = Array.from(set)
let str = '';
for (let i = 0; i < 10; i++) {
    str += `<li>${set[i].description}</li>`
};
$('.main>ul').eq(0).append(str);

// 判断
$('ul>li').attr('tag', 1)
let count = 0
$('ul > li').click(function () {
    
    if (($(this).attr('tag')==1) && count < 3) {
        $(this).css("backgroundColor", 'red');
        count++;
        $(this).attr('tag', 0);
        console.log(count);
    } else if ($(this).attr('tag')==0) {
        count--;
        $(this).css("backgroundColor", '#fff');
        $(this).attr('tag', 1);
        console.log(count);
    }
})
$('.main>button').click(function () {
    $(".main").css("display", "none");
    $('*').css('background-color', '#666')
    $('.last').css("display", "block");

    console.log($('li[tag=0]').eq(0).index());
    let last = document.querySelector('.p2')
    for (let i = 0; i < $('li[tag=0]').length; i++) {
        let p = document.createElement('p')
        p.innerHTML = set[$('li[tag=0]').eq(i).index()].description;
        last.appendChild(p);
    }
})

$('.del').click(function () {
    if ($('.snum').html() < 20) {
        if ($(this).next().html() > 0) {
            $('.snum').html(Number($('.snum').html()) + 1);
            $(this).next().html(Number($(this).next().html()) - 1)
        }
    }

})
$('.add').click(function () {
    if ($('.snum').eq(0).html() > 0) {
        if ($(this).prev().html() < 10) {
            $('.snum').html($('.snum').html() - 1);
            $(this).prev().html(Number($(this).prev().html()) + 1)
        }
    }

})


$('.last p').eq(0).html('已选天赋')

$('.go').click(function () {
    // 颜值
    let app1 = $('.num').eq(0).html();
    // 智力
    let zl = $('.num').eq(1).html();
    // 体力
    let tl = $('.num').eq(2).html();
    // 家境
    let home = $('.num').eq(3).html();
    $('.last').css("display", "none");
    $('.out').css("display", "block");
    {
        let arry = 0;
        // 体质过低直接死亡
        let arry1 = ["体质过低，你死了。"]
        // 正常
        let arry2 = ["你出生了，是个女孩。", "刚学会走路，你意外从桌子上跌落。", "你生了场重病。", "可能是玉佩保佑，你活了下来。", "你开始看动漫。", "你从小生活在城市", "你的家庭更加困难，吃不饱饭。", "你父母又生了个儿子。", "你的父亲在种地时意外发现一箱金条。", "你家长为你请了家庭教师。", "虚拟现实技术得到突破，开始爆发式增长。", "小日子过得不错的国家认祖归宗，归化为恒桑省。", "国足夺得世界杯。", "人类发现宜居类地行星，被命名为不吃香菜星27号。", "股市大涨，P股直冲一万点。", "人类首次3D打印月球。从此天上有了两个月亮。", "你轮回去了"]
        // 体力>7,home>7导致智力过低
        let arry3 = ["你出生了，是个男孩。","红肚兜挂在了桌角上，你没有受伤。","你智力迟钝，仍然不会说话。","你开始看动漫。","你的父母对你视若珍宝，呵护备至。","你喜欢用父母的手机玩王者荣耀。", "你和村里人打架。","你的运动天赋好像不错。","你发现你和其他人的想法好像都不一样。","你被查出来是个智障","你们家成为村里最富的家庭。", "【绝密消息】你捡到一张纸条，不要私信了求求了“","你的智力恢复了","充满各种几乎没有成本的娱乐的老年生活。","完美淬体，体质大幅提升。","你悟出了土之大道。","你体内灵息汇聚成丹海，又复归流转周身经脉，形成灵脉。","你突破到灵脉中期。","你斩杀了一位渡劫期修士。获得大量资源。","你飞升了"]
        let arry4 = ["你出生了","你变的越来越好看","你被自己帅死了"]
        if (tl == 0) {
            arry = arry1
        } else if (app1<7 && tl > 7 && home > 7) {
            arry = arry3
        } else if (app1 > 7) {
            arry = arry4
        } else {
            arry = arry2
        }
        let age = 0;
        let outUl = $('.out>ul')[0]
        let timer = setInterval(function () {
            let li = document.createElement('li')

            li.innerHTML = `${age * 3}岁，${arry[age]}`
            outUl.appendChild(li);
            age++;
            if (age == arry.length) {
                clearInterval(timer)
            }

        }, 500)
    }
})


