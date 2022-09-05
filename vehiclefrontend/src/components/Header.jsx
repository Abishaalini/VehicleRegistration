import React, { Component } from 'react';

class Header extends Component {
    constructor(props){
        super(props)
        this.state={
            
        }
    }
    
    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-light bg-warning">
                        <img src="http://localhost:3000/images/dept.png" style={{width:"130px", marginLeft:"10px"}}></img>
                        <div><a href="#" className="navbar-brand" style={{fontWeight:"normal", color:"#504C41", marginLeft:"10px", fontSize:"20px"}}>Department Of Motor Traffic</a></div>
                        
                    </nav>
                </header>
            </div>
        );
    }
}

export default Header;