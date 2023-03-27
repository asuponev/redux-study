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

export const createHeroSuccess = (hero) => {
    return {
        type: 'CREATE_HERO_SUCCESS',
        payload: hero
    }
}

export const createHeroError = () => {
    return {
        type: 'CREATE_HERO_ERROR',
    }
}

export const createHero = (hero) => {
    return {
        type: 'HERO_CREATION',
        payload: hero
    }
}