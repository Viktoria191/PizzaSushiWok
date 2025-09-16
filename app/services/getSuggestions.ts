import { Suggestion } from '../store/suggestions/types';
import { getMockSuggestions } from './mockData';

const getSuggestions = async (): Promise<Suggestion[]> => {
  return new Promise((resolve) =>
    setTimeout(() => resolve(getMockSuggestions()), 500),
  );
};

export { getSuggestions };
