'use strict';

angular.module('chattyApp')
  .service('MessageService', function($http){
  	this.getMessages = function(){
  		return $http({
  			method: 'GET',
  			url: 'http://localhost:8888'
  		});
  	};

  	this.addMessage = function(message){
  		return $http({
  			method: 'POST',
  			url: 'http://localhost:8888',
  			data: {
  				message: message,
  				date: new Date()
  			}
  		});
  	};

  });
