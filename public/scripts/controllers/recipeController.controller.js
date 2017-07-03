(function () {
    'use strict';

    angular
        .module('app')
        .controller('RecipesController', RecipesController);

    function RecipesController($scope, $http, $location, $routeParams, dataService) {
        
    

        // Get complete list of categories
        dataService.getCategories(function (response) {
            $scope.categories = response.data;
        });

        dataService.getRecipes(function (response){
            $scope.recipes = response.data;
        });
        
        //delete selected recipe from database and from $scope.recipe array
		$scope.delete = function(recipe_id, index) {
            dataService.deleteRecipe(recipe_id);
            $scope.recipes.splice(index, 1);
        }
	}
    
})();