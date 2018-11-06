import React from 'react';
import { connect } from 'react-redux';

// Components
import Card from '../Card/Card';

const Projects = (props) => {
    
    console.log(props)

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

const mapStateToProps = (state) => {
    const { projects } = state;

    return {
        projects
    };
};

export default connect(mapStateToProps)(Projects);