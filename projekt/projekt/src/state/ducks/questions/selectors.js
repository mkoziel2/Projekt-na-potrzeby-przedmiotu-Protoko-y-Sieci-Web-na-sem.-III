const allQuestions = (state) => {
  return state.entities.questions.allIds.map(id => state.entities.questions.byId[id]);
};

const questionsWithAuthors = (state) => {
  let x = {};
  x = {...x, ...state.entities.questions.byId}
  let tmp = state.entities.questions.allIds.map(id => {return {...x[id]}});

  tmp.forEach(p => {
    if (state.entities.authors.byId[p.authorId] === undefined) {
      p.author = 'Anonymous'
    } else {
      p.author = state.entities.authors.byId[p.authorId].name;
    }
      
  });
  return tmp
}



const filteredQuestions = (state) => {
  let x = {};
  x = {...x, ...state.entities.questions.byId}
  let tmp = state.entities.questions.allIds.map(id => {return {...x[id]}});

  tmp.forEach(p => {
    if (state.entities.authors.byId[p.authorId] === undefined) {
      p.author = 'Anonymous'
    } else {
      p.author = state.entities.authors.byId[p.authorId].name;
    }
  });
    tmp = tmp.reduce((a,b) => {
      if (b.question.includes(state.questionsFilter.text)) {
        return [...a, b]
      } else {
        return a
      }
    },[])
    
    if (state.questionsFilter.sortBy === 'id') {
      tmp = tmp.sort(compareById)
    } else if (state.questionsFilter.sortBy === 'asc') {
      tmp = tmp.sort(compareByQue)
    } else if (state.questionsFilter.sortBy === 'desc') {
      tmp = tmp.sort(compareByQueDesc)
    } else if (state.questionsFilter.sortBy === 'diff') {
      tmp = tmp.sort(compareByDiff)
    }
   
    if (state.questionsFilter.diff !== 'all') {
      tmp = tmp.filter(x => x.difficulty === state.questionsFilter.diff)
    }
  

  return tmp;
};

const compareById = (a, b)  => {
  if ( a.id < b.id ){
    return -1;
  }
  if ( a.id > b.id ){
    return 1;
  }
  
  return 0;
}

const compareByQue = (a, b)  => {
  if ( a.question < b.question ){
    return -1;
  }
  if ( a.question > b.question ){
    return 1;
  }
  
  return 0;
}

const compareByQueDesc = (a, b)  => {
  if ( a.question < b.question ){
    return 1;
  }
  if ( a.question > b.question ){
    return -1;
  }
  
  return 0;
}

const compareByDiff = (a, b)  => {
  let tmp = {
    'easy': 1,
    'medium': 2,
    'hard': 3

  }
  if ( tmp[a.difficulty] < tmp[b.difficulty] ){
    return 1;
  }
  if ( tmp[a.difficulty] > tmp[b.difficulty] ){
    return -1;
  }
  
  return 0;
}

const selectors = { allQuestions, questionsWithAuthors, filteredQuestions };

export default selectors;