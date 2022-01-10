import React from 'react';


const QuestInfo = ({question, setPopup, popup}) => {
    
    return (
    <div style={popup ? {display: 'flex'} : {display: 'none'}} className='backQuest'>
        <div className='questInfo'>
            <div className='clsr' onClick={() => {setPopup(false)}}>X</div>
            <h1 className='cat'>Category: {question.category}</h1>
            <h1 style={question.question.length > 36 ? {fontSize: '14px'} : {fontSize: '16px'}} className='title'>{question.question}</h1>
            <div className='answers'>
                <div style={question.correct_answer.length > 22 ? {fontSize: '12px'} : {fontSize: '14px'}} className='corr'>
                    {question.correct_answer}
                </div>
                <div style={question.incorrect_answers[0].length > 22 ? {fontSize: '12px'} : {fontSize: '14px'}} className='bad1'>
                    {question.incorrect_answers[0]}
                </div>
                <div style={question.incorrect_answers[1].length > 22 ? {fontSize: '12px'} : {fontSize: '14px'}} className='bad2'>
                    {question.incorrect_answers[1]}
                </div>
                <div style={question.incorrect_answers[2].length > 22 ? {fontSize: '12px'} : {fontSize: '14px'}} className='bad3'>
                    {question.incorrect_answers[2]}
                </div>
            </div>
            <h1 className='diff'>Difficulty: {question.difficulty}</h1>
            <h1 className='author'>Author: {question.author}</h1>
        </div>
    </div>
    )
};
 
export default QuestInfo;