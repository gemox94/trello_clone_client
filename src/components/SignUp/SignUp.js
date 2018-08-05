import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { NavLink } from 'react-router-dom';

import AppBanner from '../AppBanner/AppBanner';
import RegexVal from '../../regex';

const renderField = ({ input, meta, label, type }) => (
    <div className="form-group">
        <label>{label}</label>
        {/* <pre>{JSON.stringify(meta, 0, 2)}</pre> */}
        <input { ...input } type={type} className="form-control"/>
        {meta.touched && meta.error &&
        <span className="error text-danger">{meta.error}</span>}
    </div>
);

const validateForm = values => {
    const errors = {};
    const { name, email, password } = values;

    if (!name) {
        errors.name = 'Required!'
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

    const { handleSubmit, valid } = props;

    console.log('THE SIGNUP FORM props', props)

    return (
        <form onSubmit={handleSubmit}>
        
            <Field component={renderField} name="name" label="Name" type="text"/>

            <Field component={renderField} name="email" label="Email" type="email"/>

            <Field component={renderField} name="password" label="Password" type="password"/>

            <div className="form-group text-right">

                <NavLink to="/login" className="btn btn-link mr-3">
                    Already an account?
                </NavLink>

                <button className="btn btn-dark" type="submit" disabled={!valid}>
                    SignUp
                </button>
            </div>
        </form>
    );
});

const SignUp = () => {

    const handleSubmit = values => { 
        console.log(values);
    };

    return (
        <div> 
            <AppBanner />
    
            <div className="row">
                <div className="col-sm-12 col-md-6 offset-md-3">
                    <SignUpForm onSubmit={handleSubmit} />  
                </div>
            </div>

        </div>
    );
};

export default SignUp;