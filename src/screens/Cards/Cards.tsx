import React, { FunctionComponent } from 'react';
import { SafeAreaView } from 'react-native';
import { ScreenTitle } from '@/components';

type OwnProps = {};

export type CardsProps = OwnProps;

const Cards: FunctionComponent<CardsProps> = () => {
  return (
    <SafeAreaView>
      <ScreenTitle title="Cards" />
    </SafeAreaView>
  );
};

export default Cards;
