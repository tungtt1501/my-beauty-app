import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/Save';
import BackspaceIcon from '@material-ui/icons/Backspace';
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
    const { initialValues, serviceCategoryList, isAddMode } = props;
    const classes = useStyles();

    const regexp = /^[0-9\b]+$/;
    const validationSchema = Yup.object().shape({
        categoryId: Yup.string().required('This field is required.'),
        serviceItemName: Yup.string().required('This field is required.'),
        serviceItemPrice: Yup.string().matches(regexp, 'Please fill a number.')
            .required("This field is required.")
    });

    const showService = (services) => {
        var result = null;
        if (services) {
            result = services.map((service, index) => {
                return (
                    <MenuItem key={index} value={service.categoryId}>{service.categoryName}</MenuItem>
                )
            })
        }
        return result;
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={props.onSubmit}
        >
            {({ submitForm, isSubmitting }) => (
                <Form className={classes.root}>
                    <FormControl>
                        <InputLabel required htmlFor="categoryId">Category Id</InputLabel>
                        <Field
                            required
                            component={Select}
                            name="categoryId"
                            inputProps={{
                                id: 'categoryId',
                            }}
                        >
                            {showService(serviceCategoryList)}
                        </Field>
                    </FormControl>
                    <Field
                        required
                        component={TextField}
                        name="serviceItemName"
                        type="text"
                        label="Service Item Name"
                    />
                    <Field
                        required
                        component={TextField}
                        name="serviceItemPrice"
                        type="text"
                        label="Service Item Price"
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