import React, { useContext } from 'react'
import JumbotronImage from './JumbotronImage'
import MealsContainer from './MealsContainer';
import axios from 'axios';
import {useEffect, useState} from 'react';
import { MyContext } from '../contexts/context';





function Home() {
  const {meals, setMeals} = useContext(MyContext)

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php').then(res => res.json()).then(data => {setMeals(data.meals)});
  },[])
  console.log(meals);

  return (
    <div>
        <JumbotronImage />
        <MealsContainer meals={meals}/>
    </div>
  )
}

export default Home