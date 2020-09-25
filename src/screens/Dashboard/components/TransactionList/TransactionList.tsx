import React, { FunctionComponent } from 'react';
import { View } from 'react-native';
import { transactions } from '@/screens/Dashboard/components/TransactionList/mockData';
import { BudgetCategoryItem } from '@/screens/Dashboard/components';

import { useNavigation } from '@react-navigation/native';

type OwnProps = {};

export type TransactionListProps = OwnProps;

const TransactionList: FunctionComponent<TransactionListProps> = () => {
  const navigation = useNavigation();
  return (
    <View>
      {transactions.map((transaction) => (
        <BudgetCategoryItem
          {...transaction}
          key={transaction.id}
          onPress={() =>
            navigation.navigate('TransactionDetails', { transaction })
          }
        />
      ))}
    </View>
  );
};

export default TransactionList;
