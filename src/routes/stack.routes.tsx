import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Welcome } from '../pages/Welcome';
import { UserChoice } from '../pages/UserChoice';

const stackRoutes = createStackNavigator();

export const AppRoutes = () => (
  <stackRoutes.Navigator
    headerMode="none"
    screenOptions={{
      cardStyle: {
        backgroundColor: "#FFFF"
      }
    }}
  >
    <stackRoutes.Screen
      name='Welcome'
      component={Welcome}
    />

    <stackRoutes.Screen
      name='UserChoice'
      component={UserChoice}
    />
  </stackRoutes.Navigator>
);