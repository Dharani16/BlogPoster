import React from 'react';
import {Posts} from './Posts';

//const POST_URL = "http://jsonplaceholder.typicode.com/posts/";
const POST_URL = "https://jsonprovider.herokuapp.com/posts?sort=id+desc";
export class PostContainer extends React.Component{
    constructor(){
        super();
        this.state = { data:[] };
    }    

    componentDidMount(){ 
        var that = this;
        fetch(POST_URL)
        .then(results => results.json())
        .then(res =>{
            that.setState({data:res})
        })   
    }
    
    singleBlog = (item) => {
        return <Posts itemData={item}/>
    }
    
    render(){
        var items =  this.state.data.slice(0,10).map((item) => this.singleBlog(item));
        return(
            <div>
               {items}
            </div>        
        )
    }       
}

