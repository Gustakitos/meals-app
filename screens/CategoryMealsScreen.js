import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

import {CATEGORIES} from '../data/dummy-data';

const CategoryMealsScreen = (props) => {
  const catId = props.route.params.categoryId;

  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

  props.navigation.setOptions({title: selectedCategory.title});
  return (
    <View style={styles.screen}>
      <Text>The Category Meal screen</Text>
      <Text>{selectedCategory.title}</Text>
      <Button
        title="Go to Meal Detail screen"
        onPress={() => {
          props.navigation.navigate('MealDetail');
        }}
      />
      <Button
        title="Go back"
        onPress={() => {
          props.navigation.pop();
        }}
      />
    </View>
  );
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
  console.log(navigationData);
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CategoryMealsScreen;
