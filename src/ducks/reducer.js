import * as taskServices from '../services/taskServices';

const initialState = {
    tasks: [],
    loading: false
};

// const UPDATE_TASK = "UPDATE_TASK";
const GET_TASKS = 'GET_TASKS';
const GET_TASKS_PENDING = "GET_TASKS_PENDING";
const GET_TASKS_FULFILLED = "GET_TASKS_FULFILLED";

const CREATE_TASK = "CREATE_TASKS";
const CREATE_TASK_PENDING = "CREATE_TASKS_PENDING";
const CREATE_TASK_FULFILLED = "CREATE_TASKS_FULFILLED";

const DELETE_TASK = "DELETE_TASK";
const DELETE_TASK_PENDING = "DELETE_TASK_PENDING";
const DELETE_TASK_FULFILLED = "DELETE_TASK_FULFILLED";

const COMPLETE_TASK = "COMPLETE_TASK";
const COMPLETE_TASK_PENDING = "COMPLETE_TASK_PENDING";
const COMPLETE_TASK_FULFILLED = "COMPLETE_TASK_FULFILLED";

export default function taskReducer(state = initialState, action) {
    console.log('REDUCER HIT: ACTION --->', action );

    switch(action.type) {
        // case UPDATE_TASK:
        //     // const { tasks } = action.payload
        //     return { ...state, tasks: action.payload};

        case GET_TASKS_PENDING:
            return { state, loading: true, tasks: state.tasks};
        case GET_TASKS_FULFILLED: 
            return { state, loading: false, tasks: action.payload};

        case CREATE_TASK_PENDING:
            return { state, loading: true, tasks: state.tasks};
        case CREATE_TASK_FULFILLED: 
            return { state, loading: false, tasks: action.payload};
        
        case DELETE_TASK_PENDING:
            return { state, loading: true, tasks: state.tasks};
        case DELETE_TASK_FULFILLED: 
            return { state, loading: false, tasks: action.payload};
        
        case COMPLETE_TASK_PENDING:
            return { state, loading: true, tasks: state.tasks};
        case COMPLETE_TASK_FULFILLED: 
            return { state, loading: false, tasks: action.payload};
        
        default:
            return state;
    }
}

// export function updateTask(tasks) {
//     return {
//         type: UPDATE_TASK,
//         payload: tasks
//     };
// };

export function getTasks() {
    return {
        type: GET_TASKS,
        payload: taskServices.getTasks()
    }
}

export function createTask(title, description) {
    return {
        type: CREATE_TASK,
        payload: taskServices.createTask(title, description)
    }
}

export function deleteTask(id) {
    console.log('id---------->', id)
    return {
        type: DELETE_TASK,
        payload: taskServices.deleteTask(id)
    }
}

export function completeTask(id) {
    return {
        type: COMPLETE_TASK,
        payload: taskServices.completeTask(id)
    }
}