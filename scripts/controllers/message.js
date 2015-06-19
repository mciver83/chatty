'use strict';

angular.module('chattyApp')
  .controller('MessageCtrl', function($scope, MessageService){

    $scope.getMessages = function(){
    	MessageService.getMessages().then(function(response){
    		console.log(response)
    		$scope.messages = response.data
    	})
    }

    $scope.getMessages();

    $scope.addMessage = function(message){
    	MessageService.addMessage(message).then(function(response){
    		console.log(response);
    		$scope.getMessages();
    		$scope.newMessage = '';
    	}, function(err){
    		console.log(err);
    	})
    }
  });
