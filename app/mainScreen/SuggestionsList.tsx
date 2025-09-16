import React, { useEffect } from 'react';
import { StyleSheet, View, FlatList, ListRenderItemInfo } from 'react-native';
import { useAppDispatch } from '../store';
import { useSuggestions } from '../store/suggestions/selectors';
import { getSuggestionsAction } from '../store/suggestions/actions';
import { Suggestion } from '../store/suggestions/types';
import { SiggestionItem } from './SiggestionItem';

const renderSuggestionsItem = ({ item }: ListRenderItemInfo<Suggestion>) => {
  return <SiggestionItem id={item.id} title={item.title} image={item.image} />;
};

const keyExtractorSuggestions = (item: Suggestion) => `${item.id}`;

const SuggestionsList = () => {
  const dispatch = useAppDispatch();
  const suggestions = useSuggestions();

  useEffect(() => {
    dispatch(getSuggestionsAction());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <FlatList
        data={suggestions}
        renderItem={renderSuggestionsItem}
        keyExtractor={keyExtractorSuggestions}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
export { SuggestionsList };

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    paddingLeft: 16,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
