import { RouteProp, useRoute } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RootStackParamList } from '../navigation/types';
import { usePizzaById } from '../store/pizzas/selectors';
import { InfoIcon } from '../icon/Info';

type PizzaScreenRouteProp = RouteProp<RootStackParamList, 'pizza'>;

const Description = () => {
  const route = useRoute<PizzaScreenRouteProp>();

  const { pizzaId } = route.params;

  const pizza = usePizzaById(pizzaId);

  return (
    <View style={styles.container}>
      <View style={styles.containerText}>
        <Text style={styles.titleText}>{pizza?.title}</Text>
        <InfoIcon />
      </View>
      <Text style={styles.parametersText}>{pizza?.parameters}</Text>
      <Text style={styles.descriptionText}>{pizza?.description}</Text>
    </View>
  );
};
export { Description };

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  containerText: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingBottom: 4,
  },
  titleText: {
    fontSize: 30,
    lineHeight: 34,
    textAlign: 'center',
    fontWeight: '700',
    fontFamily: 'Inter-SemiBold',
  },
  parametersText: {
    fontSize: 13,
    lineHeight: 18,
    fontWeight: '400',
    fontFamily: 'Inter-SemiBold',
    color: '#3C3C4399',
    paddingBottom: 4,
  },
  descriptionText: {
    fontSize: 13,
    lineHeight: 18,
    fontWeight: '400',
    fontFamily: 'Inter-SemiBold',
  },
});
