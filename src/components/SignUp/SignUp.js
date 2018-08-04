import React from 'react';
import AppBanner from '../AppBanner/AppBanner';

import { NavLink } from 'react-router-dom';

const SignUp = () => (
    <div>
            
        <AppBanner />

        <div className="row">
            <div className="col-sm-12 col-md-6 offset-md-3">
                <form>

                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Password</label>
                        <input type="password" className="form-control" />
                    </div>

                    <div className="form-group text-right">

                        <NavLink to="/login" className="btn btn-link mr-3">
                            Already an account?
                        </NavLink>

                        <button className="btn btn-dark">
                            SignUp
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
);

export default SignUp;