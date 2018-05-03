import React, {Component} from 'react';
import {connect} from 'react-redux';

class InfoPanel extends Component{
    constructor(props){
        super(props);
        this.state = {
            user: props
        }
    }

    render(){
        return(
            <div className="container">
                <h1 className="display-4" style={{marginTop: "30px"}}>Welcome, {this.props.data.name}!</h1>
                <p className="lead">How are you doing? you can see your details on this page...</p>
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Personal Information</h5>
                                <h6 className="card-subtitle mb-2 text-muted">All your personal information</h6>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><b>Email:</b> {this.props.data.email}</li>
                                    <li className="list-group-item"><b>Gender:</b> {this.props.data.gender}</li>
                                    <li className="list-group-item"><b>Age:</b> {this.props.data.age}</li>
                                    <li className="list-group-item"><b>Class:</b> {this.props.data.class}</li>
                                    <li className="list-group-item"><b>Institute:</b> {this.props.data.institute}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Marks Information</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Your in marks</h6>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><b>Email:</b> {this.props.data.email}</li>
                                    <li className="list-group-item"><b>Gender:</b> {this.props.data.gender}</li>
                                    <li className="list-group-item"><b>Age:</b> {this.props.data.age}</li>
                                    <li className="list-group-item"><b>Class:</b> {this.props.data.class}</li>
                                    <li className="list-group-item"><b>Institute:</b> {this.props.data.institute}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default InfoPanel;