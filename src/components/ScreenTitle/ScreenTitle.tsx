import React, { FunctionComponent } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { subtitle, theme } from '@/theme';

type OwnProps = {
  title: string;
  animatedValue?: Animated.Value;
};

export type ScreenTitleProps = OwnProps;

const ScreenTitle: FunctionComponent<ScreenTitleProps> = ({
  title,
  animatedValue,
}) => {
  const widthInterpolation = animatedValue?.interpolate({
    inputRange: [0, 700],
    outputRange: [30, 150],
  });
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Animated.View
        style={[styles.divider, { width: widthInterpolation || 30 }]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: theme.colors.lightBorder,
    borderBottomWidth: 3,
  },
  title: {
    ...subtitle,
    fontSize: 20,
    paddingBottom: theme.spacing.standard,
  },
  divider: {
    height: 4,
    backgroundColor: theme.colors.secondary,
    width: 30,
    position: 'absolute',
    bottom: -3,
    borderRadius: theme.sizes.borderRadius,
  },
});

export default ScreenTitle;
