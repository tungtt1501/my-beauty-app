import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/Save';
import BackspaceIcon from '@material-ui/icons/Backspace';
import TextField1 from '@material-ui/core/TextField'
import {
    Button,
    FormControl,
    InputLabel,
    LinearProgress,
    MenuItem,
} from '@material-ui/core';
import { Field, Form, Formik } from 'formik';
import { Select, TextField } from 'formik-material-ui';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { Autocomplete } from 'formik-material-ui-lab';

ServiceDetailForm.propTypes = {
    onSubmit: PropTypes.func,
};

ServiceDetailForm.defaultProps = {
    onSubmit: null,
}

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '40ch',
        },
    },
    button: {
        width: '12ch',
    }
}));

function ServiceDetailForm(props) {
    const { initialValues, serviceCategoryList } = props;
    const classes = useStyles();

    const regexp = /^[0-9\b]+$/;
    const validationSchema = Yup.object().shape({
        categoryId: Yup.string().required('This field is required.').nullable(),
        serviceItemName: Yup.string().required('This field is required.'),
        serviceItemPrice: Yup.string().matches(regexp, 'Please fill a number.')
            .required("This field is required.")
    });

    const options = serviceCategoryList;

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={props.onSubmit}
        >
            {({ submitForm, isSubmitting, errors }) => (
                <Form className={classes.root}>
                    <Field
                        name="categoryId"
                        component={Autocomplete}
                        options={options}
                        getOptionLabel={(option) => option.categoryName}
                        renderInput={(params) => (
                            <TextField1 {...params}
                                label="Service Category"
                                variant="outlined"
                                required
                                error={errors.categoryId ? true : false}
                                helperText={errors.categoryId} />
                        )}
                    />
                    <Field
                        required
                        component={TextField}
                        name="serviceItemName"
                        type="text"
                        label="Service Item Name"
                        variant="outlined"
                    />
                    <Field
                        required
                        component={TextField}
                        name="serviceItemPrice"
                        type="text"
                        label="Service Item Price"
                        variant="outlined"
                    />
                    {isSubmitting && <LinearProgress />}
                    <Link to={`/admin/services`}
                        exact={'true'}>
                        <Button
                            variant="contained"
                            color="secondary"
                            size="small"
                            className={classes.button}
                            startIcon={<BackspaceIcon />}
                        >Back
                        </Button>
                    </Link>
                    <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        className={classes.button}
                        disabled={isSubmitting}
                        onClick={submitForm}
                        startIcon={<SaveIcon />}
                    >
                        Save
                    </Button>
                </Form>)
            }
        </Formik>
    );
}

export default ServiceDetailForm;