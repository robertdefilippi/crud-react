// The components inside this director are aware of the app’s state
// as they are connected to the redux store.

import { connect } from 'react-redux';
import * as recipeActions from '../actions/recipeActions';
import Recipes from '../components/recipes';

const mapStateToProps = (state, ownProps) => {
    return {
        mappedRecipeState: state.recipeState
    }
};
// map actions to props
const mapDispatchToProps = (dispatch) => {
    return {

        fetchRecipes: () => dispatch(todoActions.fetchRecipes()),
        mappedDeleteRecipe: recipeToDelete => dispatch(todoActions.deleteRecipes(recipeToDelete)),
        mappedEditRecipe: recipeToEdit => dispatch(todoActions.editRecipe(recipeToEdit))
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Recipes);