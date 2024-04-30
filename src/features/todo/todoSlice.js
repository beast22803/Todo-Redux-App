// todoSlice.js
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [
        {
            id: "1",
            text: "Write for at least 30 minutes"
        },
        {
            id: "2",
            text: "Sleep at least 7 hours"
        },
        {
            id: "3",
            text: "Define marketing startegy"
        },
        {
            id: "4",
            text: "Marketing strategy"
        },
        {
            id: "5",
            text: "Design website + launch"
        },
        {
            id: "6",
            text: "Design for at least 30 minutes"
        },
        {
            id: "7",
            text: "Review analytics"
        },
        {
            id: "8",
            text: "Yoga before bed"
        },
    ],
};

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
            };
            state.todos.push(todo);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
    },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
