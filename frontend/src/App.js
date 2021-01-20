import './App.css';
import "materialize-css/dist/css/materialize.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import Cities from "./components/Cities";
<<<<<<< HEAD
=======
import Itinerary from "./components/Itinerary"
>>>>>>> 7368a5567a10be24ce131edb26bfa0913265727e
import {BrowserRouter,Redirect,Route,Switch} from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
<<<<<<< HEAD
        <Header />
        <Switch >
          <Route exact path="/" component={HomePage} />
          <Route path="/cities" component={Cities} />
          <Redirect to ="/" />
        </Switch> 
=======
        <Header/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/cities" component={Cities} />
          <Route path="/itineraries/:cityName" component={Itinerary} />
          <Redirect to="/" />
        </Switch>
>>>>>>> 7368a5567a10be24ce131edb26bfa0913265727e
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
