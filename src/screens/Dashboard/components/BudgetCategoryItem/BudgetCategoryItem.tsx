import React, { FunctionComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BudgetCategory } from '@/screens/Dashboard/components/TransactionList/mockData';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { paragraph, subText, theme } from '@/theme';
import { mapCategoryToStyle } from '@/screens/Dashboard/components/BudgetCategoryItem/mapCategoryToStyle';

type OwnProps = {};

export type BudgetCategoryItemProps = OwnProps & BudgetCategory;

const BudgetCategoryItem: FunctionComponent<BudgetCategoryItemProps> = ({
  category,
  transactions,
  totalAmount,
}) => {
  const categoryStyle = mapCategoryToStyle[category.toString()];
  return (
    <View style={styles.row}>
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
      <View style={styles.title}>
        <Text style={paragraph}>
          {category.slice(0, 1).toUpperCase() + category.slice(1)}
        </Text>
        <Text style={subText}>Transactions: {transactions}</Text>
      </View>
      <View>
        <Text style={paragraph}>${totalAmount.value}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    padding: theme.spacing.medium,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    ...theme.shadow,
    borderRadius: 10,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.secondary,
  },
  title: {
    flex: 2,
    paddingHorizontal: theme.spacing.standard,
  },
});

export default BudgetCategoryItem;
