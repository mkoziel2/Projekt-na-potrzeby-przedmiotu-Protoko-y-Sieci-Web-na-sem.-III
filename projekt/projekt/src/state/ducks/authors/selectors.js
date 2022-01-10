const compareById = (a, b)  => {
  if ( a.id < b.id ){
    return -1;
  }
  if ( a.id > b.id ){
    return 1;
  }
  
  return 0;
}

const compareByName = (a, b)  => {
  if ( a.name < b.name ){
    return -1;
  }
  if ( a.name > b.name ){
    return 1;
  }
  
  return 0;
}

const compareByNameDesc = (a, b)  => {
  if ( a.name < b.name ){
    return 1;
  }
  if ( a.name > b.name ){
    return -1;
  }
  
  return 0;
}


const allAuthors = (state) => {
  return state.entities.authors.allIds.map(id => state.entities.authors.byId[id]);
}

const filteredAuthors = (state) => {
    let tmp = [...state.entities.authors.allIds.map(id => state.entities.authors.byId[id])];
    
      tmp = tmp.reduce((a,b) => {
        if (b.name.includes(state.authorsFilter.text)) {
          return [...a, b]
        } else {
          return a
        }
      },[])
      
      if (state.authorsFilter.sortBy === 'id') {
        tmp = tmp.sort(compareById)
      } else if (state.authorsFilter.sortBy === 'asc') {
        tmp = tmp.sort(compareByName)
      } else if (state.authorsFilter.sortBy === 'desc') {
        tmp = tmp.sort(compareByNameDesc)
      }
    
    

    return tmp;
  };
  
  
  const selectors = { allAuthors, filteredAuthors };
  
  export default selectors;