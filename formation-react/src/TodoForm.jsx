import React from 'react'
import { useState } from 'react'

function TodoForm() {


    const [title, setTitle] = useState("")
    const [completed, setCompleted] = useState(false)


    const addTodo = (event) =>{
        event.preventDefault()
        const newTodo = {fields:{
            title,
            completed
        }}
        
        // post newTodo to server
        fetch(process.env.REACT_APP_TODOS_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + process.env.REACT_APP_AIRTABLE_KEY
            },

            body: JSON.stringify(newTodo)
        })
        .then(response => response.json())
        .then(data => {
            setTitle("")
            setCompleted(false)
        })
        

    }
    return (
        <div>
            <h1>TodoForm</h1>

            <form onSubmit={addTodo}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" id="title" value={title} onChange={e=>setTitle(e.target.value)} className="form-control"  placeholder="Title..." />
                </div>
                <div className="form-check">
                    <input className="form-check-input" id="completed" type="checkbox" checked={completed} onChange={e=>setCompleted(e.target.checked)} />
                    <label className="form-check-label" htmlFor="completed">
                        Done ?
                    </label>
                </div>
                <div className="mb-3">
                    <button className="btn btn-primary btn-block" type="submit">Ok</button>
                </div>
            </form>

        </div>
    )
}

export default TodoForm