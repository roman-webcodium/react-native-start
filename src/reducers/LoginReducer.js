const INITIAL_STATE = {
    loading: false,
    user: null,
    errorMessage: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...INITIAL_STATE,
                loading: true
            };

        case 'LOGIN_FAIL':
            return {
                ...INITIAL_STATE,
                errorMessage: action.error
            };

        case 'LOGIN_SUCCESS':
            return {
                ...INITIAL_STATE,
                user: action.profile
            };

        default:
            return state;
    }
};