import React, { useContext } from "react";
import "./Location.css";
import { NewCardContext } from "../../context/NewCardContext";

const Location = ({ location }) => {
  const { id, placeName, Latitud, Longitud, Temperature, WindSpeed } =
   location;

   const {newCard, setNewCard} = useContext(NewCardContext);

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
      <h3>{placeName}</h3>
      <p> {Latitud} </p>
      <p> {Longitud} </p>
      <p> {Temperature} </p>
      <p> {WindSpeed} </p>
    </div>
    <div className='palette-actions'>
      <div className='btn-see-more' onClick={DeleteLocation}>
        <p>Delete </p>
      </div>
      
    </div>

  </div>
  );
};

export default Location;