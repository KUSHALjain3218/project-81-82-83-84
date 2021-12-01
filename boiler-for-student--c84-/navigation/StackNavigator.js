import React from 'react';
import TabNavigator from './TabNavigator';
import StoryScreen from '../screens/PostScreen';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="HOME"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HOME" component={TabNavigator} />
      <Stack.Screen name="StoryScreen" component={StoryScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
