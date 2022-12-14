import React, { useContext } from "react";
import "./Location.css";
import { NewCardContext } from "../../context/NewCardContext";
import { FcCancel } from "react-icons/fc";

const Location = ({ location }) => {
  const { id, placeName, Latitud, Longitud, Temperature, WindSpeed } =
    location;

  const { newCard, setNewCard } = useContext(NewCardContext);

  const DeleteLocation = () => {
    const tempLocations = newCard.filter(
      (location) => location.id !== id
    );
    setNewCard(tempLocations);
    localStorage.setItem("LocationList", JSON.stringify(tempLocations));
  };

  return (
    <div className='palette-container'>
      <div className='palette'>
        <h3>Nombre del lugar :{placeName}</h3>
        <p> Latitud :{Latitud} </p>
        <p> Longitud :{Longitud} </p>
        <p> Temperatura :{Temperature} </p>
        <p> Velocidad del viento :{WindSpeed} </p>
      </div>
      <div className='palette-actions'>

        <div className='btn-see-more' onClick={DeleteLocation}>
          <p>Delete <FcCancel /> </p>
        </div>

      </div>

    </div>
  );
};

export default Location;