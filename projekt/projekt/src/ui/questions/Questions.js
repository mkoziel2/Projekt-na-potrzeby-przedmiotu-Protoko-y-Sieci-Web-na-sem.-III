import React, { useState, useEffect } from 'react';
import QuestInfo from './QuestInfo';
import Editor from './Editor';
import Adder from './Adder';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import authorsSelectors from "../../state/ducks/authors/selectors";
import { connect } from "react-redux";
import selectors from "../../state/ducks/questions/selectors";
import actions from '../../state/ducks/questions/actions';
import operations from '../../state/ducks/questions/operations';

const Questions = ({questions, authors, sendFilters, deleteQuestion}) => {
    const [quest, setQuest] = useState({category: '', question: '', correct_answer: '', incorrect_answers: ['','',''], difficulty: '', author: ''})
    const [popup, setPopup] = useState(false);
    const [editQuest, setEditQuest] = useState({category: '', question: '', correct_answer: '', incorrect_answers: ['','',''], difficulty: '', author: ''})
    const [popupEditor, setPopupEditor] = useState(false);
    const [popupAdder, setPopupAdder] = useState(false);
    const [filters, setFilters] = useState({text: '', sortBy: 'id', diff: 'all'})

    useEffect(() => {
        sendFilters(filters);
    }, [filters, sendFilters])

    const handleSortChange = (e) => {
        setFilters(filters => ({...filters, sortBy: e.target.value}));
    }

    const handleTextChange = (e) => {
        setFilters(filters => ({...filters, text: e.target.value}));
    }

    const handleDiffChange = (e) => {
        setFilters(filters => ({...filters, diff: e.target.value}));
    }

    return (
        <div className='questionsContent'>
            <div className='questions'>
            <div onClick={() => {setPopupAdder(true)}} className='addb'>
                +
            </div>
            {questions && questions.map(question => <div key={question.id} className='que'><div className='idQue'>{question.id}</div><div onClick={() => {setQuest(question); setPopup(true)}} className='queQue' style={question.question.length > 127 ? {fontSize: '16px'} : {fontSize: '20px'}}>{question.question}</div><div className='editor' onClick={() => {setEditQuest(question); setPopupEditor(true)}}><EditIcon/></div><div onClick={() => {deleteQuestion(question.id)}} className='deleter'><DeleteIcon/></div></div>)}
            <QuestInfo  question={quest} setPopup={setPopup} popup={popup}/>
            <Editor authors={authors} question={editQuest} setPopupEditor={setPopupEditor} popupEditor={popupEditor} />
            <Adder authors={authors} setPopupAdder={setPopupAdder} popupAdder={popupAdder} />
            <div className='questionsSort'>
                <label>Sort by:  </label>
                <select onChange={(e) => {handleSortChange(e)}} name='sort'>
                    <option value="id">id</option>
                    <option value="desc">alph DESC</option>
                    <option value="asc">alph ASC</option>
                    <option value="diff">difficulty</option>
                </select>
            </div>
            <div className='questionsDiff'>
                <label>Difficulty:  </label>
                <select onChange={(e) => {handleDiffChange(e)}} name='diff'>
                    <option value="all">All</option>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
            </div>
            <div className='questionsSearch'>
                <label>Search by question:  </label>
                <input onChange={(e) => {handleTextChange(e)}} type='text' />
            </div>
        </div>
        </div>
    )
};
 
const mapStateToProps = (state) => {
    return {
      questions: selectors.filteredQuestions(state),
      authors: authorsSelectors.allAuthors(state)
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
        sendFilters: (x) => {
            dispatch(actions.sendFilters(x))
          },
        deleteQuestion: (id) => {
        dispatch(operations.deleteQuestion(id))
        }
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Questions);

