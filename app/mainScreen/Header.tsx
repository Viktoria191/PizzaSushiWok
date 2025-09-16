import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MenuIcon } from '../icon/Menu';

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.7} onPress={() => {}}>
        <MenuIcon />
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.7} onPress={() => {}}>
        <View style={styles.containerText}>
          <Text style={styles.text}>Чистопрудный бульвар, 4</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export { Header };

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: 'row',
  },
  containerText: {
    backgroundColor: '#FFF0ED',
    marginLeft: 12,
    justifyContent: 'center',
    borderRadius: 24,
  },
  text: {
    paddingHorizontal: 66,
    paddingVertical: 12,
    color: '#E54116',
    fontSize: 13,
    lineHeight: 16,
    textAlign: 'center',
    fontWeight: '600',
    fontFamily: 'Inter-SemiBold',
  },
});
