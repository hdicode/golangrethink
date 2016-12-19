import React, {Component} from 'react';

class ChannelForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            channelName : ''
        }
    }
    onChange(e){
        this.setState({
            channelName: e.target.value
        });
        console.log(e.target.value);
    }
    onSubmit(e){
        let {channelName} = this.state;
        console.log(channelName);

        /* channels.push({
            name: channelName
            });

            this.setState({
                channelName: ''
            }); 
        */
            this.setState({
                channelName: ''
            }); 
        this.props.addChannel(channelName);
        e.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.onSubmit.bind(this)}>
                <input type='text' onChange={this.onChange.bind(this)} value={this.state.channelName} />
            </form>
        );
    }
}

export default ChannelForm;