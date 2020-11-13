import React, { FunctionComponent } from 'react';
import {
  View,
  TextInput,
  useWindowDimensions,
  Button,
  StyleSheet,
} from 'react-native';
import { Formik } from 'formik';
import { Category } from '@/screens/Dashboard/components/mockData';

type OwnProps = {};

export type BudgetFormProps = OwnProps;

export type BudgetModel = {
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
    <View style={{ padding: 30, height: height / 3 }}>
      <Formik<BudgetModel> onSubmit={console.warn} initialValues={defaultModel}>
        {({ values, handleSubmit, setFieldValue }) => (
          <>
            <TextInput
              style={styles.input}
              value={values.total}
              onChangeText={(value) => setFieldValue('total', value)}
            />

            <Button title="Submit" onPress={handleSubmit} />
          </>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 5,
  },
});

export default BudgetForm;
