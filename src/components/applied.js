import React, {Component} from 'react';
import {connect} from 'react-redux';
import Navbar from './navbar';
import firebase from '../config/firebase';
import AppliedList from './applied-list';

class Applied extends Component{
    constructor(props){
        super(props);
        this.state = {
           loading: true
        }
    }

    componentWillMount(){
        var local = JSON.parse(localStorage.getItem('user'));
        var arr = [];
         firebase.database().ref(`applied/`).on('value', (snapshot)=>{
            snapshot.forEach(function(childSnapshot) {
                var key = childSnapshot.key;   
                var obj = childSnapshot.val();
                if(obj.companyId===local.uid){
                    arr.push(<AppliedList key={key} data={obj}/>)
                }
            });
            this.setState({arr: arr, loading: false});
            console.log(this.state.arr);
        })
    }

    render(){
        return(
            <div className="container-fluid">
                <Navbar type="com"/>
                <div className="container">
                    <h1 className="display-4" style={{marginTop: "30px"}}>Applied Students</h1>
                    <p className="lead">Below mentioned are the students who have applied to you vacancy.</p>
                    
                    <div className="row">
                        <div className="col-md-12">
                            <ul className="list-group">
                                {(this.state.loading)? null: 
                                    this.state.arr.map((val, ind)=>{
                                        return val
                                    })
                                }
                            </ul>
                        </div>
                    </div>
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
export default connect(mapStateToProp,mapDispatchToProp)(Applied);