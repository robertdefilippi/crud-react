// Reducers update the state object in your store.
// Actions describe that something happened, but not "how" things happened / changed
// Reducers say "how"

// Set the initial state of the recipe object
const INITIAL_STATE = {
    recipes: [],
    recipe: null,
    isFetching: false,
    error: null,
    successMsg: null,
    showDeleteModal: false,
    recipeToDelete: null,
    showEditModal: false,
    recipeToEdit: null,
};

// For recipe and recipes, there are three actions: REQUEST, SUCCESS, and FAIL
// These are from recipeActions.js
// Each will have different results
export const recipeReducer = (currentState = INITIAL_STATE, action) => {

    // Determine the type of action
    switch (action.type) {

        case 'FETCH_RECIPES_REQUEST':
            return {
                ...currentState,
                recipes: [],
                recipe: null,
                isFetching: true,
                error: null,
                successMsg: null,
                showDeleteModal: false,
                recipeDelete: null,
                showEditModal: false,
                recipeEdit: null,
            };

        case 'FETCH_RECIPES_SUCCESS':
            return {
                ...currentState,
                recipes: action.recipes,
                recipe: null,
                isFetching: false,
                error: null,
                successMsg: action.message,
                showDeleteModal: false,
                recipeToDelete: null,
                showEditModal: false,
                recipeToEdit: null,
            };

        case 'FETCH_RECIPES_FAILED':
            return {
                ...currentState,
                recipes: [],
                recipe: null,
                isFetching: false,
                error: action.error,
                successMsg: null,
                showDeleteModal: false,
                recipeToDelete: null,
                showEditModal: false,
                recipeToEdit: null,
            };

        case 'FETCH_RECIPE_REQUEST':
            return {
                ...currentState,
                recipes: currentState.recipes,
                recipe: null,
                isFetching: true,
                error: null,
                successMsg: null,
                showDeleteModal: false,
                recipeDelete: null,
                showEditModal: false,
                recipeEdit: null,
            };

        case 'FETCH_RECIPE_SUCCESS':
            return {
                ...currentState,
                recipes: currentState.recipes,
                recipe: action.recipe,
                isFetching: false,
                error: null,
                successMsg: action.message,
                showDeleteModal: false,
                recipeDelete: null,
                showEditModal: false,
                recipeEdit: null,
            };

        case 'FETCH_RECIPE_FAILED':
            return {
                ...currentState,
                recipes: [],
                recipe: null,
                isFetching: false,
                error: action.error,
                successMsg: null,
                showDeleteModal: false,
                recipeDelete: null,
                showEditModal: false,
                recipeEdit: null,
            };

        default:
            return currentState;
    }
};

export default recipeReducer;