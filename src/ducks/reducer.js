import * as taskServices from '../services/taskServices';

const initialState = {
    tasks: []
};

const UPDATE_TASK = "UPDATE_TASK";
const GET_TASKS = 'GET_TASKS';

export default function taskReducer(state = initialState, action) {
    console.log('REDUCER HIT: ACTION --->', action );

    switch(action.type) {
        case UPDATE_TASK:
            // const { tasks } = action.payload
            return { ...state, tasks: action.payload};

        case GET_TASKS: 
            return { state, tasks: action.payload}
    
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

export function getTasks() {
    return {
        type: GET_TASKS,
        payload: taskServices.getTasks()
    }
}