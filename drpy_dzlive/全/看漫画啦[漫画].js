var rule ={
            title: '',
            host: 'https://m.kanmanhuala.cc/',
            url: 'https://m.kanmanhuala.cc/booklist?page=fypage&cate=%E5%85%A8%E9%83%A8&end=fyclass',
            searchUrl: 'https://m.kanmanhuala.cc/search?keyword=**',
            //class_parse: '.top_nav li;a&&Text;a&&href;.*/(.*?)/',
class_name:'连载&完结',
class_url:'2&1',            
            searchable: 2,
            quickSearch: 0,
            filterable: 0,
            headers: {
                'User-Agent': 'MOBILE_UA',
            },
            play_parse: true,
            lazy: $js.toString(() => {
        let html = request(input);
        let list = jsp.pdfa(html, "#cp_img").map(v => jsp.pdfh(v, ".lazy&&data-original"));
        let url = html;
        input = {
            //parse: 0,
            url: "pics://" + list.join("&&"),
            js: ''
        };
    }),
            limit: 6,
            推荐: '*',
            double: true,
            一级: '.manga-list-2 li;a&&title;img&&data-original;.pic_text&&Text;a&&href',
            二级: {
                title: '.detail-main-info-title&&Text',
                img: '.vodlist_thumb&&data-original',
                desc: '.detail-main-info-author:eq(0)&&Text;.detail-main-info-author:eq(1)&&Text;.detail-main-info-author:eq(2)&&Text',
                content: '.detail-desc&&Text',
                tabs: '#chapter_indexes',
                lists: '.detail-list-1:eq(#id) a',
            },
            搜索: '.book-list li;a&&title;img&&data-original;.book-list-info-bottom-right-font&&Text;a&&href',
        }