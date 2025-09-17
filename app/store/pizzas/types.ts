import { ImageSourcePropType } from 'react-native';

type SizeOption = {
  size: string;
  weight: string;
};

type SupplementsOption = {
  id: number;
  title: string;
  image: ImageSourcePropType;
  price: number;
};

export type Pizza = {
  id: number;
  title: string;
  image: ImageSourcePropType;
  parameters: string;
  sizes: SizeOption[];
  description: string;
  price: string;
  favorite: boolean;
  calories: string;
  proteins: string;
  carbohydrates: string;
  fats: string;
  supplements: SupplementsOption[];
};

export type PizzasState = {
  loading: boolean;
  error: string | null;
  pizzas: Pizza[];
};
