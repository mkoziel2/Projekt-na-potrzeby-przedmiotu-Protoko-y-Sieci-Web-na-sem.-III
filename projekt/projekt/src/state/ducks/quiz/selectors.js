const quizQuestions = (state) => {
    let x = {};
    let cat;
    if (state.quizProps.categories) {
        cat = [...state.quizProps.categories]
    } else {
        cat = []
    }
    
    x = {...x, ...state.entities.questions.byId}
    let tmp = state.entities.questions.allIds.map(id => {return {...x[id]}});
    let arr = [...tmp]

    if (state.quizProps.difficulty !== 'all') {
        tmp = tmp.filter(d => d.difficulty === state.quizProps.difficulty)
    }

    if (cat.length > 0) {
        tmp = tmp.filter(q => cat.includes(q.category))
    }

    let count = 5
    
    let tmp2 = []
    if (tmp.length < 5) {
        tmp = arr
    }
    while (tmp2.length !== 5) {
      let r = Math.floor(Math.random() * (tmp.length))
      if (!tmp2.includes(tmp[r])) {
        tmp2 = [...tmp2, tmp[r]]
      }
    }
    console.log(tmp2)
    return tmp2
  }

const selectors = { quizQuestions };

export default selectors;