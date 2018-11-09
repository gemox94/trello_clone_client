import React from 'react';

const NavItem = (props) => { 
    return (
        <li className="nav-item">
            <a className="nav-link btn btn-sm btn-primary text-white mx-1" onClick={props.onClick}>{props.action}</a>
        </li>
    );
};

const Navbar = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand">{props.title}</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse">
                <ul className="navbar-nav ml-auto">
                    {props.children}
                </ul>
            </div>
        </nav>
    );
};

export {
    NavItem,
    Navbar,
};