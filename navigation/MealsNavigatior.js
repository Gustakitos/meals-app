import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

function MealsNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Categories">
        <Stack.Screen
          name="Categories"
          component={CategoriesScreen}
          headerMode={false}
          screenOptions={{gestureEnabled: false}}
          options={{
            title: '',
            headerShown: false,
            headerTransparent: true,
            headerBackImage: false,
            headerBackTitleVisible: false,
          }}
        />
        <Stack.Screen
          name="CategoryMeals"
          component={CategoryMealsScreen}
          headerMode={false}
          screenOptions={{gestureEnabled: false}}
          options={{
            title: '',
            headerShown: false,
            headerTransparent: true,
            headerBackImage: false,
            headerBackTitleVisible: false,
          }}
        />
        <Stack.Screen
          name="MealDetail"
          component={MealDetailScreen}
          headerMode={false}
          screenOptions={{gestureEnabled: false}}
          options={{
            title: '',
            headerShown: false,
            headerTransparent: true,
            headerBackImage: false,
            headerBackTitleVisible: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MealsNavigator;
