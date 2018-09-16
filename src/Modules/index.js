import React from 'react';
import {CategoryList} from "./CategoryList";
import {createStackNavigator, createTabNavigator,createBottomTabNavigator} from 'react-navigation';
import {Text, View} from "react-native";
import DetailsScreen from "./DetailsScreen";
import {HomeScreen} from "./HomeScreen";
import {ProductList} from "./ProductList";

const FormStack = createTabNavigator({
  HomeScreen: {
    screen: HomeScreen,
  },
  DetailsScreen: {
    screen: DetailsScreen,
  }
});

const StoreStack = createStackNavigator({
  CategoryList: {
    screen: CategoryList,
  },
  ProductList: {
    screen: ProductList,
  }
});

const RouteConfigs = {
  FormStack: {
    screen: FormStack,
  },
  StoreStack: {
    screen: StoreStack,
  },
};

const StackNavigatorConfig = {
  initialRouteName: 'FormStack',
};


export const RootStack = createBottomTabNavigator(RouteConfigs, StackNavigatorConfig);

export default RootStack;