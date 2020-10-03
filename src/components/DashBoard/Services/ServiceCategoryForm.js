import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import SaveIcon from '@material-ui/icons/Save';
import BackspaceIcon from '@material-ui/icons/Backspace';
import { actResetServiceCategory, actFetchServiceByIdRequest, actAddServicesCategoryRequest, actUpdateServicesCategoryRequest } from './../../../actions/index'
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

function ServiceCategoryForm({ className, serviceEditItem, serviceAddItem, serviceUpdateItem, resetForm, addItem, updateItem, fetchEditItem, ...rest }) {
    const [categoryName, setCategoryName] = useState('');
    const [error, setError] = useState("");
    const classes = useStyles();
    const { id } = useParams();
    const history = useHistory();
    useEffect(() => {
        //resetForm();
        if (id) {
            fetchEditItem(id);
        }
    });
    useEffect(() => {
        if (serviceEditItem) {
            setCategoryName(serviceEditItem.categoryName);
        }
        // if (serviceAddItem || serviceUpdateItem) {
        //     history.goBack();
        // }
    }, [serviceEditItem, serviceAddItem, serviceUpdateItem]);
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

    };
    return (
        <Fragment>
            <Card
                className={clsx(classes.root, className)}
                {...rest}>
                <CardHeader title={`Edit Services Category`} />
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField id="filled-basic"
                        error={!!error}
                        required
                        label="Category Name"
                        variant="filled"
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
        serviceEditItem: state.serviceEditItem,
        serviceAddItem: state.serviceAddItem,
        serviceUpdateItem: state.serviceUpdateItem
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        resetForm: () => {
            dispatch(actResetServiceCategory());
        },
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