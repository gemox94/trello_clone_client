import React from 'react';

// Styled Components
import { NavRow } from './Nav.styled'

const Nav = () => {
    return (

        <NavRow>
            <div className="col">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">Trello <sub style={{ fontSize: '55%', color: 'cyan' }}>clone</sub></a>

                    <button class="navbar-toggler" type="button">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>   
        </NavRow>
    );
};

export default Nav;