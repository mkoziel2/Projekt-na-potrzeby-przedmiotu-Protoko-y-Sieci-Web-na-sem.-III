const allCategories = (state) => {
    let x = {}
    x = {...x, ...state.entities.questions.byId}
    let tmp = state.entities.questions.allIds.map(id => x[id].category);
    tmp = [...new Set(tmp)]
    return tmp
}
  
const selectors = { allCategories };

export default selectors;