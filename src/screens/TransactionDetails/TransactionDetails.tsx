import React, { FunctionComponent } from 'react';
import { SafeAreaView, Button } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';
import { BudgetNavProps } from '@/routes/BudgetNavigator/BudgetRoutesTypes';
import { BudgetCategoryItem } from '@/screens/Dashboard/components';

type OwnProps = {};

export type TransactionDetailsProps = OwnProps &
  BudgetNavProps<'TransactionDetails'>;

const TransactionDetails: FunctionComponent<TransactionDetailsProps> = ({
  navigation,
  route,
}) => {
  const { transaction } = route.params;
  return (
    <SafeAreaView>
      <SharedElement id={transaction.id}>
        <BudgetCategoryItem {...transaction} />
      </SharedElement>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </SafeAreaView>
  );
};

export default TransactionDetails;
