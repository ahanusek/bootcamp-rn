import React, { FunctionComponent, useRef } from 'react';
import { SafeAreaView, ScrollView, View, Text, Animated } from 'react-native';
import { ScreenTitle } from '@/components';

type OwnProps = {};

export type CardProps = OwnProps;

const Cards: FunctionComponent<CardProps> = () => {
  const scrollY = useRef(new Animated.Value(0)).current;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScreenTitle title="Cards" scrollY={scrollY} />
      <ScrollView
        scrollEventThrottle={16}
        onScroll={Animated.event([
          {
            nativeEvent: {
              contentOffset: {
                y: scrollY,
              },
            },
          },
        ])}>
        {Array.from({ length: 100 }).map((_, i) => (
          <View
            key={i}
            style={{
              height: 30,
              borderBottomWidth: 1,
              borderBottomColor: '#000',
            }}>
            <Text>Item {i + 1}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Cards;
