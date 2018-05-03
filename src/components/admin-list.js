import React, {Component} from 'react';

class AdminList extends Component{
    render(){
        return(<li className="list-group-item">
            {this.props.data.name}

            <button className="btn btn-danger" onClick={this.delete.bind(this)} style={{float: "right"}}>Delete</button>
        </li>);
    }

    delete(){
        console.log("");
    }
}
export default AdminList;