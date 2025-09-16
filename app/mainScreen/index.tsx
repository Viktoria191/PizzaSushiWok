import React from 'react';
import { Platform, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Header } from './Header';
import { SuggestionsList } from './SuggestionsList';
import { MenuButtons } from './MenuButtons';
import { PizzasList } from './PizzasList';
import { Delivery } from './Delivery';

const MainScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <SuggestionsList />
        <MenuButtons />
        <View style={styles.containerText}>
          <Text style={styles.text}>Пиццы</Text>
        </View>
        <PizzasList />
      </ScrollView>
      <Delivery />
    </View>
  );
};
export { MainScreen };

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.select({ ios: 50, android: 0 }),
    backgroundColor: 'white',
  },
  containerText: {
    paddingLeft: 32,
    paddingBottom: 11,
  },
  text: {
    color: '#000000',
    fontSize: 17,
    lineHeight: 22,
    fontWeight: '600',
    fontFamily: 'Inter-SemiBold',
  },
});
