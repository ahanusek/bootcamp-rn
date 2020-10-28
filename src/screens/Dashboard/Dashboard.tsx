import React, { FunctionComponent, useRef, useState, useEffect } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Portal } from 'react-native-portalize';
import { Modalize } from 'react-native-modalize';
import { ScreenTitle, Header, Spacer, Card, PlusButton } from '@/components';
import Icon from 'react-native-vector-icons/Entypo';
import { subText, subtitle, theme } from '@/theme';
import { TransactionList } from '@/screens/Dashboard/components';
import { Category } from '@/screens/Dashboard/components/TransactionList/mockData';
import BudgetForm from './components/BudgetForm/BudgetForm';

type OwnProps = {};

export type DashboardProps = OwnProps;

export type BudgetModel = {
  total: string;
  comment: string;
  category: Category | null;
  paid: boolean;
};

const Dashboard: FunctionComponent<DashboardProps> = () => {
  const modalRef = useRef<Modalize>(null);
  const [budget, setBudgetValue] = useState<BudgetModel>({
    total: '0',
    comment: '',
    category: null,
    paid: false,
  });
  useEffect(() => {
    (async () => {
      await setBudget();
    })();
  }, []);

  const setBudget = async () => {
    const form = await AsyncStorage.getItem('form');
    if (form) {
      setBudgetValue(JSON.parse(form));
    }
  };

  const onSubmit = async (formData: object) => {
    await AsyncStorage.setItem('form', JSON.stringify(formData));
    await setBudget();
    modalRef.current?.close();
  };
  return (
    <>
      <SafeAreaView />
      <StatusBar />
      <ScrollView>
        <ScreenTitle title="Budget" />
        <Spacer />
        <Header
          mainText={`$ ${budget.total || 0}`}
          subText="September expenses"
        />
        <Spacer size="large" />
        <Card>
          <View style={styles.actionCard}>
            <PlusButton onPress={() => modalRef.current?.open()}>
              <Icon name="plus" size={26} color={theme.colors.secondary} />
            </PlusButton>
            <View style={styles.textContainer}>
              <Text style={[subtitle, styles.text]}>Set your budget</Text>
              <Spacer size="small" />
              <Text style={[subText, styles.text]}>
                Start taking control of your personal finance and monthly budget
              </Text>
            </View>
          </View>
        </Card>
        <Spacer size="xlarge" />
        <Card type="secondary">
          <TransactionList />
        </Card>
        <Spacer size="xlarge" />
      </ScrollView>
      <Portal>
        <Modalize ref={modalRef} adjustToContentHeight>
          <BudgetForm onSubmit={onSubmit} model={budget} />
        </Modalize>
      </Portal>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    color: theme.colors.light,
  },
  actionCard: {
    flexDirection: 'row',
    flex: 1,
  },
  textContainer: {
    paddingVertical: theme.spacing.small,
    paddingHorizontal: theme.spacing.large,
    flex: 1,
  },
});

export default Dashboard;
