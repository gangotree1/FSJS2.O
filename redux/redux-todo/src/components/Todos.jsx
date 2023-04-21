import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { removeTodo } from '../features/todoSlice'

function Todos() {
  const todos = useSelector((state) => state.todos.todos)
  const dispatch = useDispatch()
  return (
    <div>
      {
        todos.map((todo) => (
          <>
            <h1 key={todo.id}>{todo.text}</h1>
            <div className="w-full h-full" style={{ backgroundImage: "https://images.pexels.com/photos/3560044/pexels-photo-3560044.jpeg" }}></div>

            <button
              className="border-solid border-2 border-black bg-black text-white"
              onClick={() => dispatch(removeTodo(todo.id))}
            >Remove</button>
          </>
        ))
      }
    </div>
  )
}

export default Todos