import React from "react";
import {Switch, Route} from 'react-router-dom';

import TaskForm3 from "./components/taskForm/TaskForm3";
import ListDisplayTwo from "./components/listDisplay/ListDisplayTwo";
import OneTask from "./components/oneTask/OneTask";
import App from "./App"

export default

<Switch>
    <Route path='/task:id' component={OneTask}/> 
    <Route path='/' component={TaskForm3}/>
</Switch>
