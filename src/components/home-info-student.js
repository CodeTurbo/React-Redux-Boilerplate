import React, {Component} from 'react';

class InfoPanel extends Component{
    constructor(props){
        super(props);
        console.log(props);
    }

    render(){
        return(
            <div className="container">
                <h1 className="display-4" style={{marginTop: "30px"}}>Welcome, {this.props.data.name}!</h1>
                <p className="lead">How are you doing? you can see your details on this page...</p>
                <div className="row mar-up-down">
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
                                <h6 className="card-subtitle mb-2 text-muted">Your Mid Terms Marks</h6>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><b>Html:</b> {this.props.mid.html}/100</li>
                                    <li className="list-group-item"><b>Css:</b> {this.props.mid.css}/100</li>
                                    <li className="list-group-item"><b>JavaScript:</b> {this.props.mid.js}/100</li>
                                    <li className="list-group-item"><b>Node.js:</b> {this.props.mid.node}/100</li>
                                    <li className="list-group-item"><b>React:</b> {this.props.mid.react}/100</li>
                                    <li className="list-group-item"><b>Redux:</b> {this.props.mid.redux}/100</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mar-up-down">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Marks Information</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Your Prellium Terms Marks</h6>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><b>Html:</b> {this.props.pre.html}/100</li>
                                    <li className="list-group-item"><b>Css:</b> {this.props.pre.css}/100</li>
                                    <li className="list-group-item"><b>JavaScript:</b> {this.props.pre.js}/100</li>
                                    <li className="list-group-item"><b>Node.js:</b> {this.props.pre.node}/100</li>
                                    <li className="list-group-item"><b>React:</b> {this.props.pre.react}/100</li>
                                    <li className="list-group-item"><b>Redux:</b> {this.props.pre.redux}/100</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Marks Information</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Your Final Terms Marks</h6>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><b>Html:</b> {this.props.fin.html}/100</li>
                                    <li className="list-group-item"><b>Css:</b> {this.props.fin.css}/100</li>
                                    <li className="list-group-item"><b>JavaScript:</b> {this.props.fin.js}/100</li>
                                    <li className="list-group-item"><b>Node.js:</b> {this.props.fin.node}/100</li>
                                    <li className="list-group-item"><b>React:</b> {this.props.fin.react}/100</li>
                                    <li className="list-group-item"><b>Redux:</b> {this.props.fin.redux}/100</li>
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