import React, { useEffect, useState } from 'react'

function TodoList() {

    const [todos, setTodos] = useState([])

    useEffect(() => {
        console.log(process.env.REACT_APP_TODOS_URL_VIEW_ALL + "&maxRecords=200")
        fetch(process.env.REACT_APP_TODOS_URL_VIEW_ALL + "&maxRecords=200", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + process.env.REACT_APP_AIRTABLE_KEY
            }
        })
            .then(response => response.json())
            .then(data => {
                const todos = data.records.map(record => ({
                    recordId: record.id,
                    id: record.fields.id,
                    title: record.fields.title,
                    completed: record.fields.completed ? true : false
                }))
                console.log(todos)
                setTodos(todos)
            })

    }, [])


    const onDelete = (todo) => {
        const url = `${process.env.REACT_APP_TODOS_URL}/${todo.recordId}`
        console.log(url)
        //delete todo from server with fetch
        fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + process.env.REACT_APP_AIRTABLE_KEY
            }
        })
            .then(response => response.json())
            .then(response => fetch(process.env.REACT_APP_TODOS_URL_VIEW_ALL, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + process.env.REACT_APP_AIRTABLE_KEY
                }
            }))
            .then(response => response.json())

            .then(data => {
                //delete todo from state
                const newTodos = todos.filter(t => t.id !== todo.id)
                setTodos(newTodos)
            })

    }



    const todos_cards = todos.map(todo => (
        <div className="col">
            <div className="card" key={todo.recordId}>
                <div class="card-header">
                    <h5 className="card-title">{todo.recordId}</h5>
                </div>
                <div className="card-body d-grid gap-2 ">

                    <p className="card-text">{todo.title}</p>
                    <p className="card-text">
                        <small className="text-muted">{todo.completed ? "completed" : "not completed"} - {todo.id}</small>
                    </p>
                    <button className="btn btn-danger" onClick={() => onDelete(todo)}>Delete</button>
                </div>
            </div>
        </div>
    ))

    const todos_rows = todos.map(todo => (
        <tr key={todo.recordId}>
            <td>{todo.recordId}</td>
            <td>{todo.id}</td>
            <td>{todo.title}</td>
            <td>{todo.completed}</td>
            <td><button className="btn btn-danger" onClick={() => onDelete(todo)}>Delete</button></td>
        </tr>
    ))
    return (

        <div>
            <h1>TodoList</h1>

            <div className="row row-cols-1 row-cols-md-2 g-4 todo-cards">
                {todos_cards}
            </div>

            <div className="row todo-table">
                <table className='tbl'>
                    <thead>
                        <tr>
                            <th>recordId</th>
                            <th>id</th>
                            <th>title</th>
                            <th>completed</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {todos_rows}
                    </tbody>

                </table>
            </div>
        </div>
    )
}

export default TodoList