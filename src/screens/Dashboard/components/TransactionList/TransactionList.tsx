import React, { FunctionComponent } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { Card } from '@/components';
import { useNavigation } from '@react-navigation/native';

import {
  BudgetCategory,
  transactions,
} from '@/screens/Dashboard/components/mockData';
import BudgetCategoryItem from '@/screens/Dashboard/components/BudgetCategoryItem/BudgetCategoryItem';
import { BudgetNavProps } from '@/routes/Budget/BudgetRoutesTypes';

type OwnProps = {};

export type TransactionListProps = OwnProps;

const TransactionList: FunctionComponent<TransactionListProps> = () => {
  const navigation = useNavigation<BudgetNavProps<'MainBudget'>>();
  const renderItem = ({ item }: { item: BudgetCategory }) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('TransactionDetails', { transaction: item })
        }>
        <BudgetCategoryItem {...item} key={item.id} />
      </TouchableOpacity>
    );
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
