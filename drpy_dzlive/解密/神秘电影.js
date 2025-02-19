var rule = {
    title: '神秘电影',
    host: 'https://nbmw.sm259.vip',
    url: '/list/fyclass/fypage.html',
    searchUrl: '/so/**/fypage.html#',
    // class_parse: '.nav a;script&&Text;a&&href;.*/(.*?).html',
    class_name: '国产&日本&韩国&欧美&三级&动漫',
    class_url: '1&2&3&4&5&6',

    searchable: 2,
    quickSearch: 0,
    filterable: 0,
    //编码:'GBK',
    headers: {
        'User-Agent': 'Mozilla/5.0 (Linux; Android 12; TAS-AN00 Build/HUAWEITAS-AN00; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/99.0.4844.88 Mobile Safari/537.36',
        'referer': 'https://nbmw.sm259.vip/',
    },
    play_parse: true,
    lazy: $js.toString(() => {
        let html = request(input);
        let kurl = 'https://8838.uk:88/' + html.match(/data-id=\"(.*?)\"/)[1] + '/index.m3u8'; // let url = base64Decode(kurl);    
        input = {
            parse: 0,
            jx: 0,
            url: kurl,
            header: rule.headers,
        };
    }),
    limit: 6,
    推荐: '*',
    double: true,
    图片来源: '@Referer=https://nbmw.sm259.vip/@User-Agent=Mozilla/5.0 (Linux; Android 12; TAS-AN00 Build/HUAWEITAS-AN00; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/99.0.4844.88 Mobile Safari/537.36',
    一级: $js.toString(() => {
        var d = []
        let html = request(input)
        jsp.pdfa(html, ".main&&.vodbox").forEach(it => {
            var txt = jsp.pdfh(it, "p").replace(/.*\((.*?)\).*/, "$1").replace(/'/, "")

            function decrypt() {
                var decrypted = "";
                for (var i = 0; i < txt.length; ++i) {
                    decrypted += String.fromCharCode(128 ^ txt.charCodeAt(i));
                }
                return decrypted;
            }
            d.push({
                title: decrypt().replace(/§/, ""),
                img: jsp.pdfh(it, "img&&data-src"),
                url: jsp.pd(it, "a&&href"),
                col_type: "movie_3"
            })
        })

        setResult(d);
    }),
    二级: '*',
    搜索: '*',
}