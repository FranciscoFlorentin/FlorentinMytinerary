import './App.css';
import "materialize-css/dist/css/materialize.min.css";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import Cities from "./components/Cities";
import Itineraries from "./components/Itineraries";
import {BrowserRouter,Redirect,Route,Switch} from "react-router-dom";
import Admin from './components/Admin';
import Login from "./components/Login";
import Register from './components/Register';
import {connect} from "react-redux"

function App({loggedUser}) {
  console.log(loggedUser)
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/cities" component={Cities} />
          <Route path="/cities/:idCity" component={Itineraries} />
          {!loggedUser && 
          <>
            <Route path="/login"component={Login}/>
            <Route path="/register"component={Register}/>
          </>
          }
          {loggedUser && <Route exact path="/admin"component={Admin}/>}
          <Redirect to="/"/>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
const mapStateToProps=(state)=>{
    return {
      loggedUser:state.userReducer.loggedUser
    }
}
export default connect(mapStateToProps)(App);
