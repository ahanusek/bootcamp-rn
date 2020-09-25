import React, { FunctionComponent } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainNavigatorParamList } from '@/routes/Main/MainRoutesTypes';
import Dashboard from '@/screens/Dashboard/Dashboard';
import Account from '@/screens/Account/Account';
import Payments from '@/screens/Payments/Payments';
import Cards from '@/screens/Cards/Cards';

type OwnProps = {};

export type MainProps = OwnProps;

const Tab = createBottomTabNavigator<MainNavigatorParamList>();
const MainNavigator: FunctionComponent<MainProps> = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Budget"
        component={Dashboard}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="wallet" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Payments"
        component={Payments}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="areachart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Cards"
        component={Cards}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="creditcard" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainNavigator;
