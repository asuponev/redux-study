import { createReducer } from '@reduxjs/toolkit';

import {
  filtersFetching,
  filtersFetched,
  filtersFetchingError,
  currentFilterChanged
} from '../actions';

const initialState = {
  filters: [],
  filtersLoadingStatus: 'idle',
  currentFilter: 'all'
}

const filters = createReducer(initialState,
  {
    [filtersFetching]: state => { state.filtersLoadingStatus = 'loading' },
    [filtersFetched]: (state, action) => {
      state.filtersLoadingStatus = 'idle';
      state.filters = action.payload;
    },
    [filtersFetchingError]: state => { state.filtersLoadingStatus = 'error' },
    [currentFilterChanged]: (state, action) => { state.currentFilter = action.payload },
  },
  [],
  state => state
)

// const filters = (state = initialState, action) => {
//   switch (action.type) {
//     case 'FILTERS_FETCHING':
//       return {
//         ...state,
//         filtersLoadingStatus: 'loading',
//       }
//     case 'FILTERS_FETCHED':
//       return {
//         ...state,
//         filters: action.payload,
//         filtersLoadingStatus: 'idle',
//       }
//     case 'FILTERS_FETCHING_ERROR':
//       return {
//         ...state,
//         filtersLoadingStatus: 'error',
//       }
//     case 'CURRENT_FILTER_CHANGED':
//       return {
//         ...state,
//         currentFilter: action.payload,
//       }
//     default: return state
//   }
// }

export default filters;