import React, { FunctionComponent } from 'react';
import { StyleSheet, Animated } from 'react-native';
import { subtitle, theme } from '@/theme';

type OwnProps = {
  title: string;
  animatedValue?: Animated.Value;
  listHeight?: number;
};

export type ScreenTitleProps = OwnProps;

const ScreenTitle: FunctionComponent<ScreenTitleProps> = ({
  title,
  animatedValue,
  listHeight,
}) => {
  const widthInterpolation = animatedValue?.interpolate({
    inputRange: [0, listHeight || 700],
    outputRange: [30, 150],
    extrapolateLeft: 'clamp',
    extrapolateRight: 'extend',
  });

  const fontSize = animatedValue?.interpolate({
    inputRange: [0, 700],
    outputRange: [20, 16],
    extrapolate: 'clamp',
  });
  return (
    <Animated.View style={[styles.container]}>
      <Animated.Text style={[styles.title, { fontSize }]}>
        {title}
      </Animated.Text>
      <Animated.View
        style={[styles.divider, { width: widthInterpolation || 30 }]}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: theme.colors.lightBorder,
    borderBottomWidth: 3,
    backgroundColor: 'transparent',
    overflow: 'hidden',
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
