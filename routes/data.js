var express = require('express');
var http = require('http');
var config = require('../config/config');
var router = express.Router();

router.get('/:file', function(req, res){
    var options = {
        root: __dirname + '/../data/'
    };
    
   res.sendFile(req.params.file, options);
});

router.get('/get/rss/', function(req, res){
    var options = {
        host:config.host,
        port:80,
        path:config.path+"?v="+config.version+"&num="+config.resultNum+"&q="+config.rss
    };
    
    res.setHeader("Access-Control-Allow-Origin", "*");
    
    var httpRequest = http.get(options, function(response){
        var bodyChunks = [];
        
        response.on('data', function(chunk){
            bodyChunks.push(chunk);
        });
        
        response.on('end', function(){
            var body = Buffer.concat(bodyChunks);
            
            var result = parseRssOutput(JSON.parse(body.toString()));
            
            res.send(JSON.stringify(result));
        });
    });
});

function parseRssOutput(data)
{
    var results = {
        articles:[]
    };
    
    for(var key in data.responseData.feed.entries)
    {
        var entry = data.responseData.feed.entries[key];
        var newArticle = {};
        
        newArticle["title"] = entry.title;
        newArticle["description"] = entry.contentSnippet;
        newArticle["pubDate"] = convertStringToData(entry.publishedDate);
        newArticle["link"] = entry.link;
        newArticle["author"] = entry.author;
        
        results.articles.push(newArticle);
    }
    
    return results;
}

function convertStringToData(value)
{
    var year = value.split(" ")[3];
    var day = value.split(" ")[1];
    var monthStr = value.split(" ")[2];
    var time = value.split(" ")[4];
    var month = 01;
    
    for(var key in config.month)
    {
        if(config.month[key].name == monthStr)
        {
            month = config.month[key].numeric;
            break;
        }
    }
    
    return year+"-"+month+"-"+day+"T"+time+"Z";
}

module.exports = router;