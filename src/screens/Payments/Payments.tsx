import React, { FunctionComponent, useRef } from 'react';
import { Animated, PanResponder, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type OwnProps = {};

export type PaymentsProps = OwnProps;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: 'bold',
  },
  box: {
    height: 150,
    width: 150,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
});
const Payments: FunctionComponent<PaymentsProps> = () => {
  const pan = useRef(new Animated.ValueXY()).current;
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        pan.setOffset({
          // @ts-ignore
          x: pan.x._value,
          // @ts-ignore
          y: pan.y._value,
        });
      },
      onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }]),
      onPanResponderRelease: () => {
        pan.flattenOffset();
      },
    }),
  ).current;
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Animated.View
        style={[
          styles.box,
          { transform: [{ translateY: pan.y }, { translateX: pan.x }] },
        ]}
        {...panResponder.panHandlers}
      />
    </SafeAreaView>
  );
};

export default Payments;
