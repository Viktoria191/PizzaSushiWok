import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export type ButtonProps = {
  id: number;
  text: string;
};

const ButtonText = ({ text }: ButtonProps) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={() => {}}>
      <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};
export { ButtonText };

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F7',
    borderRadius: 30,
  },
  text: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    color: '#56565E',
    fontSize: 13,
    lineHeight: 18,
    textAlign: 'center',
    fontWeight: '600',
    fontFamily: 'Inter-SemiBold',
  },
});
