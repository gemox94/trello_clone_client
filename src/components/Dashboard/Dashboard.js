import React from 'react';

// Inner components
import Nav from './Nav/Nav';

const Dashboard = () => {
    return (
        <div>
            <Nav />
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-10">
                        <h1>Dashboard - Private content</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
