import React, {Component} from 'react';
import {connect} from 'react-redux';
import Navbar from './navbar';
import firebase from '../config/firebase';
import AdminList from './admin-list';

class Admin extends Component{
    constructor(props){
        super(props);
        this.state = {
           loading: true
        }
    }

    componentWillMount(){
        // var local = JSON.parse(localStorage.getItem('user'));
        var arr = [];
         firebase.database().ref(`users/`).on('value', (snapshot)=>{
            snapshot.forEach(function(childSnapshot) {
                var key = childSnapshot.key;   
                var obj = childSnapshot.val();
                arr.push(<AdminList key={key} data={obj}/>)
            console.log(obj);
            });
            this.setState({arr: arr, loading: false});
        })
    }

    render(){
        return(
            <div className="container-fluid">
                <Navbar type="adm"/>
                <div className="container">
                    <h1 className="display-4" style={{marginTop: "30px"}}>Admin!</h1>
                    <p className="lead">Below mentioned are the students who have applied to you vacancy.</p>

                    <ul className="list-group">
                        {(this.state.loading)? null: 
                            this.state.arr.map((val, ind)=>{
                                return val
                            })
                        }
                    </ul>
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
export default connect(mapStateToProp,mapDispatchToProp)(Admin);