import React, {Component} from 'react';
import {connect} from 'react-redux';
import Navbar from './navbar';
import {updateInfoFirebase} from '../store/action/act-company';

class ProfileCompany extends Component{
    constructor(props){
        super(props);
        let local = JSON.parse(localStorage.getItem('user'));
        this.state = {
            name: local.name,
            email: local.email,
            category: '',
            city: '',
            since: '',
            timings: '',
            updating: false
        }
    }

    render(){
        return(
            <div className="container-fluid">
                <Navbar type="com"/>
                <div className="container">
                    <h1 className="display-4" style={{marginTop: "30px"}}>Edit Your Profile</h1>
                    <p className="lead">Here you can edit and update your company's profile.</p>
                    <div className="row mar-up-down">
                        <div className="col-md-6">
                            <input type="text" onChange={this._evtName.bind(this)} className="form-control" placeholder="Name" value={this.state.name}/>
                        </div>
                        <div className="col-md-6">
                            <input type="email" onChange={this._evtEmail.bind(this)} className="form-control" placeholder="Email" value={this.state.email}/>
                        </div>
                    </div>
                    <div className="row mar-up-down">
                        <div className="col-md-6">
                            <select onChange={this._evtCategory.bind(this)} className="form-control">
                                <option value="">Category</option>
                                <option value="Software">Software</option>
                                <option value="Marketing">Marketing</option>
                                <option value="Bussiness">Bussiness</option>
                                <option value="Electronics">Electronics</option>
                                <option value="Agriculture">Agriculture</option>
                                <option value="Event Management">Event Management</option>
                                <option value="Education">Education</option>
                            </select>
                        </div>
                        <div className="col-md-6">
                            <select onChange={this._evtCity.bind(this)} className="form-control">
                                <option value="">City</option>
                                <option value="karachi">Karachi</option>
                                <option value="Lahore">Lahore</option>
                                <option value="Peshawar">Peshawar</option>
                                <option value="Quetta">Quetta</option>
                                <option value="Islamabad">Islamabad</option>
                            </select>
                        </div>
                    </div>
                    <div className="row mar-up-down">
                        <div className="col-md-6">
                            <input type="text" onChange={this._evtSince.bind(this)} className="form-control" placeholder="Since"/>
                        </div>
                        <div className="col-md-6">
                            <select onChange={this._evtTimings.bind(this)} className="form-control">
                                <option value="">Timings</option>
                                <option value="8">1 Shift (8 hours)</option>
                                <option value="16">2 Shifts (16 hours)</option>
                                <option value="24">3 Shifts (24 hours)</option>
                            </select><br/>
                        </div>
                    </div>
                    <div className="col-md-12" style={{textAlign: 'center'}}>
                        <button className="btn btn-lg btn-success" onClick={this.update.bind(this)}>
                            {(this.state.updating)? 'Updating...': 'Update Info'}
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    update(){
        let local = JSON.parse(localStorage.getItem('user'));
        let companyDetail = {
            uid: local.uid,
            name: this.state.name,
            email: this.state.email,
            category: this.state.category,
            city: this.state.city,
            since: this.state.since,
            timings: this.state.timings
        };
        this.setState({
            name: local.name,
            email: local.email,
            category: '',
            city: '',
            since: '',
            timings: '',
            updating: true
        });
        this.props.updateInfo(companyDetail);
    }

    _evtName(evt){
        this.setState({name: evt.target.value});
    }

    _evtEmail(evt){
        this.setState({email: evt.target.value});
    }

    _evtCategory(evt){
        this.setState({category: evt.target.value});
    }

    _evtCity(evt){
        this.setState({city: evt.target.value});
    }

    _evtSince(evt){
        this.setState({since: evt.target.value});
    }

    _evtTimings(evt){
        this.setState({timings: evt.target.value});
    }
}

function mapStateToProp(state){
    return({
        update: state.studentReducer.loading
    });
}

function mapDispatchToProp(dispatch) {
    return ({
        updateInfo: (arg)=>{
            dispatch(updateInfoFirebase(arg));
        }
    });
}
export default connect(mapStateToProp,mapDispatchToProp)(ProfileCompany);