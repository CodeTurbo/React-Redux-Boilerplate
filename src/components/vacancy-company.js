import React, {Component} from 'react';
import {connect} from 'react-redux';
import Navbar from './navbar';
import {publishVacancy} from '../store/action/act-company';

class VacancyCompany extends Component{
    constructor(props){
        super(props);
        this.state = {
            title: '',
            designation: '',
            deadline: '',
            salary: '',
            gender: '',
            experience: '',
            description: '',
            loading: false
        }
    }

    render(){
        return(
            <div className="container-fluid">
                <Navbar type="com"/>
                <div className="container">
                    <h1 className="display-4">Create A Vacancy</h1>
                    <p className="lead">Here you can create a vacancy for students to apply. Fill up all the details to create a vacancy ad.</p>

                    <div className="row mar-up-down">
                        <div className="col-md-6">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">Heading</span>
                                </div>
                                <input type="text" onChange={this._evtTitle.bind(this)} className="form-control" placeholder="Heading for the title"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">Designation</span>
                                </div>
                                <input type="text" onChange={this._evtDesignation.bind(this)} className="form-control" placeholder="Designation/position available" />
                            </div>
                        </div>
                    </div>
                    <div className="row mar-up-down">
                        <div className="col-md-6">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">Deadline</span>
                                </div>
                                <input type="date" onChange={this._evtDeadline.bind(this)} className="form-control" placeholder="A deadline for applications"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">Salary</span>
                                </div>
                                <input type="text" onChange={this._evtSalary.bind(this)} className="form-control" placeholder="Salary Range" />
                            </div>
                        </div>
                    </div>
                    <div className="row mar-up-down">
                        <div className="col-md-6">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">Gender</span>
                                </div>
                                <select className="form-control" onChange={this._evtGender.bind(this)}>
                                    <option value="">Gender required</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Both Can Apply">Both Can Apply</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">Experience</span>
                                </div>
                                <input type="text" onChange={this._evtExperience.bind(this)} className="form-control" placeholder="Experience required in years" />
                            </div>
                        </div>
                    </div>
                    <div className="row mar-up-down">
                        <div className="col-md-12">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">Description</span>
                                </div>
                                <textarea className="form-control" onChange={this._evtDescription.bind(this)} placeholder="A short description about your company and vacancy..."></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12" style={{textAlign: 'center'}}>
                        <button className="btn btn-lg btn-info" onClick={this.publish.bind(this)}>
                            {(this.state.loading)? 'Publishing...': 'Publish Ad'}
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    publish(){
        let local = JSON.parse(localStorage.getItem('user'));
        let adDetail = {
            uid: local.uid,
            name: local.name,
            title: this.state.title,
            designation: this.state.designation,
            deadline: this.state.deadline,
            salary: this.state.salary,
            gender: this.state.gender,
            experience: this.state.experience,
            description: this.state.description
        };
        this.setState({
            title: '',
            designation: '',
            deadline: '',
            salary: '',
            gender: '',
            experience: '',
            description: '',
            loading: true
        });
        this.props.publish(adDetail);
    }

    _evtTitle(evt){
        this.setState({title: evt.target.value});
    }

    _evtDesignation(evt){
        this.setState({designation: evt.target.value});
    }

    _evtDeadline(evt){
        this.setState({deadline: evt.target.value});
    }

    _evtSalary(evt){
        this.setState({salary: evt.target.value});
    }

    _evtGender(evt){
        this.setState({gender: evt.target.value});
    }

    _evtExperience(evt){
        this.setState({experience: evt.target.value});
    }

    _evtDescription(evt){
        this.setState({description: evt.target.value});
    }
}

function mapStateToProp(state){
    return({
    });
}

function mapDispatchToProp(dispatch) {
    return ({
        publish: (arg)=>{
            dispatch(publishVacancy(arg));
        }
    });
}
export default connect(mapStateToProp,mapDispatchToProp)(VacancyCompany);