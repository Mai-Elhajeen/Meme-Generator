import React from 'react'

function Header() {
  return (
    <header className='header'>
      <div className='left-side'>
        <img src='./img/Trollface_non-free.png' />
        <h1>Meme Generator</h1>
      </div>

      <div className='right-side'>
        <p>React Course - Project 8</p>
      </div>
    </header>
  )
}

export default Header