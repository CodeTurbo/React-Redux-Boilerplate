import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {actSignIn} from '../store/action/act-registration';

class SignIn extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            type: 'stu',
            loading: false
        }
    }

    render(){
        return(
            <div className="container">
                <div className="sgn-pnl">
                    <span><Link to="/" className="sgn-idle">Sign Up</Link> or</span>
                    <span className="sgn-active"> Sign In</span>
                    <form onSubmit={this.signIn.bind(this)} style={{margin: "20px 0"}}>
                        <input type="text" onChange={this._evtEmail.bind(this)} placeholder="Email" className="form-control"/><br/>
                        <input type="password" onChange={this._evtPassword.bind(this)} placeholder="Password" className="form-control"/><br/>
                        <select onChange={this._evtType.bind(this)} className="form-control">
                            <option value="stu">Student</option>
                            <option value="com">Company</option>
                            <option value="adm">Admin</option>
                        </select><br/>
                        <button type="submit" className="btn btn-primary">{(this.state.loading)? 'Loading...': 'Sign In'}</button>
                    </form>
                </div>
            </div>
        );
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

    signIn(e){
        e.preventDefault();
        let user = {
            email: this.state.email,
            password: this.state.password,
            type: this.state.type
        }
        this.setState({
            email: '',
            password: '',
            type: 'stu',
            loading: true
        })
        this.props.signinWithEmailPassword(user);
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
        signinWithEmailPassword: (arg)=>{
            dispatch(actSignIn(arg))
        }
    });
}
export default connect(mapStateToProp,mapDispatchToProp)(SignIn);