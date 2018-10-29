import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route, Redirect } from 'react-router-dom';

// Actions
import authActions from '../../actions/authorization';


const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => {

    // const { payload } = getAuthenticated();

    console.log(isAuthenticated);

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

const mapStateToProps = (state) => {

    const { isAuthenticated } = state.auth;

    return {
        isAuthenticated,
    };

};

// const mapDispatchToProps = (dispatch) => {
//     const { getAuthenticated } = authActions.creators;

//     return bindActionCreators({
//         getAuthenticated,
//     }, dispatch);
// };

export default connect(mapStateToProps)(PrivateRoute);
