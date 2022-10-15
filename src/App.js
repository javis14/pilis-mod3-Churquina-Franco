import { Route, Routes } from "react-router-dom";
import "./App.css";
import Formulario from "./routes/Location/Formulario";
import Home from "./routes/Home/Home";
import Navigation from "./routes/Navigation/Navigation";



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />}/>
          <Route path='location/create' element={<Formulario />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
