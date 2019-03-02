import reqwest from 'reqwest'
import { SET_PAGING, SET_SERVICE_RESULTS, SET_SHELTER_TYPE_FILTERS, SET_AGE_FILTERS, SET_POPULATION_FILTERS, SET_GENDER_FILTERS, SET_REGION_FILTERS, SET_SERVICE_TYPE } from "./services.constants";
import { formattedURLWithQuery } from '../utils/api.utils';

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

export function handleFetchSuccess({response, page}) {
    return (dispatch, getState) => {
        dispatch(setPaging({
            page: page,
            count: response.count || getState().paging.count
        }));
        dispatch(setServiceResults(response.results))
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
        shelterTypeFilters.forEach(type => {
            queryParams.push({param: type, value: true})
        })
        ageFilters.forEach(type => {
            queryParams.push({param: type, value: true})
        })
        genderFilters.forEach(type => {
            queryParams.push({param: type, value: true})
        })
        populationFilters.forEach(type => {
            queryParams.push({param: type, value: true})
        })
        regionFilters.forEach(type => {
            queryParams.push({param: type, value: true})
        })
        reqwest({
            url: formattedURLWithQuery({url: `http://MYENDPOINT.COM/${getState().serviceType}`, queries: queryParams}),
            type: 'json',
            method: 'get',
            contentType: 'application/json',
            success: (response) => {
                dispatch(handleFetchSuccess({response, page}))
            },
        })
    }
}