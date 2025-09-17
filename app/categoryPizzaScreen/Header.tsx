import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { BackLeftIcon } from '../icon/BackLeft';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/types';

const Header = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const handleBackPress = () => {
    navigation.pop();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.touchableStyle} onPress={handleBackPress}>
        <BackLeftIcon />
      </TouchableOpacity>

      <View style={styles.titleContainer}>
        <Text style={styles.title} numberOfLines={1}>
          Пицца
        </Text>
      </View>
    </View>
  );
};
export { Header };

const styles = StyleSheet.create({
  container: {
    padding: 19,
    flexDirection: 'row',
    alignItems: 'center',
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
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#000000',
    fontSize: 18,
    lineHeight: 20,
    textAlign: 'center',
    fontWeight: '600',
    fontFamily: 'Inter-SemiBold',
    paddingRight: 40,
  },
});
