var rule = {
    title: '哈皮影视',
    host: 'https://hapihd.com',
    //url: '/index.php/vod/show/id/fyclass/page/fypage.html',
    url: '/index.php/vod/show/id/fyclassfyfilter.html',
    filterable: 1,//是否启用分类筛选,
    filter_url: '{{fl.area}}{{fl.by}}{{fl.class}}{{fl.lang}}{{fl.letter}}/page/fypage{{fl.year}}',
    filter: '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',
    searchUrl: '/index.php/vod/search/page/fypage/wd/**.html',
    searchable: 2,
    quickSearch: 0,
    headers: {
        'User-Agent': 'MOBILE_UA',
    },
    class_parse: '.navbar-items li:lt(7);a&&Text;a&&href;/id/(\\w+).html',
    play_parse: true,
    lazy:muban.mxpro.lazy,
    limit: 6,
    推荐: '.tab-list.active;a.module-poster-item.module-item;.module-poster-item-title&&Text;.lazyload&&data-original;.module-item-note&&Text;a&&href',
    double: true,
    一级: 'body a.module-poster-item.module-item;a&&title;.lazyload&&data-original;.module-item-note&&Text;a&&href',
    二级: {
        title: 'h1&&Text;.module-info-tag&&Text',
        img: '.lazyload&&data-original',
        desc: '.module-info-item:eq(1)&&Text;.module-info-item:eq(2)&&Text;.module-info-item:eq(3)&&Text',
        content: '.module-info-introduction&&Text',
        tabs: '#y-playList&&.tab-item--small',
        lists: '.module-play-list:eq(#id) a',
    },
    搜索: 'body .module-item;.module-card-item-title&&Text;.lazyload&&data-original;.module-item-note&&Text;a&&href;.module-info-item-content&&Text',
}