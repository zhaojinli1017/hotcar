var app = angular.module("app",["ui.router"]);

app.config(function($stateProvider){
    $stateProvider
    .state("tab",{
        url:"/tab",
        templateUrl:"./App/View/tab.html"
    })
    .state("slide",{
        url:"/slide",
        templateUrl:"./App/View/slide.html"
    })
})