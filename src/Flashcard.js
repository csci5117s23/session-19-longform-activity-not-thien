import React, { useState } from 'react'

export default function Flashcard({ flashcard }) { // simplifies unpacking of properties by doing it in signature
    const front = flashcard.front;
    const back = flashcard.back;
    const [flipped, setFlipped] = useState(false);

  return (
    <div 
        className={`card ${flipped ? 'flipped' : ''}`} // backticks, dynamically set CSS using JS syntax
        onClick={() => setFlipped(!flipped)}
    >
        {flipped ? back : front}
    </div>
  )
}
