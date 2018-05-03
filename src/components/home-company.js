import React, {Component} from 'react';
import Navbar from './navbar';

class HomeCompany extends Component{
    constructor(props){
        super(props);
        this.state = {
            loading: true
        }
    }
    render(){
        console.log(this.prop);
        return(
            <div className="container-fluid">
                <Navbar type="com"/>
                <div className="container">
                    <h1 className="display-4">Welcome, Daniyal!</h1>
                    <p className="lead">You can see all your details here...</p>
                </div>
            </div>
        );
    }
}

export default HomeCompany;