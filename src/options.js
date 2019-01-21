import React, { Component } from 'react';

class Options extends Component {
  render() {
    return (
      <div style={optionStyle}>
        <button onClick={this.props.deleteSelected} style={{ display: 'inline-block', marginRight: '50px' }}>Delete Selected</button>
        <button onClick={this.props.deleteAll} style={{ display: 'inline-block' }}>Delete All</button>
      </div>
    )
  }
}

const optionStyle = {
  background: '#f4f4f4',
  height: '50px',
  paddingTop: '13px',
  paddingLeft: '10px',
  borderLeft: 'solid #ccc 1px',
  borderRight: 'solid #ccc 1px'
}

export default Options;
