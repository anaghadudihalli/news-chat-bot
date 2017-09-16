var app = angular.module('chatApp',['ngMaterial']);

app.controller('chatController',function($scope){

    $scope.messages = [
        {	
            sender:"BOT",
            text: "What can I do for you?",
            time: "1:12PM"
        	
        },
        {   
            sender:"USER",
        	text:"What is 1+1?",
            time:"1:13PM"
        	 
        },
        {
        	sender:"BOT",  
        	text: "2",
            time: "1:14PM"
        }
    ];


    var  exampleSocket =  new  WebSocket("ws://localhost:9000/chatSocket");

    exampleSocket.onmessage = function  (event) {
           var jsonData = JSON.parse(event.data);
           console.log(jsonData);
    };

});