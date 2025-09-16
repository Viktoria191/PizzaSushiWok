import React, { useEffect } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  ListRenderItemInfo,
  ActivityIndicator,
} from 'react-native';
import { useAppDispatch } from '../store';
import { getPizzasAction } from '../store/pizzas/actions';
import { usePizzas, usePizzasLoading } from '../store/pizzas/selectors';
import { PizzaItem } from './PizzaItem';
import { Pizza } from '../store/pizzas/types';

const renderPizzasItem = ({ item }: ListRenderItemInfo<Pizza>) => {
  return (
    <PizzaItem
      id={item.id}
      title={item.title}
      image={item.image}
      description={item.description}
      price={item.price}
      favorite={item.favorite}
    />
  );
};

const keyExtractorPizzas = (item: Pizza) => `${item.id}`;

const PizzasList = () => {
  const dispatch = useAppDispatch();
  const pizzas = usePizzas();
  const loading = usePizzasLoading();

  useEffect(() => {
    dispatch(getPizzasAction());
  }, [dispatch]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={pizzas}
        renderItem={renderPizzasItem}
        keyExtractor={keyExtractorPizzas}
        showsHorizontalScrollIndicator={false}
        scrollEnabled={false}
      />
    </View>
  );
};
export { PizzasList };

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
