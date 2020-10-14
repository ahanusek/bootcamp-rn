import React, { FunctionComponent, useRef } from 'react';
import {
  SafeAreaView,
  TouchableWithoutFeedback,
  Animated,
  View,
  StyleSheet,
  Easing,
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
});

const Cards: FunctionComponent<CardsProps> = () => {
  const animation = useRef(new Animated.Value(1));
  const transformAnimation = useRef(new Animated.Value(0));
  const springAnimation = useRef(new Animated.Value(1));

  const startOpacityAnimation = () => {
    Animated.timing(animation.current, {
      toValue: 0,
      duration: 350,
      useNativeDriver: false,
    }).start(() => {
      Animated.timing(animation.current, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
      }).start();
    });
  };

  const startTransformAnimation = () => {
    Animated.timing(transformAnimation.current, {
      toValue: 100,
      duration: 350,
      easing: Easing.bezier(0.06, 1, 0.86, 0.23),
      useNativeDriver: false,
    }).start(() => {
      Animated.timing(transformAnimation.current, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }).start();
    });
  };

  const startSpringAnimation = () => {
    Animated.spring(springAnimation.current, {
      toValue: 2,
      friction: 2,
      tension: 120,
      useNativeDriver: false,
    }).start(() => {
      Animated.timing(springAnimation.current, {
        toValue: 1,
        duration: 500,
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
    outputRange: ['rgb(0, 0, 0)', 'rgb(255, 255, 255)'],
  });

  const animatedStyles = {
    opacity: animation.current,
  };
  const transformAnimatedStyles = {
    transform: [
      {
        translateY: transformAnimation.current,
      },
    ],
  };

  const scaleAnimation = {
    transform: [{ scale: springAnimation.current }],
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScreenTitle title="Cards" />
      <Spacer size="xlarge" />
      <View style={[appStyles.centered]}>
        <TouchableWithoutFeedback onPress={startOpacityAnimation}>
          <Animated.View style={[styles.box, animatedStyles]} />
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

        <Spacer size="xlarge" />

        <TouchableWithoutFeedback onPress={startSpringAnimation}>
          <Animated.View style={[styles.box, scaleAnimation]} />
        </TouchableWithoutFeedback>
      </View>
    </SafeAreaView>
  );
};

export default Cards;
