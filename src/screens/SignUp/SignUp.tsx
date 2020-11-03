import React, { FunctionComponent } from 'react';
import { Text, SafeAreaView, Button } from 'react-native';
import { AuthNavProps } from '@/routes/Auth/AuthRoutesTypes';

type OwnProps = {};

export type SignUpProps = OwnProps & AuthNavProps<'SignUp'>;

const SignUp: FunctionComponent<SignUpProps> = ({ route, navigation }) => {
  return (
    <SafeAreaView>
      <Text>Sign Up: {route.params.email}</Text>
      <Button title="Go to sign up" onPress={() => navigation.goBack()} />
    </SafeAreaView>
  );
};

export default SignUp;
