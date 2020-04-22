import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import Colors from '../constants/Colors';
import {Platform} from 'react-native';

function MealsNavigator() {
  const options = {
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
  };
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Categories">
        <Stack.Screen
          name="Categories"
          component={CategoriesScreen}
          headerMode={false}
          screenOptions={{gestureEnabled: false}}
          options={options}
        />
        <Stack.Screen
          name="CategoryMeals"
          component={CategoryMealsScreen}
          headerMode={false}
          screenOptions={{gestureEnabled: false}}
          options={options}
        />
        <Stack.Screen
          name="MealDetail"
          component={MealDetailScreen}
          headerMode={false}
          screenOptions={{gestureEnabled: false}}
          options={options}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MealsNavigator;
