import React, { FunctionComponent } from 'react';
import { SafeAreaView, Button, View } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';
import { BudgetNavProps } from '@/routes/BudgetNavigator/BudgetRoutesTypes';
import BudgetCategoryIcon from '@/components/BudgetCategoryIcon/BudgetCategoryIcon';

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
      <View style={{ paddingHorizontal: 20, marginVertical: 10 }}>
        <SharedElement id={`${transaction.id}.icon`}>
          <BudgetCategoryIcon category={transaction.category} />
        </SharedElement>
      </View>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </SafeAreaView>
  );
};

export default TransactionDetails;
