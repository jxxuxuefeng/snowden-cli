const initState = {
    inputValue: '你好5'
};
export default function(state = initState, action) {
    if (action.type === 'CHANGE_INPUT_VALUE') {
        let newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        console.log(newState, 'newState');
        return newState;
    }
    return state;
}
