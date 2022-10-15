import React, { useContext } from "react";
import { NewCardContext } from "../../context/NewCardContext";
import Location from './Location'

const Locations = ({ dataLocations }) => {
  const { newCard } = useContext(NewCardContext);
  return (
    <>
      <div className='grid'>
        
          <h2>
           My Locations
          </h2>
          {dataLocations.map((location) => (
            <Location key={location.id} location={location} />
          ))}
      </div>
    </>
  );
};

export default Locations;