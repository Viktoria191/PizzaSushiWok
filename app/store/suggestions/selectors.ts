import { useAppSelector } from '../hooks';

const useSuggestions = () =>
  useAppSelector(({ suggestions: { suggestions } }) => suggestions);

export { useSuggestions };
