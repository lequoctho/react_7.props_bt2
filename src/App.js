import React, { Component } from 'react';
import './App.css';

import TabMenu from './components/TabMenu';

class App extends Component {
  render() {
    const icons = [
        {
          icon: 'https://cdn.glitch.com/6a47dbff-a645-429e-bc55-3fb2a767e153%2Fhome.png?v=1590223564111', 
          label: 'Home'
        },
        {
          icon: 'https://cdn.glitch.com/6a47dbff-a645-429e-bc55-3fb2a767e153%2Fhome.png?v=1590223564111', 
          label: 'Home'
        },
        {
          icon: 'https://cdn.glitch.com/6a47dbff-a645-429e-bc55-3fb2a767e153%2Fhome.png?v=1590223564111', 
          label: 'Home'
        },
        {
          icon: 'https://cdn.glitch.com/6a47dbff-a645-429e-bc55-3fb2a767e153%2Fhome.png?v=1590223564111', 
          label: 'Home'
        },
        {
          icon: 'https://cdn.glitch.com/6a47dbff-a645-429e-bc55-3fb2a767e153%2Fhome.png?v=1590223564111', 
          label: 'Home'
        },
      ];
    return (
      <div className="App">
        // {icons.map(x=>{
        //   <TabMenu title={x.icon} image={x.label}/>
        // })};
        {icons.map(x => (
        <TabMenu title={x.icon} image={x.label}/>
      ))}
        
      </div>
    );
  }
}

export default App;
