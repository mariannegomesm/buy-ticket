import * as Action from "../constants";

const INITIAL_STATE = {
    name: "",
    email: "",
    password: "",
};

export function LoginReducer(state = INITIAL_STATE, action: any) {
    switch (action.type) {
        case Action.USER_LOGGED:
            return {...state, ...action.payload};

        default: 
            return state;
    }
}
