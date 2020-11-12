import React, { FunctionComponent } from 'react';
import { View, Button } from 'react-native';
import { AuthNavProps } from '@/routes/Auth/AuthRoutesTypes';

type OwnProps = {};

export type LoginProps = OwnProps & AuthNavProps<'Login'>;

const Login: FunctionComponent<LoginProps> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Go to sign up"
        onPress={() => navigation.navigate('SignUp', { email: 'test@o2.pl' })}
      />
    </View>
  );
};

export default Login;
