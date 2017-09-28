import React from 'react';
import { Redirect,Link } from 'react-router-dom';

const POST_URL = 'https://jsonprovider.herokuapp.com/posts/';

class NewPostContainer extends React.Component {
    constructor(props){
        super(props); 
        this.state = {redirect:false} ; 
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log("Lets check it : ",e)
        var self = this;
        let data = {
            title:e.target.blogPostTitle.value,
            body:e.target.message.value,  
            userId:1
        }     
        fetch(POST_URL,{
            method:'POST',
            body:JSON.stringify(data)
        }).then(function(body){
            console.log("Body : ",body);
            alert("Blog posted successfully !!"); 
            self.setState({redirect:true});
        })      
    }    

    render(){  
        const {redirect} = this.state;
        if(redirect){
            return <Redirect to = '/'/>
        }   
        return(
            <div>
                <div className="container">
                    <div className="col-lg-offset-1 col-lg-10">
                        <form id="formId" onSubmit={this.handleSubmit}>
                            <div className="group">                           
                                <label className="createBlogLabel">Blog title</label><br/>  
                                <input type="text" value={this.state.title} onChange={this.handleChange} name="blogPostTitle" id="blgTitle" className="createBlogTitle" required />
                            </div>
                            <div className="group">
                                <label className="createBlogLabel">Blog Message</label> <br/>
                                <textarea name="message" value={this.state.body} onChange={this.handleChange} className="createBlogMessage" id="blgPost" rows="10" cols="120" required></textarea>
                            </div>               
                            <div className="group">
                                <center> 
                                    <input type="submit" value="Submit Blog" id="btnCreate" className="btn btn-warning"/>
                                </center>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }    
}
export default NewPostContainer;
