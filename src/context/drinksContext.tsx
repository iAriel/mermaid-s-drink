
import React, { createContext, useState } from 'react'

type DrinkState = {
    idDrink: string;
    strDrink: string;
    strCategory: string;
    strIgredient: [];
    strDrinkThumb: string;
};

type PropsDrinksContext = {
    drinks: DrinkState[];
    setDrinks: (newState: []) => void;
    handleScreen: boolean;
     setHandleScreen: (newState: boolean) => void;
};


const InitialValueDrinks: PropsDrinksContext = {
    drinks: [{
        idDrink: "",
        strDrink: "",
        strCategory: "",
        strIgredient: [],
        strDrinkThumb: "",
    }],
    setDrinks: () => {},
    handleScreen: true, 
    setHandleScreen: () => {}
};

// interface ChildrenProps {
//     children: JSX.Element | JSX.Element[]
// };

export const DrinkContext = createContext<PropsDrinksContext>(InitialValueDrinks)

export const DrinkContextProvider: React.FC = ({children}) => {
    const [drinks, setDrinks] = useState<DrinkState[]>(InitialValueDrinks.drinks)
    const [handleScreen, setHandleScreen] = useState(InitialValueDrinks.handleScreen)

    return(
        <DrinkContext.Provider value={{drinks, setDrinks, handleScreen, setHandleScreen}}>
            {children}
        </DrinkContext.Provider>
    )
}
