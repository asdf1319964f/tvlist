var rule = {
    author: '黑可乐',
    title: '飞狗影院[密]',
    类型: '影视',
    host: 'https://fegou.xyz',
    hostJs: '',
    headers: {'User-Agent': 'MOBILE_UA'},
    编码: 'utf-8',
    timeout: 5000,
    homeUrl: '/',
    url: '/category/fyclass/page/fypage[/category/fyclass]',
    filter_url: '',
    detailUrl: '',
    searchUrl: '/page/fypage?cat&s=**',
    searchable: 1,
    quickSearch: 1,
    filterable: 1,
    class_parse: '.nav-list&&a;a&&Text;a&&href;category/(\\w+)',
    cate_exclude: '',
    filter_def: {},
    图片来源: '@Referer=https://fegou.xyz@User-Agent=Mozilla/5.0 (Linux; Android 11; M2007J3SC Build/RKQ1.200826.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045714 Mobile Safari/537.36',
    tab_rename: {'道长在线': '在线播放'},
    play_parse: true,
    parse_url: '',
    lazy: `js:
let kurl=pdfh(request(input),'body&&source&&src');
if (/m3u8|mp4/.test(kurl)) {
input = { jx: 0, parse: 0, url: kurl }
} else {
input = { jx: 0, parse: 1, url: kurl }
}`,

    limit: 9,
    double: false,
    推荐: '*',
    一级: 'article;.lazy&&title;.lazy&&data-bg;a:eq(1)&&Text;.lazy&&href',
    二级: '*',
    搜索: '*',
    filter: {}
}