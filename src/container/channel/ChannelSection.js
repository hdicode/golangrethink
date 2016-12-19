import React, {Component} from 'react';

//containers
import ChannelList from './ChannelList';
import ChannelForm from './ChannelForm';

class ChannelSection extends Component {
    constructor(props){
        super(props);
        this.state = { channels : [
            {name: 'Hardware Support', id : '1'},
            {name: 'Software Support', id : '2'}
        ]};
    }

    addChannel(name){
        let {channels} = this.state;
        //console.log(channels);
        //console.log( Math.max.apply(Math,channels.map(function(o){return o.id;}))   );
        let idmax = String(Math.max.apply(Math,channels.map(function(o){return o.id;})) + 1);
        channels.push({name: name, id:idmax});
        this.setState({
            channels: channels
        });
        console.log(channels);
    }

    render() {
        return (
            <div>
                <ChannelList channels={this.state.channels} />
                <ChannelForm addChannel={this.addChannel.bind(this)} />
            </div>
        );
    }
}

export default ChannelSection;