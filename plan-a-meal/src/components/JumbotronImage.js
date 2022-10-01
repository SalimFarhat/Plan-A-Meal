import React from 'react'
import '../styles.css';
import {Button, InputGroup, Form} from 'react-bootstrap';
import {useContext, useEffect, useState} from 'react';


const APIKEY = "e16906387a0cc1bcd5c55b39ba76cbe07d4f2f0c";

// `https://api.spoonacular.com/recipes/random?apiKey=${APIKEY}&number=5`

const JumbotronImage = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    getMeals();
  },[]);

  const getMeals = async () => {
    const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${APIKEY}&number=5`);
    console.log(api);
    const data = await api.json();
    console.log(data);
    setMeals(data);
  }
  console.log(meals);

  return (
    <div className='Jumbo'>
        <h1>Plan your next meal!</h1>
        <h2>And find where to get the ingredients!</h2>
        <div className='searchButton'>
        <InputGroup className="mb-3">
        <Form.Control
        placeholder="Search For A Meal"
        aria-label="Search For A Meal"
        aria-describedby="meal-search-button"
        />
        <Button variant="danger" id="meal-search-button">
        Button
        </Button>
        </InputGroup>
    </div>
    </div>
);
};

export default JumbotronImage