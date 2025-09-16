import { createSlice } from '@reduxjs/toolkit';
import { getPizzasAction } from './actions';
import { PizzasState } from './types';

const initialState: PizzasState = {
  loading: false,
  pizzas: [],
  error: null,
};

const pizzasSlice = createSlice({
  name: 'PIZZAS',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getPizzasAction.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getPizzasAction.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.pizzas = payload;
      })
      .addCase(getPizzasAction.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message || 'Failed to fetch pizzas';
      }),
});

export const { reducer: pizzasReducer } = pizzasSlice;
