const heroesFetching = () => {
    return {
        type: 'HEROES_FETCHING'
    }
}

const heroesFetched = (heroes) => {
    return {
        type: 'HEROES_FETCHED',
        payload: heroes
    }
}

const heroesFetchingError = () => {
    return {
        type: 'HEROES_FETCHING_ERROR'
    }
}

export const createHero = (hero) => {
    return {
        type: 'CREATE_HERO_SUCCESS',
        payload: hero
    }
}

export const deleteHero = (heroId) => {
    return {
        type: 'DELETE_HERO_SUCCESS',
        payload: heroId
    }
}

const filtersFetching = () => {
    return {
        type: 'FILTERS_FETCHING'
    }
}

const filtersFetched = (filters) => {
    return {
        type: 'FILTERS_FETCHED',
        payload: filters
    }
}

const filtersFetchingError = () => {
    return {
        type: 'FILTERS_FETCHING_ERROR'
    }
}

export const currentFilterChanged = (heroElement) => {
    return {
        type: 'CURRENT_FILTER_CHANGED',
        payload: heroElement
    }
}

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