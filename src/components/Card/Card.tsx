import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { theme } from '@/theme';

type OwnProps = {
  type?: 'primary' | 'secondary';
  style?: ViewStyle;
};

export type CardProps = OwnProps;

class Card extends React.Component<CardProps> {
  static defaultProps = { type: 'primary', style: {} };

  render() {
    const { children, type = 'primary', style } = this.props;
    return (
      <View
        style={[
          styles.container,
          { backgroundColor: mapTypeToBackgroundColor[type] },
          style,
        ]}>
        {children}
      </View>
    );
  }
}

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
