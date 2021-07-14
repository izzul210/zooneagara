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

function App() {
  return (
    <div className="template">
      <div>
      <Router >
        <Navbar />
        <Switch>
        <Route path="/tickets">
              <Tickets />
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
