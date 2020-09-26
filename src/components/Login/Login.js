import React, { useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Alert from "@material-ui/lab/Alert";
import PropTypes from 'prop-types';
import { loginRequest } from './../../actions/auth'
import { connect } from 'react-redux'
import './Login.css'
import Slide from '@material-ui/core/Slide';
import Snackbar from '@material-ui/core/Snackbar';
import { useHistory } from "react-router-dom";

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

const SignIn = ({ className, auth, login }) => {
    const classes = useStyles();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const submitForm = (e) => {
        e.preventDefault();
        setError(null);
        if (email === "" || password === "") {
            setError("Fields are required");
            return;
        }
        login({ email, password });
    };

    const history = useHistory();

    useEffect(() => {
        if (auth.isAuthUser) {
            history.push("/admin");
        } else if (auth.error) {
            setError(auth.error);
            auth.error = null;
        }
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
                <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        onChange={e => setEmail(e.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={e => setPassword(e.target.value)}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={e => submitForm(e)}>
                        Sign In
                    </Button>
                    <div className={classes.root}>
                        {error && (<Snackbar open={error !== null} autoHideDuration={6000} onClose={() => setError(null)} TransitionComponent={TransitionRight} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
                            <Alert severity="error" onClose={() => setError(null)} variant="filled">
                                {error}
                            </Alert>
                        </Snackbar>)}
                    </div>
                </form>
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

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        login: (email, password) => {
            dispatch(loginRequest({email, password}));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);