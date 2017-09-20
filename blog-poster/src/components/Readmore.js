import React from 'react';

export class Readmore extends React.Component{
    constructor(props){
        super(props);
        console.log("this.props",this.props);
    }
    render(){
        return(
            <div className="readMoreComponent">
                <div className="container">
                    <div>
                        <h3>{this.props.item.title}</h3>
                        <p>{this.props.item.body}</p>
                    </div>
                </div>
            </div>
        )
    }
}