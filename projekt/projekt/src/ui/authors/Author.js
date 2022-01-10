import React from 'react';
import avatar from '../img/avatar.jpg'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { connect } from "react-redux";
import operations from '../../state/ducks/authors/operations';

const Author = ({author, setPopupAutEditor, setAutEdit, deleteAuthor}) => {
    
    return (
        <div key={author.id} className='aut'>
            <img src={avatar} className='avatar'></img>
            <div className='authorInfo'>
                <div className='authorId'>
                    <b>Id:</b> {author.id}
                </div>
                <div className='authorName'>
                    <b>Name:</b> {author.name}
                </div>
                <div className='authorUsername'>
                    <b>Username:</b> {author.username}
                </div>
                <div className='authorEmail'>
                    <b>Email:</b> {author.email}
                </div>
            </div>
            <div className='editAuthor' onClick={() => {setAutEdit(author); setPopupAutEditor(true)}}>
                <EditIcon/>
            </div>
            <div onClick={() => {deleteAuthor(author.id)}} className='deleteAuthor'>
                <DeleteIcon/>
            </div>
        </div>
    )
};
 
const mapStateToProps = (state) => {
    return {
      
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      deleteAuthor: (id) => {
        dispatch(operations.deleteAuthor(id))
      }
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Author);