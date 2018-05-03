import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {actSignUp} from '../store/action/act-registration';

class SignUp extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            type: 'stu',
        }
    }

    render(){
        return(
            <div className="container">
                <div className="sgn-pnl">
                    <span className="sgn-active">Sign Up </span>
                    <span>or <Link to="/signin" className="sgn-idle">Sign In</Link></span>
                    <form onSubmit={this.signUp.bind(this)} style={{margin: "20px 0"}}>
                        <input type="text" onChange={this._evtName.bind(this)} placeholder="Name" className="form-control"/><br/>
                        <input type="email" onChange={this._evtEmail.bind(this)} placeholder="Email" className="form-control"/><br/>
                        <input type="password" onChange={this._evtPassword.bind(this)} placeholder="Password" className="form-control"/><br/>
                        <select onChange={this._evtType.bind(this)} className="form-control">
                            <option value="stu">Student</option>
                            <option value="com">Company</option>
                            <option value="adm">Admin</option>
                        </select><br/>
                        <button type="submit" className="btn btn-primary">Sign Up</button>
                    </form>
                </div>
            </div>
        );
    }

    _evtName(evt){
        this.setState({name: evt.target.value});
    }

    _evtEmail(evt){
        this.setState({email: evt.target.value});
    }

    _evtPassword(evt){
        this.setState({password: evt.target.value});
    }

    _evtType(evt){
        this.setState({type: evt.target.value});
    }

    signUp(e){
        e.preventDefault();
        let user = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            type: this.state.type
        };
        this.setState({
            name: '',
            email: '',
            password: '',
            type: 'stu'
        });
        this.props.signupwithEmailPassword(user);
    }
}

function mapStateToProp(state){
    return({
        uid: state.registrationReducer.userId,
        uName: state.registrationReducer.userName
    });
}

function mapDispatchToProp(dispatch) {
    return ({
        signupwithEmailPassword: (arg)=>{
            dispatch(actSignUp(arg))
        }
    });
}
export default connect(mapStateToProp,mapDispatchToProp)(SignUp);