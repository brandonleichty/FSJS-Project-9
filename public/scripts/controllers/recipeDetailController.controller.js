(function () {
    'use strict';

    angular
        .module('app')
        .controller('RecipeDetailController', RecipeDetailController);

    function RecipeDetailController($scope, $location, $routeParams, dataService) {


    $scope.redirectHome = function() {
        $location.path('/');
    }

}
    
})();