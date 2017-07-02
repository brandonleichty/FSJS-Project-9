(function(){
    'use strict';

angular
    .module('app')
    .service('dataService', dataService);


function dataService($http, $location, $routeParams) {

    // GET /api/recipes - gets all of the recipes
    this.getRecipes = function (callback) {
        $http.get('/api/recipes').then(successCallback, errorCallback);
    };

    // GET /api/categories - gets all of the categories
    this.getCategories = function (callback) {
        $http.get('/api/categories').then(successCallback, errorCallback);
    };

    // GET /api/fooditems - gets all of the food items
    this.getFoodItems = function (callback) {
        $http.get('/api/fooditems').then(successCallback, errorCallback);
    };

    // GET /api/recipes?category={category}
    // Gets all of the recipes for the specified category
    this.getRecipesByCategory = function (category, callback) {
        $http.get('/api/recipes?category=' + category).then(successCallback, errorCallback);
    };

    // GET /api/recipes/{id} - Gets the recipe for the specified ID
    this.getRecipe = function (recipeId, callback) {
        $http.get('/api/recipes/' + recipeId).then(callback);

    }

    // POST /api/recipes - Adds a recipe
    this.addRecipe = function (recipe, callback) {
        $http.post('/api/fooditems', recipe).then(successCallback, errorCallback);

    }

    // PUT /api/recipes/{id} - dpdates the recipe for the specified ID
    this.updateRecipe = function (recipe, callback) {
        $http.put('/api/recipes/' + recipe._id, recipe).then(successCallback, errorCallback);

    }

    // DELETE /api/recipes/{id} - deletes the recipe for the specified ID
    this.deleteRecipe = function (recipeId, callback) {
        $http.delete('/api/recipes/' + recipeId).then(successCallback, errorCallback);

    }
}

})();
