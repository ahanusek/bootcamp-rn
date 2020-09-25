import React, { FunctionComponent } from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type OwnProps = {};

export type PaymentsProps = OwnProps;

const Payments: FunctionComponent<PaymentsProps> = () => {
  return (
    <SafeAreaView>
      <Text>Payment</Text>
    </SafeAreaView>
  );
};

export default Payments;
