import React from 'react';
import { StyleSheet, View, FlatList, ListRenderItemInfo } from 'react-native';
import { ButtonProps, ButtonText } from '../common/ButtonText';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

const buttonData: ButtonProps[] = [
  { id: 1, text: 'Пицца' },
  { id: 2, text: 'Ассорти' },
  { id: 3, text: 'Роллы' },
  { id: 4, text: 'Суши' },
  { id: 5, text: 'Wok' },
  { id: 6, text: 'Салаты' },
  { id: 7, text: 'Напитки' },
  { id: 8, text: 'Десерты' },
];

const MenuButtons = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handlePizzaPress = () => {
    navigation.navigate('categoryPizza');
  };

  const renderItem = ({ item }: ListRenderItemInfo<ButtonProps>) => (
    <ButtonText
      id={item.id}
      text={item.text}
      onPress={item.text === 'Пицца' ? handlePizzaPress : undefined}
    />
  );

  const keyExtractorButtons = (item: ButtonProps) => `${item.id}`;

  return (
    <View>
      <FlatList
        data={buttonData}
        renderItem={renderItem}
        keyExtractor={keyExtractorButtons}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
};
export { MenuButtons };

const styles = StyleSheet.create({
  flatListContent: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    gap: 8,
    alignItems: 'center',
  },
});
