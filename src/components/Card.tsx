import { Link } from 'react-router-dom'
import { useContext } from 'react'

import { DrinkContext } from '../context/drinksContext'
import Card from 'react-bootstrap/Card'
import '../styles/cards.scss'

interface CardData {
  idDrink: string;
  strDrink: string;
  strCategory: string;
  strInstructions: string;
  strDrinkThumb: string;
  strAlcoholic: string;
}

interface CardsItemProps {
  CardData:CardData

}

export function Cards(props: CardsItemProps){
  const {setDrinkDetail} = useContext(DrinkContext)
  
const drinkDetails = (data: CardData) => {
  setDrinkDetail(data)
}
    return (
      <div className="cards-container">
        <Card className="card" style={{ width: "18rem" }}>
          <Card.Img variant="top" src={props.CardData.strDrinkThumb}/>
          <Card.Body>
            <Card.Title>{props.CardData.strDrink}</Card.Title>
            <Link className="see-details" to="/details" onClick={() => drinkDetails(props.CardData)}>Ver detalhes</Link>
          </Card.Body>
        </Card>
      </div>
    );
}