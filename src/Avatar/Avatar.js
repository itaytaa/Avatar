import { Component } from 'react';
import './Avatar.css'

class Avatar extends Component {
    
    constructor(props) {
        console.log(props)
        super(props)
    }

  
    render() {
        return (
            <img src={this.props.url} width={this.props.width} className={this.props.shape==="circle"? "circle":"square"}/>


        )


    }

}

export default Avatar;