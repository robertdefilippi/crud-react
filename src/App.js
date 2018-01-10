import React, {Component} from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "",
            usernames: [],
            express: ""

        };
    }


    componentDidMount() {
        fetch('/foo')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    message: data[0].text
                })
            });

        fetch('/users')
            .then(res => res.json())
            .then(data => {
                data.forEach(users => {
                    let newArray = this.state.usernames.slice();
                    newArray.push(users);
                    this.setState({
                        usernames: newArray
                    })
                });
            })
            .catch(function (error) {
                console.log(error);
            });

        fetch('/api/hello')
            .then(data => data.json())
            .then(result => {
                this.setState({
                    message: result.express
                });
            });

    }

    render() {
        return (
            <div className="App">
                <h1>Users</h1>
                <p>The current state is {this.state.message}</p>
                {this.state.usernames.map(user =>
                <div key={user.id}>{user.username}</div>
                )}
                <p>{this.state.message}</p>
            </div>
        );
    }
}

export default App;