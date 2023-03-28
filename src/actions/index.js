export const heroesFetching = () => {
    return {
        type: 'HEROES_FETCHING'
    }
}

export const heroesFetched = (heroes) => {
    return {
        type: 'HEROES_FETCHED',
        payload: heroes
    }
}

export const heroesFetchingError = () => {
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

export const filtersFetching = () => {
    return {
        type: 'FILTERS_FETCHING'
    }
}

export const filtersFetched = (filters) => {
    return {
        type: 'FILTERS_FETCHED',
        payload: filters
    }
}

export const filtersFetchingError = () => {
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