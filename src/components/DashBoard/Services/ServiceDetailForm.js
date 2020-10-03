import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import SaveIcon from '@material-ui/icons/Save';
import BackspaceIcon from '@material-ui/icons/Backspace';
import {
    Button,
    Card,
    CardHeader,
    InputLabel,
    MenuItem,
    Select,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { actFetchServiceDetailByIdRequest, actFetchServicesRequest , actAddServicesDetailRequest, actUpdateServicesDetailRequest } from './../../../actions/index'
import { useHistory, useParams } from "react-router-dom";
import { connect } from 'react-redux'

ServiceDetailForm.propTypes = {

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
    if (type === "selCategoryId" || type === "txtItemName" || type === "txtItemTime" || type === "txtItemPrice") {
        if (!checkingText) {
            return {
                isInputValid: false,
                errorMessage: 'This field is required.',
            }
        }
    }

    if (type === "txtItemTime" || type === "txtItemPrice") {
        const regexp = /^[0-9\b]+$/;
        const checkingResult = regexp.exec(checkingText);
        if (checkingResult === null) {
            return {
                isInputValid: false,
                errorMessage: 'Number is not correct.'
            }
        }
    }

    return {
        isInputValid: true,
        errorMessage: ''
    };
}

function ServiceDetailForm({ className, services, serviceDetailEditItem, fetchAllServicesCategory, fetchEditItem, addItem, updateItem, ...rest }) {
    const classes = useStyles();
    const [categoryId, setCategoryId] = useState({
        value: '',
        isInputValid: false,
        errorMessage: ''
    });
    const [serviceItemId, setServiceItemId] = useState({
        value: '',
        isInputValid: false,
        errorMessage: ''
    });
    const [serviceItemName, setServiceItemName] = useState({
        value: '',
        isInputValid: false,
        errorMessage: ''
    });
    const [serviceItemTime, setServiceItemTime] = useState({
        value: '',
        isInputValid: false,
        errorMessage: ''
    });
    const [serviceItemPrice, setServiceItemPrice] = useState({
        value: '',
        isInputValid: false,
        errorMessage: ''
    });
    const [serviceCategoryList, serServiceCategoryList] = useState([]);

    const { id } = useParams();
    const history = useHistory();
    useEffect(() => {
        fetchAllServicesCategory();
        if (id) {
            fetchEditItem(id);
        }
    }, []);

    useEffect(() => {
        if (serviceDetailEditItem) {
            setCategoryId({ ...categoryId, value: serviceDetailEditItem.categoryId });
            setServiceItemId({ ...serviceItemId, value: serviceDetailEditItem.serviceItemId });
            setServiceItemName({ ...serviceItemName, value: serviceDetailEditItem.serviceItemName });
            setServiceItemTime({ ...serviceItemTime, value: serviceDetailEditItem.serviceItemTime });
            setServiceItemPrice({ ...serviceItemPrice, value: serviceDetailEditItem.serviceItemPrice });
        }
    }, [serviceDetailEditItem]);

    useEffect(() => {
        if (services) {
            serServiceCategoryList([...services]);
        }
    }, [services]);

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

    const onChange = (e) => {
        const { name, value } = e.target;
        const { isInputValid, errorMessage } = validateInput(name, value);

        if (name === 'selCategoryId') {
            setCategoryId({ ...categoryId, value: value, isInputValid: isInputValid, errorMessage: errorMessage });
        }

        if (name === 'txtItemName') {
            setServiceItemName({ ...serviceItemName, value: value, isInputValid: isInputValid, errorMessage: errorMessage });

        }
        if (name === 'txtItemTime') {
            setServiceItemTime({ ...serviceItemTime, value: value, isInputValid: isInputValid, errorMessage: errorMessage });

        }
        if (name === 'txtItemPrice') {
            setServiceItemPrice({ ...serviceItemPrice, value: value, isInputValid: isInputValid, errorMessage: errorMessage });
        }
    }

    const submitForm = (e) => {
        e.preventDefault();

        var { isInputValid, errorMessage } = validateInput("selCategoryId", categoryId.value);
        setCategoryId({ ...categoryId, isInputValid: isInputValid, errorMessage: errorMessage });
        var { isInputValid, errorMessage } = validateInput("txtItemName", serviceItemName.value);
        setServiceItemName({ ...serviceItemName, isInputValid: isInputValid, errorMessage: errorMessage });
        var { isInputValid, errorMessage } = validateInput("txtItemTime", serviceItemTime.value);
        setServiceItemTime({ ...serviceItemTime, isInputValid: isInputValid, errorMessage: errorMessage });
        var { isInputValid, errorMessage } = validateInput("txtItemPrice", serviceItemPrice.value);
        setServiceItemPrice({ ...serviceItemPrice, isInputValid: isInputValid, errorMessage: errorMessage });

        var isAllValid = categoryId.isInputValid &&
            serviceItemName.isInputValid &&
            serviceItemTime.isInputValid &&
            serviceItemPrice.isInputValid;

        if (!isAllValid) {
            return;
        }

        var serviceDetail = {
            serviceItemId: serviceItemId.value,
            categoryId: categoryId.value,
            serviceItemName: serviceItemName.value,
            serviceItemTime: serviceItemTime.value,
            serviceItemPrice: serviceItemPrice.value
        };
        if (id) {
            updateItem(serviceDetail);
        } else {
            addItem(serviceDetail);
        }

        history.goBack();
    }

    return (
        <Fragment>
            <Card
                className={clsx(classes.root, className)}
                {...rest}>
                <CardHeader title={`Edit Services Item`} />
                <form className={classes.root} noValidate autoComplete="off">
                    <InputLabel shrink id="category-input-label" required>
                        Category Id
                    </InputLabel>
                    <Select
                        error={!!categoryId.errorMessage}
                        labelId="Category Id"
                        id="category-id-select"
                        value={categoryId.value}
                        name="selCategoryId"
                        onChange={onChange}
                    >
                        {showService(serviceCategoryList)}
                    </Select>
                    <TextField id="filled-basic"
                        error={!!serviceItemName.errorMessage}
                        required
                        label="Service Item Name"
                        variant="filled"
                        value={serviceItemName.value}
                        placeholder="Service Item Name"
                        name="txtItemName"
                        onChange={onChange}
                        helperText={serviceItemName.errorMessage} />
                    <TextField id="filled-basic"
                        error={!!serviceItemTime.errorMessage}
                        required
                        label="Service Item Time"
                        variant="filled"
                        value={serviceItemTime.value}
                        name="txtItemTime"
                        placeholder="30"
                        onChange={onChange}
                        helperText={serviceItemTime.errorMessage} />
                    <TextField id="filled-basic"
                        error={!!serviceItemPrice.errorMessage}
                        required
                        label="Service Item Price"
                        variant="filled"
                        value={serviceItemPrice.value}
                        name="txtItemPrice"
                        placeholder="60"
                        onChange={onChange}
                        helperText={serviceItemPrice.errorMessage} />
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
        services: state.services,
        serviceDetailEditItem: state.serviceDetailEditItem
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllServicesCategory: () => {
            dispatch(actFetchServicesRequest());
        },
        fetchEditItem: (id) => {
            dispatch(actFetchServiceDetailByIdRequest(id));
        },
        addItem: (serviceDetail) => {
            dispatch(actAddServicesDetailRequest(serviceDetail));
        },
        updateItem: (serviceDetail) => {
            dispatch(actUpdateServicesDetailRequest(serviceDetail));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ServiceDetailForm);