import React from 'react'

const Header = (prop) => {
  return (
    <header>
      <h1 
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          {prop.title}
      </h1>
    </header>
  )
}

export default Header