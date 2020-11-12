import React, { FunctionComponent } from 'react';
import { View, Button, Text } from 'react-native';
import { AuthNavProps } from '@/routes/Auth/AuthRoutesTypes';

type OwnProps = {};

export type SignUpProps = OwnProps & AuthNavProps<'SignUp'>;

const SignUp: FunctionComponent<SignUpProps> = ({ navigation, route }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{route.params.email}</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default SignUp;
