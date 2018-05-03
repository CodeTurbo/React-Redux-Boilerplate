import React, {Component} from 'react';
import {connect} from 'react-redux';
import Navbar from './navbar';
import {updateInfoFirebase} from '../store/action/act-student';

class ProfileStudent extends Component{
    constructor(props){
        super(props);
        let local = JSON.parse(localStorage.getItem('user'));
        this.state = {
            name: local.name,
            email: local.email,
            class: '',
            institute: '',
            age: '',
            gender: 'Male',
            updating: false
        }
    }

    render(){
        return(
            <div className="container-fluid">
                <Navbar type="stu"/>
                <div className="container">
                    <h1 className="display-4" style={{marginTop: "30px"}}>Edit Your Profile</h1>
                    <p className="lead">Hey, {this.state.name} here you can edit and update your profile</p>
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
                            <input type="text" onChange={this._evtClass.bind(this)} className="form-control" placeholder="Class"/>
                        </div>
                        <div className="col-md-6">
                            <input type="text" onChange={this._evtInstitute.bind(this)} className="form-control" placeholder="Institute"/>
                        </div>
                    </div>
                    <div className="row mar-up-down">
                        <div className="col-md-6">
                            <input type="text" onChange={this._evtAge.bind(this)} className="form-control" placeholder="Age"/>
                        </div>
                        <div className="col-md-6">
                            <select onChange={this._evtGender.bind(this)} className="form-control">
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
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
        let userDetail = {
            uid: local.uid,
            name: this.state.name,
            email: this.state.email,
            class: this.state.class,
            institute: this.state.institute,
            age: this.state.age,
            gender: this.state.gender
        };
        this.setState({
            name: local.name,
            email: local.email,
            class: '',
            institute: '',
            age: '',
            gender: 'Male',
            updating: true
        });
        this.props.updateInfo(userDetail);
    }

    _evtName(evt){
        this.setState({name: evt.target.value});
    }

    _evtEmail(evt){
        this.setState({email: evt.target.value});
    }

    _evtClass(evt){
        this.setState({class: evt.target.value});
    }

    _evtInstitute(evt){
        this.setState({institute: evt.target.value});
    }

    _evtAge(evt){
        this.setState({age: evt.target.value});
    }

    _evtGender(evt){
        this.setState({gender: evt.target.value});
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
export default connect(mapStateToProp,mapDispatchToProp)(ProfileStudent);