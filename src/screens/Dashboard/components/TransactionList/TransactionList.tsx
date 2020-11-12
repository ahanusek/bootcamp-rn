import React, { FunctionComponent } from 'react';
import { Card } from '@/components';
import { transactions } from '@/screens/Dashboard/components/mockData';
import BudgetCategoryItem from '@/screens/Dashboard/components/BudgetCategoryItem/BudgetCategoryItem';

type OwnProps = {};

export type TransactionListProps = OwnProps;

const TransactionList: FunctionComponent<TransactionListProps> = () => {
  return (
    <Card type="secondary">
      {transactions.map((item) => (
        <BudgetCategoryItem {...item} key={item.id} />
      ))}
    </Card>
  );
};

export default TransactionList;
