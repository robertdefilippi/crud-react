import React, {Component} from 'react';
import {Alert, Glyphicon, Button, Modal} from 'react-bootstrap';
import {Link} from 'react-router';

export default class Recipes extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.fetchRecipes();
    }

    // TODO what is that?
    showEditModal(bookToEdit) {
        //this.props.mappedshowEditModal(todoToEdit);
    }

    hideEditModal() {
        //this.props.mappedhideEditModal();
    }

    hideDeleteModal() {
        //this.props.mappedhideDeleteModal();
    }

    showDeleteModal(todoToDelete) {
        //this.props.mappedshowDeleteModal(todoToDelete);
    }

    render() {
        const recipeState = this.props.mappedRecipeState;
        const recipes = recipeState.recipes;
        return (
            <div className="col-md-12">
                <h3 className="centerAlign">Recipes</h3>
                {!recipes && recipeState.isFetching &&
                <p>Loading recipes .... </p>
                }
                {recipes.length <= 0 && !recipeState.isFetching &&
                <p>No Recipes Available. Add A Recipe Here.</p>
                }
                {recipes && recipes.length > 0 && !recipeState.isFetching &&
                <table className="table booksTable">
                    <thead>
                    <tr>
                        <th>Recipe</th>
                        <th className="textCenter">Edit</th>
                        <th className="textCenter">Delete</th>
                        <th className="textCenter">View</th>
                    </tr>
                    </thead>
                    <tbody>
                    {recipes.map((recipe, i) => <tr key={i}>
                        <td>{recipe.recipeText}</td>
                        <td className="textCenter"><Button onClick={() => this.showEditModal(recipe)} bsStyle="info"
                                                           bsSize="xsmall"><Glyphicon glyph="pencil"/></Button></td>
                        <td className="textCenter"><Button onClick={() => this.showDeleteModal(recipe)} bsStyle="danger"
                                                           bsSize="xsmall"><Glyphicon glyph="trash"/></Button></td>
                        <td className="textCenter"><Link to={`/${recipe.id}`}>View Details</Link></td>
                    </tr>)
                    }
                    </tbody>
                </table>
                }
            </div>
        );
    }
}