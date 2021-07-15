import './App.css';
import Navbar from './components/Navbar/Navs';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Homepage from './components/Homepage';
import Tickets from './components/Tickets';
import Footer from './components/Footer';
import BuyDayPass from './components/Pages/BuyDayPass';
import ReviewOrder from './components/Pages/ReviewOrder';
import ScrollToTop from './ScrollToTop';


function App() {
  return (
    <div className="template">
      <div>
      <Router >
        <ScrollToTop/>
        <Navbar />
        <Switch>
        <Route exact path="/tickets">
              <Tickets />
          </Route>
          <Route exact path="/tickets/daypass">
              <BuyDayPass />
          </Route>
          <Route exact path="/tickets/review">
              <ReviewOrder />
          </Route>
          <Route path="/">
              <Homepage />
          </Route>
        </Switch>
      </Router>
      </div>
      
    <Footer/>
    </div>
    
  );
}

export default App;
