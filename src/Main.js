import React from 'react'
import memesData from './memesData'

function Main() {

  let url
  function getMemeImg () {
    const memeArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memeArray.length)
    url = memeArray[randomNumber].url;
  }
  return (
    <main className='main'>
      <form className='form'>
        <div className='inputs'>
          <input className='input' type='text' value='Shut up' />
          <input className='input' type='text' value='and take my money' />
        </div>
        <button onClick={getMemeImg ()} className='btn'>Get a new meme image  🖼</button>
      </form>

      <img src={url} alt='memes'/>
    </main>
  )
}

export default Main