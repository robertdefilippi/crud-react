// Actions are object payloads and .Action are methods to action objects
// We need two functions: one for the app and one for the recipe object

export const toggleAddRecipe = () => {
    return {
        type: 'TOGGLE_ADD_RECIPE'
    }
};