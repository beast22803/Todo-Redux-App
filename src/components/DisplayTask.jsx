/* eslint-disable no-unused-vars */
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

function DispalyTask() {

    const todos = useSelector((state) => state.todo.todos);
    const dispatch = useDispatch();
    console.log(todos);

    return (
        <>
            <div className="displayDiv shadow p-5">
                <div className="d-flex justify-content-between">
                    <div>
                        <span className="avatarSpan">b</span>
                    </div>
                    <div className="tasksDiv">
                        {todos.map((todo) => {
                            return (
                                <div key={todo.id}>
                                    <div className="d-flex justify-content-between px-2">
                                        <div>
                                            <p className="m-0 p-0">{todo.text}</p>
                                        </div>
                                        <button className="deleteBtn" onClick={() => dispatch(removeTodo(todo.id))}>
                                            x
                                        </button>
                                    </div>
                                    <hr className="w-100 lineHr" />
                                </div>
                            );
                        })}
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default DispalyTask;