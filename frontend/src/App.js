import './App.css';
import "materialize-css/dist/css/materialize.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Section from "./components/Section";
import Cities from "./components/Cities";
import {BrowserRouter,Route} from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Route exact path="/" component={Section} />
        <Route path="/cities" component={Cities} />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
