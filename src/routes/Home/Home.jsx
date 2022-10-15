import { useContext } from "react";
import Locations from "../../components/Location/Locations";
import { NewCardContext } from "../../context/NewCardContext";

const testLocations = [
  {
    id: 1,
    placeName: "Ledesma",
    Latitud: "-24.45",
    Longitud: "22.45",
    Temperature: "24",
    WindSpeed: "35.4",
  },
  {
    id: 2,
    placeName: "Ledesma",
    Latitud: "-24.45",
    Longitud: "22.45",
    Temperature: "24",
    WindSpeed: "35.4",
  },
  {
    id: 3,
    placeName: "Ledesma",
    Latitud: "-24.45",
    Longitud: "22.45",
    Temperature: "24",
    WindSpeed: "35.4",
  },
  {
    id: 4,
    placeName: "Ledesma",
    Latitud: "-24.45",
    Longitud: "22.45",
    Temperature: "24",
    WindSpeed: "35.4",
  },
];

const Home = () => {
    const { newCard } = useContext(NewCardContext);
  return (
    <>
      <h4>Desde Home</h4>
      <Locations dataLocations={newCard} />
    </>
  );
};

export default Home;
