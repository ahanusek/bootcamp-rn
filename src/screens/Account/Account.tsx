import React, { FunctionComponent } from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type OwnProps = {};

export type AccountProps = OwnProps;

const Account: FunctionComponent<AccountProps> = () => {
  return (
    <SafeAreaView>
      <Text>Account</Text>
    </SafeAreaView>
  );
};

export default Account;
