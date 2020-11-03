import React, { FunctionComponent } from 'react';
import { FlatList } from 'react-native';
import {
  BudgetCategory,
  transactions,
} from '@/screens/Dashboard/components/TransactionList/mockData';
import BudgetCategoryItem from '@/screens/Dashboard/components/BudgetCategoryItem/BudgetCategoryItem';
import { Card } from '@/components';

type OwnProps = {};

export type TransactionListProps = OwnProps;

const TransactionList: FunctionComponent<TransactionListProps> = () => {
  const renderItem = ({ item }: { item: BudgetCategory }) => {
    return <BudgetCategoryItem {...item} key={item.id} />;
  };
  return (
    <Card type="secondary">
      <FlatList<BudgetCategory> data={transactions} renderItem={renderItem} />
    </Card>
  );
};

export default TransactionList;
