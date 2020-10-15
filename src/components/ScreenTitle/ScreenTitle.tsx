import React, { FunctionComponent } from 'react';
import { StyleSheet, Animated } from 'react-native';
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
    inputRange: [0, 300],
    outputRange: [30, 150],
  });
  const heightInterpolation = animatedValue?.interpolate({
    inputRange: [0, 300],
    outputRange: [50, 30],
    extrapolate: 'clamp',
  });

  const textTransform = animatedValue?.interpolate({
    inputRange: [0, 300],
    outputRange: [0, -10],
    extrapolate: 'clamp',
  });

  const fontSize = animatedValue?.interpolate({
    inputRange: [0, 300],
    outputRange: [20, 16],
    extrapolate: 'clamp',
  });
  return (
    <Animated.View
      style={[styles.container, { height: heightInterpolation || 60 }]}>
      <Animated.Text
        style={[
          styles.title,
          {
            transform: [{ translateY: textTransform || 0 }],
            fontSize: fontSize,
          },
        ]}>
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
    marginTop: 20,
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
