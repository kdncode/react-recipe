import React, { Component } from 'react';
import './App.css';
import Form from './components/Form'
import Recipes from './components/Recipes';

// http://food2fork.com/
// const API_KEY = '18736d60e07b7400ea318e34acffdf93'; 
   const API_KEY = 'aedbb2d845263a9cad4857bcec585195';

class App extends Component {

	state = {
		recipes: []
	}

	// Async Await
	getReceipe = async (e) => {
		const recipeName = e.target.elements.recipeName.value;
		e.preventDefault();
		
		const api_call = await fetch(`http://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${recipeName}`);
		
		const data = await api_call.json();

		this.setState({ recipes: data.recipes })

		console.log(this.state.recipes)
	}

	componentDidMount = () => {
		const json = localStorage.getItem('recipes');
		const recipes = JSON.parse(json);
		this.setState({ recipes: recipes });
	}
	

	componentDidUpdate = () => {
		const recipes = JSON.stringify(this.state.recipes);
		localStorage.setItem('recipes', recipes);
	}
	

	render() {
		return (
			<div className="App">
				<header className="App-header">
				<h1 className="App-title">Recipe Search</h1>
				</header>
				<Form getReceipe={this.getReceipe}/>
				<Recipes recipes={this.state.recipes}/>
			</div>
		);
	}
}

export default App;