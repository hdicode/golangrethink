import React, { Component } from 'react';
import './App.css';

//containers
import ChannelSection from './container/channel/ChannelSection';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ChannelSection />
      </div>
    );
  }
}

export default App;
