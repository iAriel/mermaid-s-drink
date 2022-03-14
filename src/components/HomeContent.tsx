import { useContext } from "react";

import "../styles/homeContent.scss";
import Image from "react-bootstrap/Image";
import Glass from "../assets/bebida.png";
import Logo from "../assets/logo.svg";
import { Cards } from "./Card";
import { DrinkContext } from "../context/drinksContext";

export function HomeContent() {
  const { drinks, handleScreen } = useContext(DrinkContext);
  console.log(drinks)
  return (
    <div className="content-container">
      {handleScreen ? (
        <div className="content-none">
          <aside className="content-text">
            <Image
              className="image-home"
              src={Logo}
              alt="logo da empresa"
              thumbnail
            />
            <p>Seus coquetéis preferidos em um só lugar. </p>
          </aside>
          <aside className="content-image">
            <Image src={Glass} alt="Taça de bebida" thumbnail />
          </aside>
        </div>
      ) : (
        drinks.map(drink => {
          return(
            <Cards key={drink.idDrink} CardData={drink} />
          )
          })
      )}
    </div>
  );
}
