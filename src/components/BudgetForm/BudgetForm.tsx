import React, { FC } from 'react';
import {
  Button,
  TextInput,
  View,
  StyleSheet,
  Switch,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {
  handleTextInput,
  withNextInputAutoFocusInput,
  withNextInputAutoFocusForm,
} from 'react-native-formik';
import { Formik } from 'formik';
import { BudgetModel } from '@/screens/Dashboard/Dashboard';

const MyField = handleTextInput(withNextInputAutoFocusInput(TextInput));

const Form = withNextInputAutoFocusForm(View, { submitAfterLastInput: false });

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
});

type Props = {
  onSubmit: (data: object) => void;
  budget: BudgetModel;
};

const BudgetForm: FC<Props> = ({ onSubmit, budget }) => {
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
        <Formik initialValues={budget} enableReinitialize onSubmit={onSubmit}>
          {({ handleSubmit, touched, errors, values, setFieldValue }) => (
            <Form>
              <MyField
                name="budget"
                type="budget"
                touched={!!touched.budget}
                error={errors.budget || ''}
                style={styles.input}
              />
              <MyField
                name="total"
                type="total"
                touched={!!touched.total}
                error={errors.total || ''}
                style={styles.input}
              />
              <MyField
                name="amount"
                type="amount"
                touched={!!touched.amount}
                error={errors.amount || ''}
                style={styles.input}
              />
              <Switch
                style={styles.switch}
                value={values.paid}
                onValueChange={() => setFieldValue('paid', !values.paid)}
              />
              <Button title="Submit" onPress={handleSubmit} />
            </Form>
          )}
        </Formik>
      </KeyboardAvoidingView>
    </View>
  );
};

export default BudgetForm;
