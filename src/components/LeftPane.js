import React from "react";
import './LeftPane.css';
import tasks from '../data/tasks';
import Task from './Task';


const LeftPane = ()=>{

    const taskArr = tasks.map((task)=>{
        return <Task key={task.id} {...task}/>
    });

    return (<>
        <div className="left-pane">
            {taskArr}    
        </div>   
    </>);
}

export default LeftPane;