import React from 'react';
import * as AppLogoImage from '../../images/logo.png';

const AppBanner = () => (
    <div className="text-center my-4">
        <div className="row">
            <div className="col">
                <blockquote className="blockquote">
                    <h1 className="display-4 mb-0" style={{color: '#00e5ff'}}>Trello</h1>
                    <footer style={{ color: '#c6c6c6' }}>The Clone</footer>
                </blockquote>
            </div>
        </div>
    </div>
);

export default AppBanner;