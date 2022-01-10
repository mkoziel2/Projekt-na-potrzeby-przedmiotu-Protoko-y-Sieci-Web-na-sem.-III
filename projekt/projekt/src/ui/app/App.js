import React, { useEffect } from 'react';
import { connect } from "react-redux";
import operations from "../../state/ducks/questions/operations";
import authorsOperations from "../../state/ducks/authors/operations";
import './App.css';
import logo from '../img/logo.png';
import Authors from '../authors/Authors'
import Questions from '../questions/Questions'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Homepage from './Homepage';
import Quiz from '../quiz/Quiz'

const App = ({fetchQuestions, fetchAuthors}) => {
    
  useEffect(() => {
    fetchAuthors();
    fetchQuestions();
    }, [fetchAuthors, fetchQuestions]);

    return (
      <Router>
        <div className='App'>
            <div className='navi' >
              <Link to='/'><img className='logo' src={logo} alt='qmark'></img></Link>
              <div className='menu'>
                <div className='m' id='m1'>
                <Link style={{textDecoration: 'none', color: 'black'}} to='/' className='ax'>Strona główna</Link>
                </div>
                <div className='m' id='m2'>
                  <Link style={{textDecoration: 'none', color: 'black'}} to='/authors' className='ax'>Autorzy</Link>
                </div>
                <div className='m' id='m3'>
                  <Link style={{textDecoration: 'none', color: 'black'}} to='/questions' className='ax'>Pytania</Link>
                </div>
                <div className='m' id='m4'>
                  <Link style={{textDecoration: 'none', color: 'black'}} to='/quiz' className='ax'>Zagraj w quiz</Link>
                </div>
              </div>
          </div>
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route path='/questions'>
              <Questions />
            </Route>
            <Route path='/authors'>
              <Authors/>
            </Route>
            <Route path='/quiz'>
              <Quiz />
            </Route>
          </Switch>
        </div>
      </Router>  
    );
}

const mapStateToProps = (state) => {
  return {
    
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchQuestions: () => {
      dispatch(operations.getQuestions())
    },
    fetchAuthors: () => {
      dispatch(authorsOperations.getAuthors())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
