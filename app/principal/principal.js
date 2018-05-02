var http = require("http");
// var fetch = require("fetch");
var base64 = require("base-64");
var view = require("ui/core/view");

// var apiKey = "ydSLLmgb7jPJHHZ1WkI";

var items = [];

exports.pageLoaded = function(args) {
    

    items = [
        { name: "Bruce Wayne", profession: "🦇" },
        { name: "Clark Kent", profession: "🤓" },
        { name: "Tony Stark", profession: "🤖" },
        { name: "Steve Rogers", profession: "🇺🇸" },
        { name: "Bruce Benner", profession: "👊🏾" },
        { name: "Thor", profession: "⚡️" },
        { name: "Kratos", profession: "😡" },
        { name: "Atreus", profession: "🤬" },
        { name: "Joel", profession: "🤠" }
    ];
    var page = args.object;
    var data = page.navigationContext;
    var listView = view.getViewById(page, "listView");
    listView.items = items;
    // var labelUser = page.getViewById("labelUser");
    // labelUser.text = "Bem-vindo, " + data.email;

    // http.request({
    //     url: "https://loupentest.freshdesk.com/api/v2/tickets/17",
    //     method: "GET",
    //     headers: {
    //         "Content-Type": "application/json",
    //         "Authorization": "Basic " + base64.encode(apiKey + ":X")
    //     }
    // }).then(function(response) {
    //     labelUser.text = JSON.stringify(response);
    // });

    // fetch.fetch("https://loupentest.freshdesk.com/api/v2/tickets/17", {
    //     method: "GET",
    //     headers: {
    //         "Content-Type": "application/json",
    //         "Authorization": "Basic " + base64.encode(apiKey + ":X")
    //     }
    // }).then(function(response) {
    //     console.log(JSON.stringify(response));
    // });


};

exports.selectItem = function(args) {
    var itemSelecionado = items[args.index];
    alert("Selecionado >>> " + itemSelecionado.name + " - " + itemSelecionado.profession);
};