import React, { FunctionComponent } from 'react';
import { SafeAreaView, Text, ActivityIndicator } from 'react-native';
import { AuthNavProps } from '@/routes/Auth/AuthRoutesTypes';
import { styles } from '@/theme';
import { Spacer } from '@/components';

type OwnProps = {};

export type LoginProps = AuthNavProps<'Login'> & OwnProps;

const Login: FunctionComponent<LoginProps> = () => {
  return (
    <SafeAreaView style={styles.centered}>
      <Text>Login</Text>
      <Spacer size="medium" />
      <ActivityIndicator size="large" />
    </SafeAreaView>
  );
};

export default Login;
