
import { useState, useContext } from 'react';
import { DrinkContext } from '../context/drinksContext';
import { api } from '../services/api';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Logo from '../assets/logo.svg';
import '../styles/header.scss';

export function Header(){
  const {setDrinks, setHandleScreen, handleScreen, drinks} = useContext(DrinkContext);
  const [drinkSearch, setDrinkSearch] = useState('')
  
  const onSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    api.get(`search.php?s=${drinkSearch}`)
    .then(response => {
      if(response.data.drinks && drinkSearch){
        setDrinks(response.data.drinks)
      }
    })
    .catch(err => {
      console.log(err)
    })
    if(drinkSearch){
      setHandleScreen(!handleScreen)
    }
  }
    return (
      <div className="header-container">
        <img src={Logo} alt="logo da empresa" />
        <div className="search-input">
          <Form>
            <Form.Group className="mb-3 content-search" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Buscar bebida" onChange={event => setDrinkSearch(event.target.value)}/>
                <Button variant="primary" className="button-submit" type="submit" onClick={onSubmit}>
                Buscar
                </Button>
            </Form.Group>
          </Form>
        </div>
      </div>
    );
}