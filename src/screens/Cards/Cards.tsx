import React, { FunctionComponent, useRef } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';
import { ScreenTitle, Spacer } from '@/components';
import { appStyles } from '@/theme';

type OwnProps = {};

export type CardsProps = OwnProps;

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    backgroundColor: '#FF0000',
    alignContent: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
  },
});

const Cards: FunctionComponent<CardsProps> = () => {
  const animatedValue = useRef(new Animated.Value(1)).current;
  const transformAnimation = useRef(new Animated.Value(0)).current;
  const springAnimation = useRef(new Animated.Value(1)).current;

  const startTransformAnimation = () => {
    Animated.timing(transformAnimation, {
      toValue: 100,
      duration: 350,
      useNativeDriver: false,
    }).start(() => {
      Animated.timing(transformAnimation, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }).start();
    });
  };

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

  const startSpringAnimation = () => {
    Animated.spring(springAnimation, {
      toValue: 2,
      friction: 2,
      tension: 140,
      useNativeDriver: false,
    }).start(() => {
      Animated.timing(springAnimation, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
      }).start();
    });
  };

  const animatedStyles = {
    opacity: animatedValue,
  };

  const transformAnimatedStyles = {
    transform: [
      {
        translateY: transformAnimation,
      },
      {
        translateX: transformAnimation,
      },
    ],
  };

  const bgInterpolation = transformAnimation.interpolate({
    inputRange: [0, 100],
    outputRange: ['rgb(255, 99, 71)', 'rgb(99, 71, 255)'],
  });

  const colorInterpolation = transformAnimation.interpolate({
    inputRange: [0, 100],
    outputRange: ['rgb(0, 0, 0)', 'rgb(255, 255, 255)'],
  });

  const scaleAnimationStyles = {
    transform: [{ scale: springAnimation }],
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScreenTitle title="Cards" />
      <View style={appStyles.centered}>
        <TouchableWithoutFeedback onPress={startAnimation}>
          <Animated.View style={[styles.box, animatedStyles]} />
        </TouchableWithoutFeedback>
        <Spacer size="large" />
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
        <Spacer size="large" />
        <TouchableWithoutFeedback onPress={startSpringAnimation}>
          <Animated.View style={[styles.box, scaleAnimationStyles]} />
        </TouchableWithoutFeedback>
      </View>
    </SafeAreaView>
  );
};

export default Cards;
