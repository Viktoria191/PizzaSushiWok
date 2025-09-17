import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { BackLeftIcon } from '../icon/BackLeft';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';
import { FavoriteIcon } from '../icon/Favorite';
import { NoFavoriteIcon } from '../icon/NoFavorite';
import { usePizzaById } from '../store/pizzas/selectors';
import { StackNavigationProp } from '@react-navigation/stack';

type PizzaScreenRouteProp = RouteProp<RootStackParamList, 'pizza'>;

const Header = () => {
  const route = useRoute<PizzaScreenRouteProp>();

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const handleBackPress = () => {
    navigation.pop();
  };

  const { pizzaId } = route.params;

  const pizza = usePizzaById(pizzaId);

  return (
    <View>
      <View style={styles.headerIconsContainer}>
        <TouchableOpacity
          style={[styles.touchableStyle, styles.leftIcon]}
          onPress={handleBackPress}
        >
          <BackLeftIcon />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.touchableTwoStyle, styles.rightIcon]}
          onPress={() => {}}
        >
          {pizza?.favorite ? <FavoriteIcon /> : <NoFavoriteIcon />}
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <Image source={pizza?.image} style={styles.image} resizeMode="cover" />
      </View>
    </View>
  );
};
export { Header };

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  touchableStyle: {
    backgroundColor: 'white',
    paddingVertical: 7,
    paddingRight: 9,
    paddingLeft: 5,
    borderRadius: 50,
    shadowColor: '#AEAEC0',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    position: 'absolute',
    top: 10,
  },
  touchableTwoStyle: {
    backgroundColor: 'white',
    padding: 7,
    borderRadius: 50,
    shadowColor: '#AEAEC0',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    position: 'absolute',
    top: 10,
  },
  leftIcon: {
    left: 16,
  },
  rightIcon: {
    right: 16,
  },
  image: {
    width: 300,
    height: 300,
  },
});
