var rule = {
author: '黑可乐',
title: '乐草TV',
host: 'https://www.lecao1.top',
hostJs: '',
headers: {'User-Agent': 'MOBILE_UA'},
编码: 'utf-8',
timeout: 5000,

homeUrl: '/',
url: '/index.php/vod/type/id/fyclass/page/fypage.html',
detailUrl: '/index.php/vod/play/id/fyid/sid/1/nid/1.html',
searchUrl: '/index.php/ajax/suggest?mid=1&wd=**&page=fypage&limit=30',
searchable: 1, 
quickSearch: 1, 
filterable: 1, 

class_parse: '#menu-off-canvas-menu li;a&&title;a&&href;/(\\d+)',
cate_exclude: '',
filter_def: {},

tab_rename: {'道长在线': '在线播放'},
play_parse: true,
parse_url: 'https://www.lecao1.top/jx/?url=',
lazy: `js:
let kcode=jsp.pdfh(request(input).match(/<iframe(.*?)</iframe>/)[1]);
let kurl=kcode.match(/url=(.*?)\"/)[1];
if (/m3u8|mp4/.test(kurl)) {
input = { jx: 0, parse: 0, url: kurl }
} else {
input = { jx: 0, parse: 1, url: rule.parse_url+kurl }
}`,

limit: 9,
double: false,
推荐: '*',
一级: '.video;img&&alt;img&&data-original;.vodi-jetpack-views&&Text;a:eq(0)&&href',
二级: '*',
搜索: 'json:list;name;pic;en;id',

filter: {}
}