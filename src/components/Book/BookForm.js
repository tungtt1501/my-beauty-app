import React from 'react';
import { connect } from 'react-redux';
import { actAddServiceBookRequest } from './../../actions/index'

class BookForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            txtFirstName: '',
            txtLastName: '',
            txtEmail: '',
            txtPhone: '',
            selService: '',
            date: '',
            time: ''
        };
    }

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        });
    }

    onSave = (e) => {
        e.preventDefault();
        var { id, txtFirstName, txtLastName, txtEmail, txtPhone, selService, date, time } = this.state;
        var serviceBook = {
            id: id,
            txtFirstName: txtFirstName,
            txtLastName: txtLastName,
            txtEmail: txtEmail,
            txtPhone: txtPhone,
            selService: selService,
            date: date,
            time: time
        };
        this.props.onAddServiceBook(serviceBook);
    }
    render() {
        return (
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
                            value={this.state.txtFirstName}
                            onChange={this.onChange} />
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
                            value={this.state.txtLastName}
                            onChange={this.onChange} />
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
                            value={this.state.txtEmail}
                            onChange={this.onChange} />
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
                            value={this.state.txtPhone}
                            onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                        <select name="selService" className="form-control" id="services" value={this.state.selService} onChange={this.onChange}>
                            <option value="">-- Choose a service --</option>
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <input className="form-control"
                            type="date"
                            id="date"
                            placeholder="Date"
                            required=""
                            autoComplete="off"
                            aria-required="true"
                            name="date"
                            value={this.state.date}
                            onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                        <input className="form-control"
                            type="time"
                            id="time"
                            placeholder="Time"
                            required=""
                            autoComplete="off"
                            aria-required="true"
                            name="time"
                            value={this.state.time}
                            onChange={this.onChange} />
                    </div>
                    <button type="submit" className="btn btn-md btn-primary btn-center">Book now</button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddServiceBook: (serviceBook) => {
            dispatch(actAddServiceBookRequest(serviceBook));
        }
    }
}

export default connect(null, mapDispatchToProps)(BookForm);
