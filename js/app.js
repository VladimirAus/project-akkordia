angular.module('tes.akkordia.app', [])
	.controller('AppController', ['$scope', function($scope) {
		$scope.song = {title: "Oh hai, example!",
		lyrics: [],
		chrods: []};
	}]);