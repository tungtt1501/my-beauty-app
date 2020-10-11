import PropTypes from 'prop-types';
import React from 'react';
import { FormGroup, Input, FormFeedback } from 'reactstrap';
import { ErrorMessage } from 'formik';

InputFile.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};

InputFile.defaultProps = {
  type: 'file',
  label: '',
  placeholder: '',
  disabled: false,
}

function InputFile(props) {
  const {
    field, form,
    type, disabled,
  } = props;
  const { name } = field;
  const { errors } = form;
  const showError = errors[name];

  return (
    <FormGroup>
      <Input
        id={name}

        type={type}
        disabled={disabled}
        onChange={(e) => form.setFieldValue(name, e.target.files[0])}
        invalid={showError}
      />
      <ErrorMessage name={name} component={FormFeedback} />
    </FormGroup>
  );
}

export default InputFile;