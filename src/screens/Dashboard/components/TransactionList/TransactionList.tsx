import React, { FunctionComponent } from 'react';
import { TouchableOpacity } from 'react-native';
import { transactions } from '@/screens/Dashboard/components/TransactionList/mockData';
import BudgetCategoryItem from '@/screens/Dashboard/components/BudgetCategoryItem/BudgetCategoryItem';
import { Card } from '@/components';
import { useNavigation } from '@react-navigation/native';
import { BudgetNavProps } from '@/routes/Budget/BudgetRoutesTypes';

type OwnProps = {};

export type TransactionListProps = OwnProps;

const TransactionList: FunctionComponent<TransactionListProps> = () => {
  const navigation = useNavigation<BudgetNavProps<'MainBudget'>>();
  return (
    <Card type="secondary">
      {transactions.map((transaction) => (
        <TouchableOpacity
          key={transaction.id}
          onPress={() =>
            navigation.navigate('TransactionDetails', { transaction })
          }>
          <BudgetCategoryItem {...transaction} />
        </TouchableOpacity>
      ))}
    </Card>
  );
};

export default TransactionList;
