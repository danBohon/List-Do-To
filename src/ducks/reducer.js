const initialState = {
    tasks: []
};

const UPDATE_TASK = "UPDATE_TASK";

export default function reducer(state = initialState, action) {
    console.log('REDUCER HIT: ACTION --->', action );

    switch(action.type) {
        case UPDATE_TASK:
            // const { tasks } = action.payload
            return { ...state, tasks: action.payload};
        default:
            return state;
    }
}

export function updateTask(tasks) {
    return {
        type: UPDATE_TASK,
        payload: tasks
    };
};