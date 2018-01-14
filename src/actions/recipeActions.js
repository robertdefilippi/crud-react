// Connect to the api endpoint set up in the node server
// TODO change endpoint from /api to /recipe

const apiUrl = "/api/";
export const toggleAddRecipe = () => {
    return {
        type: 'TOGGLE_ADD_RECIPE'
    }
};

export const addNewRecipe = (recipe) => {
};

export const deleteRecipe = (recipe) => {
};

export const editRecipe = (recipe) => {
};

export const fetchRecipe = () => {
    // Returns an async dispatcher function
    return (dispatch) => {

        dispatch(fetchRecipesRequest());


        return fetch(apiUrl)
            .then(response => {

                // If success
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

export const fetchRecipesRequest = () => {
    return {
        type: 'FETCH_RECIPES_REQUEST'
    }
};

//Sync action
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
        type: 'FETCH_RECIPIES_FAILED',
        error
    }
};

export const fetchRecipeById = (recipieId) => {

    return (dispatch) => {
        dispatch(fetchRecipeRequest());

        return fetch(apiUrl + recipieId)
            .then(response => {
                console.log(response);

                // If successful return the first recipe
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