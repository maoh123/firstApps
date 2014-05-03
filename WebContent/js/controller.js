var myApp = angular.module('myApp', []);

myApp.controller('FirstAppController', ['$scope', function($scope) {
	/*
	Some constants
	*/
	var RED  = 'red';
	var BLUE = 'blue';
	var FREE = 'free';

    /*
	Make a movement ... or not
	*/
	$scope.move = function(event) {
		var color = $(event.target).attr('class');
		var id    = $(event.target).attr('id');
		$scope.debug = 'Trying to move ' + color + ' ' + id ;
		if (isFree(color)) {
			// Movement not OK
			$scope.feedback = 'Movement not possible';
		} else {
			// Movement OK
			$scope.feedback = '';
		}
    };

	/*
	Reset the game
	*/
    $scope.reset = function() {
        //TO DE DONE
		$scope.debug = '';
		$scope.feedback = 'Reset done';
    };
	
	/*
	Test if case is red
	*/
    isRed = function(color) {
		return (color == RED);
    };
	/*
	Test if case is blue
	*/
    isBlue = function(color) {
		return (color == BLUE);
    };
	/*
	Test if case is free
	*/
   isFree = function(color) {
		return (color == FREE);
    };
}]);