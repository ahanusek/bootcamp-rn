import React, { FunctionComponent, useRef } from 'react';
import {
  SafeAreaView,
  TouchableWithoutFeedback,
  Animated,
  View,
  StyleSheet,
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
});

const Cards: FunctionComponent<CardsProps> = () => {
  const animation = useRef(new Animated.Value(1));

  const startAnimation = () => {
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

  const animatedStyles = {
    opacity: animation.current,
  };
  return (
    <SafeAreaView>
      <ScreenTitle title="Cards" />
      <Spacer size="xlarge" />
      <View style={[appStyles.centered, { marginTop: 100 }]}>
        <TouchableWithoutFeedback onPress={startAnimation}>
          <Animated.View style={[styles.box, animatedStyles]} />
        </TouchableWithoutFeedback>
      </View>
    </SafeAreaView>
  );
};

export default Cards;
