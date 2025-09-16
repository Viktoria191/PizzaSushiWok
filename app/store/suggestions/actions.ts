import { createAsyncThunk } from '@reduxjs/toolkit';
import { getSuggestions } from '../../services/getSuggestions';

const getSuggestionsAction = createAsyncThunk(
  'TASKS/getSuggestionsAction',
  async (_, { rejectWithValue }) => {
    try {
      const suggestions = await getSuggestions();
      return suggestions;
    } catch (error) {
      return rejectWithValue(
        error instanceof Error ? error.message : 'Unknown error',
      );
    }
  },
);

export { getSuggestionsAction };
