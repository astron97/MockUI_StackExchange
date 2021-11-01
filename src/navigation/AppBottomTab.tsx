import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ReactQA, ReactNativeQA, NodeQA} from '../screens';

const Tab = createBottomTabNavigator();

const AppBottomTabScreens = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="React" component={ReactQA} />
      <Tab.Screen name="ReactNative" component={ReactNativeQA} />
      <Tab.Screen name="Node" component={NodeQA} />
    </Tab.Navigator>
  );
};

export {AppBottomTabScreens};
