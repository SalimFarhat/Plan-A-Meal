import React, {useContext, useState} from 'react';
import {Button, Modal} from 'react-bootstrap';
import AppContext, { MyContext } from '../contexts/context';
import axios from 'axios';


const MealModal = ({idMeal, strMealThumb, strSource, strMeal, strInstructions}) => {
  const {user, setUser} = useContext(MyContext);
  
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleAddToFavorites = () => {
    setLoading(true);
    axios.post(`/add-favorites`, {mealId: idMeal})
    .then(({data}) => {
      setLoading(false);
      setUser(data);
      alert(`Meal added to favorites`);
    })
    .catch(error => {
      setLoading(false);
      console.log(error)}
      )
  }
  const handleRemoveFromFavorites = () =>{
    setLoading(true);
    axios.post(`/remove-favorites`, {mealId: idMeal})
    .then(({data}) => {
      setLoading(false);
      setUser(data)
      alert(`Meal removed from favorite`);
    }).catch(error => {
      setLoading(false);
      console.log(error)}
      )
  }



    return (
      <>
      <Button variant="primary" onClick={handleShow}>
        See More
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{strMeal}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{strInstructions}</Modal.Body>
        {!strSource ? (<Modal.Body>Enjoy!</Modal.Body>) : (<Modal.Body>Original recipe: <a href={`${strSource}`}>{strSource}</a></Modal.Body>)
        }
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {user && (
            <>
            {user.favorite.includes(idMeal) ? (<Button variant="danger" onClick={handleRemoveFromFavorites} disabled={loading}> Remove from favorites </Button>) : (<Button variant="primary" onClick={handleAddToFavorites} disabled={loading}>Add to favorites</Button>)}
            </>

          )}
        </Modal.Footer>
      </Modal>
    </>
      );
}

export default MealModal;


{/* <Modal.Body dangerouslySetInnerHTML={{__html: summary}}></Modal.Body> */}