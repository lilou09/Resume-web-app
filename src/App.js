import React from 'react';
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import './App.css';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import Home from "./components/Home.js"
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Portfolios from "./components/Portfolios";

function App() {
  return (
    <Router>
        <Route exact path="/" component={Home} />
        <Switch>
          <Route exact path="/skills" component={Skills} /> 
          <Route exact path="/experience" component={Experience} />
          <Route exact path="/education" component={Education} />
          <Route exact path="/portfolios" component={Portfolios} />
          
        </Switch>
    </Router>
    
  )
    

}

export default App;
