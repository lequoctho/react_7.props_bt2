import React, {Component} from 'react';

import '../style/TabMenu.css'

class TabMenu extends Component {
    render() {
        return <div class="menu">
                <img src={this.props.image}/>
                <p class="text">{this.props.title}</p>
              </div>;
    }
}

export default TabMenu;