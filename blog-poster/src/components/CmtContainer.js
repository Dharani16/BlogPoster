import React from 'react';
import {Comment} from './Comment';

//const POST_URL = "http://jsonplaceholder.typicode.com/posts/";
const POST_URL = "https://jsonprovider.herokuapp.com/posts/";
const COMMENT_FIRST = "/comments/?sort=id+desc";

export class CmtContainer extends React.Component{

    constructor(props){
        super(props);
        this.state={cmtData:[]};
    }

    componentDidMount(){
        let COMMENT_URL = POST_URL + this.props.id + COMMENT_FIRST;
        console.log("Comment Url : ",COMMENT_URL);
        fetch(COMMENT_URL)
        .then(results => results.json())
        .then(res =>{
            console.log("Comment data : ",res)
            this.setState({cmtData:res})
        })              
    }
    
    cmtDisplay = (item) => {
        return <Comment itemData={item}/>
    }
    
    render(){
       
        var cmtItems =  this.state.cmtData.map((item) => this.cmtDisplay(item));
        return(
            <div>
                <h1>Comment display </h1>
                {cmtItems}
            </div>
        )
    }
}

