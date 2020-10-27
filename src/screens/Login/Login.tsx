import React, { FunctionComponent } from 'react';
import { SafeAreaView, View, Button } from 'react-native';
import { ScreenTitle } from '@/components';
import { AuthNavProps } from '@/routes/Auth/AuthRoutesTypes';

type OwnProps = {};

export type LoginProps = OwnProps & AuthNavProps<'Login'>;

const Login: FunctionComponent<LoginProps> = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScreenTitle title="Login" />
      <View>
        <Button
          onPress={() => navigation.navigate('SignUp')}
          title="Go to sign up"
        />
      </View>
    </SafeAreaView>
  );
};

export default Login;
