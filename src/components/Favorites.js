import React, {useContext, useEffect, useState} from 'react'
import { MyContext } from '../contexts/context';
import '../styles.css';
import FavoritesContainer from './FavoritesContainer';


const Favorites = () => {
    const { user } = useContext(MyContext);
    const [favorites, setFavorites] = useState([]);
    const [loading, setLoading] = useState(true);


    
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
          <div className='FavoritesHeader'>
          <h3>Your favorites:</h3>
          </div>
          <FavoritesContainer favorites={favorites}/>

        </div>
        </>
      )
    }
  }


export default Favorites;
