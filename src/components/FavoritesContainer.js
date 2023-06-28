import React, { useEffect, useState } from 'react'
import '../styles.css'
import MealCard from './MealCard';

const FavoritesContainer = ({favorites}) => {
    const[loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false)
        }, 500)

    }, [favorites])
    if(loading){
        return(
            <h1>Loading</h1>
        )
    }else{
    return (

    <div className='SandwichWrapper'>
        {favorites.map((e) => (
        <MealCard key={e.id}{...e} />
        ))}
    </div>
    );}
};

export default FavoritesContainer
