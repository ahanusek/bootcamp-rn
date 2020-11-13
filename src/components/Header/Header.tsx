import React, { FunctionComponent } from 'react';
import { Text, StyleSheet, Animated } from 'react-native';
import { theme, appStyles } from '@/theme';

type OwnProps = {
  mainText: string;
  subText?: string;
  scrollY?: Animated.Value;
};

export type HeaderProps = OwnProps;

const Header: FunctionComponent<HeaderProps> = ({
  mainText,
  subText,
  scrollY,
}) => {
  const headerInterpolation = scrollY?.interpolate({
    inputRange: [0, 100],
    outputRange: [0, -100],
    extrapolate: 'clamp',
  });
  return (
    <Animated.View
      style={[
        styles.container,
        { transform: [{ translateY: headerInterpolation || 0 }] },
      ]}>
      <Text style={styles.mainText}>{mainText}</Text>
      <Text style={styles.subText}>{subText}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: theme.spacing.large,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainText: {
    ...appStyles.title,
  },
  subText: {
    ...appStyles.subText,
    marginTop: 4,
    fontSize: 14,
  },
});

export default Header;
