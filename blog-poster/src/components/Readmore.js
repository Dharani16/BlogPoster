import React from 'react';
import {CmtContainer} from './CmtContainer';
import {CommentForm} from './CommentForm';

//const POST_URL = "http://jsonplaceholder.typicode.com/posts/";
const POST_URL = "https://jsonprovider.herokuapp.com/posts/";

export class Readmore extends React.Component{

    constructor(props){
        super(props);
        this.state = {data:{}};
    }

    componentDidMount(){ 
        let READMORE_URL = POST_URL + this.props.match.params.id;
        fetch(READMORE_URL)
        .then(results => results.json())
        .then(res =>{
            this.setState({data:res})
        })   
    }

    render(){
        var rmTitle = this.state.data.title;
        var rmContent = this.state.data.body;
        return(
            <div className="readMoreComponent">
                <div className="container">
                    <div>
                        <img src={require('../images/blogBanner.jpg')} className="img-responsive blogBannerImage"/>
                        <h3>{rmTitle}</h3>
                        <p>{rmContent} </p>
                        <hr/>     
                    </div>     
                    <CommentForm postId={this.props.match.params.id}/>           
                    <CmtContainer id={this.props.match.params.id}/> 
                </div>
            </div>
        )
    }
}
