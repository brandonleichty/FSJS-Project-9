(function () {
    'use strict';

    angular
        .module('app')
        .controller('RecipeDetailController', RecipeDetailController);

    function RecipeDetailController($scope, $location, $routeParams, dataService) {

    
    $scope.recipe = {
        name: "",
        description: "",
        category: "",
        prepTime: "",
        cookTime: "",
        ingredients: [],
        steps: []
    };

    $scope.categories = [];
        $scope.foodItems = [];
        $scope.errors = [];

    if ($location.url() !== "/add") {
        let recipeID = $routeParams.id;
        dataService.getRecipe(recipeID, function (response){
            $scope.recipe = response.data;
        });
    }


    // dataService.getRecipes(function (response){
    //         $scope.recipes = response.data;
    //     });


    // Get complete list of categories and assign the data to $scope.categories
    dataService.getCategories(function (response) {
        $scope.categories = response.data;
    });

    $scope.redirectHome = function() {
        $location.path('/');
    }


    dataService.getFoodItems(function(response){
        $scope.foodItems = response.data;
    });
    

    $scope.deleteStep = function(index) {
            $scope.recipe.steps.splice(index, 1);
        }


     $scope.addIngredient = function() {
         $scope.recipe.ingredients.push({});
    }


    $scope.deleteIngredient = function(index) {
        $scope.recipe.ingredients.splice(index, 1);
    }

   $scope.addStep = function() {
         $scope.recipe.steps.push({});
    }


    $scope.saveRecipe = function() {
            if ($scope.recipe._id) { // Editing an existing recipe
                dataService.updateRecipe($scope.recipe);
            } else { // Saving a new recipe
                dataService.addRecipe($scope.recipe);
            }

            $location.path('/');
        }
        
}
    
})();