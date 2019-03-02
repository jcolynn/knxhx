import { combineReducers } from 'redux';
import paging from './paging.reducer';
import serviceResults from './serviceResults.reducer';
import shelterTypeFilters from './shelterTypeFilters.reducer';
import ageFilters from './ageFilters.reducer';
import populationFilters from './populationFilters.reducer';
import genderFilters from './genderFilters.reducer';
import regionFilters from './regionFilters.reducer';
import serviceType from './serviceType.reducer';

export default combineReducers({
    paging,
    serviceResults,
    shelterTypeFilters,
    ageFilters,
    populationFilters,
    genderFilters,
    regionFilters,
    serviceType
});
