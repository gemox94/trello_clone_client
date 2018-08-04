import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';

import {
    Route,
    Redirect,
    Link,
    NavLink,
    Switch,
    withRouter,
} from 'react-router-dom';

import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="App container">
                
                    <Switch>
                        <Route exact path='/login' component={Login}/>
                        <Route exact path="/signup" component={SignUp} />
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
