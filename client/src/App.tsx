import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.scss'
import TodoList from './components/TodoList'

type TodoList = {
	todo_id: Number | never
	description: String | never
}


function App() {
	const [desc, setDesc] = useState<String>('')
	const [todoList, setTodoList] = useState<Array<TodoList>>([])
	
	const getTodo = () => {
		axios.get('http://localhost:5000/todos')
			.then(
				(res) => {
					setTodoList([...res.data])
				}
			)
	}
	
	
	const addTodo = (desc: String) => {
		axios.post('http://localhost:5000/todos', {
			description : desc
		})
		.then(
			(res) => {
				console.log('added new todo')
			}
		)
		getTodo()
	}	
	
	const deleteTodo = (id: Number) => {
		axios.delete(`http://localhost:5000/todos/${id}`)
			.then((res) => {
				console.log(`deleted a todo at id = ${id}`)
			})
		getTodo()
	}

	useEffect(() => {
		getTodo()
	}, [])
	
	return (
		<div className='container'>
			<h1>PERN Todos</h1>
			<input type="text" onChange={(e) => setDesc(e.currentTarget.value)} value={desc}/>
			<button onClick={() => {addTodo(desc); console.log(todoList)}}>add todo</button>
			{todoList.map((todo, index) => {
				return (
					<div key={index} >
						<TodoList desc={todo.description} id={todo.todo_id} deleteTodo={deleteTodo}></TodoList>
					</div>
				)
			})}	
		
		
		
		</div>
	)
}

export default App
