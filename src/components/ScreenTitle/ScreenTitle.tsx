import React, { FunctionComponent } from 'react';
import { Dimensions, StyleSheet, Animated } from 'react-native';
import { appStyles, theme } from '@/theme';

type OwnProps = {
  title: string;
  scrollY?: Animated.Value;
  scrollOffset?: number;
};

const { width } = Dimensions.get('screen');

export type ScreenTitleProps = OwnProps;

const ScreenTitle: FunctionComponent<ScreenTitleProps> = ({
  title,
  scrollY,
  scrollOffset,
}) => {
  const widthInterpolation = scrollY?.interpolate({
    inputRange: [0, scrollOffset ? scrollOffset - 650 : 700],
    outputRange: [30, width],
  });
  const heightInterpolation = scrollY?.interpolate({
    inputRange: [0, 300],
    outputRange: [50, 40],
    extrapolate: 'clamp',
  });

  const fontSize = scrollY?.interpolate({
    inputRange: [0, 300],
    outputRange: [20, 16],
    extrapolate: 'clamp',
  });
  return (
    <Animated.View style={[styles.container, { height: heightInterpolation }]}>
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
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: theme.colors.lightBorder,
    borderBottomWidth: 3,
  },
  title: {
    ...appStyles.subtitle,
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
