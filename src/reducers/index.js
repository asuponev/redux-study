const initialState = {
    heroes: [],
    heroesLoadingStatus: 'idle',
    filters: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'HEROES_FETCHING':
            return {
                ...state,
                heroesLoadingStatus: 'loading'
            }
        case 'HEROES_FETCHED':
            return {
                ...state,
                heroes: action.payload,
                heroesLoadingStatus: 'idle'
            }
        case 'HEROES_FETCHING_ERROR':
            return {
                ...state,
                heroesLoadingStatus: 'error'
            }
        case 'CREATE_HERO_SUCCESS':
            return {
                ...state,
                heroes: [...state.heroes, action.payload],
            }
        case 'CREATE_HERO_ERROR':
            return state
        case 'FILTERS_FETCHED':
            return {
                ...state,
                filters: action.payload,
            }
        case 'FILTERS_FETCHING_ERROR':
            return {
                ...state,
                filters: ['Error: Failed to load filters'],
            }
        case 'DELETE_HERO_SUCCESS':
            return {
                ...state,
                heroes: state.heroes.filter(hero => hero.id !== action.payload),
            }
        default: return state
    }
}

export default reducer;