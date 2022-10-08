const usersReducers = (states = [],action) =>{
    switch (action.type) {
        case "FETCH_USER":
            return action.payload;
        case 'UPDATE_CURRENT_USER':
            return states.map(state => state._id === action.payload._id ? action.payload : state);
        default:
            return states;
    }
}

//states array incude all the users information...

export default usersReducers;