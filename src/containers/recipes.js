// The components inside this director are aware of the app’s state
// as they are connected to the redux store.

import { connect } from 'react-redux';
import * as recipeActions from '../actions/recipeActions';
import Recipes from '../components/recipes'; // Imports cousin recipes.js component

const mapStateToProps = (state, ownProps) => {
    return {
        mappedRecipeState: state.recipeState
    }
};

// map actions to props
const mapDispatchToProps = (dispatch) => {

    return {
        fetchRecipes: () => dispatch(recipeActions.fetchRecipes()),
        mappedDeleteRecipe: recipeToDelete => dispatch(recipeActions.deleteRecipe(recipeToDelete)),
        mappedEditRecipe: recipeToEdit => dispatch(recipeActions.editRecipe(recipeToEdit))
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Recipes);