import React, {Component} from 'react';
import {connect} from 'react-redux';
import Navbar from './navbar';
import firebase from '../config/firebase';
import VacancyPanel from './vacancy-panel';

class VacancyStudent extends Component{
    constructor(props){
        super(props);
        this.state = {
            loading: true
        }
    }

    componentWillMount(){
        // let local = JSON.parse(localStorage.getItem('user'));
        var vac;
        var arr = [];
        firebase.database().ref(`vacancy/`).on('value', (snapshot)=>{
            snapshot.forEach(function(childSnapshot) {
                var key = childSnapshot.key;   
                var obj = childSnapshot.val();
                arr.push(<VacancyPanel key={key} data={obj}/>)
            });
            this.setState({vac, loading: false, arr});
        });
    }

    render(){
        return(
            <div className="container-fluid">
                <Navbar type="stu"/>
                <div className="container">
                    <h1 className="display-4">Vacancies!</h1>
                    <p className="lead">All the vacancies from all the companies are listed here...</p>
                    {(this.state.loading)? null : this.state.arr.map((value, index)=>{
                        return value
                    })}
                </div>
            </div>
        );
    }
}

function mapStateToProp(state){
    return({
    });
}

function mapDispatchToProp(dispatch) {
    return ({
    });
}
export default connect(mapStateToProp,mapDispatchToProp)(VacancyStudent);