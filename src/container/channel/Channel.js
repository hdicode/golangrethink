import React, {Component} from 'react';

class Channel extends Component {
    onClick(){
        console.log('I was clicked', this.props.name)
    }
    render() {
        return (
                <li onClick={this.onClick.bind(this)}>{this.props.name}</li>
        );
    }
}

export default Channel;