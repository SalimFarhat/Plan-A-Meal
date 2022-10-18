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


// if(user.favorite.length){
//   let requests = []
//   user.favorite.map((x) =>{
//     axios.get(`https://api.spoonacular.com/recipes/${user.favorite[i]}/information?apiKey=${APIKEY}&includeNutrition=false`)
//     .then(res => {
//       result.push(res.data)
//     }).catch(error => console.log(error))
//   })
//   Promise.all(...requests).then(res => console.log(res))

const APIKEY = "c488888d957d42e8b5c88e4e7497b2e8";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
    const { user } = useContext(MyContext);
    
    useEffect(() => {
      let result = [];
      if(user.favorite.length){
      for(let i = 0; user.favorite.length > i; i++){
        axios.get(`https://api.spoonacular.com/recipes/${user.favorite[i]}/information?apiKey=${APIKEY}&includeNutrition=false`)
    .then(res => {
      result.push(res.data)
    }).catch(error => console.log(error))
    }
  }
  setFavorites(result);
  // console.log(favorites)
        
    }, [user])
    
  favorites.map((e) => console.log(e));

    if(!user.favorite.length){
        return (<div>
          <h3>No favorites found!</h3>
          <LinkContainer to="/">
          <Button>Add some delicious dishes!</Button>
          </LinkContainer>
          </div>)
    }

  return (
    <>
    <div>
      <h3>Your favorites:</h3>
      {favorites.map((e) => (    
      <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={e.image}/>
    <Card.Body>
        <Card.Title>{e.title}{e.name}</Card.Title>
        <MealModal summary={e.summary} content={e.content} title={e.title} name={e.name} id={e.id}/>
    </Card.Body>
  </Card>))}


    </div>
    </>
  )
}

export default Favorites

    
{/* <div className='SandwichWrapper'>
{favorites.map((e) => (
<MealCard key={e.id}{...e} />
))}
</div> */}


  //       <Card style={{ width: '18rem' }}>
  //   <Card.Img variant="top" src={image}/>
  //   <Card.Body>
  //       <Card.Title>{title}{name}</Card.Title>
  //       <MealModal summary={summary} content={content} title={title} name={name} id={id}/>
  //   </Card.Body>
  // </Card>