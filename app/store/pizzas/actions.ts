import { createAsyncThunk } from '@reduxjs/toolkit';
import { getPizzas } from '../../services/getPizzas';

const getPizzasAction = createAsyncThunk(
  'TASKS/getPizzasAction',
  async (_, { rejectWithValue }) => {
    try {
      const pizzas = await getPizzas();
      return pizzas;
    } catch (error) {
      return rejectWithValue(
        error instanceof Error ? error.message : 'Unknown error',
      );
    }
  },
);

export { getPizzasAction };
