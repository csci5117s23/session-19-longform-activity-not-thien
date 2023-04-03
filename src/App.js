import React, { Fragment } from 'react';
import FlashcardList from './FlashcardList';
import './app.css';
import umnLogo from './umnLogo.png';

// use id: `${index}-${Date.now()}` to create unique identifiers between iterations/page reloads
function App() {
  const QUESTIONS = [{id: 0, front: "question1 alsdkjfhoq vwihepo wqivenhpq iwvunehp orqwniv eyrpoq ivwuey rqovwu yier", back:"answer1"},
                    {id: 1, front: "question2", back:"answer2"},
                    {id: 2, front: "question3", back:"answer3"},];
  
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <Fragment>
      <div className='header'>
        <img src={umnLogo} className='logo' alt='UMN Logo' />
        <h1>Thien's Elite UMN Flashcards</h1>
      </div>
      <div className='container'>
        <FlashcardList flashcards={QUESTIONS} />
      </div>
    </Fragment>
  );
}

export default App;
