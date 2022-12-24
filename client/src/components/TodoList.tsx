import React from 'react'
import './todolist.scss'

type TodoProps = {
    desc: any, 
    id: Number, 
    deleteTodo: (id: Number) => void 
}

const TodoList = ({desc, id, deleteTodo} : TodoProps) => {
    return (
        <div className='todo-parent'>
            <p>{desc}</p>
            <button onClick={() => deleteTodo(id)}>x</button>
        </div>
    )
}

export default TodoList