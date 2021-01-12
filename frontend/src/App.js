import './App.css';
import "materialize-css/dist/css/materialize.min.css";
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import ThreeDRotation from '@material-ui/icons/ThreeDRotation';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Section from "./components/Section";

function App() {
  return (
    <div>
      <Header />
      <Section />
      <Footer />
    </div>
  );
}

export default App;
