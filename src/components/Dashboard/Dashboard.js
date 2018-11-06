import React, { Component } from 'react';

// Inner components
import Nav from './Nav/Nav';

// Components
import Boards from '../Boards/Boards';
import Projects from '../Projects/Projects';

class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = { showBoards: false };
        this.toggleShowBoards = this.toggleShowBoards.bind(this);
    }

    toggleShowBoards() {
        console.log('something');
        this.setState({ showBoards: !this.state.showBoards });
    }

    render() {
        return (
            <div>
                <Nav />
                <div className="container-fluid mt-5">
                    <div className="row">
                        <div className="col">
    
                            <button className="btn btn-outline-primary" onClick={this.toggleShowBoards}>
                                Show Boards
                            </button>
    
                            {this.state.showBoards ? <Boards /> : <Projects />}
    
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Dashboard;
