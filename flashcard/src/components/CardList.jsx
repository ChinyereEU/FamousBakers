import React, {useState, useEffect} from "react";
import './CardList.css';
import Card from './Card';

// import all my images
import bananaBread from '../assets/images/bananaBread.jpg';
import breakfastRolls from '../assets/images/breakfastRolls.jpg';
// import tresLeches from '../assets/images/tresLeches.jpg';
import tresleches2 from '../assets/images/tresleches2.jpg';
import lemonBlueberry from '../assets/images/lemonBlueberry.jpg';
import doubleChocoChipCookies from '../assets/images/doubleChocoChipCookies.jpg';
import pie from '../assets/images/pie.jpg';
import cheeseCake from '../assets/images/cheeseCake.jpg';
import mugCake from '../assets/images/mugCake.jpg';
import carrots from '../assets/images/carrots.jpg';
import waffles from '../assets/images/waffles.jpg';

// create an array of objects where each obj represents a card pair
const cardPairs = [
    {name: "Banana Bread", recipeName: "Banana Bread", image: bananaBread, prepTime: "10 minutes", cookTime: "65 minutes", link: "https://sallysbakingaddiction.com/best-banana-bread-recipe/#tasty-recipes-66473"},
    {name: "Savory Breakfast Rolls", recipeName: "Savory Breakfast Rolls", image: breakfastRolls, prepTime: "10 minutes", cookTime: "40 minutes", link: "https://www.simplyrecipes.com/savory-breakfast-rolls-recipe-8412268"},
    {name: "Tres Leches Cake", recipeName: "Tres Leches Cake", image: tresleches2, prepTime: "90 minutes", cookTime: "65 minutes", link: "https://tastesbetterfromscratch.com/tres-leches-cake/"},
    {name: "Lemon Blueberry", recipeName: "Lemon Blueberry Pound Cake", image: lemonBlueberry, prepTime: "20 minutes", cookTime: "60 minutes", link: "https://www.onceuponachef.com/recipes/lemon-blueberry-pound-cake.html"},
    {name: "Double Chocolate Chip Cookies", recipeName: "Double Chocolate Chip Cookies", image: doubleChocoChipCookies, prepTime: "10 minutes", cookTime: "65 minutes", link: "https://tastesbetterfromscratch.com/jumbo-chocolate-cookies/"},
    {name: "pie", recipeName: "Mini Pecan Pies", image: pie, prepTime: "160 minutes", cookTime: "18 minutes", link: "https://sallysbakingaddiction.com/mini-pecan-pies/"},
    {name: "cheeseCake", recipeName: "No-Bake Cheesecake", image: cheeseCake, prepTime: "20 minutes", cookTime: "120 minutes", link: "https://tastesbetterfromscratch.com/no-bake-cheesecake/"},
    {name: "mugCake", recipeName: "Gooey Oreo Mug Cake", image: mugCake, prepTime: "4 minutes", cookTime: "1 minutes", link: "https://tastesbetterfromscratch.com/oreo-mug-cake/"},
    {name: "carrots", recipeName: "Roasted Carrots", image: carrots, prepTime: "10 minutes", cookTime: "20 minutes", link: "https://www.onceuponachef.com/recipes/roasted-carrots-with-thyme.html#tabrecipe"},
    {name: "waffles", recipeName: "Easy Gingerbread Waffles", image: waffles, prepTime: "25 minutes", cookTime: "15 minutes", link: "https://sallysbakingaddiction.com/gingerbread-waffles/#tasty-recipes-114764"},
];

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

const CardList = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [shuffledCards, setShuffledCards] = useState([]);

    useEffect(() => {
        setShuffledCards(shuffleArray([...cardPairs]));
    }, []);

    const nextCard = () => {
        //Increments the currentIndex to show the next card. It wraps around to the first card when the end of the array is reached.
        setCurrentIndex((prevIndex) => (prevIndex + 1) % shuffledCards.length);
    };

    const prevCard = () => {
        //decrements the currentIndex to show the previous card. It wraps around to the last card when the beginning of the array is reached.
        setCurrentIndex((prevIndex) => (prevIndex - 1 + shuffledCards.length) % shuffledCards.length);
    }

    const currentCard = shuffledCards[currentIndex];
    // map over each card pair and create a Card component for each
    return (
        <div className="card-wrapper">
            {currentCard && (
                <Card 
                    key={currentCard.name}
                    recipeName={currentCard.recipeName} 
                    image={currentCard.image}
                    prepTime={currentCard.prepTime}
                    cookTime={currentCard.cookTime}
                    link={currentCard.link}
                />
            )}
            <div className="navigation-buttons">
                <button className="nav-button" onClick={prevCard}>&larr;</button>
                <button className="nav-button" onClick={nextCard}>&rarr;</button>
            </div>
        </div>
    );
}


export default CardList;
