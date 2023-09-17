import React from 'react';
import { useState } from 'react';
import './App.css';

function App() {
  const [ans,Setans]=useState(Math.ceil(Math.random()*100+1));
  const [guess,Setguess]=useState(null);
  const [suggest,Setsuggest]=useState('');
  const [neew,Setneew]=useState('');
  function Check(event)
  {
    event.preventDefault();
    Setneew('');
    if(guess===ans)
    {
      Setsuggest("Congratulations You Guess it Right Guess the new number");
      Setans(Math.ceil(Math.random()*100 +1));
      Setneew("Guess the new number");
    }
    else if(guess>ans)
    {
      Setsuggest("Your guess is Larger than answer");
    }
    else
    {
      Setsuggest("Your guess is Smaller than the answer");
    }
  }
  return (
    <div className="App">
    <form onSubmit={Check}>
      <h2>Guess the number between 1-100</h2>
      <input
        type="number"
        value={guess}
        className='Input'
        onChange={event=>Setguess(parseInt(event.target.value))}
      />
      <br/>
      <button type='submit' className='button'>Guess</button>
    </form> 
    <h3>{suggest}</h3> 
    <h3>{neew}</h3>
    </div>
  );
}

export default App;
