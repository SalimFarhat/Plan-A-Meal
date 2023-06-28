import React from 'react'
import '../styles.css';
import {Button, InputGroup, Form} from 'react-bootstrap';
import {useContext, useEffect, useState} from 'react';
import {MyContext} from '../contexts/context';
import axios from 'axios';
import Dropdown from 'react-bootstrap/Dropdown';



const JumbotronImage = () => {
  const {meals, setMeals}  = useContext(MyContext);
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = () => {
    console.log(searchInput);
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`).then(res => res.json()).then(data => {
      setMeals(data.meals)
    })

    setSearchInput("");
  }
  const handleKeypress = (e) => {
    if(e.keyCode === 13){
      handleSearch();
      setSearchInput("");
    }
  }

  const handleSelect = (e) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${e}`).then(res => res.json()).then(data => setMeals(data.meals))
  }
  
  const getRandomMeal = () => {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php').then(res => res.json()).then(data => {
      setMeals(data.meals)
    });
      }

  return (
    <div className='Jumbo'>
        <h1>Plan your next meal!</h1>
        <h2>And find where to get the ingredients!</h2>
        <div className='searchButton'>
        <Dropdown onSelect={handleSelect}>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Search By Letter
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item eventKey="a">A</Dropdown.Item>
        <Dropdown.Item eventKey="b">B</Dropdown.Item>
        <Dropdown.Item eventKey="c">C</Dropdown.Item>
        <Dropdown.Item eventKey="d">D</Dropdown.Item>
        <Dropdown.Item eventKey="e">E</Dropdown.Item>
        <Dropdown.Item eventKey="f">F</Dropdown.Item>
        <Dropdown.Item eventKey="g">G</Dropdown.Item>
        <Dropdown.Item eventKey="h">H</Dropdown.Item>
        <Dropdown.Item eventKey="i">I</Dropdown.Item>
        <Dropdown.Item eventKey="j">J</Dropdown.Item>
        <Dropdown.Item eventKey="k">K</Dropdown.Item>
        <Dropdown.Item eventKey="l">L</Dropdown.Item>
        <Dropdown.Item eventKey="m">M</Dropdown.Item>
        <Dropdown.Item eventKey="n">N</Dropdown.Item>
        <Dropdown.Item eventKey="o">O</Dropdown.Item>
        <Dropdown.Item eventKey="p">P</Dropdown.Item>
        <Dropdown.Item eventKey="r">R</Dropdown.Item>
        <Dropdown.Item eventKey="s">S</Dropdown.Item>
        <Dropdown.Item eventKey="t">T</Dropdown.Item>
        <Dropdown.Item eventKey="v">V</Dropdown.Item>
        <Dropdown.Item eventKey="w">W</Dropdown.Item>
        <Dropdown.Item eventKey="y">Y</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
   
    </div>
    <div className='searchButton'>
    <InputGroup className="mb-3">
<Form.Control
placeholder="Search For A Meal By name"
aria-label="Search For A Meal By name"
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
    <div className='searchButton2'>
      
    <Button variant="success" onClick={getRandomMeal}>Click for random meal</Button>

    </div>
    </div>
);
};

export default JumbotronImage




// const handleSearch = () => {
//   console.log(searchInput);

//   fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${searchInput}`).then(res => res.json()).then(data => {
//     console.log(data.meals)
//     setMeals(data.meals)
//   })

//   setSearchInput("");
// }
// const handleKeypress = (e) => {
//   if(e.keyCode === 13){
//     handleSearch();
//     setSearchInput("");
//   }
// }