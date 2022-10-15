import React from 'react'
import '../styles.css';
import {Button, InputGroup, Form} from 'react-bootstrap';
import {useContext, useEffect, useState} from 'react';
import {MyContext} from '../contexts/context';
import axios from 'axios';

// setMeals(data.recipes)

const APIKEY = "c488888d957d42e8b5c88e4e7497b2e8";

// https://api.spoonacular.com/recipes/autocomplete?apiKey=${APIKEY}&number=10&query=${searchInput}

// https://api.spoonacular.com/food/search?apiKey=${APIKEY}&query=${searchInput}&number=2

// https://api.spoonacular.com/recipes/?apiKey=c488888d957d42e8b5c88e4e7497b2e8&656846/information

const JumbotronImage = () => {
  const {meals, setMeals}  = useContext(MyContext);
  const [searchInput, setSearchInput] = useState("");

// console.log(data.searchResults[0].results)

  const handleSearch = () => {
    console.log(searchInput);
    axios.get(`https://api.spoonacular.com/food/search?apiKey=${APIKEY}&query=${searchInput}&number=2`)
    .then(({data}) => { setMeals(data.searchResults[0].results)
    
  })
    .catch((error) => console.log(error));
    setSearchInput("");
  }
  const handleKeypress = (e) => {
    if(e.keyCode === 13){
      handleSearch();
      setSearchInput("");
    }
  }

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
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        onKeyDown={handleKeypress}
        />
        <Button variant="danger" id="meal-search-button" onClick={handleSearch}>
        Button
        </Button>
        </InputGroup>
    </div>
    </div>
);
};

export default JumbotronImage