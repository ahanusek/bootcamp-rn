import React, { FunctionComponent, useRef } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScreenTitle } from '@/components';
import { ScrollView, View, Text, Animated } from 'react-native';

type OwnProps = {};

export type AccountProps = OwnProps;

const Account: FunctionComponent<AccountProps> = () => {
  const animation = useRef(new Animated.Value(0));
  return (
    <SafeAreaView style={{ flex: 1 }}>
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
        {Array.from({ length: 100 }).map((_, i) => {
          return (
            <View
              key={i}
              style={{
                height: 30,
                borderBottomWidth: 1,
                borderBottomColor: '#000',
              }}>
              <Text>Item {i + 1}</Text>
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Account;
