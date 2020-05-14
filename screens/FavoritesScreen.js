import React from 'react';
import MealList from '../components/MealList/MealList';
import { MEALS } from '../data/dummy-data';

const FavoritesScreen = (props) => {
  const favoriteMeals = MEALS.filter(
    (meal) => meal.id === 'm1' || meal.id === 'm2',
  );

  return <MealList listData={favoriteMeals} navigation={props.navigation} />;
};

export default FavoritesScreen;
