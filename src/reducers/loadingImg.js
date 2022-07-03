const loadingImgReducer = (state = false, action) => {
    switch(action.type){
        case "setLoadImg":
            return !state;
        default:
            return state;
    }
}

export default loadingImgReducer