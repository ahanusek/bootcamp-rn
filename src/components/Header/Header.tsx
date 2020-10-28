import React, { FunctionComponent } from 'react';
import { Text, StyleSheet, Animated } from 'react-native';
import { subText, theme, title } from '@/theme';

type OwnProps = {
  mainText: string;
  subText?: string;
  animatedInterpolation: Animated.AnimatedInterpolation;
};

export type HeaderProps = OwnProps;

const Header: FunctionComponent<HeaderProps> = ({
  mainText,
  subText,
  animatedInterpolation,
}) => {
  return (
    <Animated.View
      style={[
        styles.container,
        { transform: [{ translateY: animatedInterpolation || 0 }] },
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
    ...title,
  },
  subText: {
    ...subText,
    marginTop: 4,
    fontSize: 14,
  },
});

export default Header;
