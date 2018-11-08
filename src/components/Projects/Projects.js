import React from 'react';
import { connect } from 'react-redux';

// Components
import Card from '../Card/Card';

const Projects = (props) => {
    
    return (
        <div>
            <div className="row">
                <div className="col">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <a className="navbar-brand">Projects</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a className="nav-link btn btn-sm btn-primary text-white">Create</a>
                                </li>
                            </ul>
                        </div>

                    </nav>
                </div>
            </div>
            <hr/>

            <div className="card-columns">
                <Card overlayImg={true}/>
                <Card />
                <Card />
                <Card overlayImg={true}/>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    const { projects } = state;

    return {
        projects
    };
};

export default connect(mapStateToProps)(Projects);