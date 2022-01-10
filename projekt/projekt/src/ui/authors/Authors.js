import React, { useEffect, useState } from 'react';
import actions from '../../state/ducks/authors/actions';
import selectors from '../../state/ducks/authors/selectors';
import avatar from '../img/avatar.jpg';
import Adder from './Adder';
import Author from './Author';
import Editor from './Editor';
import { connect } from "react-redux";


const Authors = ({authors, sendFilters}) => {
    const [popupAutAdder, setPopupAutAdder] = useState(false)
    const [autEdit, setAutEdit] = useState({id: 1, name: '', username: '', email: ''})
    const [popupAutEditor, setPopupAutEditor] = useState(false);
    const [filters, setFilters] = useState({text: '', sortBy: 'id'})

    
    useEffect(() => {
        sendFilters(filters);
    }, [filters, sendFilters])

    const handleSortChange = (e) => {
        setFilters(filters => ({...filters, sortBy: e.target.value}));
    }

    const handleTextChange = (e) => {
        setFilters(filters => ({...filters, text: e.target.value}));
    }



    return (
        <div className='autContent'>
            <div className='authors'>
            {authors && authors.map(author => <Author author={author} setAutEdit={setAutEdit} autEdit={autEdit} setPopupAutEditor={setPopupAutEditor} popupAutEditor={popupAutEditor} />)}
            <div onClick={() => {setPopupAutAdder(true)}} className='aut' id='aut_add'>
              <img src={avatar} className='avatar'></img>
              <h1 className='aut_butt'>+</h1>
            </div>
            <Adder popupAutAdder={popupAutAdder} setPopupAutAdder={setPopupAutAdder}/>
            <Editor autEdit={autEdit} setPopupAutEditor={setPopupAutEditor} popupAutEditor={popupAutEditor}/>
            <div className='authorFilter'>
                <label>Sort by:  </label>
                <select name='sort' onChange={(e) => {handleSortChange(e)}}>
                    <option value="id">id</option>
                    <option value="desc">alph DESC</option>
                    <option value="asc">alph ASC</option>
                </select>
            </div>
            <div className='authorSearch'>
                <label>Search by name:  </label>
                <input onChange={(e) => {handleTextChange(e)}} type='text' />
            </div>
        </div>
        </div>
        
    )
};
 
const mapStateToProps = (state) => {
    return {
      authors: selectors.filteredAuthors(state)
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      sendFilters: (x) => {
        dispatch(actions.sendFilters(x))
      }
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Authors);