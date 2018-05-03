import React, {Component} from 'react';
import {connect} from 'react-redux';
import Navbar from './navbar';
import {UploadMarksToFb} from '../store/action/act-student';

class MarksStudent extends Component{
    constructor(props){
        super(props);
        this.state = {
           term: '',
           html: '',
           css: '',
           js: '',
           node: '',
           react: '',
           redux: '',
           uploading: false
        }
    }

    render(){
        return(
            <div className="container-fluid">
                <Navbar type="stu"/>
                <div className="container">
                    <h1 className="display-4" style={{marginTop: "30px"}}>Upload Your Marks</h1>
                    <p className="lead">Here you can upload your marks and mentain your resume for the companies.</p>
                    <div className="row mar-up-down">
                        <div className="col-md-12">
                            <select className="form-control" onChange={this._evtTerm.bind(this)}>
                                <option value="">Select Examination Term</option>
                                <option value="Mid Term">Mid Term</option>
                                <option value="Prellium Term">Prellium Term</option>
                                <option value="Final Term">Final Term</option>
                            </select>
                        </div>
                    </div>
                    <div className="row mar-up-down">
                        <div className="col-md-6">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">HTML</span>
                                </div>
                                <input type="text" onChange={this._evtHtml.bind(this)} className="form-control" placeholder="Marks"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">CSS</span>
                                </div>
                                <input type="text" onChange={this._evtCss.bind(this)} className="form-control" placeholder="Marks" />
                            </div>
                        </div>
                    </div>
                    <div className="row mar-up-down">
                        <div className="col-md-6">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">JavaScript</span>
                                </div>
                                <input type="text" onChange={this._evtJs.bind(this)} className="form-control" placeholder="Marks" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">Node.js</span>
                                </div>
                                <input type="text" onChange={this._evtNode.bind(this)} className="form-control" placeholder="Marks" />
                            </div>
                        </div>
                    </div>
                    <div className="row mar-up-down">
                        <div className="col-md-6">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">React</span>
                                </div>
                                <input type="text" onChange={this._evtReact.bind(this)} className="form-control" placeholder="Marks" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">Redux</span>
                                </div>
                                <input type="text" onChange={this._evtRedux.bind(this)} className="form-control" placeholder="Marks" />
                            </div>
                        </div>
                    </div>
                    <div className="row mar-up-down">
                        <div className="col-md-12" style={{textAlign: "center"}}>
                            <button  className="btn btn-lg btn-info" onClick={this.uploadMarks.bind(this)}>
                                {(this.state.uploading)? 'Uploading...': 'Upload'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    _evtTerm(evt){
        this.setState({term: evt.target.value});
    }

    _evtHtml(evt){
        this.setState({html: evt.target.value});
    }

    _evtCss(evt){
        this.setState({css: evt.target.value});
    }

    _evtJs(evt){
        this.setState({js: evt.target.value});
    }

    _evtNode(evt){
        this.setState({node: evt.target.value});
    }

    _evtReact(evt){
        this.setState({react: evt.target.value});
    }

    _evtRedux(evt){
        this.setState({redux: evt.target.value});
    }

    uploadMarks(){
        let local = JSON.parse(localStorage.getItem('user'));
        let marks = {
            uid: local.uid,
            term: this.state.term,
            html: this.state.html,
            css: this.state.css,
            js: this.state.js,
            node: this.state.node,
            react: this.state.react,
            redux: this.state.redux
        };
        this.setState({
            term: '',
            html: '',
            css: '',
            js: '',
            node: '',
            react: '',
            redux: '',
            uploading: true
        });
        this.props.uploadMarks(marks);
        console.log(this.state);
    }
}

function mapStateToProp(state){
    return({
    });
}

function mapDispatchToProp(dispatch) {
    return ({
        uploadMarks: (arg)=>{
            dispatch(UploadMarksToFb(arg));
        }
    });
}
export default connect(mapStateToProp,mapDispatchToProp)(MarksStudent);