import React, { Fragment } from 'react'
import { ToDoList } from '../components/ToDoList'

export const Home = () => {
  return (
    <Fragment>
      <div className='main-content'>
        <h1 className='main-title'>To Do List</h1>
        <ToDoList />
      </div>
    </Fragment>
  )
}
