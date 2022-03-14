import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
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
        <Card className="card" style={{ width: "18rem" }}>
          <Card.Img variant="top" src={props.CardData.strDrinkThumb}/>
          <Card.Body>
            <Card.Title>{props.CardData.strDrink}</Card.Title>
            <Link className="see-details" to="/details">Ver detalhes</Link>
          </Card.Body>
        </Card>
      </div>
    );
}