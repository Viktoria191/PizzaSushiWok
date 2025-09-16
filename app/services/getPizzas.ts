import { Pizza } from '../store/pizzas/types';
import { getMockPizzas } from './mockData';

const getPizzas = async (): Promise<Pizza[]> => {
  return new Promise((resolve) =>
    setTimeout(() => resolve(getMockPizzas()), 500),
  );
};

export { getPizzas };
