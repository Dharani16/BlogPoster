import React from 'react';
import {Readmore} from './Readmore';

//var URL = "https://randomuser.me/api/?result=500";
const POST_URL = "http://jsonplaceholder.typicode.com/posts/";
export class Home extends React.Component{
    constructor(){
        super();
        this.state = { data:[]
        };
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
    //    return(
    //        <div>
    //        <h5>{item.title}</h5>
    //        <p onClick={() => this.readMore(item.id)}> Read more...</p>
    //        </div>
    //    );
        return <Readmore item={item}/>
    }

    readMore(Id){
        console.log("dharani",Id);        
    }

    render(){
        var items =  this.state.data.map((item) => this.singleBlog(item));
        return(
            <div>
               {items}
            </div>        
        )
    }       
}



/*
    componentDidMount(){
        fetch(POST_URL)
        .then(results => {
            return results.json();
        }).then(data => {
            let blogData = data.map((value,key) => {    
                this.state.data         
                //console.log("key : "+key)
                //console.log(value.title)
                return(
                    <div>
                        <h2 className="blogTitle">{value.title}</h2>
                        <p className="btReadMore" onClick={() => this.readMore(value.id)}>Read More</p>
                        *<Router>
                            <Link to="/readmore">Readmore</Link>
                            <Route exact path ="/readmore" component={Readmore}/>
                        </Router>    
                        <hr/>
                        </div>                        
                    )
                })  
                this.setState({ab:blogData})                      
            })    
        }   
        
        
            // readMore(blogId){
    //     console.log("BlogId : "+blogId);
    //     let readMoreURL = POST_URL + blogId;
    //     console.log("Post URL : "+readMoreURL)
    //     fetch(readMoreURL)
    //     .then(results => {
    //         return results.json();
    //     }).then(readData => {
    //         //var detailsData = readData;
    //         var bgTitle = readData.title;
    //         var bgContent = readData.body;
    //         console.log("ReadMore Data : ")
    //         console.log(readData)
    //         console.log("Title : "+bgTitle)
    //         console.log("Body : "+bgContent)
            
    //     })
    // }

*/ 