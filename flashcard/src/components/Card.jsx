// card component to repesent individual flashcards
//card component raked {content} as a prop and displays it
// import React, { useState } from "react";
// import './Card.css';

// const Card = ({recipeName, image, prepTime, cookTime, link}) => {
//     const [isFlipped, setFliped] = useState(false);

//     const handleCardClick = () => {
//         setFliped(!isFlipped);
//     };

//     return (
//         <div className={`card${isFlipped ? 'flipped' : ''}`} onClick={handleCardClick}>
//             <div className="card">
//                 <div className="card-front">
//                     <img src={image} alt={recipeName} />
//                     <h2>{recipeName}</h2>
//                 </div>
//                 <div className="card-back">
//                     <h2>{recipeName}</h2>
//                     <p>Prep Time: {prepTime}</p>
//                     <p>Cook Time: {cookTime}</p>
//                     {link && <a href={link} target="_blank" rel="noopener noreferrer"><button className="view-recipe">View Recipe</button></a>}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Card;


import React, { useState } from 'react';
import './Card.css';

const Card = ({ recipeName, image, prepTime, cookTime, link }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleCardClick = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleCardClick}>
            <div className="card-front">
                <img src={image} alt={recipeName} />
                <h2>{recipeName}</h2>
            </div>
            <div className="card-back">
                <h2>{recipeName}</h2>
                <p>Prep Time: {prepTime}</p>
                <p>Cook Time: {cookTime}</p>
                <a href={link} target="_blank" rel="noopener noreferrer">
                    <button>View Recipe</button>
                </a>
            </div>
        </div>
    );
};

export default Card;