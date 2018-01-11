import {
    ACTION_TYPE,
    RESTAURANTS,
    RESINFO,
    BACKCLICKED,
    DATA_LOADING
} from "./actions";

export default function reducers(state, action) {
    let modifiedState = Object.assign({}, state);


    switch(action.type) {
        case RESTAURANTS:
            console.log(action.data.businesses);
            modifiedState.data = action.data.businesses;
            modifiedState.isShowMain = true;
            break;
        case RESINFO:
            modifiedState.isShowMain = false;
            modifiedState.currentRest = action.currentRest;
            break;
        case BACKCLICKED:
            modifiedState.isShowMain = true;
            break;
        case DATA_LOADING:
            modifiedState.isFetching = action.state;
            break;
        default:
            return state;
    }
    return modifiedState;
}