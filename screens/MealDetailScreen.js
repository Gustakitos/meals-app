import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { MEALS } from '../data/dummy-data';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/headerButton/headerButton';

const MealDetailScreen = (props) => {
  const mealId = props.route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  props.navigation.setOptions({
    title: selectedMeal.title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favorite"
          iconName="ios-star"
          onPress={() => console.log('favorited')}
        />
      </HeaderButtons>
    ),
  });

  return (
    <View style={styles.screen}>
      <Text>{selectedMeal.title}</Text>
      <Button
        title="Go back to categories"
        onPress={() => {
          props.navigation.popToTop();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MealDetailScreen;
