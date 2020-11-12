import React, { FC } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainNavigatorList } from '@/routes/Main/MainRoutesTypes';
import Account from '@/screens/Account/Account';
import Payments from '@/screens/Payments/Payments';
import Cards from '@/screens/Cards/Cards';
import BudgetNavigator from '@/routes/Budget/BudgetNavigator';

const { Navigator, Screen } = createBottomTabNavigator<MainNavigatorList>();

const MainNavigator: FC = () => {
  return (
    <Navigator>
      <Screen
        name="Budget"
        component={BudgetNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon size={size} color={color} name="wallet" />
          ),
        }}
      />
      <Screen
        name="Account"
        component={Account}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon size={size} color={color} name="user" />
          ),
        }}
      />
      <Screen
        name="Payments"
        component={Payments}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon size={size} color={color} name="areachart" />
          ),
        }}
      />
      <Screen
        name="Cards"
        component={Cards}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon size={size} color={color} name="creditcard" />
          ),
        }}
      />
    </Navigator>
  );
};

export default MainNavigator;
