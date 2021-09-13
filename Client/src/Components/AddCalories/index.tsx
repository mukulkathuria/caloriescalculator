import { Form, Formik, FormikHelpers } from 'formik';
import React, { memo } from 'react';
import FormControl from '../FormControl';
import { initialValues, validate, initials } from './Controls';

const AddCalories = memo(() => {
  const onSubmitting = async (
    values: initials,
    submitprops: FormikHelpers<initials>
  ) => {
    try {
      const { getLogin } = await import('../../Services/Login');
      //   await getLogin(values);
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
            <button
              type="submit"
              disabled={!formik.isValid || formik.isSubmitting}
            >
              {formik.isSubmitting ? 'Adding...' : 'Add Calories'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
});

export default AddCalories;
