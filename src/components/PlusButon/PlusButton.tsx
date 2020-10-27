import React, { FunctionComponent } from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import { theme } from '@/theme';

type OwnProps = {};

export type PlusButtonProps = OwnProps & TouchableOpacityProps;

const PlusButton: FunctionComponent<PlusButtonProps> = ({
  onPress,
  children,
  ...rest
}) => {
  return (
    <TouchableOpacity onPress={onPress} {...rest} style={styles.button}>
      {typeof children === 'string' ? (
        <Text style={styles.title}>{children}</Text>
      ) : (
        <View style={styles.icon}>{children}</View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  title: {
    color: theme.colors.main,
  },
  button: {
    ...theme.shadow,
    borderRadius: theme.sizes.borderRadius,
    backgroundColor: theme.colors.light,
    width: 60,
    height: 60,
  },
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});

export default PlusButton;
