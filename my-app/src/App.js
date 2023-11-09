import React from 'react'
import CounterCom from './component/counterCom'
import ToDoList from './component/toDoList'
import StudentDetails from './component/studentDetails'

export default function App() {
  return (
    <div className='container'>
      {/* <CounterCom/>
      <ToDoList/> */}
      <StudentDetails/>
    </div>
  )
}