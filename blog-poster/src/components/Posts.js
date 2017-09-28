import React from 'react';
import {Link} from 'react-router-dom';

export class Posts extends React.Component{

    constructor(props){
        super(props);
        this.state = { dataRead : {} };        
    }
       
    render(){        
        return(            
            <div className="blogDisplay">             
                <div className="col-lg-12">
                    <h4 className="blogHeading" >{this.props.itemData.title}</h4>
                    <p className="btReadMore">
                        <Link to = {"/readmore/" + this.props.itemData.id} className="btRead"> Read more </Link>                    
                    </p>
                    <hr/>
                </div>          
            </div>             
        )
    }
}
