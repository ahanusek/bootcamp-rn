import React, { FunctionComponent } from 'react';
import { View, StyleSheet } from 'react-native';
import { theme } from '@/theme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { mapCategoryToStyle } from '@/screens/Dashboard/components/BudgetCategoryItem/mapCategoryToStyle';
import { Category } from '@/screens/Dashboard/components/TransactionList/mockData';

type OwnProps = {
  category: Category;
};

export type BudgetCategoryIconProps = OwnProps;

const styles = StyleSheet.create({
  iconContainer: {
    ...theme.shadow,
    borderRadius: 10,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.secondary,
  },
});

const BudgetCategoryIcon: FunctionComponent<BudgetCategoryIconProps> = ({
  category,
}) => {
  const categoryStyle = mapCategoryToStyle[category.toString()];
  return (
    <View
      style={[
        styles.iconContainer,
        { backgroundColor: categoryStyle?.color || theme.colors.secondary },
      ]}>
      <Icon
        name={categoryStyle?.icon || 'cart'}
        color={theme.colors.light}
        size={20}
      />
    </View>
  );
};

export default BudgetCategoryIcon;
