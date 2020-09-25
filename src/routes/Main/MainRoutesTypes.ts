import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { RouteProp } from '@react-navigation/native';

export type MainNavigatorParamList = {
  Budget: undefined;
  Account: undefined;
  Cards: undefined;
  Payments: undefined;
};

export type MainNavProps<T extends keyof MainNavigatorParamList> = {
  navigation: BottomTabNavigationProp<MainNavigatorParamList, T>;
  route: RouteProp<MainNavigatorParamList, T>;
};
