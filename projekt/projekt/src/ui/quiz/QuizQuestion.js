import React, { useState, useEffect } from 'react';

const QuizQuestion = ({q, i, setAns, ans}) => {
    const [answers, setAnswers] = useState([q.correct_answer, ...q.incorrect_answers])
    const randomAns = (list) => {
        list = list.sort(() => Math.random() - 0.5)
        return list
    }

    const updateState = (a) => {
        let tmp = ans;
        tmp[i] = a;
        setAns(tmp)
    }

    const handleAnswer = (x) => {
        let el = document.getElementsByClassName(`a${i}${x}`);
        el[0].style.backgroundColor = 'rgb(120, 120, 120)';
    }

    const [checked, setChecked] = useState(false)
    useEffect(() => {setAnswers(randomAns([q.correct_answer, ...q.incorrect_answers]))}, [q])
    
    return (
        <div className='quizQue' id={`q${i}`}>
            <h1 className='quizTitle'>{i + 1}. {q.question}</h1>
            <div className='quizQueAnswers'>
                {answers.map((an, ind) => <div key={ind} className={`quizQueAnswer a${i}${ind}`} onClick={() => {updateState(an); setChecked(true); handleAnswer(ind)}}>{an}</div>)}
            </div>
            <div className='quizHidder' id={`h${i}`} style={checked ? {display: 'block'} : {display: 'none'}}>

            </div>
        </div>
    )
}
        
  
export default QuizQuestion;
 


