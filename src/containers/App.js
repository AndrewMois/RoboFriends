import React, { Component } from "react";
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';


class App extends Component {

    // state is a plain JS object that allows to communicate with the components. It is a description of the app
    // Constructor and Render comes prebuilt with React
    // App.js is a smart component because it has state!
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }
    // ALWAYS use arrow functions when creating your own functions
    onSearchChange = event => {
        // we don't change state directly, we use setState
        this.setState({ searchfield: event.target.value });
        // we need to change state to update it with every change
    }

    render() {

        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        });

        // in case loading takes too long, we can add a loading screen
        if (!robots.length) {
            return <h1>Loading</h1>
        } else {

            return (
                <div className="tc">
                    <h1 className="f1">RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                    <CardList robots={filteredRobots} />
                    </Scroll>
                </div>
            )
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }));
    }
}

export default App;