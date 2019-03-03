import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, withRouter } from 'react-router-dom';
import './services.css';
import ServiceOptions from './serviceOptions/serviceOptions.component';
import Shelter from './serviceOptions/shelter/shelter.component';
import Crisis from './serviceOptions/crisis/crisis.component';
import ShelterDetails from './serviceOptions/shelter/shelterDetails/shelterDetails.component';
import Tabs from './tabs/tabs.component';

class Services extends Component {

  render() {
    return (
        <div>
          <Switch>
          <Route path="/services/shelters/:id" component={ShelterDetails} />
          <Route path="/services/crises" component={Crisis} />
          <Route path="/services/shelters" component={Shelter} />
          <Route path="/services" component={ServiceOptions} />
          <Route path="/" component={ServiceOptions} />
      </Switch>
      <Tabs />
        </div>
    );
  }
}

export default Services;
