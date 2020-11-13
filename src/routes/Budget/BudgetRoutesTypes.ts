import { StackNavigationProp } from '@react-navigation/stack';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
import { BudgetCategory } from '@/screens/Dashboard/components/mockData';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import { MainNavigatorList } from '@/routes/Main/MainRoutesTypes';

export type BudgetStackParamList = {
  MainBudget: undefined;
  TransactionDetails: { transaction: BudgetCategory };
};

export type BudgetNestedNav<T extends keyof BudgetStackParamList> = {
  navigation: StackNavigationProp<BudgetStackParamList, T>;
  route: RouteProp<BudgetStackParamList, T>;
};

export type BudgetNavProps<
  T extends keyof BudgetStackParamList
> = CompositeNavigationProp<
  BottomTabNavigationProp<MainNavigatorList, 'Budget'>,
  StackNavigationProp<BudgetStackParamList, T>
>;
