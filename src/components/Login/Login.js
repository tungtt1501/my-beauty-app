import React, { useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Alert from "@material-ui/lab/Alert";
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux'
import './Login.css'
import Slide from '@material-ui/core/Slide';
import Snackbar from '@material-ui/core/Snackbar';
import { useHistory } from "react-router-dom";
import { login, logout } from './AuthSlice';
import * as Yup from 'yup';
import { Field, Form, Formik } from 'formik';
import { TextField } from 'formik-material-ui';
import { LinearProgress } from '@material-ui/core';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                My Beauty Spa Website
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const TransitionRight = (props) => {
    return <Slide {...props} direction="right" />;
}

const SignIn = (props) => {
    const classes = useStyles();

    const loginHandler = (values, { setSubmitting }) => {

        const actLogin = async () => {
            try {
                const data = { ...values };
                await dispatch(login(data));
                setSubmitting(false);
            } catch (error) {
                console.log('Failed to fetch category list: ', error);
            }
        }

        actLogin();
    };

    const closeHandler = () => {
        const actLogout = logout();
        dispatch(actLogout);
    }

    const history = useHistory();
    const isAuth = useSelector(state => state.auth.isAuthUser);
    const error = useSelector(state => state.auth.error);
    const loginStatus = useSelector(state => state.auth.status);
    const dispatch = useDispatch();

    useEffect(() => {
        if (isAuth) {
            history.push("/admin");
        }
    }, []);

    useEffect(() => {
        if (loginStatus == 'succeeded') {
            if (isAuth) {
                history.push("/admin");
            }
        }
    }, [loginStatus, dispatch]);

    const initialValues = { email: '', password: '' };
    const validationSchema = Yup.object().shape({
        email: Yup.string().required('This field is required.'),
        password: Yup.string().required('This field is required.'),
    });


    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={loginHandler}
                >
                    {({ submitForm, isSubmitting }) => (
                        <Form className={classes.form}>
                            <Field
                                required
                                component={TextField}
                                name="email"
                                type="text"
                                label="Email"
                                variant="outlined"
                                autoFocus
                                className={classes.form}
                            />
                            <Field
                                required
                                component={TextField}
                                name="password"
                                type="password"
                                label="Password"
                                variant="outlined"
                                className={classes.form}
                            />
                            {isSubmitting && !error && <LinearProgress />}
                            <Button
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                disabled={isSubmitting && !error}
                                onClick={submitForm}>
                                Sign In
                            </Button>
                            <div className={classes.root}>
                                {error && (<Snackbar open={error !== null} autoHideDuration={6000} onClose={closeHandler} TransitionComponent={TransitionRight} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
                                    <Alert severity="error" onClose={closeHandler} variant="filled">
                                        {error}
                                    </Alert>
                                </Snackbar>)}
                            </div>
                        </Form>)
                    }
                </Formik>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
    );
}

SignIn.propTypes = {
    className: PropTypes.string,
};

export default SignIn;