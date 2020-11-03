import React, { FunctionComponent } from 'react';
import { SafeAreaView } from 'react-native';
import { ScreenTitle } from '@/components';

type OwnProps = {};

export type CardProps = OwnProps;

const Cards: FunctionComponent<CardProps> = () => {
  return (
    <SafeAreaView>
      <ScreenTitle title="Cards" />
    </SafeAreaView>
  );
};

export default Cards;
