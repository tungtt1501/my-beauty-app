import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { TextField } from 'formik-material-ui';
import { DatePicker, TimePicker } from 'formik-material-ui-pickers';
import { Button, LinearProgress, makeStyles } from '@material-ui/core';
import TextField1 from '@material-ui/core/TextField'
import { getAllItem, resetState } from '../DashBoard/Services/ServiceItemsSlice';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import moment from 'moment';
import { add } from '../DashBoard/Orders/OrderSlice';
import { Autocomplete } from 'formik-material-ui-lab';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '90%',
        },
    }
}));

function BookForm(props) {

    const classes = useStyles();

    const onSave = (values) => {

        const addOrder = async () => {
            const order = {
                ...values, date: moment(values.date).format('YYYY-MM-DD HH:mm:ss'),
                time: moment(values.time).format('YYYY-MM-DD HH:mm:ss'),
                service: values.service.serviceItemName,
                status: 0
            }
            await dispatch(add(order));
            dispatch(resetState());
            props.onAddSuccess();
        }

        addOrder();
    }

    const dispatch = useDispatch();
    const services = useSelector(state => state.serviceItem.list);
    const loadingStatus = useSelector(state => state.serviceItem.status);

    useEffect(() => {
        if (loadingStatus === 'idle') {
            const fetchAllServicesItem = async () => {
                try {
                    const params = {};
                    await dispatch(getAllItem(params));
                } catch (error) {
                    console.log('Failed to fetch service item list: ', error);
                }
            }

            fetchAllServicesItem();
        }
    }, [loadingStatus, dispatch]);

    const options = services;

    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        service: null,
        date: new Date(),
        time: new Date()
    }

    const regexpEmail = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
    const regexpPhone = /^\d{10,11}$/;
    const validationSchema = Yup.object().shape({
        firstName: Yup.string().required('This field is required.'),
        lastName: Yup.string().required('This field is required.'),
        email: Yup.string().matches(regexpEmail, 'Email is not correct.')
            .required("This field is required."),
        phone: Yup.string().matches(regexpPhone, 'Phone Number is not correct.')
            .required("This field is required."),
        service: Yup.string().required("This field is required.").nullable(),
        date: Yup.string().required("This field is required."),
        time: Yup.string().required("This field is required."),
    });
    return (
        <Fragment>
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <h2>Réserver un soin</h2>

                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSave}>
                    {({ submitForm, isSubmitting, errors, touched }) => (
                        <Form className={classes.root}>
                            <Field
                                required
                                component={TextField}
                                name="firstName"
                                type="text"
                                label="First Name"
                                variant="outlined"
                            />
                            <Field
                                required
                                component={TextField}
                                name="lastName"
                                type="text"
                                label="Last Name"
                                variant="outlined"
                            />
                            <Field
                                required
                                component={TextField}
                                name="email"
                                type="text"
                                label="Email"
                                variant="outlined"
                            />
                            <Field
                                required
                                component={TextField}
                                name="phone"
                                type="text"
                                label="Phone Number"
                                variant="outlined"
                            />
                            <Field
                                name="service"
                                component={Autocomplete}
                                options={options}
                                getOptionLabel={(option) => option.serviceItemName}
                                renderInput={(params) => (
                                    <TextField1 {...params}
                                        label="Service"
                                        variant="outlined"
                                        required
                                        error={errors.service ? true : false}
                                        helperText={errors.service} />
                                )}
                            />
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <Field
                                    component={DatePicker}
                                    label="Date"
                                    name="date"
                                    inputVariant="outlined" />
                            </MuiPickersUtilsProvider>

                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <Field component={TimePicker}
                                    label="Time"
                                    name="time"
                                    inputVariant="outlined"
                                />
                            </MuiPickersUtilsProvider>
                            {isSubmitting && <LinearProgress />}
                            <Button
                                variant="contained"
                                color="primary"
                                size="small"
                                disabled={isSubmitting}
                                onClick={submitForm}
                            >
                                Réserve maintenant
                            </Button>
                        </Form>)}
                </Formik>
            </div>
        </Fragment>
    )
}

export default BookForm;
