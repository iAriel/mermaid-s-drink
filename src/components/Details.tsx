import { useContext } from 'react'
import Image from 'react-bootstrap/Image'
import '../styles/details.scss'

import { DrinkContext } from '../context/drinksContext'

export function Details(){
    const {drinkDetails} = useContext(DrinkContext)
    return(
        <div className="details-container">
            <aside className="thumbnail-area">
                <Image className="thumbnail" src={drinkDetails.strDrinkThumb} thumbnail/>
            </aside>
            <div className="description-area">
                <aside className="drink-title">
                    <p className="title">{drinkDetails.strDrink}</p>
                </aside>
                <aside className="details-drink">
                    <p className="title-details">Categoria</p>
                    <p className="info-drink">{drinkDetails.strCategory}</p>
                    <p className="title-details">Detalhes</p>
                    <p className="info-drink">{drinkDetails.strInstructions}</p>
                </aside>
                <div className="extra-info">
                    <aside className="extra">
                        <p>{drinkDetails.strAlcoholic}</p>
                    </aside>
                </div>
            </div>
        </div>
    )
}