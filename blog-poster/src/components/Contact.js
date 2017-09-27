import React from 'react';

export class Contact extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="col-lg-offset-1 col-lg-10" id="panel">
                    <h2>Get In Touch</h2>
                    <form>
                        <div className="group">
                            <input type="text" required/>
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Name</label>
                        </div>
    
                        <div className="group">
                            <input type="text" required />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Email</label>
                        </div>
    
                        <div className="group">
                            <input type="text" required />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Mobile No</label>
                        </div>
    
                        <div className="group">
                            <input type="text" required />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Message</label>
                        </div>
                
                        <div className="group">
                            <center> <button type="submit" className="btn btn-warning">Send <span className="glyphicon glyphicon-send"></span></button></center>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}