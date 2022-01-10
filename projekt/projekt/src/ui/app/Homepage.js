import React, { useState } from 'react';
import authors_checked from '../img/authors_checked.png'
import questions_checked from '../img/questions_checked.png'
import quiz_checked from '../img/guiz_checked.png'

const Homepage = () => {
    
    return (
        <div className='homepage'>
            <div className='naglowek'>
                <h1>Witaj w Quiz App!</h1>
            </div>
            <div className='homeContent'>
                <h1>O aplikacji</h1>
                <div>
                    W aplikacji Quiz App znajdziesz bazę pytań quizowych oraz ich autorów.
                    Aplikacja zapewnia możliwość edycji pytań oraz ich autorów.
                    Możliwe jest również usunięcie konkretnych pytań oraz autorów.
                    Dodatkowo w aplikacji możesz sprawdzić swoją wiedzę, grając w quiz.
                </div>
                <h1>Nawigacja:</h1>
                <div>
                    <h2>Naciśnij "Autorzy", aby przejść do autorów.</h2>
                    <img className='homeimg' src={authors_checked}></img>
                    <h2>Naciśnij "Pytania", aby przejść do pytań.</h2>
                    <img className='homeimg' src={questions_checked}></img>
                    <h2>Naciśnij "Zagraj w quiz", aby zagrać w quiz.</h2>
                    <img className='homeimg' src={quiz_checked}></img>
                </div>
            </div>

        </div>
    )
};
 
export default Homepage;

