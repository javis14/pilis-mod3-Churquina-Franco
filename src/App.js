import './App.css';
import Formulario from './components/Formulario';
import Locations from './components/Location/Locations';

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
  }
]
function App() {

  return (
    <div className="App">
      <Locations dataLocations={testLocations}   />
    </div>
  );
}
export default App;
