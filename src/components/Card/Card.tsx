import React, { FunctionComponent } from 'react';
import { View, StyleSheet } from 'react-native';
import { theme } from '@/theme';

type OwnProps = {
  type?: 'primary' | 'secondary';
};

export type CardProps = OwnProps;

const Card: FunctionComponent<CardProps> = ({ children, type = 'primary' }) => {
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: mapTypeToBackgroundColor[type] },
      ]}>
      {children}
    </View>
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
