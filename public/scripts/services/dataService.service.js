(function(){
    'use strict';

angular
    .module('app')
    .service('dataService', dataService);


function dataService($http, $location, $routeParams) {

    // GET /api/recipes - gets all of the recipes
    this.getRecipes = function (callback) {
        $http.get('/api/recipes').then(callback,errorCallback);
        return callback.data;
    }

    // GET /api/categories - gets all of the categories
    this.getCategories = function (callback) {
        $http.get('/api/categories').then(callback, errorCallback);
    };

    // GET /api/fooditems - gets all of the food items
    this.getFoodItems = function (callback) {
        $http.get('/api/fooditems').then(callback, errorCallback);
    };

    // GET /api/recipes?category={category}
    // Gets all of the recipes for the specified category
    this.getRecipesByCategory = function (category, callback) {
        $http.get('/api/recipes?category=' + category).then(callback, errorCallback);
    };

    // GET /api/recipes/{id} - Gets the recipe for the specified ID
    this.getRecipe = function (recipeId, callback) {
        $http.get('/api/recipes/' + recipeId).then(callback, errorCallback);

    }

    // POST /api/recipes - Adds a recipe
    this.addRecipe = function (recipe, callback) {
        $http.post('/api/recipes', recipe).then(callback, errorCallback);
    }

    // PUT /api/recipes/{id} - dpdates the recipe for the specified ID
    this.updateRecipe = function (recipe, callback) {
        $http.put('/api/recipes/' + recipe._id, recipe).then(callback);
    }

    // DELETE /api/recipes/{id} - deletes the recipe for the specified ID
    this.deleteRecipe = function (recipeId, callback) {
        $http.delete('/api/recipes/' + recipeId).then(callback, errorCallback);

    }
}

function errorCallback(error) {
    console.log(error);
}

})();
