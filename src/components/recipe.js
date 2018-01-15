// Single Recipe component, not to be confused with Recipes

import React, {Component} from 'react';

export default class Recipe extends Component {

    componentDidMount() {
        this.props.mappedFetchRecipeById(this.props.params.id);
    }

    render() {

        const recipeState = this.props.mappedRecipeState;

        return (
            <div className="recipeDetail">
                <h2>Recipe Detail</h2>
                {!recipeState.recipe && recipeState.isFetching &&
                <div>
                    <p>Loading recipe....</p>
                </div>
                }
                {recipeState.recipe && !recipeState.isFetching &&
                <div>
                    <h3>{recipeState.recipe.recipeText}</h3>
                    <p>{recipeState.recipe.recipeDesc}</p>
                </div>
                }
            </div>
        );
    }
}