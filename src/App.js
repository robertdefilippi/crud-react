import React, {Component} from 'react';
import './App.css';

class App extends Component {
    state = {
        message: ""
    };

    componentDidMount() {
        fetch('/foo')
            .then(res => {
                console.log(res);
                return res.json();
                // .then(express => this.setState({ express }))
                // .then(() => console.log(this.state.message));
            });
    }

    render() {
        return (
            <div className="App">
                <h1>Users</h1>
                <p>The current state is {this.state.message}</p>
            </div>
        );
    }
}

export default App;