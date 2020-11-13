import React, { FunctionComponent, useRef, useEffect, useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Animated,
} from 'react-native';
import { Modalize } from 'react-native-modalize';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Portal } from 'react-native-portalize';
import { ScreenTitle, Header, Spacer, Card, PlusButton } from '@/components';
import Icon from 'react-native-vector-icons/Entypo';
import { appStyles, theme } from '@/theme';
import TransactionList from '@/screens/Dashboard/components/TransactionList/TransactionList';
import BudgetForm from '@/screens/Dashboard/components/BudgetForm/BudgetForm';
import { Category } from '@/screens/Dashboard/components/mockData';

type OwnProps = {};

export type DashboardProps = OwnProps;

export type BudgetModel = {
  total: string;
  comment: string;
  category: Category | null;
  paid: boolean;
};

const defaultModel = {
  total: '0',
  comment: '',
  category: null,
  paid: false,
};

const Dashboard: FunctionComponent<DashboardProps> = () => {
  const modalRef = useRef<Modalize>(null);
  const [budget, setBudgetValue] = useState<BudgetModel>(defaultModel);
  const animatedValue = useRef(new Animated.Value(0)).current;
  const [listHeight, setListHeight] = useState(0);
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
      <ScreenTitle
        title="Budget"
        scrollY={animatedValue}
        scrollOffset={listHeight}
      />
      <ScrollView
        scrollEventThrottle={16}
        onContentSizeChange={(w, h) => {
          if (h !== listHeight) {
            setListHeight(h);
          }
        }}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  y: animatedValue,
                },
              },
            },
          ],
          { useNativeDriver: false },
        )}>
        <Spacer />
        <Header
          mainText={`$ ${budget.total || 0}`}
          subText="September expenses"
          scrollY={animatedValue}
        />
        <Spacer size="large" />
        <Card scrollY={animatedValue}>
          <View style={styles.actionCard}>
            <PlusButton onPress={() => modalRef.current?.open()}>
              <Icon name="plus" size={26} color={theme.colors.secondary} />
            </PlusButton>
            <View style={styles.textContainer}>
              <Text style={[appStyles.subtitle, styles.text]}>
                Set your budget
              </Text>
              <Spacer size="small" />
              <Text style={[appStyles.subText, styles.text]}>
                Start taking control of your personal finance and monthly budget
              </Text>
            </View>
          </View>
        </Card>
        <Spacer size="xlarge" />
        <TransactionList />
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
