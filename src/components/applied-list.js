import React, {Component} from 'react';

class AppliedList extends Component{
    render(){
        return(<li className="list-group-item">{this.props.data.studentName}</li>);
    }
}
export default AppliedList;