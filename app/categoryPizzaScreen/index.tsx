import React from 'react';
import { Platform, ScrollView, StyleSheet, View } from 'react-native';
import { Header } from './Header';
import { Filters } from './Filters';
import { PizzasList } from '../mainScreen/PizzasList';

const CategoryPizzaScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <Filters />
        <PizzasList />
      </ScrollView>
    </View>
  );
};
export { CategoryPizzaScreen };

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.select({ ios: 50, android: 0 }),
    backgroundColor: 'white',
  },
});
