import React, { Fragment, useEffect, useState } from 'react'
import { DATA } from '../data'
import { DisplayTodo } from './DisplayTodo';
import { AddToDo } from './AddToDo';
import { toDoService } from '../services/toDoService';

export const ToDoList = () => {
    const [data, setData] = useState(DATA);

    useEffect(() => {
        findAllTodo()
    }, [])

    const validationToDo = (event, id) => {
        event.preventDefault();
        let newData = [...data];
        (!newData[id].isCheck) ? newData[id].isCheck = true : newData[id].isCheck = false;
        setData(newData);
    }

    const addToDo = (newTodo) => {
        setData((data) => [...data, newTodo]);
    }

    const deleteTodo = (event, id) => {
        event.preventDefault();
        let newData = [...data];
        newData.splice(id, 1);
        setData(newData);
    }

    const findAllTodo = () => {
        toDoService.findAll().then(data => setData(data))
    }

    return (
        <Fragment>
            <AddToDo addToDo={addToDo} />
            {data.map((value, index) => {
                return <DisplayTodo value={value} key={index} index={index} validationToDo={validationToDo} deleteTodo={deleteTodo} />
            })}
        </Fragment>
    )
}
