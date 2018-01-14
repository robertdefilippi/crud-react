// The components inside this director are aware of the app’s state
// as they are connected to the redux store.

import { connect } from 'react-redux';
import * as recipeActions from '../actions/recipeActions';
import Recipe from '../components/recipe';
// map state from store to props
const mapStateToProps = (state) => {
    return {
        //you can now say this.props.mappedAppSate
        mappedTodoState: state.todoState
    }
}
// map actions to props
const mapDispatchToProps = (dispatch) => {
    return {
        //you can now say this.props.mappedAppActions
        mappedfetchTodoById: todoId => dispatch(todoActions.fetchTodoById(todoId))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Todo);