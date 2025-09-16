import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { DeliveryIcon } from '../icon/Delivery';
import { BackIcon } from '../icon/Back';

const Delivery = () => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={() => {}}>
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <DeliveryIcon />
        </View>
        <View style={styles.containerText}>
          <View style={styles.deliveryInfo}>
            <Text style={styles.text}>Время доставки</Text>
            <Text style={styles.anotherText}>от 40 минут</Text>
          </View>
          <View style={styles.deliveryInfo}>
            <Text style={styles.text}>Бесплатная доставка от</Text>
            <Text style={[styles.anotherText, { textAlign: 'right' }]}>
              749 ₽
            </Text>
          </View>
        </View>
        <View style={styles.iconTwoContainer}>
          <BackIcon />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export { Delivery };

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    shadowColor: '#AEAEC0',
    shadowOffset: {
      width: 0,
      height: -5,
    },
    shadowOpacity: 0.15,
    shadowRadius: 15,
    elevation: 4,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    justifyContent: 'center',
    paddingBottom: 15,
    paddingRight: 8,
  },
  containerText: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  deliveryInfo: {
    justifyContent: 'center',
  },
  text: {
    color: '#8A8A8A',
    fontSize: 10,
    fontWeight: '400',
    fontFamily: 'Inter-SemiBold',
  },
  anotherText: {
    color: '#333333',
    fontSize: 13,
    fontWeight: '400',
    fontFamily: 'Inter-SemiBold',
    paddingBottom: 15,
  },
  iconTwoContainer: {
    justifyContent: 'center',
    paddingBottom: 15,
    paddingLeft: 10,
  },
});
