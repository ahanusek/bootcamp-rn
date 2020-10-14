import React, { FunctionComponent } from 'react';
import { View, Button } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';
import { BudgetNavProps } from '@/routes/BudgetNavigator/BudgetRoutesTypes';
import { BudgetCategoryItem } from '@/screens/Dashboard/components';
import { theme } from '@/theme';

type OwnProps = {};

export type TransactionDetailsProps = OwnProps &
  BudgetNavProps<'TransactionDetails'>;

const TransactionDetails: FunctionComponent<TransactionDetailsProps> = ({
  route,
  navigation,
}) => {
  const { transaction } = route.params;
  return (
    <View style={{ marginHorizontal: theme.spacing.large }}>
      <SharedElement id={transaction.id}>
        <BudgetCategoryItem {...transaction} />
      </SharedElement>
      <Button
        title="Go back"
        onPress={() => navigation.navigate('MainBudget')}
      />
    </View>
  );
};

export default TransactionDetails;
