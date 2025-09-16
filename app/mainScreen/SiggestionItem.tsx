import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Suggestion } from '../store/suggestions/types';

const SiggestionItem = ({ title, image }: Suggestion) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={() => {}}>
      <View style={styles.container}>
        <Image source={image} style={styles.image} resizeMode='cover' />
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
export { SiggestionItem };

const styles = StyleSheet.create({
  container: {
    paddingRight: 8,
  },
  containerText: {
    backgroundColor: '#FFF0ED',
    marginLeft: 12,
    justifyContent: 'center',
    borderRadius: 24,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 11,
    lineHeight: 13,
    textAlign: 'center',
    fontWeight: '400',
    fontFamily: 'Inter-SemiBold',
    marginTop: 80,
    position: 'absolute',
    paddingLeft: 8,
  },
  image: {
    width: 88,
    height: 100,
    borderRadius: 9,
  },
});
