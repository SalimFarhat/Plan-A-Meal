import React from 'react';
import '../styles.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import MealModal from './MealModal';


const MealCard = ({id, title, image, summary, name, content}) => {

  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={image}/>
    <Card.Body>
        <Card.Title>{title}{name}</Card.Title>
        <MealModal summary={summary} content={content} title={title} name={name} id={id}/>
    </Card.Body>
  </Card>
  )
}

export default MealCard;

// <Card style={{ width: '18rem' }}>
// <Card.Img variant="top" src={image}/>
// <Card.Body>
//     <Card.Title>{title}{name}</Card.Title>
//     <Card.Text 
// dangerouslySetInnerHTML={{__html: summary}}>

//     </Card.Text>
//     <Card.Text 
// dangerouslySetInnerHTML={{__html: content}}>

//     </Card.Text>
//     <Button variant="primary">See More</Button>
// </Card.Body>
// </Card>