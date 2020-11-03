import React, { FunctionComponent } from 'react';
import { View, Text, Button } from 'react-native';
import { AuthNavProps } from '@/routes/Auth/AuthRoutesTypes';

type OwnProps = {};

export type LoginProps = OwnProps & AuthNavProps<'Login'>;

const Login: FunctionComponent<LoginProps> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Login</Text>
      <Button
        title="Go to sign up"
        onPress={() =>
          navigation.navigate('SignUp', { email: 'andrzej@tsh.io' })
        }
      />
    </View>
  );
};

export default Login;
