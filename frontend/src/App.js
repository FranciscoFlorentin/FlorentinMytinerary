import './App.css';
import "materialize-css/dist/css/materialize.min.css";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import Cities from "./components/Cities";
import Itineraries from "./components/Itineraries"
import {BrowserRouter,Redirect,Route,Switch} from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/cities" component={Cities} />
          <Route path="/cities/:idCity" component={Itineraries} />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
