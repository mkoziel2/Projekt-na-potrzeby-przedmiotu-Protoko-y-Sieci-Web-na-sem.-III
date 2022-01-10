import React from 'react';
import { Formik, Form, Field } from 'formik';
import Button from '@material-ui/core/Button';
import { connect } from "react-redux";
import operations from '../../state/ducks/questions/operations'

const Adder = ({setPopupAdder, popupAdder, authors, postQuestion}) => {
    
    return (
    <div style={popupAdder ? {display: 'flex'} : {display: 'none'}} className='backEditor'>
        <Formik
            initialValues={{category: '', question: '', correct_answer: '', incorrect_answer0: '', incorrect_answer1: '', incorrect_answer2: '', difficulty: '', author: ''}}
            onSubmit={(values, { resetForm }) => {
                console.log(values);
                setPopupAdder(false)
                resetForm({});
                let aut = authors.reduce((a,b) => {
                    if (b.name === values.author) {
                        return [...a, b.id]
                    } else {
                        return a
                    }
                },[])[0]
                let obj = {...values, incorrect_answers: [values.incorrect_answer0, values.incorrect_answer1, values.incorrect_answer2], authorId: aut}

                postQuestion(obj);
            }}
            onResetting={({ resetForm }) => {
                resetForm({});
            }}
            enableReinitialize={true}
            >
            {({ errors, touched }) => (
                <Form>
                    <div className='editorInfo'>
                        <div className='clsr' onClick={() => {setPopupAdder(false)}}>X</div>
                        <div className='cat'>
                            Category: <Field type="text" name="category" />
                            {errors.text && touched.text && <div style={{color: 'red'}}>{errors.text}</div>}
                        </div>
                        <div className='title'>
                            Question: <Field type="text" name="question" />
                            {errors.text && touched.text && <div style={{color: 'red'}}>{errors.text}</div>}
                        </div>
                        <div className='answers'>
                            <div className='corr'>
                                <Field className='Inp' type="text" name="correct_answer" />
                                {errors.text && touched.text && <div style={{color: 'red'}}>{errors.text}</div>}
                            </div>
                            <div className='bad1'>
                                <Field className='Inp' type="text" name="incorrect_answer0" />
                                {errors.text && touched.text && <div style={{color: 'red'}}>{errors.text}</div>}
                            </div>
                            <div className='bad2'>
                                <Field className='Inp' type="text" name="incorrect_answer1" />
                                {errors.text && touched.text && <div style={{color: 'red'}}>{errors.text}</div>}
                            </div>
                            <div className='bad3'>
                                <Field className='Inp' type="text" name="incorrect_answer2" />
                                {errors.text && touched.text && <div style={{color: 'red'}}>{errors.text}</div>}
                            </div>
                        </div>
                        <div className='diff'>
                            Difficulty: 
                            <Field as="select" name="difficulty">
                                <option value="easy">easy</option>
                                <option value="medium">medium</option>
                                <option value="hard">hard</option>
                            </Field>
                            {errors.text && touched.text && <div style={{color: 'red'}}>{errors.text}</div>}
                        </div>
                        <div className='author'>
                            Author: 
                            <Field as="select" name="author">
                                {authors.map(author => <option value={author.name}>{author.name}</option>)}
                            </Field>
                            {errors.text && touched.text && <div style={{color: 'red'}}>{errors.text}</div>}
                        </div>
                        <Button variant="contained" color="gray" className='przy' type="submit">
                            Add
                        </Button>
                    </div>
                </Form>
            )}
        </Formik>
    </div>
    )
};
 
const mapStateToProps = (state) => {
    return {
      
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      postQuestion: (body) => {
        dispatch(operations.postQuestion(body))
      }
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Adder);