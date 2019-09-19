var scraper = require('./tools').scraper;
//scraper = function(url,parseFcn,filename)
//scrapes a URL, parses it with parseFcn, and archives the data in a JSON file called filename.

//.JCAZList-list

var store = [];
var getMarvel = function($,data){
    var parent = $(".JCAZList-list");
    var children = parent.find("div");
    children.toArray().forEach(function(item,index){
                               data.push($(item).text());
                               });
}

scraper("https://www.marvel.com/comics/characters", getMarvel(), newStore.json);

//console.log(store);