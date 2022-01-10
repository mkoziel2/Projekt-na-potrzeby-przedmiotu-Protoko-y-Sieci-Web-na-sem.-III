import React, { useState } from 'react';
import selectors from "../../state/ducks/categories/selectors";
import { connect } from "react-redux";
import Button from '@material-ui/core/Button';
import quizSelectors from "../../state/ducks/quiz/selectors";
import QuizQuestion from './QuizQuestion';
import actions from "../../state/ducks/quiz/actions";
import { Link } from "react-router-dom";

const Quiz = ({questions, categories, sendProps}) => {
    const [started, setStarted] = useState(false)
    const [cat, setCat] = useState([])
    const [diff, setDiff] = useState('all')
    const [ans, setAns] = useState([0,0,0,0,0])
    const [finished, setFinished] = useState(false)
    const [points, setPoints] = useState(0)

    const handleAddCat = (x) => {
        let tmp = cat
        if (tmp.includes(x)) {
            tmp = tmp.reduce((a, b) => {
                if (b !== x) {
                    return [...a, b]
                } else {
                    return a
                }
            },[])
        } else {
            tmp = [...tmp, x]
        }
        setCat(tmp)
    }

    const handleStart = () => {
        if (started === false) {
            sendProps({difficulty: diff, categories: cat})
        }
        setTimeout(() => setStarted(!started), 300)
    }

    const countPoints = () => {
        for (let i = 0; i<5; i++) {
            if (questions[i].correct_answer === ans[i]) {
                console.log(questions[i].correct_answer === ans[i], questions[i].correct_answer, ans[i], points)
                setPoints(points => points + 1)
            }
        }
    }


    return (
        <div className='quizBcg'>
            <div className='quizLobby' style={started ? {display: 'none'} : {display: 'flex'}}>
                <h1>Aby rozpocząć quiz wybierz poziom trudności oraz kategorie i następnie wsciśnij przycisk</h1>
                <div className='quizProperties'>
                    <div className='diffChoose'>
                        <select onChange={(e) => {setDiff(e.target.value)}} name='diff'>
                            <option value="all">All</option>
                            <option value="easy">Easy</option>
                            <option value="medium">Medium</option>
                            <option value="hard">Hard</option>
                        </select>
                    </div>
                    <div className='catChoose'>
                        {categories.length && categories.map(c => <div><input type="checkbox" id={c} name={c} value={c} onClick={() => {handleAddCat(c)}} /><label>{c}</label></div>)}
                    </div>
                </div>
                <Button onClick={() => {handleStart()}} variant="contained" color='primary'> 
                  START
                </Button>
            </div>
            <div className='quizQuiz' style={started ? {display: 'flex'} : {display: 'none'}}>
                {questions.length && questions.map((q, i) => <QuizQuestion key={i} setAns={setAns} ans={ans} q={q} i={i} />)}
                <Button className='finishQuiz' onClick={() => {setFinished(true); countPoints()}} variant="contained" color='primary'> 
                  FINISH
                </Button>
                <div style={finished ? {display: 'flex'} : {display: 'none'}} className='finishResults'>
                    <div className='contentResults'>
                        <h1>Your points:</h1>
                        <h2>Q1: {questions[0].correct_answer === ans[0] ? '✔️' : '❌'}</h2>
                        <h2>Q2: {questions[1].correct_answer === ans[1] ? '✔️' : '❌'}</h2>
                        <h2>Q3: {questions[2].correct_answer === ans[2] ? '✔️' : '❌'}</h2>
                        <h2>Q4: {questions[3].correct_answer === ans[3] ? '✔️' : '❌'}</h2>
                        <h2>Q5: {questions[4].correct_answer === ans[4] ? '✔️' : '❌'}</h2>
                        <h2>{points}/5</h2>
                        <Link style={{textDecoration: 'none'}} to='/'>
                            <Button onClick={() => {handleStart(); setFinished(false); setPoints(0)}} variant="contained" color='primary'>
                                KONIEC
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
      categories: selectors.allCategories(state),
      questions: quizSelectors.quizQuestions(state)
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
        sendProps: (x) => {
            dispatch(actions.sendProps(x))
            }
    }
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
 


