import React, { FunctionComponent } from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type OwnProps = {};

export type CardsProps = OwnProps;

const Cards: FunctionComponent<CardsProps> = () => {
  return (
    <SafeAreaView>
      <Text>Cards</Text>
    </SafeAreaView>
  );
};

export default Cards;
