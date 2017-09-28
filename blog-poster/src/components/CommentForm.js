import React from 'react';
import {CmtContainer} from './CmtContainer';
const COMMENT_URL_DATA = "https://jsonprovider.herokuapp.com/comments";

export class CommentForm extends React.Component{

    constructor(){
        super();
        //this.state={name:'',body:'',email:''}
    }

    handleSubmit (blogId) {
        return event => {
            event.preventDefault()
            console.log("Comment form working good !!")
            console.log(blogId)
            let data = {
                    name:event.target.uname.value,
                    body:event.target.message.value,  
                    email:event.target.email.value,
                    postId:blogId
            }
            fetch(COMMENT_URL_DATA,{
                method:'POST',
                body:JSON.stringify(data)
            }).then(function(body){
                console.log("Body : ",body);
                console.log("Comment registerd successfully !!!");
                alert("Comment post sent successfully !!");
            })  
        }
    }
   

    render(){
        var postID = this.props.postId;
        return(            
            <div>
                <h1>Comment Form</h1>
                {/* <h5>PostId : {postID}</h5> */}
                <div className="container">    
                    <form onSubmit={this.handleSubmit(postID)}>
                        <div className="col-lg-6"> 
                            <label className="cmtLabel">Name</label> <br/>
                            <input type = "text" className="commentFormInput" id="cmName" name="uname" required/>  <br/>
                            <label className="cmtLabel">Email</label> <br/>
                            <input type = "email" className="commentFormInput" id="cmEmail" name="email" required/> <br/>
                        </div>
                        <div className="col-lg-6">
                            <label className="createBlogLabel">Message</label> <br/>
                            <textarea name="message" className="cmtMessage" id="blgPost" rows="5" cols="60" ref="contentMsg" required></textarea>
                        </div>
                        <div className="col-lg-12">
                            <center> 
                                <input type="submit" value="Submit" id="btnCreate" className="btn btn-warning"/>
                            </center>
                        </div>  
                    </form>            
                </div>
                <hr/>
            </div>    
        )
    }    
}


