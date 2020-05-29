//step 1 =>
const initialState = {
    counter: 0
};

//step 2) Create a function, that will retrieve state and actions as parameter =>
//May initialize the state =?
const reducer = (state = initialState, action) => {

    //reducer will contain all the action/ buttonPress/ load - things that change your state

    //4) You will change the state from reducer
    switch (action.type){
        case 'INCREMENT':
            return {counter: state.counter + 1}

        case 'DECREMENT':
            return {counter: state.counter -1}

        default:
            return state;
    }

}

export default reducer;
//5) Import Reducer inside Store
