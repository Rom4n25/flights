const cityReducer = (state = "", action ) => {
    switch(action.type){
        case "setCity":
            return action.data;
        default: 
            return state;
    }
}

export default cityReducer