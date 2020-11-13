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
  },
  container: {
    flex: 1,
  },
});

const Cards: FunctionComponent<CardsProps> = () => {
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

  const animatedStyles = {
    opacity: animatedValue,
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScreenTitle title="Cards" />
      <Animated.View style={[appStyles.centered, animatedStyles]}>
        <TouchableWithoutFeedback onPress={startAnimation}>
          <View style={styles.box} />
        </TouchableWithoutFeedback>
        <Spacer size="large" />
        <TouchableWithoutFeedback onPress={startAnimation}>
          <View style={styles.box} />
        </TouchableWithoutFeedback>
      </Animated.View>
    </SafeAreaView>
  );
};

export default Cards;
