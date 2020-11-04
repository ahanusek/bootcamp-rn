import React, { FunctionComponent } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { appStyles, theme } from '@/theme';

type OwnProps = {
  title: string;
  scrollY?: Animated.Value;
};

export type ScreenTitleProps = OwnProps;

const ScreenTitle: FunctionComponent<ScreenTitleProps> = ({
  title,
  scrollY,
}) => {
  const widthInterpolation = scrollY?.interpolate({
    inputRange: [0, 700],
    outputRange: [30, 150],
    extrapolateLeft: 'clamp',
    extrapolateRight: 'extend',
  });
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Animated.View style={[styles.divider, { width: widthInterpolation }]} />
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
