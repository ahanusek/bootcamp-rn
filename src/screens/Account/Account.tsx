import React, { FunctionComponent, useRef } from 'react';
import {
  SafeAreaView,
  Animated,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import { ScreenTitle } from '@/components';
import { appStyles } from '@/theme';

type OwnProps = {};

export type AccountProps = OwnProps;

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    backgroundColor: '#FF0000',
  },
});

const Account: FunctionComponent<AccountProps> = () => {
  const animatedValue = useRef(new Animated.Value(1)).current;

  const startAnimation = () => {
    Animated.timing(animatedValue, {
      toValue: 0,
      duration: 350,
      useNativeDriver: false,
    }).start(() => {
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
      }).start();
    });
  };

  const animatedStyle = {
    opacity: animatedValue,
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScreenTitle title="Account" />
      <View style={[appStyles.centered]}>
        <TouchableWithoutFeedback onPress={startAnimation}>
          <Animated.View style={[styles.box, animatedStyle]} />
        </TouchableWithoutFeedback>
      </View>
    </SafeAreaView>
  );
};

export default Account;
