import React from 'react';

export class Readmore extends React.Component{

    constructor(props){
        super(props);
        console.log("this.props got ah ",this.props);
    }
    
    render(){
        return(
            <div className="readMoreComponent">
                <div className="container">
                    <div>
                        <h2>Read more page !!!</h2>
                        <h3>Poster Title </h3>
                        <p>Poster content </p> 
                    </div>
                    <hr/>
                </div>
            </div>
        )
    }
}