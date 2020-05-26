import React, { Component } from "react";
import Toolbar from './Components/Toolbar/Toolbar'
import './App.css'
import { Route, Switch, HashRouter } from 'react-router-dom'
import BackGround from './Components/Background/Background'
import "./App.css";
import Check from "./Components/Check/Check";
import House from "./Components/House/House";
import Home from "./Components/Home/Home";
import Social from "./Components/Social/Social";

class App extends Component {
  state = {
    mode: "white"
  }
  ChangeMode = () => {
    if (this.state.mode === "white") { this.setState({ mode: "black" }); }
    else if (this.state.mode === "black") { this.setState({ mode: "white" }); };
  }


  render() {
    var backGround;
    if (this.state.mode === "white") {
      backGround =
        <BackGround className="BackGround" mode={"white"} key={this.state.mode} style={{ width: '90%', height: window.innerHeight }}></BackGround>;
    }
    if (this.state.mode === "black") {
      backGround =
        <BackGround className="BackGround" mode={"black"} key={this.state.mode} style={{ width: '90%', height: window.innerHeight }}></BackGround>;
    }
    return (<HashRouter basename="/">
      <div className="App">
        <Toolbar className="ToolBar" />
        <Switch>
          <Route className="Check" path="/check" exact component={ Check} />
          <Route className="Home" path="/house" exact component={House} />
          <Route className="House" path="/" exact component={Home} />
          <Route className="House" component={Home} />
        </Switch>
        {backGround}
        <Social ChangeMode={this.ChangeMode} mode={this.state.mode}></Social>
      </div>
    </HashRouter>
    );
  }
}

export default App;
