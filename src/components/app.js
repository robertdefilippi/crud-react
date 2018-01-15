// The main component of the CRUD app

import React, {Component} from 'react';
import { Navbar, Nav, NavItem, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './App.css';

export default class App extends Component {
    constructor(props){
        super(props);
        this.toggleAddRecipe = this.toggleAddRecipe.bind(this);
    }

    // Define method to add recipe
    toggleAddRecipe(e){
        // Prevent default when there are no recipes
        e.preventDefault();
        this.props.mappedToggleAddRecipe();
    }

    render(){
        return(
            <div>
                <Navbar inverse collapseOnSelect className="customNav">
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="/#">CRUD Recipe App</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <LinkContainer to={{ pathname: '/', query: {  } }}>
                                <NavItem eventKey={1}>Home</NavItem>
                            </LinkContainer>
                        </Nav>
                        <Nav pullRight>
                            <LinkContainer to={{ pathname: '/', query: {  } }} onClick={this.toggleAddRecipe}>
                                <NavItem eventKey={1}>Add Recipe</NavItem>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}