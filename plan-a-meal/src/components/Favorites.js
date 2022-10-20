import React, {useContext, useEffect, useState} from 'react'
import { Button } from 'react-bootstrap';
import { MyContext } from '../contexts/context';
import {LinkContainer} from 'react-router-bootstrap';
import '../styles.css';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import MealModal from './MealModal';
import MealCard from './MealCard';
import FavoritesContainer from './FavoritesContainer';
import MealsContainer from './MealsContainer';
import { useNavigate } from "react-router-dom";


const Favorites = () => {
    const { user } = useContext(MyContext);
    const [favorites, setFavorites] = useState([]);
    const [loading, setLoading] = useState(true);
    const History = useNavigate();


    
    useEffect(() => {
      if(user.favorite.length > 0){
        let requests = [];
        user.favorite.map(e => fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${e}`).then((res) => res.json()).then(data => {  
        requests.push(data.meals[0])}))
        setFavorites(requests);
      }
        
    }, [user])
    setTimeout(() => {
      setLoading(false)
  }, 500)

    if(loading){
      return(
      <h1>Please wait a moment</h1>
)
    }else{
      return (
        <>
        <div>
          <h3>Your favorites:</h3>
          <h1>Please work</h1>
          <FavoritesContainer favorites={favorites}/>

        </div>
        </>
      )
    }
  }


export default Favorites;

    
{/* <div className='SandwichWrapper'>
{favorites.map((e) => (
<MealCard key={e.id}{...e} 
))}
</div> */}


// <Card style={{ width: '18rem' }}>
// <Card.Img variant="top" src={strMealThumb}/>
// <Card.Body>
//     <Card.Title>{strMeal}</Card.Title>
//     <MealModal strInstructions={strInstructions} strMeal={strMeal} idMeal={idMeal} strSource={strSource}/>
// </Card.Body>
// </Card>

