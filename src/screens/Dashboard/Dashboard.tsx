import React, { FunctionComponent, useEffect, useRef, useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Animated,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { Portal } from 'react-native-portalize';
import { Modalize } from 'react-native-modalize';
import { ScreenTitle, Header, Spacer, Card, PlusButton } from '@/components';
import Icon from 'react-native-vector-icons/Entypo';
import { subText, subtitle, theme } from '@/theme';
import { TransactionList } from '@/screens/Dashboard/components';
import BudgetForm from '@/components/BudgetForm/BudgetForm';

type OwnProps = {};

export type DashboardProps = OwnProps;

export type BudgetModel = {
  total: string;
  amount: string;
  budget: string;
  paid: boolean;
};

const AnimatedCard = Animated.createAnimatedComponent(Card);

const Dashboard: FunctionComponent<DashboardProps> = () => {
  const modalRef = useRef<Modalize>(null);
  const animation = useRef(new Animated.Value(0));
  const [budget, setBudgetValue] = useState<BudgetModel>({
    total: '0',
    amount: '0',
    budget: '0',
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

  const cardInterpolation = animation.current.interpolate({
    inputRange: [0, 100],
    outputRange: [0, -100],
    extrapolate: 'clamp',
  });

  const headerInterpolation = animation.current.interpolate({
    inputRange: [0, 100],
    outputRange: [0, -100],
    extrapolate: 'clamp',
  });

  return (
    <>
      <SafeAreaView />
      <StatusBar />
      <ScreenTitle title="Budget" animatedValue={animation.current} />
      <ScrollView
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  y: animation.current,
                },
              },
            },
          ],
          { useNativeDriver: false },
        )}>
        <Spacer />
        <Header
          mainText={`$ ${budget?.total || 0}`}
          subText="September expenses"
          style={{ transform: [{ translateY: cardInterpolation }] }}
        />
        <Spacer size="large" />
        <AnimatedCard
          style={{ transform: [{ translateY: headerInterpolation }] }}>
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
        </AnimatedCard>
        <Spacer size="xlarge" />
        <Card type="secondary">
          <TransactionList />
        </Card>
        <Spacer size="xlarge" />
      </ScrollView>
      <Portal>
        <Modalize
          adjustToContentHeight
          ref={modalRef}
          scrollViewProps={{ keyboardShouldPersistTaps: 'handled' }}>
          <BudgetForm onSubmit={onSubmit} budget={budget} />
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
