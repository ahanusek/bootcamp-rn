import { StackNavigationProp } from '@react-navigation/stack';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { MainNavigatorParamList } from '@/routes/Main/MainRoutesTypes';
import { BudgetCategory } from '@/screens/Dashboard/components/TransactionList/mockData';

export type BudgetStackParamList = {
  MainBudget: undefined;
  TransactionDetails: { transaction: BudgetCategory };
};

export type BudgetNavProps<
  T extends keyof BudgetStackParamList
> = CompositeNavigationProp<
  BottomTabNavigationProp<MainNavigatorParamList, 'Budget'>,
  StackNavigationProp<BudgetStackParamList, T>
>;

export type BudgetRouteTypes<T extends keyof BudgetStackParamList> = RouteProp<
  BudgetStackParamList,
  T
>;

export type BudgetNavigatorProps<T extends keyof BudgetStackParamList> = {
  navigation: BudgetNavProps<T>;
  route: BudgetRouteTypes<T>;
};
