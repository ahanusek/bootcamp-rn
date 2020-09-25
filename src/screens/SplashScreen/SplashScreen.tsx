import React, { FunctionComponent } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

type OwnProps = {};

export type SplashScreenProps = OwnProps;

const SplashScreen: FunctionComponent<SplashScreenProps> = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
});

export default SplashScreen;
