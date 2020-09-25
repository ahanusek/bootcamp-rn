import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { BudgetCategory } from '@/screens/Dashboard/components/TransactionList/mockData';

export type BudgetStackParamList = {
  MainBudget: undefined;
  TransactionDetails: { transaction: BudgetCategory };
};

export type BudgetNavProps<T extends keyof BudgetStackParamList> = {
  navigation: StackNavigationProp<BudgetStackParamList, T>;
  route: RouteProp<BudgetStackParamList, T>;
};
