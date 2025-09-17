import React from 'react';
import { Platform, ScrollView, StyleSheet, View } from 'react-native';
import { Header } from './Header';
import { Description } from './Description';
import { Choice } from './Choice';
import { Comment } from './Comment';
import { Supplements } from './Supplements';

const PizzaScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Header />
        <Description />
        <Choice />
        <Comment />
        <Supplements />
      </ScrollView>
    </View>
  );
};
export { PizzaScreen };

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.select({ ios: 50, android: 0 }),
    backgroundColor: 'white',
  },
});
