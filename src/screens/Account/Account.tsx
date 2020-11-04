import React, { FunctionComponent, useRef } from 'react';
import {
  SafeAreaView,
  Animated,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import { ScreenTitle, Spacer } from '@/components';
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
  const transformAnimation = useRef(new Animated.Value(0));

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

  const startTransformAnimation = () => {
    Animated.timing(transformAnimation.current, {
      toValue: 100,
      duration: 1000,
      useNativeDriver: false,
    }).start(() => {
      Animated.timing(transformAnimation.current, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: false,
      }).start();
    });
  };

  const bgInterpolation = transformAnimation.current.interpolate({
    inputRange: [0, 100],
    outputRange: ['rgb(255, 99, 71)', 'rgb(99, 71, 255)'],
  });

  const colorInterpolation = transformAnimation.current.interpolate({
    inputRange: [0, 100],
    outputRange: ['rgba(0, 0, 0, 1)', 'rgba(255, 255, 255, 0)'],
  });

  const animatedStyle = {
    opacity: animatedValue,
  };
  const transformAnimatedStyles = {
    transform: [
      {
        translateY: transformAnimation.current,
      },
      {
        translateX: transformAnimation.current,
      },
    ],
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScreenTitle title="Account" />
      <View style={[appStyles.centered]}>
        <TouchableWithoutFeedback onPress={startAnimation}>
          <Animated.View style={[styles.box, animatedStyle]} />
        </TouchableWithoutFeedback>
        <Spacer size="xlarge" />
        <TouchableWithoutFeedback onPress={startTransformAnimation}>
          <Animated.View
            style={[
              styles.box,
              transformAnimatedStyles,
              { backgroundColor: bgInterpolation },
            ]}>
            <Animated.Text
              style={{ textAlign: 'center', color: colorInterpolation }}>
              Tekst
            </Animated.Text>
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    </SafeAreaView>
  );
};

export default Account;
