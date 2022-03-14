import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import '../styles/cards.scss'

interface CardsItemProps {
  CardData:{
    idDrink: string;
    strDrink: string;
    strCategory: string;
    strIgredient: [];
    strDrinkThumb: string;
  }
}

export function Cards(props: CardsItemProps){
    return (
      <div className="cards-container">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={props.CardData.strDrinkThumb}/>
          <Card.Body>
            <Card.Title>{props.CardData.strDrink}</Card.Title>
            <Button variant="primary">Ver detalhes</Button>
          </Card.Body>
        </Card>
      </div>
    );
}