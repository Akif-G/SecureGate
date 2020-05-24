import React, { Component, Fragment } from 'react';
import './HomeContent.css'
class HomeContent extends Component{
    render(){
    return(
        <div className="Content" style={{ backgroundColor:this.props.BG} }></div>
    )
}
}
export default HomeContent;