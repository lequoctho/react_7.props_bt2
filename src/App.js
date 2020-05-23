import React, { Component } from 'react';
import './App.css';

import TabMenu from './components/TabMenu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TabMenu title="Home" image="https://cdn.glitch.com/6a47dbff-a645-429e-bc55-3fb2a767e153%2Fhome.png?v=1590223564111"/>
        <TabMenu title="Home" image="https://cdn.glitch.com/6a47dbff-a645-429e-bc55-3fb2a767e153%2Fhome.png?v=1590223564111"/>
        <TabMenu title="Home" image="https://cdn.glitch.com/6a47dbff-a645-429e-bc55-3fb2a767e153%2Fhome.png?v=1590223564111"/>
        <TabMenu title="Home" image="https://cdn.glitch.com/6a47dbff-a645-429e-bc55-3fb2a767e153%2Fhome.png?v=1590223564111"/>
        <TabMenu title="Home" image="https://cdn.glitch.com/6a47dbff-a645-429e-bc55-3fb2a767e153%2Fhome.png?v=1590223564111"/>
      </div>
    );
  }
}

export default App;
