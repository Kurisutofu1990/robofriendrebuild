import React, {Component} from 'react';
import Cardlist from './Cardlist';
import SearchBox from './SearchBox'
import Scroll from "./Scroll"

class App extends Component {
	constructor(){
		super()
		this.state ={
			robots: [],
			searchfield: ''
		}
	}

// to fetch, abrufen
	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
		.then(response=> response.json())
		.then(users => this.setState({ robots: users}));
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value})
	}


	render() {
		const filteredRobots = this.state.robots.filter(robot => {
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		if (!this.state.robots.length) {
			return <h1 className="tc pa3 ba b--green bg-lightest-blue">Loading...</h1>
		} else {
			return (
				<div className= "tc">
					<h1>Robo Friends Rebuild</h1>
					<SearchBox searchChange={this.onSearchChange}/>
					<Scroll>
						<Cardlist robots={filteredRobots}/>
					</Scroll>
				</div>

			);
		}
	}
}

export default App;