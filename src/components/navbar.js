import React, {Component} from 'react';
import history from '../config/history';
import {Link} from 'react-router-dom';

class Navbar extends Component{
    render(){
        if(this.props.type==="stu"){
            return(<nav className="navbar navbar-expand-lg navbar-light bg-light">
                <span className="navbar-brand">Student Dashboard</span>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/home-student">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/profile-student">Profile</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/vacancy-student">Vacancies</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/marks-student">Marks Upload</Link>
                        </li>
                    </ul>
                    <div className="my-2 my-lg-0">
                        <button className="btn btn-outline-danger my-2 my-sm-0" type="button" onClick={this.signOut.bind(this)}>Sign out</button>
                    </div>
                </div>
            </nav>);
        } else if(this.props.type==="com"){
            return(
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <span className="navbar-brand">Company Dashboard</span>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/home-company">Home <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/profile-company">Profile</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/vacancy-company">Create a vacancy</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/applied">Applied Students</Link>
                            </li>
                        </ul>
                        <div className="my-2 my-lg-0">
                            <button className="btn btn-outline-danger my-2 my-sm-0" type="button" onClick={this.signOut.bind(this)}>Sign out</button>
                        </div>
                    </div>
                </nav>
            );
        } else if(this.props.type==="adm"){
            return(
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <span className="navbar-brand">Admin Dashboard</span>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="my-2 my-lg-0">
                            <button className="btn btn-outline-danger my-2 my-sm-0" type="button" onClick={this.signOut.bind(this)}>Sign out</button>
                        </div>
                    </div>
                </nav>
            );
        }
    }

    signOut(){
        localStorage.removeItem('user');
        history.push('/signin');
    }

}

export default Navbar;