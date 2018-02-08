// Actions are object payloads and .Action are methods to action objects
// These change the state in the reducer files

// Define endpoint
const apiUrl = "/api/";

// TODO Change toggleAddBook when compiling correctly; may not be possible
export const toggleAddBook = () => {
    return {
        type: 'TOGGLE_ADD_RECIPE'
    }
};

// Functions after the fetch has been resolved

export const addNewRecipe = (recipe) => {
};

export const deleteRecipe = (recipe) => {
};

export const editRecipe = (recipe) => {
};

export const fetchRecipes = () => {

    // .dispatch sends action to the store
    return (dispatch) => {
        dispatch(fetchRecipesRequest());

        return fetch(apiUrl)
            .then(response => {

                // If successfully connected to API ..
                if (response.ok) {
                    response.json()
                        .then(data => {
                            dispatch(fetchRecipesSuccess(data.recipe, data.message));
                        })
                }

                // Catch error
                else {
                    response.json().then(error => {
                        dispatch(fetchRecipesFailed(error));
                    })
                }
            })
    }
};

// Fetch has three parts: request, success, fail
export const fetchRecipesRequest = () => {
    return {
        type: 'FETCH_RECIPES_REQUEST'
    }
};

export const fetchRecipesSuccess = (recipe, message) => {
    return {
        type: 'FETCH_RECIPES_SUCCESS',
        recipe: recipe,
        message: message,
        receivedAt: Date.now
    }
};

export const fetchRecipesFailed = (error) => {
    return {
        type: 'FETCH_RECIPES_FAILED',
        error
    }
};

export const fetchRecipeById = (recipeId) => {

    return (dispatch) => {
        dispatch(fetchRecipeRequest());

        return fetch(apiUrl + recipeId)
            .then(response => {
                console.log(response);

                // If successful return the recipe that matches it
                if (response.ok) {
                    response.json().then(data => {
                        dispatch(fetchRecipeSuccess(data.recipe[0], data.message));
                    })
                }

                // Return error message
                else {
                    response.json().then(error => {
                        dispatch(fetchRecipeFailed(error));
                    })
                }
            })
    }
};

// Three fetch action: request, success, and fail
export const fetchRecipeRequest = () => {

    return {
        type: 'FETCH_RECIPE_REQUEST'
    }
};

//Sync action
export const fetchRecipeSuccess = (recipe, message) => {

    return {
        type: 'FETCH_RECIPE_SUCCESS',
        recipe: recipe,
        message: message,
        receivedAt: Date.now
    }
};

export const fetchRecipeFailed = (error) => {

    return {
        type: 'FETCH_RECIPE_FAILED',
        error
    }
};