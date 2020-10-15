import React, { FunctionComponent } from 'react';
import { Animated, Text, StyleSheet, ViewStyle, StyleProp } from 'react-native';
import { subText, theme, title } from '@/theme';

type OwnProps = {
  mainText: string;
  subText?: string;
  style?: Animated.AnimatedProps<StyleProp<ViewStyle>>;
};

export type HeaderProps = OwnProps;

const Header: FunctionComponent<HeaderProps> = ({
  mainText,
  subText,
  style = {},
}) => {
  return (
    <Animated.View style={[styles.container, style]}>
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
