import { createSelector } from '@reduxjs/toolkit';
import { useAppSelector } from '../hooks';
import { RootState } from '..';
import { Pizza } from './types';

const usePizzas = () => useAppSelector(({ pizzas: { pizzas } }) => pizzas);

const usePizzasLoading = () =>
  useAppSelector(({ pizzas: { loading } }) => loading);

const selectAllPizzas = (state: RootState) => state.pizzas.pizzas;

const usePizzaById = (pizzaId: number): Pizza | undefined => {
  return useAppSelector(
    createSelector([selectAllPizzas], (pizzas: Pizza[]) =>
      pizzas.find(pizza => pizza.id === pizzaId),
    ),
  );
};

export { usePizzas, usePizzasLoading, usePizzaById };
