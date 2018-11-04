import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Field, reduxForm } from 'redux-form';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import AppBanner from '../AppBanner/AppBanner';
import authActions from '../../actions/authorization';
import RegexVal from '../../regex';
import Constants from '../../constants';

const renderField = ({ input, meta, label, type }) => (
    <div className="col">
        <label>{label}</label>
        {/* <pre>{JSON.stringify(meta, 0, 2)}</pre> */}
        <input { ...input } type={type} className="form-control"/>
        {meta.touched && meta.error &&
        <span className="error text-danger">{meta.error}</span>}
    </div>
);

const validateForm = values => {

    const errors = {};
    const { email, password } = values;

    if (!email) {
        errors.email = 'Required!';
    } else if (!RegexVal.email.test(String(email).toLowerCase())) {
        errors.email = 'Must be a valid email!';
    }

    if (!password) {
        errors.password = 'Required!';
    } else if (password.length < 8) {
        errors.password = 'Password length must be at least of 8!'
    }

    return errors;

};

const LoginForm = reduxForm({ form: 'login', validate: validateForm})(props => {

    const { handleSubmit, valid, loading } = props;

    console.log('THE LOGIN FORM props', props);

    return (
        <form onSubmit={handleSubmit}>

            <div className="form-row mb-3">
                <Field component={renderField} name="email" label="Email" type="email"/>
            </div>

            <div className="form-row mb-3">
                <Field component={renderField} name="password" label="Password" type="password"/>
            </div>

            <div className="form-group text-right">

                <NavLink to="/signup" className="btn btn-link mr-3">
                    Sign Up
                </NavLink>

                <button className="btn btn-dark" type="submit" disabled={!valid || loading}>
                    Login
                </button>
            </div>
        </form>
    );

});

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = { onLoadingRes: false };
    }

    handleSubmit(values) { 
        console.log(values);
        this.setState({ onLoadingRes: true });
        axios.post(`${Constants.API_URL}/login`, values)
            .then(res => {
                console.log(res);
                this.props.setAuthenticated({ auth: res.data.auth || null });
                this.setState({ onLoadingRes: false });
                this.props.history.push('/dashboard');
            })
            .catch(err => {
                console.log(err.response);
                this.setState({ onLoadingRes: false });
            });
    };


    render() {
        return (
            <div className="container">
            
                <AppBanner />

                <div className="row">
                    <div className="col-sm-12 col-md-6 offset-md-3">
                        <LoginForm onSubmit={(values) => this.handleSubmit(values)} loading={this.state.onLoadingRes}/>  
                    </div>
                </div>
            </div>
        );
    }
};

const mapDispatchToProps = dispatch => {

    const { setAuthenticated } = authActions.creators;

    return bindActionCreators({
        setAuthenticated,
    }, dispatch);
};

export default connect(null, mapDispatchToProps)(withRouter(Login));