import React, { FunctionComponent, useRef } from 'react';
import { Animated, SafeAreaView, ScrollView, View, Text } from 'react-native';
import { ScreenTitle } from '@/components';

type OwnProps = {};

export type AccountProps = OwnProps;

const Account: FunctionComponent<AccountProps> = () => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScreenTitle title="Account" animatedValue={animatedValue} />
      <ScrollView
        bounces={false}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  y: animatedValue,
                },
              },
            },
          ],
          { useNativeDriver: false },
        )}>
        {Array.from({ length: 100 }).map((_, i) => (
          <View key={i} style={{ height: 30, borderBottomWidth: 1 }}>
            <Text>Item {i + 1}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Account;
