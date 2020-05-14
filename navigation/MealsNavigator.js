import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Stack = createStackNavigator();
const Tab =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator()
    : createBottomTabNavigator();

import Icon from 'react-native-vector-icons/Ionicons';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import Colors from '../constants/Colors';
import { Platform } from 'react-native';

function Root() {
  return (
    <Tab.Navigator
      barStyle={{ backgroundColor: Colors.primaryColor }}
      activeColor="#FFFFFF"
      shifting={true}
      tabBarOptions={{ activeTintColor: Colors.accentColor }}>
      <Tab.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          tabBarLabel: 'Meals',
          title: 'Meals',
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
        listeners={({ navigation, route }) => {
          navigation.setOptions({ headerTitle: 'Favorites' });
        }}
        options={{
          tabBarLabel: 'Favorites!',
          title: 'Favorites',
          headerShown: false,
          headerTransparent: true,
          headerBackImage: false,
          headerBackTitleVisible: false,
          tabBarIcon: (tabInfo) => {
            return <Icon name="ios-star" size={25} color={tabInfo.color} />;
          },
          tabBarColor: Colors.accentColor,
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
          options={{
            ...options,
            title: 'Meals Category',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MealsNavigator;
