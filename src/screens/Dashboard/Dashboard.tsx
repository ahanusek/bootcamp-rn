import React, { FunctionComponent, useRef } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import { Modalize } from 'react-native-modalize';
import { Portal } from 'react-native-portalize';
import { ScreenTitle, Header, Spacer, Card, PlusButton } from '@/components';
import Icon from 'react-native-vector-icons/Entypo';
import { appStyles, theme } from '@/theme';
import TransactionList from '@/screens/Dashboard/components/TransactionList/TransactionList';
import BudgetForm from '@/screens/Dashboard/components/BudgetForm/BudgetForm';

type OwnProps = {};

export type DashboardProps = OwnProps;

const Dashboard: FunctionComponent<DashboardProps> = () => {
  const modalRef = useRef<Modalize>(null);
  return (
    <>
      <SafeAreaView />
      <StatusBar />
      <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
        <ScreenTitle title="Budget" />
        <Spacer />
        <Header mainText="$ 2500" subText="September expenses" />
        <Spacer size="large" />
        <Card>
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
          <BudgetForm />
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
