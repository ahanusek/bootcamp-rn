import React, { FunctionComponent } from 'react';
import { View, Text } from 'react-native';
import { AuthNavProps } from '@/routes/Auth/AuthRoutesTypes';

type OwnProps = {};

export type SignUpProps = AuthNavProps<'SignUp'> & OwnProps;

const SignUp: FunctionComponent<SignUpProps> = () => {
  return (
    <View>
      <Text>Sign up</Text>
    </View>
  );
};

export default SignUp;
