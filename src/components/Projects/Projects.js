import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';

// Actions
import projectActions from '../../actions/projects';

// Components
import Card from '../Card/Card';
import { Navbar, NavItem } from '../Navbar/Navbar';

const renderField = ({ input, meta, label, type }) => (
    <div className="col">
        <label>{label}</label>
        <input { ...input } type={type} className="form-control"/>
        {meta.touched && meta.error &&
        <span className="error text-danger">{meta.error}</span>}
    </div>
);

const validateForm = values => {

    const errors = {};
    const { project } = values;

    if (!project) {
        errors.project = 'Required!';
    }

    return errors;

};

const CreateProjectForm = reduxForm({ form: 'createProject', validate: validateForm })(props => {

    const { handleSubmit, valid, loading, closeModal } = props;

    return (
        <form onSubmit={handleSubmit}>

            <div className="form-row mb-3">
                <Field component={renderField} name="project" label="Project Name" type="text"/>
            </div>

            <div className="form-group text-right">
                <button className="btn btn-danger" type="button" onClick={closeModal} disabled={loading}>
                    Cancel
                </button>

                <button className="btn btn-success ml-1" type="submit" disabled={!valid || loading}>
                    Create
                </button>
            </div>
        </form>
    );

});

class Projects extends Component {

    constructor(props) {
        super(props);
        this.state = { toggleCreateProject: false, onLoadingCreateProject: false };
        this.toggleCreateProjectModal = this.toggleCreateProjectModal.bind(this);
    }

    toggleCreateProjectModal() {
        this.setState((state, props) => {
            return {toggleCreateProject: !state.toggleCreateProject};
        });
    }

    handleSubmit(values) {
        console.log(values);
        this.setState((state, props) => {
            return {
                onLoadingCreateProject: !state.onLoadingCreateProject
            }
        });

        setTimeout(() => {
            this.setState((state, props) => {
                return {
                    onLoadingCreateProject: !state.onLoadingCreateProject
                }
            });
            this.toggleCreateProjectModal();
        }, 2000);

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
                    <ModalHeader toggle={this.toggle}>Create new project</ModalHeader>
                    <ModalBody>
                        <CreateProjectForm
                            onSubmit={(values) => this.handleSubmit(values)}
                            closeModal={() => this.toggleCreateProjectModal()}
                            loading={this.state.onLoadingCreateProject}/>
                    </ModalBody>
                    {/* <ModalFooter>
                        <Button color="primary" onClick={this.toggleCreateProjectModal}>Do Something</Button>{' '}
                        <Button color="secondary" onClick={this.toggleCreateProjectModal}>Cancel</Button>
                    </ModalFooter> */}
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