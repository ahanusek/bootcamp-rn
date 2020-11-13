import React, { FunctionComponent } from 'react';
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Text,
  Switch,
} from 'react-native';
import { Formik } from 'formik';
import {
  handleTextInput,
  withNextInputAutoFocusForm,
  withNextInputAutoFocusInput,
} from 'react-native-formik';
import RNPickerSelect from 'react-native-picker-select';
import { Category } from '@/screens/Dashboard/components/mockData';

type OwnProps = {
  onSubmit: (data: BudgetModel) => void;
};

export type BudgetFormProps = OwnProps;

export type BudgetModel = {
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

const Field = handleTextInput(withNextInputAutoFocusInput(TextInput));
const Form = withNextInputAutoFocusForm(View, { submitAfterLastInput: false });

const BudgetForm: FunctionComponent<BudgetFormProps> = ({ onSubmit }) => {
  return (
    <View style={{ padding: 30 }}>
      <Formik<BudgetModel> onSubmit={onSubmit} initialValues={defaultModel}>
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
              placeholder="Type a comment..."
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
                inputIOS: styles.input,
                inputAndroid: styles.input,
              }}
            />
            <Text style={styles.label}>Paid</Text>
            <Switch
              style={styles.switch}
              value={values.paid}
              onValueChange={() => setFieldValue('paid', !values.paid)}
            />

            <Button title="Submit" onPress={handleSubmit} />
          </Form>
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
    margin: 10,
  },
  label: {
    marginLeft: 10,
  },
  switch: {
    marginHorizontal: 10,
    marginTop: 10,
  },
});

export default BudgetForm;
