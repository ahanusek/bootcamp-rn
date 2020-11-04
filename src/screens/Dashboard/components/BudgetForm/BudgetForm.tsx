import React, { FunctionComponent, useState } from 'react';
import {
  View,
  TextInput,
  Button,
  Switch,
  StyleSheet,
  Text,
} from 'react-native';
import {
  handleTextInput,
  withNextInputAutoFocusInput,
  withNextInputAutoFocusForm,
} from 'react-native-formik';
import { Formik } from 'formik';
import { Category } from '@/screens/Dashboard/components/TransactionList/mockData';
import RNPickerSelect from 'react-native-picker-select';

type OwnProps = {};

export type BudgetFormProps = OwnProps;

export type BudgetModal = {
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

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    margin: 10,
  },
  container: {
    paddingHorizontal: 15,
    marginVertical: 20,
  },
  switch: {
    marginHorizontal: 10,
    marginTop: 10,
  },
  label: {
    marginLeft: 10,
  },
});

const Field = handleTextInput(withNextInputAutoFocusInput(TextInput));
const Form = withNextInputAutoFocusForm(View, { submitAfterLastInput: false });

const BudgetForm: FunctionComponent<BudgetFormProps> = () => {
  const [padding, setPadding] = useState(0);
  return (
    <View style={{ padding: 30 }}>
      <Formik<BudgetModal> initialValues={defaultModel} onSubmit={console.warn}>
        {({ values, handleSubmit, setFieldValue, touched, errors }) => (
          <Form>
            <Text style={styles.label}>Total</Text>
            <Field
              style={styles.input}
              name="total"
              type="total"
              touched={!!touched.total}
              error={errors.total || ''}
            />
            <Text style={styles.label}>Comment</Text>
            <Field
              style={styles.input}
              name="comment"
              type="comment"
              touched={!!touched.comment}
              error={errors.comment || ''}
            />
            <Text style={styles.label}>Category</Text>
            <RNPickerSelect
              onValueChange={(value) => setFieldValue('category', value)}
              value={values.category}
              placeholder={{
                label: 'Select a category...',
                value: null,
              }}
              items={Object.entries(Category).map(([key, value]) => ({
                label: key,
                value,
              }))}
              style={{
                inputIOS: {
                  ...styles.input,
                },
                inputAndroid: {
                  ...styles.input,
                },
              }}
              onOpen={() => setPadding(100)}
              onClose={() => setPadding(0)}
            />
            <Text style={styles.label}>Paid</Text>
            <Switch
              style={styles.switch}
              value={values.paid}
              onValueChange={() => setFieldValue('paid', !values.paid)}
            />

            <Button title="Submit" onPress={handleSubmit} />
            <View style={{ padding }} />
          </Form>
        )}
      </Formik>
    </View>
  );
};

export default BudgetForm;
