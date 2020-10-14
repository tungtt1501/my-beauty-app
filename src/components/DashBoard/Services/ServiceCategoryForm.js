import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import * as Yup from 'yup';
import {
    Button, LinearProgress,
} from '@material-ui/core';
import { TextField } from 'formik-material-ui';
import { Field, Formik } from 'formik';
import { Form } from 'reactstrap';
import SaveIcon from '@material-ui/icons/Save';
import BackspaceIcon from '@material-ui/icons/Backspace';
import { Link } from 'react-router-dom';

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

ServiceCategoryForm.propTypes = {
    onSubmit: PropTypes.func,
};

ServiceCategoryForm.defaultProps = {
    onSubmit: null,
}

function ServiceCategoryForm(props) {
    const { initialValues, isAddMode } = props;
    const classes = useStyles();

    const validationSchema = Yup.object().shape({
        categoryName: Yup.string().required('This field is required.')
    });

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={props.onSubmit}
        >
            {({ submitForm, isSubmitting }) => (
                <Form className={classes.root}>
                    <Field
                        required
                        component={TextField}
                        name="categoryName"
                        type="text"
                        label="Category Name"
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
                </Form>
            )
            }
        </Formik>
    );
}

export default ServiceCategoryForm;