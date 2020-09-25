import React, { FunctionComponent } from 'react';
import { View, Text } from 'react-native';
import { AuthNavProps } from '@/routes/Auth/AuthRoutesTypes';

type OwnProps = {};

export type LoginProps = AuthNavProps<'Login'> & OwnProps;

const Login: FunctionComponent<LoginProps> = () => {
  return (
    <View>
      <Text>Login</Text>
    </View>
  );
};

export default Login;
