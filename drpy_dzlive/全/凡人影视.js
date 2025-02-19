var rule = {
    title: '凡人',
    host: 'http://43.248.128.138:8133',
    url: '/api.php/video/get_list',
    class_name: "电视剧&电影&动漫&短剧&韩剧&综艺&少儿&纪录片",
    class_url: "20&21&26&25&24&22&23&27",
    searchUrl: '/api.php/video/get_list##**##fygape',
    detailUrl: '',
    searchable: 2,
    quickSearch: 1,
    filterable: 0,
    filter: '',
    filter_url: '',
    filter_def: '',
    headers:{            
        'Content-Type': 'application/json; charset=utf-8',
        'Content-Length': '261',
        'Host': '43.248.128.138:3312',
        'Connection': 'Keep-Alive',
        'Accept-Encoding': 'gzip',
        'User-Agent': 'okhttp/3.12.3'
    },
    play_parse: true,
    lazy:$js.toString(() => {
         let info =input.split("/");
         let video_id=info[2]
         let ju_id=info[0]
         let jx=info[1]
         var timestamp = new Date().getTime() / 1000; //log(timestamp)
         var t = timestamp.toString().split('.')[0]; //log(t)
         var sign = md5(t + ju_id + jx + '28b25205e2ab3de9eed3abc811.0.0' + video_id + 'alskeuscliy8OuRzLbE1xJ3aV6dQfTgIhK4mN7pQ3s'); //log(sign)
         var body = JSON.stringify({"player_id":jx,"ju_id":ju_id,"vod_id":video_id,"versionName":"3.0.1","uuid":"56f05bb2ca523ff2","version":"b15840da","versionCode":"24","ctime":t,"sign":sign}); //log(body)
         var html = fetch('http://43.248.128.138:8133/api.php/video/get_definition', {body:body,method: 'POST'}); //log(html)                
         var url = JSON.parse(html).data[0].url; 
         log(url)
         if(/cover|JXAPI/.test(url)){
                var play = JSON.parse(request(url,{redirect: false,withHeaders: true})).url; //log(play)
                input = {
                    url: play,
                    parse: 0,
                    jx:0
                }
        }else{
                input = {
                    url: url,
                    parse: 0,
                    jx:0
                }
        }
    }),
    一级: $js.toString(() => {
        var d = [];
        var timestamp = new Date().getTime() / 1000; //log(timestamp)
        var t = timestamp.toString().split('.')[0]; //log(t)
        var sign = md5(t + '201128b25205e2ab3de9eed3abc811.0.0alskeuscli'); //log(sign)
        var body = JSON.stringify({
            "type_id": MY_CATE,
            "vod_year":'',
            "orderby":'',
            "vod_area":'',
            "vod_class":"",
            "vod_name":"",
            "limit": "21",
            "page": MY_PAGE,
            "versionName": ("3.0.2").toString(),
            "uuid": ("56f05bb2ca523ff2").toString(),
            "version": ("b15840da").toString(),
            "versionCode":"25",
            "ctime": t,
            "sign": sign
        });
        var html = request('http://43.248.128.138:8133/api.php/video/get_list', {
            body: body,
            header: rule.headers,          
            method: 'POST',
            rejectCoding: false
        });
        var list = JSON.parse(html).data.list;
        list.forEach(it => {
            d.push({
                title: it.vod_name,
                desc: it.vod_remarks,
                img: it.vod_pic,
                url: 'http://43.248.128.138:8133/api.php/video/get_detail#' + it.vod_id,
            })
        })
        setResult(d)
    }),
    二级: $js.toString(() => {
        var VOD = {};
        var vod_id = MY_URL.split('#')[1];
        MY_URL = MY_URL.split('#')[0];
        var timestamp = new Date().getTime() / 1000; //log(timestamp)
        var t = timestamp.toString().split('.')[0]; //log(t) 
        var sign = md5(t + '28b25205e2ab3de9eed3abc811.0.0' + vod_id + 'alskeuscli'); //log(sign)
        var body = JSON.stringify({
            "vod_id": vod_id,
            "versionName": ("1.0.0").toString(),
            "uuid": ("28b25205e2ab3de9").toString(),
            "version": ("eed3abc8").toString(),
            "versionCode": "1",
            "ctime": t,
            "sign": sign
        });
        var html = fetch('http://43.248.128.138:8133/api.php/video/get_detail', {
            body: body,
            method: 'POST'
        });
        var json = JSON.parse(html);
        VOD.vod_name = json.data.vod_name;
        VOD.vod_pic = json.data.vod_pic;
        VOD.vod_year = json.data.vod_year;
        VOD.vod_area = json.data.vod_area;
        VOD.vod_remarks = json.data.vod_remarks;
        VOD.vod_actor = json.data.vod_actor;
        VOD.vod_director = json.data.vod_director;
        VOD.vod_content = json.data.vod_content;

        //集数列表获取
        var tabs = [];
        json.data.player.forEach(item => {
            tabs.push(item.code);
        });
        //线路封装
        VOD.vod_play_from = tabs.join('$$$');
        //遍历线路列表
        var kurls = [];
        tabs.forEach(tab => {
            var jx = tab;
            var body2 = JSON.stringify({
                "limit": "5000",
                "vod_id": vod_id,
                "page": 1,
                "versionName": ("1.0.0").toString(),
                "uuid": ("28b25205e2ab3de9").toString(),
                "version": ("eed3abc8").toString(),
                "versionCode": "1",
                "player": jx,
                "ctime": t,
                "sign": sign
            });
            var html2 = fetch('http://43.248.128.138:8133/api.php/video/get_all_players', {
                body: body2,
                method: 'POST'
            });
            //var data2 = JSON.parse(html2).data;
            var json2 = JSON.parse(html2).data.list;
            //log(json2)
            //集数列表封装  
            var urls = [];
            json2.forEach(item => {
                urls.push(item.ju_id + '$' + item.ju_id+'/'+item.plyer+'/'+item.video_id) //名地连
            })
            kurls.push(urls.join('#')); //集集连   
              
        });
        VOD.vod_play_url = kurls.join('$$$'); //表表连
    }),
    搜索: $js.toString(() => {
    var d = [];
    var timestamp = new Date().getTime() / 1000; //log(timestamp)
    var t = timestamp.toString().split('.')[0]; //log(t)
    var sign = md5(t + '20up128b25205e2ab3de9eed3abc811.0.0' + KEY + 'alskeuscli'); //log(sign)
    var body = JSON.stringify({"limit":"20","orderby":"up","page":MY_PAGE,"versionName":"1.0.0","uuid":"28b25205e2ab3de9","version":"eed3abc8","vod_name":KEY,"versionCode":"1","ctime":t,"sign":sign}); //log(body)
    log(body)
    var html = fetch('http://43.248.128.138:8133/api.php/video/get_list', {body:body,method: 'POST'}); //log(html)
    var list = JSON.parse(html).data.list; 
    log(list)
    list.forEach(data => {
            d.push({
                title: data.vod_name,
                desc: data.vod_remarks,
                content: data.vod_blurb,
                img: data.vod_pic,
                url: 'http://43.248.128.138:8133/api.php/video/get_detail#' + data.vod_id
            })
    })
    setResult(d)
}),
}