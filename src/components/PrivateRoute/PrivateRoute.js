import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route, Redirect } from 'react-router-dom';

// Actions
import authActions from '../../actions/authorization';


const PrivateRoute = ({ component: Component, getAuthenticated, ...rest }) => {

    const { isAuthenticated } = getAuthenticated();

    return (
        <Route
            {...rest}
            render={props =>
                isAuthenticated ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: { from: props.location }
                        }}
                    />
                )
            }
        />
    );
};

const mapDispatchToProps = (dispatch) => {
    const { getAuthenticated } = authActions.creators;

    return bindActionCreators({
        getAuthenticated,
    }, dispatch);
};

export default connect(null, mapDispatchToProps)(PrivateRoute);
