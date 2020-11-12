import React, { FunctionComponent } from 'react';
import { FlatList } from 'react-native';
import { Card } from '@/components';
import {
  BudgetCategory,
  transactions,
} from '@/screens/Dashboard/components/mockData';
import BudgetCategoryItem from '@/screens/Dashboard/components/BudgetCategoryItem/BudgetCategoryItem';

type OwnProps = {};

export type TransactionListProps = OwnProps;

const TransactionList: FunctionComponent<TransactionListProps> = () => {
  const renderItem = ({ item }: { item: BudgetCategory }) => {
    return <BudgetCategoryItem {...item} key={item.id} />;
  };
  return (
    <Card type="secondary">
      <FlatList<BudgetCategory>
        data={transactions}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </Card>
  );
};

export default TransactionList;
