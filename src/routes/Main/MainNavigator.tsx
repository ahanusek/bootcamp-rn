import React, { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign';
import { MainNavigatorParamList } from '@/routes/Main/MainRoutesTypes';
import Cards from '@/screens/Cards/Cards';
import Payments from '@/screens/Payments/Payments';
import Account from '@/screens/Account/Account';
import BudgetNavigator from '@/routes/Budget/BudgetNavigator';

const { Navigator, Screen } = createBottomTabNavigator<
  MainNavigatorParamList
>();

export const MainNavigator: FC = () => {
  return (
    <Navigator>
      <Screen
        name="Budget"
        component={BudgetNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="wallet" color={color} size={size} />
          ),
        }}
      />
      <Screen
        name="Cards"
        component={Cards}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="creditcard" color={color} size={size} />
          ),
        }}
      />
      <Screen
        name="Payments"
        component={Payments}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="areachart" color={color} size={size} />
          ),
        }}
      />
      <Screen
        name="Account"
        component={Account}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
      />
    </Navigator>
  );
};