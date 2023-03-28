import { createAction } from '@reduxjs/toolkit';

export const heroesFetching = createAction('HEROES_FETCHING');

export const heroesFetched = createAction('HEROES_FETCHED');

export const heroesFetchingError = createAction('HEROES_FETCHING_ERROR');

export const createHero = createAction('CREATE_HERO_SUCCESS');

export const deleteHero = createAction('DELETE_HERO_SUCCESS');

// const filtersFetching = () => {
//     return {
//         type: 'FILTERS_FETCHING'
//     }
// }

export const filtersFetching = createAction('FILTERS_FETCHING');

// const filtersFetched = (filters) => {
//     return {
//         type: 'FILTERS_FETCHED',
//         payload: filters
//     }
// }

export const filtersFetched = createAction('FILTERS_FETCHED');

// const filtersFetchingError = () => {
//     return {
//         type: 'FILTERS_FETCHING_ERROR'
//     }
// }

export const filtersFetchingError = createAction('FILTERS_FETCHING_ERROR');

// export const currentFilterChanged = (heroElement) => {
//     return {
//         type: 'CURRENT_FILTER_CHANGED',
//         payload: heroElement
//     }
// }

export const currentFilterChanged = createAction('CURRENT_FILTER_CHANGED');

export const fetchHeroes = (request) => (dispatch) => {
    dispatch(heroesFetching());
    request("http://localhost:3001/heroes")
        .then(data => dispatch(heroesFetched(data)))
        .catch(() => dispatch(heroesFetchingError()))
}

export const fetchFilters = (request) => (dispatch) => {
    dispatch(filtersFetching());
    request("http://localhost:3001/filters")
        .then(data => dispatch(filtersFetched(data)))
        .catch(() => dispatch(filtersFetchingError()))
}