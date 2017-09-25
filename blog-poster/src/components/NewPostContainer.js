import React from 'react';
import{BrowserRouter as Router} from 'react-router-dom';

const POST_URL = 'https://jsonprovider.herokuapp.com/posts/';

export class NewPostContainer extends React.Component {
    constructor(){
        super();
        this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        let dat = {
            title:e.target.blogPostTitle.value,
            body:e.target.message.value,
            userId:1
        }
        e.preventDefault();
        console.log("Lets check it : ",e)
        fetch(POST_URL,{
            method:'POST',
            body:JSON.stringify(dat)
        })
        .then(function(body){
            console.log("Body : ",body);
            alert("Blog posted successfully !!");             
        });
        Router.browserHistory.push('/')  
    }    
    


    render(){
        return(
            <div className="container">
	            <div className="col-lg-offset-1 col-lg-10">
		            <h2>Create Blog</h2>
                    <form id="formId" onSubmit={this.handleSubmit}>
                        <div className="group">                           
                            <label className="createBlogLabel">Blog title</label><br/>  
                            <input type="text" name="blogPostTitle" id="blgTitle" className="createBlogTitle" ref="titleName" required />
                        </div>
                        <div className="group">
                            <label className="createBlogLabel">Blog Message</label>
                            <textarea name="message" className="createBlogMessage" id="blgPost" rows="10" cols="120" ref="contentMsg" required></textarea>
                        </div>               
                        <div className="group">
                            <center> 
                                <input type="submit" value="Submit Blog" id="btnCreate" className="btn btn-warning"/>
                            </center>
                        </div>
                    </form>
	            </div>	
            </div>
        )
    }
}

