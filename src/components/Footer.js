import React from 'react'

const Footer = ({ length }) => {
  const today = new Date();

  return (
    <footer>
      {/* <h2>{length} books left to read</h2> */}

      <h2>{length} {length === 1 ? 'book left to read' : 'books left to read' } </h2>
  
      <p 
        className="copyright"
        style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: '0px',
        paddingTop: '40px'
      }}>
        Made by Carmen Chow 
        {today.getFullYear()}
      </p>
    </footer>
  )
}

export default Footer