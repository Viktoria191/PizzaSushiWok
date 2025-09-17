import { RouteProp, useRoute } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { RootStackParamList } from '../navigation/types';
import { usePizzaById } from '../store/pizzas/selectors';

type PizzaScreenRouteProp = RouteProp<RootStackParamList, 'pizza'>;

type DoughProps = {
  title: string;
};

const dough: DoughProps[] = [{ title: 'Тонкое' }, { title: 'Традиционное' }];

const Choice = () => {
  const route = useRoute<PizzaScreenRouteProp>();
  const { pizzaId } = route.params;
  const pizza = usePizzaById(pizzaId);

  const defaultSizeIndex = pizza?.sizes
    ? Math.floor(pizza.sizes.length / 2)
    : 0;
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(defaultSizeIndex);

  const [selectedDoughIndex, setSelectedDoughIndex] = useState(0);

  useEffect(() => {
    setSelectedSizeIndex(defaultSizeIndex);
    setSelectedDoughIndex(0);
  }, [pizzaId]);

  const handleSizeSelect = (index: number) => {
    setSelectedSizeIndex(index);
  };

  const handleDoughSelect = (index: number) => {
    setSelectedDoughIndex(index);
  };

  return (
    <View style={styles.container}>
      <View style={styles.sizesContainer}>
        {pizza?.sizes.map((sizeOption, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.sizeItem,
              selectedSizeIndex === index && styles.selectedSizeItem,
            ]}
            onPress={() => handleSizeSelect(index)}
          >
            <Text
              style={[
                styles.sizeText,
                selectedSizeIndex === index && styles.selectedSizeText,
              ]}
            >
              {sizeOption.size}
            </Text>
            <Text style={[styles.weightText]}>{sizeOption.weight}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.doughContainer}>
        {dough.map((doughOption, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.doughItem,
              selectedDoughIndex === index && styles.selectedSizeItem,
            ]}
            onPress={() => handleDoughSelect(index)}
          >
            <Text
              style={[
                styles.sizeText,
                selectedDoughIndex === index && styles.selectedSizeText,
              ]}
            >
              {doughOption.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};
export { Choice };

const styles = StyleSheet.create({
  container: {
    paddingBottom: 16,
    paddingHorizontal: 15,
  },
  sizesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#F6F7F9',
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#EEF1F7',
    marginBottom: 17,
  },
  sizeItem: {
    alignItems: 'center',
    paddingVertical: 2,
    borderRadius: 20,
    paddingHorizontal: 31,
  },
  selectedSizeItem: {
    backgroundColor: '#FFFFFF',
  },
  sizeText: {
    fontSize: 14,
    lineHeight: 18,
    fontWeight: '600',
    fontFamily: 'Inter-SemiBold',
    color: '#808080',
  },
  selectedSizeText: {
    color: '#222222',
  },
  weightText: {
    fontSize: 12,
    lineHeight: 18,
    fontWeight: '400',
    fontFamily: 'Inter-SemiBold',
    color: '#808080',
  },
  doughContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#F6F7F9',
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#EEF1F7',
  },
  doughItem: {
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 24,
    width: '50%',
  },
});
