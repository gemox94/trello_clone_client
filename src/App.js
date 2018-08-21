import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';

import {
    Route,
    Redirect,
    Switch,
} from 'react-router-dom';

// Auth Components
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

// Private Components
import Dashboard from './components/Dashboard/Dashboard';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="App container">
                
                    <Switch>
                        <Route exact path='/login' component={Login}/>
                        <Route exact path="/signup" component={SignUp} />
                        <PrivateRoute exact path='/dashboard' component={Dashboard}/>
                        <Redirect to={{
                            pathname: "/login",
                            state: { from: 'NOT FOUND PAGE' },
                        }} />
                    </Switch>

                </div>
            </Provider>
        );
    }
}

export default App;
