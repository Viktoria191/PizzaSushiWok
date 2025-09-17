import React from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  ListRenderItemInfo,
  Text,
  TouchableOpacity,
} from 'react-native';
import { ButtonProps, ButtonText } from '../common/ButtonText';
import { UprockIcon } from '../icon/Uprock';
import { ArrowUpDown } from '../icon/ArrowUpDown';

const buttonData: ButtonProps[] = [
  { id: 1, text: 'Большие' },
  { id: 2, text: 'Средние' },
  { id: 3, text: 'Маленькие' },
];

const renderItem = ({ item }: ListRenderItemInfo<ButtonProps>) => (
  <ButtonText
    id={item.id}
    text={item.text}
    containerStyle={styles.containerStyle}
    textStyle={styles.textStyle}
  />
);

const keyExtractorButtons = (item: ButtonProps) => `${item.id}`;

const Filters = () => {
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {}}
          style={styles.iconContainer}
        >
          <UprockIcon />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {}}
          style={styles.textContainer}
        >
          <Text style={styles.text}>Все</Text>
        </TouchableOpacity>
        <FlatList
          data={buttonData}
          renderItem={renderItem}
          keyExtractor={keyExtractorButtons}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.flatListContent}
        />
      </View>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {}}
        style={styles.bottomButtonStyle}
      >
        <Text style={styles.bootomButtonText}>Популярные</Text>
        <ArrowUpDown />
      </TouchableOpacity>
    </>
  );
};
export { Filters };

const styles = StyleSheet.create({
  container: {
    paddingLeft: 16,
    flexDirection: 'row',
    paddingBottom: 19,
  },
  iconContainer: {
    backgroundColor: '#FFF0ED',
    borderRadius: 16,
    padding: 6,
    marginRight: 8,
  },
  textContainer: {
    backgroundColor: '#E54116',
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 8,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 13,
    lineHeight: 18,
    textAlign: 'center',
    fontWeight: '600',
    fontFamily: 'Inter-SemiBold',
  },
  flatListContent: {
    gap: 8,
    alignItems: 'center',
  },
  containerStyle: {
    backgroundColor: '#FFF0ED',
  },
  textStyle: {
    color: '#E54116',
  },
  bottomButtonStyle: {
    backgroundColor: '#FFF0ED',
    borderRadius: 24,
    paddingHorizontal: 17,
    paddingVertical: 8,
    alignSelf: 'flex-start',
    marginLeft: 16,
    flexDirection: 'row',
    marginBottom: 19,
  },
  bootomButtonText: {
    color: '#E54116',
    fontSize: 13,
    lineHeight: 18,
    textAlign: 'center',
    fontWeight: '600',
    fontFamily: 'Inter-SemiBold',
    paddingRight: 8,
  },
});
