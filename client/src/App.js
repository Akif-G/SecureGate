import React, { Component } from "react";
import Toolbar from './Components/Toolbar/Toolbar'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import BackGround from './Components/Background/Background'
import "./App.css";
import Check from "./Components/Check/Check";
import House from "./Components/House/House";
import Home from "./Components/Home/Home";

class App extends Component {
  render() {
    return (
      <div className="App">
      <Toolbar className="ToolBar"/>
        <Switch>
            <Route className="Check"  path="/SecureTificate/check" exact component={()=><Check backgroundColor= "rgb(219,68,55)"/>} />
            <Route className="Home"  path="/SecureTificate/house" exact component={()=><House  backgroundColor="rgb(242,183,5)" />} />
            <Route className="House"  path="/SecureTificate" exact component={()=><Home backgroundColor= "rgb(4,173,191)"/>} />
            <Route className="House"  component={()=><Home backgroundColor= "rgb(4,173,191)"/>} />
        </Switch>
        <BackGround className="BackGround" style={{width:'90%',height:window.innerHeight}}></BackGround>
      </div>
    );
  }
}

export default App;
