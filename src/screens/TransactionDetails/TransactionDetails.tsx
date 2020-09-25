import React, { FunctionComponent } from 'react';
import { View, Text } from 'react-native';
import { styles } from '@/theme';
import { BudgetNavProps } from '@/routes/BudgetNavigator/BudgetRoutesTypes';

type OwnProps = {};

export type TransactionDetailsProps = OwnProps &
  BudgetNavProps<'TransactionDetails'>;

const TransactionDetails: FunctionComponent<TransactionDetailsProps> = ({
  route,
}) => {
  const { transaction } = route.params;
  return (
    <View style={styles.centered}>
      <Text>
        {transaction.category} {transaction.transactions}
      </Text>
    </View>
  );
};

export default TransactionDetails;
