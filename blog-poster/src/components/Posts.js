import React from 'react';
import {Link} from 'react-router-dom';
import {Readmore} from './Readmore';

const POST_URL = "http://jsonplaceholder.typicode.com/posts/";
var that = this;
export class Posts extends React.Component{

    constructor(props){
        super(props);
        this.state = { dataRead : {} };        
        //console.log("Blogitem : ",this.props)
    }
    
    readMore(blogId){
        var that = this;
        console.log("Blog ID : ",blogId); 
        let readMoreURL = POST_URL + blogId;
        console.log("Post URL : ",readMoreURL)
        fetch(readMoreURL)
        .then(results => results.json())
        .then(resu => {
            console.log("Fetching blog : ",resu)
            console.log("checking : ",that.setState({dataRead:resu}))
        })
    }

    render(){        
        return(            
            <div>
                <h4 className="blogHeading" >{this.props.itemData.title}</h4>
                <p className="btReadMore">
                    <Link to = "/readmore/" params={this.props.itemData.id} > Read more </Link>                    
                </p>                   
                <hr/>
            </div>  
        )
    }
}

    // readMore(blogId){
    //     var that = this;
    //     console.log("Blog ID : ",blogId); 
    //     let readMoreURL = POST_URL + blogId;
    //     console.log("Post URL : ",readMoreURL)
    //     fetch(readMoreURL)
    //     .then(results => results.json())
    //     .then(resu => {
    //         console.log("Fetching blog : ",resu)
    //         console.log("checking : ",that.setState({dataRead:resu}))
    //     })            
    // }