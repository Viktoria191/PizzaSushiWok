import { ImageSourcePropType } from 'react-native';

export type Pizza = {
  id: string;
  title: string;
  image: ImageSourcePropType;
  description: string;
  price: string;
  favorite: boolean;
};

export type PizzasState = {
  loading: boolean;
  error: string | null;
  pizzas: Pizza[];
};
