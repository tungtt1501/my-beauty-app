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
import { actFetchServiceDetailByIdRequest, actFetchServicesRequest, actAddServicesDetailRequest, actUpdateServicesDetailRequest } from './../../../actions/index'
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
            return 'This field is required.';
        }
    }

    if (type === "txtItemTime" || type === "txtItemPrice") {
        const regexp = /^[0-9\b]+$/;
        const checkingResult = regexp.exec(checkingText);
        if (checkingResult === null) {
            return 'Number is not correct.';
        }
    }

    return '';
}

function ServiceDetailForm({ className, services, serviceDetailEditItem, fetchAllServicesCategory, fetchEditItem, addItem, updateItem, ...rest }) {
    const classes = useStyles();
    const [categoryId, setCategoryId] = useState({
        value: '',
        errorMessage: ''
    });
    const [serviceItemId, setServiceItemId] = useState({
        value: '',
        errorMessage: ''
    });
    const [serviceItemName, setServiceItemName] = useState({
        value: '',
        errorMessage: ''
    });
    const [serviceItemTime, setServiceItemTime] = useState({
        value: '',
        errorMessage: ''
    });
    const [serviceItemPrice, setServiceItemPrice] = useState({
        value: '',
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
        const errorMessage = validateInput(name, value);

        if (name === 'selCategoryId') {
            setCategoryId({ ...categoryId, value: value, errorMessage: errorMessage });
        }

        if (name === 'txtItemName') {
            setServiceItemName({ ...serviceItemName, value: value, errorMessage: errorMessage });

        }
        if (name === 'txtItemTime') {
            setServiceItemTime({ ...serviceItemTime, value: value, errorMessage: errorMessage });

        }
        if (name === 'txtItemPrice') {
            setServiceItemPrice({ ...serviceItemPrice, value: value, errorMessage: errorMessage });
        }
    }

    const submitForm = (e) => {
        e.preventDefault();

        const errCategoryId = validateInput("selCategoryId", categoryId.value);
        setCategoryId({...categoryId, errorMessage: errCategoryId});

        const errServiceItemName = validateInput("txtItemName", serviceItemName.value);
        setServiceItemName({...serviceItemName, errorMessage:  errServiceItemName});

        const errServiceItemTime = validateInput("txtItemTime", serviceItemTime.value);
        setServiceItemTime({...serviceItemTime, errorMessage: errServiceItemTime});
        
        const errServiceItemPrice = validateInput("txtItemPrice", serviceItemPrice.value);
        setServiceItemPrice({...serviceItemPrice, errorMessage: errServiceItemPrice});

        var isAllValid = !categoryId.errorMessage &&
            !serviceItemName.errorMessage &&
            !serviceItemTime.errorMessage &&
            !serviceItemPrice.errorMessage;

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
                        value={serviceItemName.value}
                        placeholder="Service Item Name"
                        name="txtItemName"
                        onChange={onChange}
                        helperText={serviceItemName.errorMessage} />
                    <TextField id="filled-basic"
                        error={!!serviceItemTime.errorMessage}
                        required
                        label="Service Item Time"
                        value={serviceItemTime.value}
                        name="txtItemTime"
                        placeholder="30"
                        onChange={onChange}
                        helperText={serviceItemTime.errorMessage} />
                    <TextField id="filled-basic"
                        error={!!serviceItemPrice.errorMessage}
                        required
                        label="Service Item Price"
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