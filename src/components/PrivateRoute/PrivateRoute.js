import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route, Redirect } from 'react-router-dom';

// Actions
import authActions from '../../actions/authorization';


const PrivateRoute = ({ component: Component, auth, ...rest }) => {

    // const { payload } = getAuthenticated();

    console.log(auth);

    return (
        <Route
            {...rest}
            render={props =>
                auth ? (
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

    const { auth } = state.auth;

    return {
        auth,
    };

};

// const mapDispatchToProps = (dispatch) => {
//     const { getAuthenticated } = authActions.creators;

//     return bindActionCreators({
//         getAuthenticated,
//     }, dispatch);
// };

export default connect(mapStateToProps)(PrivateRoute);
