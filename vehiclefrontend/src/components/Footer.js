import React, { Component } from 'react';

class Footer extends Component {
    constructor(props){
        super(props)
        this.state={
            
        }
    }
    render() {
        return (
            <div>
                <footer className="footer">
                    <div style={{marginTop:"15px"}}>
                    <span className="text-muted">All Rights Reserved 2022 @AbishaaliniCodes</span>
                    </div>
                    
                </footer>
            </div>
        );
    }
}

export default Footer;