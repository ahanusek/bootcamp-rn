import React, { FunctionComponent } from 'react';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { BudgetStackParamList } from '@/routes/BudgetNavigator/BudgetRoutesTypes';
import Dashboard from '@/screens/Dashboard/Dashboard';
import TransactionDetails from '@/screens/TransactionDetails/TransactionDetails';

type OwnProps = {};

export type BudgetNavigatorProps = OwnProps;

const BudgetStack = createSharedElementStackNavigator<BudgetStackParamList>();

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
        sharedElementsConfig={(route) => {
          const { transaction } = route.params;
          return [
            {
              id: transaction.id,
              animation: 'fade',
              // resize: 'clip'
              // align: ''left-top'
            },
          ];
        }}
        options={() => ({
          gestureEnabled: false,
          transitionSpec: {
            open: { animation: 'timing', config: { duration: 250 } },
            close: { animation: 'timing', config: { duration: 250 } },
          },
          cardStyleInterpolator: ({ current: { progress } }) => {
            return {
              cardStyle: {
                opacity: progress,
              },
            };
          },
        })}
      />
    </BudgetStack.Navigator>
  );
};

export default BudgetNavigator;
