import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { BrowserRouter, Switch, Route, withRouter } from 'react-router-dom';
import logo from './logo.svg';
import "antd/dist/antd.css";
import './App.css';
import MainComponent from './Main.component';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="" component={MainComponent} />
        </Switch>
    </BrowserRouter>
    );
  }
}

export default App;
