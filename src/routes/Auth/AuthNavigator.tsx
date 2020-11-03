import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthStackParamList } from '@/routes/Auth/AuthRoutesTypes';
import Login from '@/screens/Login/Login';
import SignUp from '@/screens/SignUp/SignUp';

const { Navigator, Screen } = createStackNavigator<AuthStackParamList>();

export const AuthNavigator: FC = () => {
  return (
    <Navigator>
      <Screen name="Login" component={Login} />
      <Screen name="SignUp" component={SignUp} />
    </Navigator>
  );
};
