import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { actAddServiceBookRequest, actResetServiceBook, actFetchAllServiceItemsRequest } from './../../actions/index'
import "react-datepicker/dist/react-datepicker.css";
import FormError from './FormError';
import { MuiPickersUtilsProvider, KeyboardDatePicker, KeyboardTimePicker } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';
import moment from 'moment';

const validateInput = (type, checkingText) => {
    if (type === "txtFirstName" || type === "txtLastName" || type === "txtEmail" || type === "txtPhone" || type === "date" || type === "time") {
        if (!checkingText) {
            return {
                isInputValid: false,
                errorMessage: 'This field is required.',
            }
        }
    }

    if (type === "txtEmail") {
        let emailValid = checkingText.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        if (!emailValid) {
            return {
                isInputValid: false,
                errorMessage: 'Email is not correct.'
            }
        }
    }

    if (type === "txtPhone") {
        const regexp = /^\d{10,11}$/;
        const checkingResult = regexp.exec(checkingText);
        if (checkingResult === null) {
            return {
                isInputValid: false,
                errorMessage: 'Phone number is not correct.'
            }
        }
    }

    return {
        isInputValid: true,
        errorMessage: ''
    };
}


class BookForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            txtFirstName: {
                value: '',
                isInputValid: false,
                errorMessage: ''
            },
            txtLastName: {
                value: '',
                isInputValid: false,
                errorMessage: ''
            },
            txtEmail: {
                value: '',
                isInputValid: false,
                errorMessage: ''
            },
            txtPhone: {
                value: '',
                isInputValid: false,
                errorMessage: ''
            },
            selService: {
                value: '',
                isInputValid: true,
                errorMessage: ''
            },
            date: {
                value: new Date(),
                isInputValid: true,
                errorMessage: ''
            },
            time: {
                value: new Date(),
                isInputValid: true,
                errorMessage: ''
            }
        };
    }

    componentDidMount() {
        this.props.resetServiceBook();
        this.props.fetchServiceItems();
    }

    componentDidUpdate() {
        var { serviceBook } = this.props;
        if (Object.values(serviceBook).length > 0) {
            this.props.onAddSuccess();
        }
        if (this.props.serviceTypes.length > 0 && !this.state.selService.value) {
            this.setState(prevState => ({
                selService: {                   // object that we want to update
                    ...prevState.selService,    // keep all other key-value pairs
                    value: this.props.serviceTypes[0].serviceItemName      // update the value of specific key
                }
            }))
        }
    }

    onChange = (e) => {
        const { name, value } = e.target;
        const { isInputValid, errorMessage } = validateInput(name, value);
        const newState = { ...this.state[name] };
        newState.value = value;
        newState.isInputValid = isInputValid;
        newState.errorMessage = errorMessage;
        this.setState({
            [name]: newState
        });
    }

    onSave = (e) => {
        e.preventDefault();

        Object.entries(this.state).forEach(([key, value]) => {
            const { isInputValid, errorMessage } = validateInput(key, this.state[key].value);
            const newState = { ...this.state[key] }; /* dummy object */
            newState.isInputValid = isInputValid;
            newState.errorMessage = errorMessage;
            this.setState({ [key]: newState });
        });

        var { txtFirstName, txtLastName, txtEmail, txtPhone, selService, date, time } = this.state;

        var isAllValid = txtFirstName.isInputValid &&
            txtLastName.isInputValid &&
            txtEmail.isInputValid &&
            txtPhone.isInputValid &&
            selService.isInputValid &&
            date.isInputValid &&
            time.isInputValid;

        if (!isAllValid) {
            return;
        }

        var serviceBook = {
            id: '',
            firstName: txtFirstName.value,
            lastName: txtLastName.value,
            email: txtEmail.value,
            phone: txtPhone.value,
            serviceType: selService.value,
            date: moment(date.value).format('YYYY-MM-DD HH:mm:ss'),
            time: moment(time.value).format('YYYY-MM-DD HH:mm:ss'),
            status: 0
        };
        this.props.onAddServiceBook(serviceBook);
    }

    convertToDefEventPara = (name, value) => ({
        target: {
            name, value
        }
    })

    render() {
        return (
            <Fragment>
                <div className="modal-body">
                    <h2>Book your treatment</h2>

                    <form className="contact-form form-validate3" noValidate="novalidate" onSubmit={this.onSave}>
                        <div className="form-group">
                            <input className="form-control"
                                type="text"
                                id="firstname"
                                placeholder="First Name"
                                required={true}
                                autoComplete="off"
                                aria-required="true"
                                name="txtFirstName"
                                value={this.state.txtFirstName.value}
                                onChange={this.onChange} />
                            <FormError
                                isHidden={this.state.txtFirstName.isInputValid}
                                errorMessage={this.state.txtFirstName.errorMessage} />
                        </div>
                        <div className="form-group">
                            <input className="form-control"
                                type="text"
                                id="lastname"
                                placeholder="Last Name"
                                required=""
                                autoComplete="off"
                                aria-required="true"
                                name="txtLastName"
                                value={this.state.txtLastName.value}
                                onChange={this.onChange} />
                            <FormError
                                isHidden={this.state.txtLastName.isInputValid}
                                errorMessage={this.state.txtLastName.errorMessage} />
                        </div>
                        <div className="form-group">
                            <input className="form-control"
                                type="email"
                                id="email"
                                placeholder="E-mail"
                                required=""
                                autoComplete="off"
                                aria-required="true"
                                name="txtEmail"
                                value={this.state.txtEmail.value}
                                onChange={this.onChange} />
                            <FormError
                                isHidden={this.state.txtEmail.isInputValid}
                                errorMessage={this.state.txtEmail.errorMessage} />
                        </div>
                        <div className="form-group">
                            <input className="form-control"
                                type="phone"
                                id="phone"
                                placeholder="Phone Number"
                                required=""
                                autoComplete="off"
                                aria-required="true"
                                name="txtPhone"
                                value={this.state.txtPhone.value}
                                onChange={this.onChange} />
                            <FormError
                                isHidden={this.state.txtPhone.isInputValid}
                                errorMessage={this.state.txtPhone.errorMessage} />
                        </div>
                        <div className="form-group">
                            <select name="selService" className="form-control" id="services" value={this.state.selService.value} onChange={this.onChange}>
                                {this.showService(this.props.serviceTypes)}
                            </select>
                            <FormError
                                isHidden={this.state.selService.isInputValid}
                                errorMessage={this.state.selService.errorMessage} />
                        </div>
                        <div className="form-group">
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <KeyboardDatePicker variant="inline"
                                    disableToolbar
                                    margin="normal"
                                    format="MM/dd/yyyy"
                                    name="date"
                                    value={this.state.date.value}
                                    onChange={date => this.onChange(this.convertToDefEventPara("date", date))}
                                />
                            </MuiPickersUtilsProvider>
                        </div>
                        <div className="form-group">
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <KeyboardTimePicker variant="inline"
                                    margin="normal"
                                    name="time"
                                    value={this.state.time.value}
                                    onChange={time => this.onChange(this.convertToDefEventPara("time", time))}
                                />
                            </MuiPickersUtilsProvider>
                        </div>
                        <button type="submit" className="btn btn-md btn-primary btn-center">Book now</button>
                    </form>
                </div>
            </Fragment>
        )
    }

    showService = (services) => {
        var result = null;
        if (services) {
            result = services.map((service, index) => {
                return (
                    <option key={index} value={service.serviceItemName}>{service.serviceItemName}</option>
                )
            })
        }
        return result;
    }
}

const mapStateToProps = state => {
    return {
        serviceBook: state.addBookService,
        serviceTypes: state.serviceItems
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        resetServiceBook: () => {
            dispatch(actResetServiceBook());
        },
        fetchServiceItems: () => {
            dispatch(actFetchAllServiceItemsRequest());
        },
        onAddServiceBook: (serviceBook) => {
            dispatch(actAddServiceBookRequest(serviceBook));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookForm);
