import React, {Component} from 'react';
import firebase from '../config/firebase';

class VacancyPanel extends Component{
    constructor(props){
        super(props);
        this.state = {
           
        }
    }

    render(){
        return(
            <div className="row mar-up-down">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">{this.props.data.name}</div>
                        <div className="card-body">
                            <h5 className="card-title">{this.props.data.title}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{this.props.data.designation}</h6>
                            <p className="card-text">{this.props.data.description}</p>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><b>Experience:</b> {this.props.data.experience}</li>
                                <li className="list-group-item"><b>Gender:</b> {this.props.data.gender}</li>
                                <li className="list-group-item"><b>Salary:</b> {this.props.data.salary}</li>
                                <li className="list-group-item"><b>Deadline:</b> {this.props.data.deadline}</li>
                            </ul>
                        </div>
                        <div className="card-footer text-muted">
                            <button className="btn btn-dark" onClick={this.applyVacancy.bind(this, this.props.data.uid)}>Apply</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    applyVacancy(id){
        var local = JSON.parse(localStorage.getItem('user'));
        var app = {
            companyId: id,
            studentId: local.uid,
            studentName: local.name
        }
        console.log(app);
        firebase.database().ref('applied/').push(app);
    }
}
export default VacancyPanel;