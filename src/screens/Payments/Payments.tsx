import React, { FunctionComponent } from 'react';
import { SafeAreaView } from 'react-native';
import { ScreenTitle } from '@/components';

type OwnProps = {};

export type PaymentsProps = OwnProps;

const Payments: FunctionComponent<PaymentsProps> = () => {
  return (
    <SafeAreaView>
      <ScreenTitle title="Payments" />
    </SafeAreaView>
  );
};

export default Payments;