import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
    Route,
    Redirect,
    Switch,
    BrowserRouter as Router
} from 'react-router-dom';

// Auth Components
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

// Private Components
import Dashboard from './components/Dashboard/Dashboard';

// Actions
import authActions from './actions/authorization';

import { GlobalStyle } from './App.styled';

class App extends Component {
    
    constructor(props) {
        super(props);
        
        const authLocal = localStorage.getItem('auth');
        if (authLocal) {
            this.props.setAuthenticated({ auth: authLocal });
        }
        
    }
    
    render() {
        return (

            <div>
                <GlobalStyle />

                <Router>

                    <div className="App">
                        
                        <Switch>
                            <Route exact path='/login' component={Login}/>
                            <Route exact path="/signup" component={SignUp} />
                            <PrivateRoute path='/dashboard' component={Dashboard}/>
                            <Redirect to={{
                                pathname: "/login",
                                state: { from: 'NOT FOUND PAGE' },
                            }} />
                        </Switch>

                    </div>
                </Router>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    
    const { setAuthenticated } = authActions.creators;
    
    return bindActionCreators({
        setAuthenticated,
    }, dispatch);
};

export default connect(null, mapDispatchToProps)(App);
