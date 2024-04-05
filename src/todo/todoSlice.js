import {createSlice, nanoid } from '@reduxjs/toolkit';

//load initial data from Localstorage if not found then set todos to empty state
const initialState = JSON.parse(localStorage.getItem('todos')) || {
    todos: [],
  };



export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), 
                text: action.payload,
                completed: false
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        },
        toggleTodo: (state, action) => {
            const todo = state.todos.find((todo) => todo.id === action.payload);
            if (todo) {
              todo.completed = !todo.completed; // Toggle the 'completed' property
            }
            localStorage.setItem('todos', JSON.stringify(state));  // store state data in localstorage
        }
        
        
    }
})

export const {addTodo, removeTodo,toggleTodo} = todoSlice.actions

export default todoSlice.reducer