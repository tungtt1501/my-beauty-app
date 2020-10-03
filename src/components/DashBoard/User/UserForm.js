import React, { Fragment, useEffect, useState } from 'react';
import { Link, useHistory, useParams } from "react-router-dom";
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { actFetchUserByIdRequest, actAddUserRequest, actUpdateUserRequest } from './../../../actions/index'
import { connect } from 'react-redux'
import { Button, Card, CardHeader, TextField } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import BackspaceIcon from '@material-ui/icons/Backspace';

UserForm.propTypes = {

};

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

const validateInput = (type, checkingText) => {
    if (type === "txtEmail" || type === "txtPassword" || type === "txtFirstName" || type === "txtLastName") {
        if (!checkingText) {
            return 'This field is required.';
        }
    }

    if (type === "txtEmail") {
        let emailValid = checkingText.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        if (!emailValid) {
            return 'Email is not correct.';
        }
    }

    return '';
}

function UserForm({ className, userEditItem, fetchEditItem, addItem, updateItem, ...rest }) {
    const classes = useStyles();

    const [userId, setUserId] = useState({
        value: '',
        errorMessage: ''
    });
    const [password, setPassword] = useState({
        value: '',
        errorMessage: ''
    });
    const [firstName, setFirstName] = useState({
        value: '',
        errorMessage: ''
    });
    const [lastName, setLastName] = useState({
        value: '',
        errorMessage: ''
    });
    const [email, setEmail] = useState({
        value: '',
        errorMessage: ''
    });

    const { id } = useParams();
    const history = useHistory();
    useEffect(() => {
        if (id) {
            fetchEditItem(id);
        }
    }, []);
    useEffect(() => {
        if (userEditItem) {
            setUserId({ ...userId, value: userEditItem.userId });
            setFirstName({ ...firstName, value: userEditItem.firstName });
            setLastName({ ...lastName, value: userEditItem.lastName });
            setEmail({ ...email, value: userEditItem.email });
        }
    }, [userEditItem]);

    const onChange = (e) => {
        const { name, value } = e.target;
        const errorMessage = validateInput(name, value);

        if (name === 'txtEmail') {
            setEmail({ ...email, value: value, errorMessage: errorMessage });
        }

        if (name === 'txtPassword') {
            setPassword({ ...password, value: value, errorMessage: errorMessage });

        }
        if (name === 'txtFirstName') {
            setFirstName({ ...firstName, value: value, errorMessage: errorMessage });

        }
        if (name === 'txtLastName') {
            setLastName({ ...lastName, value: value, errorMessage: errorMessage });
        }
    }

    const submitForm = (e) => {
        e.preventDefault();

        const newEmail = { ...email };
        newEmail.errorMessage = validateInput("txtEmail", email.value);
        setEmail(newEmail);

        if (!id) {
            const newPassword = { ...password };
            newPassword.errorMessage = validateInput("txtPassword", password.value);
            setPassword(newPassword);
        } else {
            setPassword({ ...password, errorMessage: '' });
        }

        const newFirstName = { ...firstName };
        newFirstName.errorMessage = validateInput("txtFirstName", firstName.value)
        setFirstName(newFirstName);

        const newLastName = { ...lastName };
        newLastName.errorMessage = validateInput("txtLastName", lastName.value);
        setLastName(newLastName);

        var isAllValid = !email.errorMessage &&
            !password.errorMessage &&
            !firstName.errorMessage &&
            !lastName.errorMessage;

        if (!isAllValid) {
            return;
        }

        var user = {
            userId: userId.value,
            email: email.value,
            password: password.value,
            firstName: firstName.value,
            lastName: lastName.value
        };
        if (id) {
            updateItem(user);
        } else {
            addItem(user);
        }

        history.push("/admin/users");
    }

    return (
        <Fragment>
            <Card
                className={clsx(classes.root, className)}
                {...rest}>
                <CardHeader title={`Edit Services Item`} />
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField id="txtEmail"
                        error={!!email.errorMessage}
                        required
                        label="Email"
                        value={email.value}
                        placeholder="Email"
                        name="txtEmail"
                        onChange={onChange}
                        helperText={email.errorMessage} />
                    <TextField hintText="Password"
                        hidden={!!id}
                        error={!!password.errorMessage}
                        required
                        label="Password"
                        name="txtPassword"
                        value={password.value}
                        type="password"
                        onChange={onChange}
                        helperText={password.errorMessage}>
                    </TextField>
                    <TextField id="txtFirstName"
                        error={!!firstName.errorMessage}
                        required
                        label="First Name"
                        value={firstName.value}
                        name="txtFirstName"
                        placeholder="First Name"
                        onChange={onChange}
                        helperText={firstName.errorMessage} />
                    <TextField id="txtLastName"
                        error={!!lastName.errorMessage}
                        required
                        label="Last Name"
                        value={lastName.value}
                        name="txtLastName"
                        placeholder="Last Name"
                        onChange={onChange}
                        helperText={lastName.errorMessage} />
                    {/* <TextField id="txtAvatar"
                        error={!!lastName.errorMessage}
                        required
                        label="Last Name"
                        value={lastName.value}
                        name="txtLastName"
                        placeholder="Last Name"
                        type="file"
                        onChange={onChange}
                        helperText={lastName.errorMessage} /> */}
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
                        onClick={e => submitForm(e)}
                        className={classes.button}
                        startIcon={<SaveIcon />}
                    >
                        Save
                    </Button>
                </form>
            </Card>
        </Fragment>
    );
}

const mapStateToProps = state => {
    return {
        userEditItem: state.userEditItem
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchEditItem: (id) => {
            dispatch(actFetchUserByIdRequest(id));
        },
        addItem: (user) => {
            dispatch(actAddUserRequest(user));
        },
        updateItem: (user) => {
            dispatch(actUpdateUserRequest(user));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);