import React, { useContext } from 'react'
import JumbotronImage from './JumbotronImage'
import MealsContainer from './MealsContainer';
import axios from 'axios';
import {useEffect, useState} from 'react';
import { MyContext } from '../contexts/context';


    const APIKEY = "c488888d957d42e8b5c88e4e7497b2e8";

function Home() {

  const {meals, setMeals} = useContext(MyContext)

  useEffect(() => {
    axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${APIKEY}&number=2`)
    .then(({data}) => setMeals(data.recipes))
    .catch((error) => console.log(error));
}, []);

  
  //   const [meal2, setMeal2] = useState([]);



  // useEffect(() => {
  //   axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?f=a`
  //   ).then(({data}) => setMeal2(data)).catch((error) => {console.log(error)});
  // },[])

  console.log(meals);

  return (
    <div>
        <JumbotronImage />
        <MealsContainer meals={meals}/>
    </div>
  )
}

export default Home