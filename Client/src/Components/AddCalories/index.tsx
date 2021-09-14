import { Form, Formik, FormikHelpers } from 'formik';
import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
import FormControl from '../FormControl';
import { Subbtn } from './Styles';
import { initialValues, validate, initials } from './Controls';

const AddCalories = memo(() => {
  const dispatch = useDispatch();
  const onSubmitting = async (
    values: initials,
    submitprops: FormikHelpers<initials>
  ) => {
    try {
      const { addCalories } = await import(
        '../../Redux/Reducers/caoriesReducer.actions'
      );
      dispatch(addCalories(values));
      submitprops.resetForm();
      submitprops.setSubmitting(false);
    } catch (err: any) {
      submitprops.setSubmitting(false);
      if (!err.response) {
        submitprops.resetForm();
      }
      submitprops.setFieldError('email', err.response.data.message);
    }
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={onSubmitting}
      >
        {(formik) => (
          <Form>
            <FormControl
              control="input"
              name="desc"
              placeholder="Meal Description"
            />
            <FormControl
              control="input"
              name="calories"
              type="number"
              placeholder="Enter Calories"
            />
            <Subbtn
              type="submit"
              disabled={!formik.isValid || formik.isSubmitting}
            >
              {formik.isSubmitting ? 'Adding...' : 'Add Calories'}
            </Subbtn>
          </Form>
        )}
      </Formik>
    </div>
  );
});

export default AddCalories;
