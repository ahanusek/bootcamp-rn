import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthStackList } from '@/routes/Auth/AuthRoutesTypes';
import Login from '@/screens/Login/Login';
import SignUp from '@/screens/SignUp/SignUp';

const { Navigator, Screen } = createStackNavigator<AuthStackList>();

const AuthNavigator: FC = () => {
  return (
    <Navigator headerMode="none">
      <Screen name="Login" component={Login} />
      <Screen name="SignUp" component={SignUp} />
    </Navigator>
  );
};

export default AuthNavigator;
