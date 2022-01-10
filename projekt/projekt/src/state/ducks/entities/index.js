const allEntities = [
    'questions',
    'authors'
];

const defaultState = allEntities.reduce(
    (acc, entity) => ({
    ...acc,
    [entity]: {
        byId: {},
        allIds: [],
    }
    }),
    {}
);

// Reducer compositions, delegate
const entityReducer = (entity, state = {allIds: [], byId: {}}, action) => {

const actionEntities = action.payload[entity];
const {actionType} = action.meta;

switch (actionType) {
    case 'GET_ALL':
        return {
            byId: {
            ...Object.keys(actionEntities).reduce(
                (acc, id) => ({
                    ...acc,
                    [id]: {
                    ...state.byId[id],
                    ...actionEntities[id]
                    }
                }),
                {}
            )
            },
            allIds: Object.keys(actionEntities).reduce(
                (allIds, id) => [...allIds, id],
                []
            )
        };
    case 'GET_ONE':
        return {
            byId: {
            ...state.byId,
            ...Object.keys(actionEntities).reduce(
                (acc, id) => ({
                    ...acc,
                    [id]: {
                    ...state.byId[id],
                    ...actionEntities[id]
                    }
                }),
                {}
            )
            },
            allIds: Object.keys(actionEntities).reduce(
                (allIds, id) => (allIds.includes(id) ? allIds : [...allIds, id]),
                state.allIds
            )
        };
    case 'ADD_ONE':
        return {
            byId: {
                ...state.byId,
                ...Object.keys(actionEntities).reduce((a, b) => {
                    return {...a, [b]: actionEntities[b]}
                },{})
            },
            allIds: [...state.allIds, ...Object.keys(actionEntities)]
        }

    case 'DELETE_ONE':
        return {
            byId: {
                ...Object.keys(state.byId).reduce((a, b) => {
                    if (b !== Object.keys(actionEntities)[0]) {
                        return {...a, [b]: state.byId[b]}
                    } else {
                        return a
                    }
                },{})
            },
            allIds: state.allIds.reduce((a, b) => {
                if (b !== Object.keys(actionEntities)[0]) {
                    return [...a, b]
                } else {
                    return a
                }
            },[])
        }
    case 'PUT_ONE':
        return {
            byId: {
                ...Object.keys(state.byId).reduce((a, b) => {
                    if (b === Object.keys(actionEntities)[0]) {
                        return {...a, [b]: actionEntities[b]}
                    } 
                    return {...a, [b]: state.byId[b]}
                    
                },{})
            },
            allIds: state.allIds
        }
    default :
    console.log("Warning: Unsupported operation!");
}
};

const entities = (state = defaultState, action) => {
if (!action.meta || !action.meta.actionType) return state;

return {
    ...state,
    ...Object.keys(action.payload).reduce(
        (acc, entity) => ({
        ...acc,
        [entity]: entityReducer(entity, state[entity], action)
        }),
        {}
    )
};
};

const entitiesReducers = {entities};

export default entitiesReducers;
