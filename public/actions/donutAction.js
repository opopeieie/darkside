var $ = require("../apis/jquery-1.5.2.min");


export function donutConfig(){
    return {
        type:'DONUT-H',
        getData:function(){
            $.getJSON("../assets/fixtures/pageConfigs.json",function(data){
                return data;
            })
        }
    }
}