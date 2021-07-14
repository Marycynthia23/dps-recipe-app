import React from 'react';
import Landingpage from './Landingpage.js';
import Findrecipe from './Findrecipe.js';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>  
        <Switch>
          <Route exact path="/" component={Landingpage} />
          <Route path="/Findrecipe" component={Findrecipe} />
          {/* <Route path="/fans" component={Choosemeal} /> */}
          {/* <Route path="/faqs" component={Addmeal} /> */}
          {/* <Route path="/artists" component={Artists} /> */}
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
