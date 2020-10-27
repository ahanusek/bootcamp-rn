import React, { FunctionComponent } from 'react';
import { View } from 'react-native';
import { transactions } from '@/screens/Dashboard/components/mockData';
import BudgetCategoryItem from '@/screens/Dashboard/components/BudgetCategoryItem';

type OwnProps = {};

export type TransactionListProps = OwnProps;

const TransactionList: FunctionComponent<TransactionListProps> = () => {
  return (
    <View>
      {transactions.map((transaction) => (
        <BudgetCategoryItem {...transaction} key={transaction.id} />
      ))}
    </View>
  );
};

export default TransactionList;
