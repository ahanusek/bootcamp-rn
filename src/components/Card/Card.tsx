import React, { FunctionComponent } from 'react';
import { Animated, StyleSheet } from 'react-native';
import { theme } from '@/theme';

type OwnProps = {
  type?: 'primary' | 'secondary';
  scrollY?: Animated.Value;
};

export type CardProps = OwnProps;

const Card: FunctionComponent<CardProps> = ({
  children,
  type = 'primary',
  scrollY,
}) => {
  const cardInterpolation = scrollY?.interpolate({
    inputRange: [0, 100],
    outputRange: [0, -100],
    extrapolate: 'clamp',
  });
  return (
    <Animated.View
      style={[
        styles.container,
        { backgroundColor: mapTypeToBackgroundColor[type] },
        { transform: [{ translateY: cardInterpolation || 0 }] },
      ]}>
      {children}
    </Animated.View>
  );
};

const mapTypeToBackgroundColor = {
  primary: theme.colors.secondary,
  secondary: theme.colors.light,
};

const styles = StyleSheet.create({
  container: {
    ...theme.shadow,
    backgroundColor: theme.colors.secondary,
    marginHorizontal: theme.spacing.large,
    borderRadius: theme.sizes.borderRadius,
    minHeight: 130,
    padding: theme.spacing.medium,
  },
});

export default Card;
