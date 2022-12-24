var express = require('express')
var app = express()
const cors = require('cors')
const pool = require('./db')

// Middleware
app.use(cors());
app.use(express.urlencoded())
app.use(express.json());


// Routes 
// Create 
app.post('/todos', async (req, res) => {
    try {
        const { description } = req.body; 
        const newTodo = await pool.query("INSERT INTO todo (description) VALUES($1)", [description])
        res.json(newTodo.rows[0])
    } catch (err) {
        console.log(err)
    }
})

//Get all todos
app.get('/todos', async (req, res) => {
    try {
        const allTodo = await pool.query("SELECT * from todo")
        res.json(allTodo.rows)
    } catch (err) {
        console.log(err)
    }
})

// Get a todo
app.get('/todos/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const getTodo = await pool.query("SELECT * from todo WHERE todo_id = $1", [id]) 
        res.json(getTodo.rows)
    } catch (err) {
        console.log(err)
    }
})

// Update 
app.get('/todos', async (req, res) => {
    try {
        const allTodo = await pool.query("SELECT * from todo")
        res.json(allTodo.rows)
    } catch (err) {
        console.log(err)
    }
})

// Get a todo
app.put('/todos/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { description } = req.body
        const updateTodo = await pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2", [description ,id]) 
        res.json(`todos with id = ${id} has been updated with ${description}`)
    } catch (err) {
        console.log(err)
    }
})


// Delete
app.delete('/todos/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [id])
        res.json(`todos with id = ${id} has been deleted`)
    } catch (err) {
        console.log(err)
    }
})

app.listen(5000, () => {
    console.log("Server has started on port 5000")
})