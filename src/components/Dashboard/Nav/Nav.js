import React from 'react';

// Styled Components
import { NavRow, NavLink } from './Nav.styled'

const Nav = () => {
    return (

        <NavRow>
            <div className="col">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="/dashboard">
                        Trello <sub style={{ fontSize: '55%', color: 'cyan' }}>clone</sub>
                    </a>

                    <button className="navbar-toggler" type="button">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link">Project</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link">Config</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>   
        </NavRow>
    );
};

export default Nav;