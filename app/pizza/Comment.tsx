import { RouteProp, useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { RootStackParamList } from '../navigation/types';
import { usePizzaById } from '../store/pizzas/selectors';

type PizzaScreenRouteProp = RouteProp<RootStackParamList, 'pizza'>;

const Comment = () => {
  const route = useRoute<PizzaScreenRouteProp>();

  const { pizzaId } = route.params;

  const pizza = usePizzaById(pizzaId);

  const [commentText, setCommentText] = useState('');

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View>
          <Text style={styles.titleText}>Комментарий к позиции</Text>
          <TextInput
            style={styles.input}
            placeholder="Напишите если хотите что-то убрать из блюда"
            value={commentText}
            onChangeText={setCommentText}
            multiline={true}
            textAlignVertical="top"
            placeholderTextColor={'#808080'}
          />
        </View>
      </TouchableWithoutFeedback>
      <View style={styles.bottomContainer}>
        <View>
          <Text style={styles.titleStyle}>Энерг.ценность</Text>
          <Text style={styles.valueStyle}>{pizza?.calories}</Text>
          <Text style={styles.nameStyle}>ккал</Text>
        </View>
        <View>
          <Text style={styles.titleStyle}>Белки</Text>
          <Text style={styles.valueStyle}>{pizza?.proteins}</Text>
          <Text style={styles.nameStyle}>грамм</Text>
        </View>
        <View>
          <Text style={styles.titleStyle}>Углеводы</Text>
          <Text style={styles.valueStyle}>{pizza?.carbohydrates}</Text>
          <Text style={styles.nameStyle}>грамм</Text>
        </View>
        <View>
          <Text style={styles.titleStyle}>Жиры</Text>
          <Text style={styles.valueStyle}>{pizza?.fats}</Text>
          <Text style={styles.nameStyle}>грамм</Text>
        </View>
      </View>
    </View>
  );
};
export { Comment };

const styles = StyleSheet.create({
  container: {
    paddingBottom: 16,
    paddingHorizontal: 16,
  },
  titleText: {
    fontSize: 17,
    lineHeight: 22,
    fontWeight: '600',
    fontFamily: 'Inter-SemiBold',
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#EEF1F7',
    borderRadius: 24,
    padding: 16,
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Inter-SemiBold',
    backgroundColor: '#F6F7F9',
    marginBottom: 16,
  },
  bottomContainer: {
    borderWidth: 1,
    borderColor: '#EEF1F7',
    borderRadius: 24,
    paddingVertical: 16,
    paddingHorizontal: 22,
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Inter-SemiBold',
    backgroundColor: '#F6F7F9',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleStyle: {
    fontSize: 12,
    fontWeight: '600',
    fontFamily: 'Inter-SemiBold',
    paddingBottom: 8,
    color: '#808080',
    textAlign: 'center',
  },
  valueStyle: {
    fontSize: 20,
    fontWeight: '700',
    fontFamily: 'Inter-SemiBold',
    paddingBottom: 8,
    color: '#222222',
    textAlign: 'center',
  },
  nameStyle: {
    fontSize: 10,
    fontWeight: '600',
    fontFamily: 'Inter-SemiBold',
    color: '#808080',
    textAlign: 'center',
  },
});
