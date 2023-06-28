import React from 'react'
import '../styles.css'
import MealCard from './MealCard';

const MealsContainer = ({meals}) => {
    // console.log(meals);
    return (

    <div className='SandwichWrapper'>
        {meals.map((meal) => (
        <MealCard key={meal.idMeal}{...meal} />
        ))}
    </div>
    );
};

export default MealsContainer
