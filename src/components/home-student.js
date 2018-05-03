import React, {Component} from 'react';
import Navbar from './navbar';
import InfoPanel from './home-info-student';
import firebase from '../config/firebase';
import imgLoad from '../assets/image/loading.gif';

class HomeStudent extends Component{
    constructor(props){
        super(props);
        this.state = {
            loading: true
        }
    }

    componentWillMount(){
        let local = JSON.parse(localStorage.getItem('user'));
        var user, mid, pre, fin;
        firebase.database().ref(`userDetails/${local.uid}`).on('value', (snapshot)=>{
            user = snapshot.val();
        })
        if(user===null || user===undefined){
            mid = {
                html: "n/a",
                css: "n/a",
                js: "n/a",
                node: "n/a",
                react: "n/a",
                redux: "n/a"
            }
            pre = {
                html: "n/a",
                css: "n/a",
                js: "n/a",
                node: "n/a",
                react: "n/a",
                redux: "n/a"
            }
            fin = {
                html: "n/a",
                css: "n/a",
                js: "n/a",
                node: "n/a",
                react: "n/a",
                redux: "n/a"
            }
            firebase.database().ref(`users/${local.uid}`).on('value', (snapshot)=>{
                user = snapshot.val();
                this.setState({user,mid,pre,fin,loading: false});
            })
        } else{
            firebase.database().ref(`studentMarks/Mid Term/${local.uid}`).on('value', (snapshot)=>{
                mid = (snapshot.val()===null)? mid = {
                    html: "n/a",
                    css: "n/a",
                    js: "n/a",
                    node: "n/a",
                    react: "n/a",
                    redux: "n/a"
                } : snapshot.val();
            })
            firebase.database().ref(`studentMarks/Prellium Term/${local.uid}`).on('value', (snapshot)=>{
                pre = (snapshot.val()===null)? pre = {
                    html: "n/a",
                    css: "n/a",
                    js: "n/a",
                    node: "n/a",
                    react: "n/a",
                    redux: "n/a"
                } : snapshot.val();
            })
            firebase.database().ref(`studentMarks/Final Term/${local.uid}`).on('value', (snapshot)=>{
                fin = (snapshot.val()===null)? fin = {
                    html: "n/a",
                    css: "n/a",
                    js: "n/a",
                    node: "n/a",
                    react: "n/a",
                    redux: "n/a"
                } : snapshot.val();
                this.setState({user,mid,pre,fin,loading: false});
            })
        }
    }

    render(){
        return(
            <div className="container-fluid">
                <Navbar type="stu"/>
                {(this.state.loading)? 
                    <div className="load"><img src={imgLoad} alt="Loading..."/></div> 
                :
                    <InfoPanel data={this.state.user} mid={this.state.mid} pre={this.state.pre} fin={this.state.fin}/>}}
            </div>
        );
    }
}

export default HomeStudent;