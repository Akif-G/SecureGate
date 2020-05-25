import React, { Component } from "react";
import Toolbar from './Components/Toolbar/Toolbar'
import './App.css'
import { Route, Switch ,HashRouter } from 'react-router-dom'
import BackGround from './Components/Background/Background'
import "./App.css";
import Check from "./Components/Check/Check";
import House from "./Components/House/House";
import Home from "./Components/Home/Home";
import Social from "./Components/Social/Social";

class App extends Component {
  render() {
    return (<HashRouter basename="/">
      <div className="App">
      <Toolbar className="ToolBar"/>
        <Switch>
            <Route className="Check"  path="/check" exact component={()=><Check backgroundColor= "rgb(219,68,55)"/>} />
            <Route className="Home"  path="/house" exact component={()=><House  backgroundColor="rgb(242,183,5)" />} />
            <Route className="House"  path="/" exact component={()=><Home backgroundColor= "rgb(4,173,191)"/>} />
            <Route className="House"  component={()=><Home backgroundColor= "rgb(4,173,191)"/>} />
        </Switch>
        <BackGround className="BackGround" style={{width:'90%',height:window.innerHeight}}></BackGround>
        <Social></Social>
      </div>
      </HashRouter>
    );
  }
}

export default App;
