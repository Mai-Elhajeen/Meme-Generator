import React from 'react'

function Main() {
  return (
    <main className='main'>
      <form className='form'>
        <div className='inputs'>
          <input className='input' type='text' value='Shut up' />
          <input className='input' type='text' value='and take my money' />
        </div>
        <button className='btn'>Get a new meme image  🖼</button>
      </form>

      <img src='./img/memeimg.png' alt='memes'/>
    </main>
  )
}

export default Main