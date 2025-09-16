import { createSlice } from '@reduxjs/toolkit';
import { SuggestionsState } from './types';
import { getSuggestionsAction } from './actions';

const initialState: SuggestionsState = {
  loading: false,
  suggestions: [],
  error: null,
};

const suggestionsSlice = createSlice({
  name: 'SUGGESTIONS',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getSuggestionsAction.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getSuggestionsAction.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.suggestions = payload;
      })
      .addCase(getSuggestionsAction.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message || 'Failed to fetch suggestions';
      }),
});

export const { reducer: suggestionsReducer } = suggestionsSlice;
