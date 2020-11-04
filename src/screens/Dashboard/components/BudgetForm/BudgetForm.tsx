import React, { FunctionComponent } from 'react';
import { View, useWindowDimensions, TextInput, Button } from 'react-native';
import { Formik } from 'formik';
import { Category } from '@/screens/Dashboard/components/TransactionList/mockData';

type OwnProps = {};

export type BudgetFormProps = OwnProps;

export type BudgetModal = {
  total: string;
  comment: string;
  category: Category | null;
  paid: boolean;
};

const defaultModel = {
  total: '100',
  comment: '',
  category: null,
  paid: false,
};

const BudgetForm: FunctionComponent<BudgetFormProps> = () => {
  const { height } = useWindowDimensions();
  return (
    <View style={{ height: height / 3, padding: 30 }}>
      <Formik<BudgetModal> initialValues={defaultModel} onSubmit={console.warn}>
        {({ values, handleSubmit, setFieldValue }) => (
          <>
            <TextInput
              value={values.total}
              onChangeText={(value) => setFieldValue('total', value)}
              style={{
                borderWidth: 1,
                paddingVertical: 8,
                paddingHorizontal: 5,
              }}
              keyboardType="decimal-pad"
            />

            <Button title="Submit" onPress={handleSubmit} />
          </>
        )}
      </Formik>
    </View>
  );
};

export default BudgetForm;
