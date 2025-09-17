import React, { useState } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';
import { usePizzaById } from '../store/pizzas/selectors';
import { PlusIcon } from '../icon/Plus';
import { MinusIcon } from '../icon/Minus';

type PizzaScreenRouteProp = RouteProp<RootStackParamList, 'pizza'>;

const Supplements = () => {
  const route = useRoute<PizzaScreenRouteProp>();
  const { pizzaId } = route.params;
  const pizza = usePizzaById(pizzaId);

  const [quantities, setQuantities] = useState<Record<number, number>>({});

  const increaseQuantity = (id: number) => {
    setQuantities(prev => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const decreaseQuantity = (id: number) => {
    setQuantities(prev => ({
      ...prev,
      [id]: Math.max((prev[id] || 0) - 1, 0),
    }));
  };

  const getQuantity = (id: number) => quantities[id] || 0;

  const formatPrice = (price: number) => `${price}₽`;

  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>Добавить в блюдо</Text>
      <View style={[styles.supplementsContainer, styles.shadow]}>
        {pizza?.supplements.map(({ id, image, title, price }) => {
          const quantity = getQuantity(id);

          return (
            <View key={id} style={styles.supplementCard}>
              <Image source={image} style={styles.image} resizeMode="cover" />
              <View style={styles.titleContainer}>
                <Text style={styles.titleText}>{title}</Text>
              </View>

              <View style={styles.bottomContainer}>
                <View style={styles.counterContainer}>
                  <TouchableOpacity
                    onPress={() => decreaseQuantity(id)}
                    disabled={quantity === 0}
                  >
                    <MinusIcon
                      strokeColor={quantity === 0 ? '#B3B3B3' : '#222222'}
                    />
                  </TouchableOpacity>
                  {quantity === 0 ? (
                    <Text
                      style={[styles.quantityText, { paddingHorizontal: 17 }]}
                    >
                      0
                    </Text>
                  ) : (
                    <Text
                      style={[
                        styles.quantityText,
                        { paddingHorizontal: 7, color: '#E40210' },
                      ]}
                    >
                      {quantity}×{formatPrice(price)}
                    </Text>
                  )}

                  <TouchableOpacity onPress={() => increaseQuantity(id)}>
                    <PlusIcon />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          );
        })}
      </View>
      <TouchableOpacity onPress={() => {}} style={styles.buttonStyle}>
        <Text style={styles.buttonText}>В корзину за {pizza?.price}₽</Text>
      </TouchableOpacity>
    </View>
  );
};
export { Supplements };

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  titleStyle: {
    fontSize: 15,
    lineHeight: 20,
    fontWeight: '700',
    fontFamily: 'Inter-SemiBold',
    marginBottom: 8,
  },
  supplementsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingBottom: 19,
  },
  supplementCard: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 16,
    padding: 8,
    width: '30%',
    justifyContent: 'space-between',
  },
  bottomContainer: {
    width: '100%',
    marginTop: 'auto',
  },
  image: {
    width: 78,
    height: 78,
    marginBottom: 9,
  },
  shadow: {
    shadowColor: '#EEF1F7',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 2,
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 9,
    width: '100%',
  },
  titleText: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '400',
    fontFamily: 'Inter-SemiBold',
    textAlign: 'center',
    flexWrap: 'wrap',
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  quantityText: {
    fontSize: 12,
    lineHeight: 22,
    fontWeight: '500',
    fontFamily: 'Inter-SemiBold',
  },
  buttonStyle: {
    backgroundColor: '#E54116',
    paddingVertical: 16.5,
    borderRadius: 24,
    marginBottom: 25,
  },
  buttonText: {
    fontSize: 17,
    lineHeight: 22,
    fontWeight: '700',
    fontFamily: 'Inter-SemiBold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
});
