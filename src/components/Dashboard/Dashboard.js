import React, { Component } from 'react';
import {
    Redirect,
    Switch,
    // BrowserRouter as Router
} from 'react-router-dom';

// Inner components
// import Nav from './Nav/Nav';

// Components
// import Boards from '../Boards/Boards';
import Projects from '../Projects/Projects';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

const TestComponent = () => {
    return (
        <h1 className="display-4">Testing Component</h1>
    );
};

class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = { showBoards: false };
        this.match = props.match;
    }

    render() {
        return (
            <div>
                {/* <Nav /> */}
                <div className="container-fluid mt-3">
                    <div className="row">
                        <div className="col">
    
                            {/* <button className="btn btn-outline-primary" onClick={() => this.toggleShowBoards()}>
                                Show Boards
                            </button> */}

                            <Switch>
                                <PrivateRoute exact path={`${this.match.url}/projects`} component={Projects}/>
                                <PrivateRoute exact path={`${this.match.url}/test`} component={TestComponent} />
                                <Redirect push from="/dashboard" to="/dashboard/projects"/>
                            </Switch>

    
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Dashboard;
