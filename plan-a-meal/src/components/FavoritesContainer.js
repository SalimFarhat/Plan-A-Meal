import React from 'react'
import '../styles.css'
import MealCard from './MealCard';

const FavoritesContainer = ({favorites}) => {
    return (

    <div className='SandwichWrapper'>
        {favorites.map((e) => (
        <MealCard key={e.id}{...e} />
        ))}
    </div>
    );
};

export default FavoritesContainer
