import React from 'react';

export class Comment extends React.Component{
    
    constructor(props){
        super(props);
        console.log("Comment props : ",this.props)
    }

    render(){
        return(
            <div className="container">
                <div className="col-lg-1"> 
                    <img src={require('../images/userIcon.png')} className="cmtIconImage"/>
                </div>
                <div className="col-lg-11">
                    <h6>{this.props.itemData.email}</h6>
                    <p>{this.props.itemData.name}</p>
                    <p>{this.props.itemData.body}</p>
                    <hr/>
                </div>
            </div>
        )
    }
}