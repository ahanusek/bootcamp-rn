import React, { FunctionComponent } from 'react';
import { View, StyleSheet } from 'react-native';
import { theme } from '@/theme';

type Props = {
  size?: 'small' | 'standard' | 'medium' | 'large' | 'xlarge';
};

type SpacerProps = Props;

const Spacer: FunctionComponent<SpacerProps> = ({ size = 'standard' }) => (
  <View style={[styles.spacer, { marginTop: theme.spacing[size] - 1 }]} />
);

const styles = StyleSheet.create({
  spacer: {
    left: 0,
    right: 0,
    height: 1,
  },
});

export default Spacer;
