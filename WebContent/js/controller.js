var myApp = angular.module('myApp', []);

myApp.controller('FirstAppController', ['$scope', function($scope) {
    /*
	Make a movement ... or not
	*/
	$scope.move = function($toBeMoved) {
		var id = $toBeMoved.css('color');
        alert("Trying moving " + id);
    };

	/*
	Reset the game
	*/
    $scope.reset = function() {
        //TO DE DONE
    };
}]);