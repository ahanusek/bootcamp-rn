import React, { FunctionComponent } from 'react';
import { SafeAreaView } from 'react-native';
import { ScreenTitle } from '@/components';

type OwnProps = {};

export type AccountProps = OwnProps;

const Account: FunctionComponent<AccountProps> = () => {
  return (
    <SafeAreaView>
      <ScreenTitle title="Account" />
    </SafeAreaView>
  );
};

export default Account;