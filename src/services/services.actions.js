import reqwest from 'reqwest'
import { SET_PAGING, SET_SERVICE_RESULTS, SET_SHELTER_TYPE_FILTERS, SET_AGE_FILTERS, SET_POPULATION_FILTERS, SET_GENDER_FILTERS, SET_REGION_FILTERS, SET_SERVICE_TYPE } from "./services.constants";
import { formattedURLWithQuery } from '../utils/api.utils';
import firebase from '../Firebase';

export const setPaging = (val) => ({
    type: SET_PAGING,
    val
});

const setServiceResults = (val) => ({
    type: SET_SERVICE_RESULTS,
    val
});

export const setShelterTypeFilters = (val) => ({
    type: SET_SHELTER_TYPE_FILTERS,
    val
});

export const setAgeFilters = (val) => ({
    type: SET_AGE_FILTERS,
    val
});

export const setPopulationFilters = (val) => ({
    type: SET_POPULATION_FILTERS,
    val
});

export const setGenderFilters = (val) => ({
    type: SET_GENDER_FILTERS,
    val
});

export const setRegionFilters = (val) => ({
    type: SET_REGION_FILTERS,
    val
});

export function handleFetchSuccess({response, page, count}) {
    return (dispatch, getState) => {
        dispatch(setPaging({
            page: page,
            count: count || getState().paging.count
        }));
        dispatch(setServiceResults(response))
    }
}

export const setServiceType = (val) => ({
    type: SET_SERVICE_TYPE,
    val
})

export function fetchData() {
    return (dispatch, getState) => {
        const page = getState().paging.page || 1;
        const queryParams = [{param: 'page', value: page}];
        const {
            shelterTypeFilters,
            ageFilters,
            genderFilters,
            populationFilters,
            regionFilters
        } = getState();

        const queryHash = {};

        shelterTypeFilters.forEach(type => {
            queryParams.push({param: type, value: true})
        })
        ageFilters.forEach(type => {
            queryParams.push({param: type, value: true})
        })
        genderFilters.forEach(type => {
            queryParams.push({param: type, value: true})
            queryHash[type] = true;
        })
        populationFilters.forEach(type => {
            queryParams.push({param: type, value: true})
        })
        regionFilters.forEach(type => {
            queryParams.push({param: type, value: true})
        })

        console.log(queryParams, 'query params')

       
        


        firebase.firestore().collection('service_providers').limit(500).get().then(result => {
            console.log(result, 'result docs')
            const response = [];
            if (result.docs) {
                result.docs.forEach(doc => {
                    if (doc.exists) {
                        const data = doc.data();
                        let allowEntryToResults = true;
                        ageFilters.forEach(ageFilter => {
                            if (ageFilter === 'adults') {
                                if (!data.over18) {
                                    allowEntryToResults = false;
                                }
                            }
                            if (ageFilter === 'youth') {
                                if (data.over18) {
                                    allowEntryToResults = false;
                                }
                            }
                        })

                        genderFilters.forEach(genderFilter => {
                            if (genderFilter === 'queer') {
                                if (!data.queer) {
                                    allowEntryToResults = false;
                                }
                                if (genderFilter === 'female') {
                                    if (!data.female) {
                                        allowEntryToResults = false;
                                    }
                                }
                                if (genderFilter === 'male') {
                                    if (!data.male) {
                                        allowEntryToResults = false;
                                    }
                                }
                                if (genderFilter === 'trans') {
                                    if (!data.trans) {
                                        allowEntryToResults = false;
                                    }
                                }
                            }
                        })

                        populationFilters.forEach(populationFilter => {
                            if (populationFilter === 'foster') {
                                if (!data.fosterYouth) {
                                    allowEntryToResults = false;
                                }
                            }
                            if (populationFilter === 'lgbtq') {
                                if (!data.lgbtq) {
                                    allowEntryToResults = false;
                                }
                            }
                            if (populationFilter === "parenting") {
                                if (!data.parenting) {
                                    allowEntryToResults = false;
                                }
                            }
                            if (populationFilter === 'probation') {
                                if (!data.probation) {
                                    allowEntryToResults = false;
                                }
                            }
                        })

                        shelterTypeFilters.forEach(shelterTypeFilter => {
                            if (shelterTypeFilter === "domesticViolence" ) {
                                if (!data.domesticViolenceShelter) {
                                    allowEntryToResults = false;
                                }
                            }
                            if (shelterTypeFilter === "transitionalHousing") {
                                if (!data.transitionalHousing) {
                                    allowEntryToResults = false;
                                }
                            }
                            if (shelterTypeFilter === "emergencyShelters") {
                                if (!data.emergencyShelter) {
                                    allowEntryToResults = false;
                                }
                            }
                            if (shelterTypeFilter === "maternityShelters") {
                                if (!data.maternityShelter) {
                                    allowEntryToResults = false;
                                }
                            }
                            if (shelterTypeFilter === "veteransHousing") {
                                if (!data.veteransHousing) {
                                    allowEntryToResults = false;
                                }
                            }
                        })
                        
                        if (allowEntryToResults) {
                            response.push(doc.data());
                        }
                  
                    }
                })
            }
            dispatch(handleFetchSuccess({response, page, count: result.size, count: result.size}))
          });

    }
}