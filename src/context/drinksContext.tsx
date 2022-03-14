
import React, { createContext, useState } from 'react'

type DrinkState = {
    idDrink: string;
    strDrink: string;
    strCategory: string;
    strInstructions: string,
    strDrinkThumb: string;
    strAlcoholic: string;
};

type PropsDrinksContext = {
    drinks: DrinkState[];
    setDrinks: (newState: []) => void;
    handleScreen: boolean;
    setHandleScreen: (newState: boolean) => void;
    drinkDetails: DrinkState, 
    setDrinkDetail: (newState: DrinkState) => void,
};


const InitialValueDrinks: PropsDrinksContext = {
    drinks: [{
        idDrink: "",
        strDrink: "",
        strCategory: "",
        strInstructions: "",
        strDrinkThumb: "",
        strAlcoholic: "",
    }],
    setDrinks: () => {},
    handleScreen: true, 
    setHandleScreen: () => {},
    drinkDetails: {
        idDrink: "",
        strDrink: "",
        strCategory: "",
        strInstructions: "",
        strDrinkThumb: "",
        strAlcoholic: "",
    }, 
    setDrinkDetail: () => {},
};

// interface ChildrenProps {
//     children: ReactNode
// };

export const DrinkContext = createContext<PropsDrinksContext>(InitialValueDrinks)

export const DrinkContextProvider: React.FC = ({children}) => {
    const [drinks, setDrinks] = useState<DrinkState[]>(InitialValueDrinks.drinks)
    const [handleScreen, setHandleScreen] = useState(InitialValueDrinks.handleScreen)
    const [drinkDetails, setDrinkDetail] = useState(InitialValueDrinks.drinkDetails)
    return(
        <DrinkContext.Provider value={{drinks, setDrinks, handleScreen, setHandleScreen,drinkDetails, setDrinkDetail}}>
            {children}
        </DrinkContext.Provider>
    )
}
