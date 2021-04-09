export function increment(x) {
    return {
        type: 'INCREMENT',
        payload: x
    }
}

export function incrementAsync(v) {
    return dispatch => {
        setTimeout(() => {
            // You can invoke sync or async actions with `dispatch`
            dispatch(increment(v));
        }, 1000);
    };
}

export function decrement() {
    return {
        type: 'DECREMENT'
    }
}