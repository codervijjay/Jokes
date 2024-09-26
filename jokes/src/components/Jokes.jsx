import React, { useState } from 'react'
import laugh from '../assets/laugh.png'
import axios from 'axios'
export const Jokes = () => {

  const [joke, setJokes] = useState('');
  const [error, setError] = useState('');

  const generateJokes = async () =>{
    try {
      const fetchJokes = await axios.get('https://v2.jokeapi.dev/joke/Any');
      setJokes(fetchJokes.data.delivery);
      console.log(fetchJokes);
      
    } catch (error) {
      setError(`we could't find somethings`)
      console.log(error);
      
    }
  }

  return (
    <div className='container'>
      <div>
        <h1 className='heading_topic'>Jokes Generator</h1>
        <img src={laugh} className='image_laugh' />
      </div>
      <div>
        <p className='p_jokes'>{joke}</p>
        <button className='jokes_btn' onClick={generateJokes}>Generate</button>
      </div>
    </div>
  )
}
