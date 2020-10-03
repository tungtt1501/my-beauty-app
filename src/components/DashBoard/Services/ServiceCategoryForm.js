import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import SaveIcon from '@material-ui/icons/Save';
import BackspaceIcon from '@material-ui/icons/Backspace';
import { actFetchServiceByIdRequest, actAddServicesCategoryRequest, actUpdateServicesCategoryRequest } from './../../../actions/index'
import { useHistory, useParams } from "react-router-dom";
import { connect } from 'react-redux'
import {
    Button,
    Card,
    CardHeader,
} from '@material-ui/core';
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
    className: PropTypes.string,
};

function ServiceCategoryForm({ className, serviceEditItem, fetchEditItem, updateItem, addItem, ...rest }) {
    const [categoryName, setCategoryName] = useState('');
    const [error, setError] = useState('');
    const classes = useStyles();
    const { id } = useParams();
    const history = useHistory();
    useEffect(() => {
        if (id) {
            fetchEditItem(id);
        }
    }, []);
    useEffect(() => {
        if (serviceEditItem) {
            setCategoryName(serviceEditItem.categoryName);
        }
    }, [serviceEditItem]);

    const submitForm = (e) => {
        e.preventDefault();
        setError(null);
        if (!categoryName) {
            setError("Category Name is required");
            return;
        }

        if (id) {
            updateItem({ categoryId: id, categoryName: categoryName });
        } else {
            addItem({ categoryName: categoryName });
        }
        history.goBack();
    };
    return (
        <Fragment>
            <Card
                className={clsx(classes.root, className)}
                {...rest}>
                <CardHeader title={id ? `Edit Services Category` : `Add Services Category`} />
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField id="filled-basic"
                        error={!!error}
                        required
                        label="Category Name"
                        value={categoryName}
                        placeholder="Category Name"
                        onChange={e => setCategoryName(e.target.value)}
                        helperText={error} />
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
        serviceEditItem: state.serviceEditItem
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchEditItem: (id) => {
            dispatch(actFetchServiceByIdRequest(id));
        },
        updateItem: (serviceCategory) => {
            dispatch(actUpdateServicesCategoryRequest(serviceCategory));
        },
        addItem: (serviceCategory) => {
            dispatch(actAddServicesCategoryRequest(serviceCategory));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ServiceCategoryForm);