import React, { FunctionComponent } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { BudgetStackParamList } from '@/routes/BudgetNavigator/BudgetRoutesTypes';
import Dashboard from '@/screens/Dashboard/Dashboard';
import TransactionDetails from '@/screens/TransactionDetails/TransactionDetails';

type OwnProps = {};

export type BudgetNavigatorProps = OwnProps;

const BudgetStack = createStackNavigator<BudgetStackParamList>();

const BudgetNavigator: FunctionComponent<BudgetNavigatorProps> = () => {
  return (
    <BudgetStack.Navigator>
      <BudgetStack.Screen
        name="MainBudget"
        component={Dashboard}
        options={{ headerShown: false }}
      />
      <BudgetStack.Screen
        name="TransactionDetails"
        component={TransactionDetails}
      />
    </BudgetStack.Navigator>
  );
};

export default BudgetNavigator;