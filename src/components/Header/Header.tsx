import React, { FunctionComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { subText, theme, title } from '@/theme';

type OwnProps = {
  mainText: string;
  subText?: string;
};

export type HeaderProps = OwnProps;

const Header: FunctionComponent<HeaderProps> = ({ mainText, subText }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>{mainText}</Text>
      <Text style={styles.subText}>{subText}</Text>
    </View>
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
