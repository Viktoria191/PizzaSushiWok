import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
  StyleProp,
} from 'react-native';

export type ButtonProps = {
  id: number;
  text: string;
  onPress?: () => void;
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

const ButtonText = ({
  text,
  onPress,
  containerStyle,
  textStyle,
}: ButtonProps) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={[styles.container, containerStyle]}>
        <Text style={[styles.text, textStyle]}>{text}</Text>
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
