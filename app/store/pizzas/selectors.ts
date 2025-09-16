import { useAppSelector } from '../hooks';

const usePizzas = () => useAppSelector(({ pizzas: { pizzas } }) => pizzas);

const usePizzasLoading = () =>
  useAppSelector(({ pizzas: { loading } }) => loading);

export { usePizzas, usePizzasLoading };
