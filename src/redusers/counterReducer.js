export const ACTION_TYPE = {
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT',
    RESET: 'RESET',
};

// count를 변경해서 다시 보내주는 함수

export const setCount = (state, action) => {
    // const action = {type: 'INCREMENT'}
    // const state = {counter: 0, name: 'counter'}
    // switch문으로 action.type에 따라 다른 동작을 수행
    switch (action.type) {
        case ACTION_TYPE.INCREMENT:
            return { ...state, counter: state.counter + 1 };
        case ACTION_TYPE.DECREMENT:
            return { ...state, counter: state.counter - 1 };
        case ACTION_TYPE.RESET:
            return { ...state, counter: 0 };
        default:
            return state;
    }
};
