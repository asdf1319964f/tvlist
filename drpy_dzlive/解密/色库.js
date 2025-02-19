var rule = {
  title: '色库[密]',
  host: 'https://7qdqkurp.sej47seku.top/',
  url: '/index.php/vod/type/id/fyclass/page/fypage.html',
  searchUrl: '/index.php/vod/search/page/fypage/wd/**.html',
  searchable: 2,
  quickSearch: 0,
  filterable: 0,
  headers: {
    'User-Agent': 'MOBILE_UA',
  },
  class_name: '精品国产&日韩精选&欧美风范&动漫印画&激情动漫&经典伦理&探花实录&真实乱伦&>制服诱惑&破除见红&反差骚货&白虎萝莉&人妖TS&网红主播&SM虐待&绿帽性奴',
  class_url: '1&2&3&4&5&6&7&8&9&10&11&12&13&14&15&16',
  play_parse: true,
  lazy: $js.toString(()=>{
      let html = JSON.parse(request(input).match(/r player_.*?=(.*?)</)[1]);
      log(html)
      let url = html.url;
      input = {parse:0,url:url}
  }),
  limit: 6,
  double: true,
  一级: '.content-list:eq(4)&&li;a&&title;img&&data-original;p&&Text;a&&href',
  二级: {
    title: 'h2&&Text',
    img: '.col-md-9&&img&&src',
    desc: '.row&&p&&Text',
    content: '',
    tabs: '.play-btn-group .line',
    lists: '.play-btn-group .line a',
  },
  搜索: '*',
}