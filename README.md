# PERN-todoList
a todo list using PERN (PostgreSQL, Express, React, Node) stack. 

## Table Row 
- todo_id : SERIAL PRIMARY KEY
- description : VARCHAR(255)

## API
- Get All Todo 
Method : GET
```
  http:/localhost:5000/todos
```
- Get a Todo 
Method : GET 

```
  http:/localhost:5000/todos/:id
```
- Create Todo 
Method : POST
```
  http:/localhost:5000/todos
```
header : {'Content-Type: application/json'}

body : {'description': (Insert your todo here)}
- Delete Todo 
Method : DELETE
```
  http:/localhost:5000/todos/:id
```
- Update a Todo
Method : PUT
```
  http:/localhost:5000/todos/:id
```
body : {'description': (Insert your todo here)}
