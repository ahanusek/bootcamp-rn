import React, { FunctionComponent, useRef } from 'react';
import { Text, Animated, ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScreenTitle } from '@/components';

type OwnProps = {};

export type PaymentsProps = OwnProps;

const Payments: FunctionComponent<PaymentsProps> = () => {
  const animation = useRef(new Animated.Value(0));
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScreenTitle title="Payments" animatedValue={animation.current} />
      <ScrollView
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  y: animation.current,
                },
              },
            },
          ],
          { useNativeDriver: false },
        )}>
        {Array.from({ length: 200 }).map((_, i) => {
          return (
            <View key={i} style={{ height: 30, borderBottomWidth: 1 }}>
              <Text>Item {i + 1}</Text>
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Payments;
