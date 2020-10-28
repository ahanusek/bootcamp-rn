import React, { FunctionComponent, useRef } from 'react';
import { View, Text, Animated, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScreenTitle } from '@/components';

type OwnProps = {};

export type AccountProps = OwnProps;

const Account: FunctionComponent<AccountProps> = () => {
  const animation = useRef(new Animated.Value(0));
  return (
    <SafeAreaView>
      <ScreenTitle title="Account" animatedValue={animation.current} />
      <ScrollView
        scrollEventThrottle={16}
        onScroll={Animated.event([
          {
            nativeEvent: {
              contentOffset: {
                y: animation.current,
              },
            },
          },
        ])}>
        {Array.from({ length: 100 }).map((_, i) => (
          <View
            key={i}
            style={{
              height: 40,
              borderBottomWidth: 1,
            }}>
            <Text>Item {i + 1}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Account;
