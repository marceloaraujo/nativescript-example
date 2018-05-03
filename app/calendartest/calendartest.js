var Observable = require("data/observable").Observable;
var calendarModule = require("nativescript-ui-calendar");

var page;
var pageData = new Observable();

exports.pageLoaded = function(args) {
    console.log("Calendar test");
    page = args.object;
    page.bindingContext = pageData;

    var eventTitle = ["Lunch with Steve", "Meeting with Jane", "Q1 Recap Meeting"];
    var events = [];

    var j = 1;
    for(var i = 0; i < eventTitle.length; i++) {
        var now = new Date();
        var startDate = new Date(now.getFullYear(), now.getMonth(), j * 2, 12);
        var endDate = new Date(now.getFullYear(), now.getMonth(), (j * 2) + (j % 3), 13);
        var event = new calendarModule.CalendarEvent(eventTitle[i], startDate, endDate);
        events.push(event);
        j++;
    }
    pageData.set("events", events);
};