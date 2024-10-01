/*
make flashcards for baking recipes from sally's baking addiction & very highly rated baking websites.
front of card: image, recipe name, prep time, cook time, total time.
back of card: ingredients, recipe instructions, link to actual website.
when you click on card, it flips across the y axis to show the back of the card.
let the name of the app be: 'FAMOUS BAKERS' or 'Sprinkle of That'.
let the order of the flashcards be random.
*/


import './App.css';
import {useState} from 'react';
import CardList from './components/CardList';


const App = () => {


  return (
    <div className="App">
      <div className="header">
        <h1>FAMOUS BAKERS</h1>
        {/* <h2>Sally's Kitchen: Bread, Breakfast, Cakes, Cookies, & Pies. yum!</h2> */}
        <h2>Bread, Breakfast, Cakes, Cookies, Pies, yum!</h2>
        <h3 className="cardSetDescription">Number of recipes: 10</h3>
        {/* <img className="background" src={background} alt="background" /> */}
      </div>
      <div className="card-wrapper">
        <CardList /> {/*rendering the CardList component within the App component*/}
      </div>
    </div>
  );
}

export default App;