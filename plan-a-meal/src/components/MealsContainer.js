import React from 'react'
import '../styles.css'
import MealCard from './MealCard';

const MealsContainer = ({meals}) => {
    return (

    <div className='SandwichWrapper'>
        {meals.map((e) => (
        <MealCard key={e.id}{...e} />
        ))}
    </div>
    );
};

export default MealsContainer
