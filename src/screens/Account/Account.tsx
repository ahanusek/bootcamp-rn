import React, { FunctionComponent, useRef } from 'react';
import { PanResponder, Animated, View, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScreenTitle } from '@/components';

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

const Account: FunctionComponent<PaymentsProps> = () => {
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
    <SafeAreaView>
      <ScreenTitle title="Payments" />
      <View style={styles.container}>
        <Text style={styles.titleText}>Drag this box!</Text>
        <Animated.View
          style={{
            transform: [{ translateX: pan.x }, { translateY: pan.y }],
          }}
          {...panResponder.panHandlers}>
          <View style={styles.box} />
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};

export default Account;
