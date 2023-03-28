import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filters: [],
  filtersLoadingStatus: 'idle',
  currentFilter: 'all'
}

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    filtersFetching: state => { state.filtersLoadingStatus = 'loading' },
    filtersFetched: (state, action) => {
      state.filtersLoadingStatus = 'idle';
      state.filters = action.payload;
    },
    filtersFetchingError: state => { state.filtersLoadingStatus = 'error' },
    currentFilterChanged: (state, action) => { state.currentFilter = action.payload }
  }
});

const { actions, reducer } = filtersSlice;

export default reducer;
export const {
  filtersFetching,
  filtersFetched,
  filtersFetchingError,
  currentFilterChanged,
} = actions;