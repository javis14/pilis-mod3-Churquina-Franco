import { useContext } from "react";
import Locations from "../../components/Location/Locations";
import { NewCardContext } from "../../context/NewCardContext";
import './Home.css'


const Home = () => {
    const { newCard } = useContext(NewCardContext);
  return (
    <>
    
      <Locations dataLocations={newCard} />
    </>
  );
};

export default Home;
