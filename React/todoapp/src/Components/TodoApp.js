import React, { useState } from 'react'
import './style.css'
import TodoLists from './TodoLists'


function TodoApp() {

    const [todoName, setTodoNmae] = useState("")
    const [todoItems, setTodoItems] = useState([])

    const setTodo = (event) => {
        setTodoNmae(event.target.value)
    }

    const addTodo = () => {
        setTodoItems((previousValue) => {
            return [...previousValue, todoName];
        })
        setTodoNmae(" ")
    }

    const deleteItems = (id) => {
        console.log("items deleted")
        setTodoItems((previousValue) => {
            return previousValue.filter((arrEle, idx) => {
                return idx !== id;
            })
        })
    }
    return (
        <div>
            <div className='main-div'>
                <div className='center-div'>
                    <h1>To-Do List</h1>
                    <input
                        type={"text"}
                        placeholder="Add items"
                        value={todoName}
                        onChange={setTodo}
                    />
                    <button onClick={addTodo}> + </button>
                    <ol>
                        {
                            todoItems.map((todoItem, index) => {
                                return (
                                    <TodoLists
                                        key={index}
                                        id={index}
                                        text={todoItem}
                                        onSelect={deleteItems}

                                    />
                                )
                            })
                        }
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default TodoApp
