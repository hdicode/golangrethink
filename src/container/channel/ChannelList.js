import React, {Component} from 'react';
import Channel from './Channel';

class ChannelList extends Component {
    render() {
        return (
            <ul>
                {this.props.channels.map( channel => {
                        return(
                            <Channel name={channel.name} key={channel.id} />
                        )
                    }
                )}
            </ul>
        );
    }
}

export default ChannelList;