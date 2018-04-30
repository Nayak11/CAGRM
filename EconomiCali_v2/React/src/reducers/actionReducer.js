const defaultState = {
    isLoggedIn: false,
    message: "",
    userId: ""
}


export default function actionReducer (state = defaultState, action) {
    const newState = {...state};

        switch (action.type)
        {
            case 'LOGIN_SUCCESS':
                newState.isLoggedIn = action.payload.success;
                newState.message = "Login successful";
                newState.userId = action.payload.userId;
               return newState;


            case 'LOGIN_ERROR':
                newState.isLoggedIn = action.payload.success;
                newState.message = "The email and password you entered did not match our records. Please double-check and try again.";
                newState.userId = "";
                return newState;


            default:
                newState.isLoggedIn = false;
                newState.message = "";
                newState.userId = "";
                return newState;
        };
};


