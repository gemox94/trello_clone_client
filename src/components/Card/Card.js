import React from 'react';


const Card = ({ overlayImg }) => {

    const card = overlayImg ? 
        <div className="card">
            <img className="card-img" src="https://via.placeholder.com/300x75" alt="Card image" />
            
            <div className="card-img-overlay">
                <h5 className="card-title">Card title</h5>

                <p className="card-text"></p>
                
                <p className="card-text">
                    <small className="text-muted">Last updated 3 mins ago</small>
                </p>
            </div>

        </div> :
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Card title</h5>

                <p className="card-text">
                    This is another card with title and supporting text below. This card has some additional content to make it slightly taller overall.
                </p>

                <p className="card-text">
                    <small className="text-muted">
                        Last updated 3 mins ago
                    </small>
                </p>
            </div>
        </div>;

    return card;
};

export default Card;