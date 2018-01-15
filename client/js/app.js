angular.module("R3D2", [ "ngSanitize", "ui.tinymce", "Directives" ])
.controller("R3D2Controller", function($scope, $location, $filter) {

	//value
	$scope.vector = ["1","2","3","4","5"] ;
	$scope.currentView = 'vector';
	//$scope.dossiers = mailService.getDossiers();
});
