import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

// Components
import Card from '../Card/Card';
import { Navbar, NavItem } from '../Navbar/Navbar';

class Projects extends Component {

    constructor(props) {
        super(props);
        this.state = { toggleCreateProject: false };
        this.toggleCreateProjectModal = this.toggleCreateProjectModal.bind(this);
    }

    toggleCreateProjectModal() {
        this.setState((state, props) => {
            return {toggleCreateProject: !state.toggleCreateProject};
        });
    }
    

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col">
                        <Navbar title="Projects">
                            <NavItem action="Create" onClick={() => this.toggleCreateProjectModal()}/>
                        </Navbar>
                    </div>
                </div>
                <hr/>
    
                <div className="card-columns">
                    <Card overlayImg={true}/>
                    <Card />
                    <Card />
                    <Card overlayImg={true}/>
                </div>

                <Modal isOpen={this.state.toggleCreateProject} toggle={this.toggleCreateProjectModal}>
                    <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                    <ModalBody>
                        Something Interesting
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggleCreateProjectModal}>Do Something</Button>{' '}
                        <Button color="secondary" onClick={this.toggleCreateProjectModal}>Cancel</Button>
                    </ModalFooter>
                </Modal>

            </div>
        );
    }
};

const mapStateToProps = (state) => {
    const { projects } = state;

    return {
        projects
    };
};

export default connect(mapStateToProps)(Projects);