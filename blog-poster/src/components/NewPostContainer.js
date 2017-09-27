import React from 'react';
import { Redirect,Link } from 'react-router-dom';
import { withRouter } from 'react-router';

const POST_URL = 'https://jsonprovider.herokuapp.com/posts/';

class NewPostContainer extends React.Component {
    constructor(props){
        super(props);  
        this.redirectFunction=this.redirectFunction.bind(this);  
        // this.state = {postRedirect:false} ; 
        //this.state = {postRedirect:false} ;    
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
        }).then(function(body){
            console.log("Body : ",body);
            console.log("Blog poster registerd successfully !!!");
            alert("Blog posted successfully !!"); 
            // <Redirect to='/about'/> 
        })      
    }    
    
    redirectFunction(){
        console.log("RedirectFunction console area !!");
        this.props.router.push('/about');
        //this.context.router.transitionTo('/about');
        // console.log("browserHistory", this.context);
        // this.context.router.transitionTo('/about'); 
    }  

    render(){     
        return(
            <div>
                <div className="container">
                    <div className="col-lg-offset-1 col-lg-10">
                        <form id="formId" onSubmit={this.handleSubmit}>
                            <div className="group">                           
                                <label className="createBlogLabel">Blog title</label><br/>  
                                <input type="text" name="blogPostTitle" id="blgTitle" className="createBlogTitle" ref="titleName" required />
                            </div>
                            <div className="group">
                                <label className="createBlogLabel">Blog Message</label> <br/>
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
                <input type="submit" value="Redirect" onClick={this.redirectFunction} id="btnCreate" className="btn btn-warning"/>
                        
                 {/* <div>
                    if (this.set.postRedirect) {
                    }
                </div>  */}
            </div>
        )
    }    
}
export default withRouter(NewPostContainer);

// NewPostContainer.contextTypes = {
//     router: React.PropTypes.func.isRequired
// };

/*
   redirectFunction(){
        console.log("redirectFunction console area !!");
        //this.context.router.transitionTo('/about');
        console.log("browserHistory",browserHistory);
        browserHistory.push('/about');
        //this.context.router.push('/about');
        // this.props.history.push("/about");
        //browserHistory.push('/about');
        // <Redirect to = '/about' push/> 
        //browserHistory.push('/about');
    }  
*/ 