import React from 'react';
import { Formik, Form, Field } from 'formik';
import Button from '@material-ui/core/Button';
import avatar from '../img/avatar.jpg';
import operations from '../../state/ducks/authors/operations';
import { connect } from "react-redux";

const Adder = ({setPopupAutAdder, popupAutAdder, postAuthor}) => {
    const handleAdd = (obj) => {
        postAuthor(obj)
    }
    return (
    <div style={popupAutAdder ? {display: 'flex'} : {display: 'none'}} className='backAutAdder'>
        <Formik
            initialValues={{name: '', username: '', email: ''}}
            onSubmit={(values, { resetForm }) => {
                console.log(values);
                setPopupAutAdder(false);
                handleAdd(values);
                resetForm({});
            }}
            onResetting={({ resetForm }) => {
                resetForm({});
            }}
            enableReinitialize={true}
            >
            {({ errors, touched }) => (
                <Form>
                    <div className='autAddInfo'>
                        <img className='avatarAdd' src={avatar} alt='avtr'></img>
                        <div className='closeAut' onClick={() => {setPopupAutAdder(false)}}>X</div>
                        <div className='contentAutAdd'>
                            <div className='autName'>
                                Name: <Field type="text" name="name" />
                                {errors.text && touched.text && <div style={{color: 'red'}}>{errors.text}</div>}
                            </div>
                            <div className='autUsername'>
                                Username: <Field type="text" name="username" />
                                {errors.text && touched.text && <div style={{color: 'red'}}>{errors.text}</div>}
                            </div>
                            <div className='autEmail'>
                                Email: <Field type="email" name="email" />
                                {errors.text && touched.text && <div style={{color: 'red'}}>{errors.text}</div>}
                            </div>
                            <div className='addAutButt'>
                                <Button variant="contained" className='autAddButt' type="submit">
                                    Add
                                </Button>
                            </div>
                            
                        </div>   
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
      postAuthor: (body) => {
        dispatch(operations.postAuthor(body))
      }
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Adder);