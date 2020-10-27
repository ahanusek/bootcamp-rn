import React, { FunctionComponent } from 'react';
import { Button, SafeAreaView, View } from 'react-native';
import { ScreenTitle } from '@/components';
import { AuthNavProps } from '@/routes/Auth/AuthRoutesTypes';

type OwnProps = {};

export type SignUpProps = OwnProps & AuthNavProps<'SignUp'>;

const SignUp: FunctionComponent<SignUpProps> = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScreenTitle title="Sign up" />
      <View>
        <Button onPress={navigation.goBack} title="Go back" />
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
