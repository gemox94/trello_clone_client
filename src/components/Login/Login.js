import React from 'react';
import AppBanner from '../AppBanner/AppBanner';

import { NavLink } from 'react-router-dom';

const Login = (props) => {


    return(
        <div>
            
            <AppBanner />

            <div className="row">
                <div className="col-sm-12 col-md-6 offset-md-3">
                    <form>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Password</label>
                            <input type="password" className="form-control" />
                        </div>

                        <div className="form-group text-right">

                            <NavLink to="/signup" className="btn btn-link mr-3">
                                Sign Up
                            </NavLink>

                            <button className="btn btn-dark">
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
