import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { BrowserRouter, Switch, Route, withRouter } from 'react-router-dom';
import AgeRangeFilter from './ageRangeFilter.component';
import PopulationFilter from './populationFilter.component';
import ShelterTypeFilter from './shelterTypeFilter.component';
import GenderFilter from './genderFilter.component';


class Filters extends Component {

  render() {
    return (
        <div>
             <ShelterTypeFilter />
            <AgeRangeFilter />
            <PopulationFilter />
            <GenderFilter />
        </div>
    );
  }
}

export default withRouter(Filters);
