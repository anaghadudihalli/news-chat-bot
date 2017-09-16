var app = angular.module('chatApp',['ngMaterial']);

app.controller('chatController',function($scope, $sce){

    $scope.messages = [];   
    

    

    var  exampleSocket =  new  WebSocket("ws://localhost:9000/chatSocket");
        exampleSocket.onmessage  =   function  (event) {        
        var jsonData = JSON.parse(event.data);        
        jsonData.time = new Date().toLocaleTimeString();        
        $scope.messages.push(jsonData);     //pushing the data   
        $scope.$apply();                    //refreshing
        console.log(jsonData);
        };
    
    $scope.sendMessage = function () {            
        exampleSocket.send($scope.userMessage);     //Sends user message     
        $scope.userMessage = "";        //Clear the messaging area
    };

    $scope.trust = $sce.trustAsHtml;

});