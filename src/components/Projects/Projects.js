import React from 'react';

// Components
import Card from '../Card/Card';

const Projects = () => {
    return (
        <div>
            <h1 className="display-4">Projects</h1>
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

export default Projects;