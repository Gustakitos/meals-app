import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

import Icon from 'react-native-vector-icons/Ionicons';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import Colors from '../constants/Colors';
import { Platform } from 'react-native';

function Root() {
  return (
    <Tab.Navigator tabBarOptions={{ activeTintColor: Colors.accentColor }}>
      <Tab.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          tabBarLabel: 'Meals',
          tabBarIcon: (tabInfo) => {
            return (
              <Icon name="ios-restaurant" size={25} color={tabInfo.color} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          tabBarLabel: 'Favorites!',
          tabBarIcon: (tabInfo) => {
            return <Icon name="ios-star" size={25} color={tabInfo.color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}

function MealsNavigator() {
  const options = {
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
  };
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Root">
        <Stack.Screen
          name="CategoryMeals"
          component={CategoryMealsScreen}
          headerMode={false}
          screenOptions={{ gestureEnabled: false }}
          options={options}
        />
        <Stack.Screen
          name="MealDetail"
          component={MealDetailScreen}
          headerMode={false}
          screenOptions={{ gestureEnabled: false }}
          options={options}
        />
        <Stack.Screen
          name="Root"
          component={Root}
          headerMode={false}
          screenOptions={{ gestureEnabled: false }}
          options={{ ...options, title: 'Meals Categories' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MealsNavigator;
