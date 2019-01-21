import React from 'react';

function Header() {
  return (
    <header style={headerStyle}>
      <h1 style={{ fontFamily: 'arial', letterSpacing: '2px', marginTop: '8px' }}>Todo List</h1>
    </header>
  )
}

const headerStyle = {
  background: '#333',
  height: '70px',
  color: '#fff',
  textAlign: 'center',
  padding: '10px'
}

export default Header;
