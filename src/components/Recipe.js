import React, { Component } from 'react';


// const API_KEY = '18736d60e07b7400ea318e34acffdf93'; 
const API_KEY = 'aedbb2d845263a9cad4857bcec585195';


class Recipe extends Component {

    state = {
        activeRecipe: []
    }

    componentDidMount = async () => {
        const title = this.props.location.state.recipe;
		const req = await fetch(`http://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${title}`);		
		const res = await req.json();
		console.log(res.recipes[0])
    }
    

    render() {
        return (
            <div>
                console.log(this.props)
            </div>
        );
    }
}

export default Recipe;