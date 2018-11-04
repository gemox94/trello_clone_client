import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { NavLink, withRouter } from 'react-router-dom';
import axios from 'axios';

import authActions from '../../actions/authorization';
import AppBanner from '../AppBanner/AppBanner';
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
    const { name, last_name, email, password } = values;

    if (!name) {
        errors.name = 'Required!'
    }

    if (!last_name) {
        errors.last_name = 'Required!';
    }

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

const SignUpForm = reduxForm({ form: 'signup', validate: validateForm})(props => {

    const { handleSubmit, valid, loading } = props;

    console.log('THE SIGNUP FORM props', props)

    return (
        <form onSubmit={handleSubmit}>
        
            <div className="form-row mb-3">
                <Field component={renderField} name="name" label="Name" type="text"/>
                <Field component={renderField} name="last_name" label="Last Name" type="text"/>
            </div>

            <div className="form-row mb-3">
                <Field component={renderField} name="email" label="Email" type="email"/>
            </div>

            <div className="form-row mb-3">
                <Field component={renderField} name="password" label="Password" type="password"/>
            </div>

            <div className="form-group text-right">

                <NavLink to="/login" className="btn btn-link mr-3">
                    Already an account?
                </NavLink>

                <button className="btn btn-dark" type="submit" disabled={!valid || loading}>
                    Sign Up
                </button>
            </div>
        </form>
    );
});

class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = { onLoadingRes: false };
    }

    handleSubmit(values) { 
        console.log(values);
        this.setState({ onLoadingRes: true });
        axios.post(`${Constants.API_URL}/signup`, values)
            .then(res => {
                console.log(res);
                this.props.createdUserAccount();
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
                        <SignUpForm onSubmit={(values) => this.handleSubmit(values)} loading={this.state.onLoadingRes}/>  
                    </div>
                </div>
    
            </div>
        );
    }

}

const mapDispatchToProps = dispatch => {

    const { createdUserAccount, setAuthenticated } = authActions.creators;

    return bindActionCreators({
        createdUserAccount,
        setAuthenticated,
    }, dispatch);
};

export default connect(null, mapDispatchToProps)(withRouter(SignUp));