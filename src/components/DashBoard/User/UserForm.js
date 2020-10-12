import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { Button, LinearProgress } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import BackspaceIcon from '@material-ui/icons/Backspace';
import * as Yup from 'yup';
import { Field, Form, Formik } from 'formik';
import { TextField } from 'formik-material-ui';

UserForm.propTypes = {};

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

function UserForm(props) {
    const { initialValues, isAddMode } = props;
    const classes = useStyles();

    const regexp = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .matches(regexp, 'Email is not correct.')
            .required('This field is required.'),
        password: Yup.string().required('This field is required.'),
        firstName: Yup.string().required('This field is required.'),
        lastName: Yup.string().required("This field is required.")
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
                        name="email"
                        type="text"
                        label="Email"
                    />
                    {isAddMode && <Field
                        required
                        component={TextField}
                        name="password"
                        type="password"
                        label="Password"
                    />}
                    <Field
                        required
                        component={TextField}
                        name="firstName"
                        type="text"
                        label="First Name"
                    />
                    <Field
                        required
                        component={TextField}
                        name="lastName"
                        type="text"
                        label="Last Name"
                    />
                    {isSubmitting && <LinearProgress />}
                    <Link to={`/admin/users`}
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
                        onClick={submitForm}
                        className={classes.button}
                        startIcon={<SaveIcon />}
                    >
                        Save
                    </Button>
                </Form>)
            }
        </Formik>
    );
}

export default UserForm;