import type { ImageSourcePropType } from 'react-native';

export type Suggestion = {
  id: string;
  title: string;
  image: ImageSourcePropType;
};

export type SuggestionsState = {
  loading: boolean;
  error: string | null;
  suggestions: Suggestion[];
};
