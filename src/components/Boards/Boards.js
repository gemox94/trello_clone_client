import React from 'react';

// Components
import Card from '../Card/Card';

const Boards = () => {
    return (
        <div>
            <h1 className="display-4">Boards</h1>
            <hr/>

            <div className="card-columns">
                <Card overlayImg={true}/>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card overlayImg={true}/>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card overlayImg={true}/>
                <Card />
            </div>
        </div>
    );
};

export default Boards;