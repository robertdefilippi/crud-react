import React, {Component} from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "",
            usernames: []
        };
    }


    componentDidMount() {
        fetch('/foo')
            .then(res => res.json())
            .then(data => {
                console.log(data[0].text);
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
    }

    render() {
        return (
            <div className="App">
                <h1>Users</h1>
                <p>The current state is {this.state.message}</p>
                {/*<p>{this.state.usernames}</p>*/}
                {this.state.usernames.map(user =>
                <div key={user.id}>{user.username}</div>
                )}
            </div>
        );
    }
}

export default App;