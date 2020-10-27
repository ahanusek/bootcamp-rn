import React, { FunctionComponent } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Alert,
  ScrollView,
} from 'react-native';
import { ScreenTitle, Header, Spacer, Card, PlusButton } from '@/components';
import Icon from 'react-native-vector-icons/Entypo';
import { appStyles, theme } from '@/theme';

type OwnProps = {};

export type DashboardProps = OwnProps;

const Dashboard: FunctionComponent<DashboardProps> = () => {
  return (
    <>
      <SafeAreaView />
      <StatusBar />
      <ScrollView>
        <ScreenTitle title="Budget" />
        <Spacer />
        <Header mainText="$ 2500" subText="September expenses" />
        <Spacer size="large" />
        <Card>
          <View style={styles.actionCard}>
            <PlusButton
              onPress={() => Alert.alert('Alert test', 'Test message')}>
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
        {/*<Card type="secondary">*/}
        {/*<TransactionList />*/}
        {/*</Card>*/}
        <Spacer size="xlarge" />
      </ScrollView>
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
