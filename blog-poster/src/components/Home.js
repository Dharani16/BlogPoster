import React from 'react';
//var URL = "https://randomuser.me/api/?result=500";
const POST_URL = "http://jsonplaceholder.typicode.com/posts/";
export class Home extends React.Component{
    constructor(){
        super();
        this.state = { data:[],
        };
    }
    

    componentDidMount(){
        fetch(POST_URL)
        .then(results => {
            return results.json();
        }).then(data => {
            let blogData = data.map((value,key) => {             
                //console.log("key : "+key)
                //console.log(value.title)
                return(
                    <div>
                        <h2 className="blogTitle">{value.title}</h2>
                        <p className="btReadMore" onClick={() => this.readMore(value.id)}>Read More</p>
                        <hr/>
                    </div>                        
                )
            })  
            this.setState({ab:blogData})                      
        })    
    }

    readMore(blogId){
        console.log("BlogId : "+blogId);
        let readMoreURL = POST_URL + blogId;
        console.log("Post URL : "+readMoreURL)
        fetch(readMoreURL)
        .then(results => {
            return results.json();
        }).then(readData => {
            //var detailsData = readData;
            let bgTitle = readData.title;
            let bgContent = readData.body;
            console.log("ReadMore Data : ")
            console.log(readData)
            console.log("Title : "+bgTitle)
            console.log("Body : "+bgContent)            
        })
    }

    render(){
        return(
            <div>
                {this.state.ab}                
            </div>
        )
    }       
}

