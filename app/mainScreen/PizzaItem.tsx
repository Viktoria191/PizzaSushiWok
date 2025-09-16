import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { Pizza } from '../store/pizzas/types';
import { FavoriteIcon } from '../icon/Favorite';
import { NoFavoriteIcon } from '../icon/NoFavorite';

const { width } = Dimensions.get('window');

const PizzaItem = ({
  id,
  title,
  image,
  description,
  price,
  favorite,
}: Pizza) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={() => {}}>
      {id !== '1' ? <View style={styles.viewStyle} /> : null}
      <View style={styles.container}>
        <Image source={image} style={styles.image} resizeMode='cover' />
        <View style={styles.containerText}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
          <View style={styles.containerBottom}>
            <View style={styles.priceContainer}>
              <Text style={styles.price}>{`${price} ₽`}</Text>
            </View>
            <TouchableOpacity activeOpacity={0.7} onPress={() => {}}>
              {favorite ? <FavoriteIcon /> : <NoFavoriteIcon />}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export { PizzaItem };

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 14,
  },
  image: {
    width: 133,
    height: 134,
  },
  containerText: {
    flex: 1,
    paddingLeft: 16,
    maxWidth: width - 160,
    paddingVertical: 13,
  },
  title: {
    color: '#000000',
    fontSize: 17,
    lineHeight: 22,
    fontWeight: '600',
    fontFamily: 'Inter-SemiBold',
    paddingBottom: 9,
  },
  description: {
    color: '#000000',
    opacity: 0.6,
    fontSize: 11,
    lineHeight: 13,
    fontWeight: '400',
    fontFamily: 'Inter-SemiBold',
    paddingBottom: 9,
  },
  containerBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  priceContainer: {
    backgroundColor: '#FFF0F0',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  price: {
    color: '#E54116',
    fontSize: 13,
    lineHeight: 18,
    fontWeight: '400',
    fontFamily: 'Inter-SemiBold',
    textAlign: 'center',
  },
  viewStyle: {
    backgroundColor: '#DDDDDD',
    width: '100%',
    height: 1,
  },
});
