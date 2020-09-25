import React, { FunctionComponent } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthStackParamList } from '@/routes/Auth/AuthRoutesTypes';
import Login from '@/screens/Login/Login';
import SignUp from '@/screens/SignUp/SignUp';

type OwnProps = {};

export type AuthProps = OwnProps;

const AuthenticationStack = createStackNavigator<AuthStackParamList>();

const AuthNavigator: FunctionComponent<AuthProps> = () => {
  return (
    <AuthenticationStack.Navigator headerMode="none">
      <AuthenticationStack.Screen name="Login" component={Login} />
      <AuthenticationStack.Screen name="SignUp" component={SignUp} />
    </AuthenticationStack.Navigator>
  );
};

export default AuthNavigator;
