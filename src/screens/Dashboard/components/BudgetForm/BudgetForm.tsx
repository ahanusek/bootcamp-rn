import React, { FunctionComponent, useState } from 'react';
import {
  View,
  Switch,
  StyleSheet,
  TextInput,
  Button,
  Text,
} from 'react-native';
import { Formik } from 'formik';
import {
  withNextInputAutoFocusInput,
  withNextInputAutoFocusForm,
  handleTextInput,
} from 'react-native-formik';
import RNPickerSelect from 'react-native-picker-select';
import { Category } from '@/screens/Dashboard/components/TransactionList/mockData';
import { BudgetModel } from '@/screens/Dashboard/Dashboard';

type OwnProps = {
  onSubmit: (model: BudgetModel) => void;
};

const MyField = handleTextInput(withNextInputAutoFocusInput(TextInput));

const Form = withNextInputAutoFocusForm(View, { submitAfterLastInput: false });

export type BudgetFormProps = OwnProps;

const model = {
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

const BudgetForm: FunctionComponent<BudgetFormProps> = ({ onSubmit }) => {
  const [padding, setPadding] = useState(0);
  return (
    <View style={{ padding: 20 }}>
      <Formik<BudgetModel>
        initialValues={model}
        enableReinitialize
        onSubmit={onSubmit}>
        {({ handleSubmit, touched, errors, values, setFieldValue }) => (
          <Form>
            <Text style={styles.label}>Total</Text>
            <MyField
              name="total"
              type="total"
              touched={!!touched.total}
              error={errors.total || ''}
              style={styles.input}
            />
            <Text style={styles.label}>Comment</Text>
            <MyField
              name="comment"
              type="comment"
              touched={!!touched.comment}
              error={errors.comment || ''}
              style={styles.input}
            />
            <Text style={styles.label}>Category</Text>
            <RNPickerSelect
              onValueChange={(value) => setFieldValue('category', value)}
              value={values.category}
              onOpen={() => setPadding(100)}
              onClose={() => setPadding(0)}
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
