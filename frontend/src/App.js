import './App.css';
import "materialize-css/dist/css/materialize.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import Cities from "./components/Cities";
import Itinerary from "./components/Itinerary"
import {BrowserRouter,Redirect,Route,Switch} from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/cities" component={Cities} />
          <Route path="/itineraries/:cityName" component={Itinerary} />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
