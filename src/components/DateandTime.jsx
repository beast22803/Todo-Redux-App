/* eslint-disable no-unused-vars */
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function DateandTime() {
    const dispatch = useDispatch();

    const currentDate = new Date();

    // Array of month names
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    // Function to get suffix for date
    const getDateSuffix = (date) => {
        if (date >= 11 && date <= 13) {
            return 'th';
        }
        switch (date % 10) {
            case 1: return 'st';
            case 2: return 'nd';
            case 3: return 'rd';
            default: return 'th';
        }
    };

    // Get day, date, and month
    const day = currentDate.toLocaleDateString('en-US', { weekday: 'long' });
    const date = currentDate.getDate();
    const dateSuffix = getDateSuffix(date);
    const month = months[currentDate.getMonth()];

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = (data) => {
        dispatch(addTodo(data.task));
        reset();
    };

    return (
        <>
            <div className="d-flex justify-content-center pt-4 pb-2">
                <div>
                    <h1 className="py-3">
                        <span className="dateSpan">{day} {date}{dateSuffix},</span>
                        &nbsp;&nbsp;
                        <span className="monthSpan">{month}</span>
                    </h1>
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="input-container">
                        <input type="text" {...register('task', { required: 'This field is required' })} placeholder="Add new task" className="input-field shadow" />
                        {errors.textInput && <p className="error-message">{errors.textInput.message}</p>}
                        <button type="submit" className="submit-button d-flex justify-content-center align-items-center me-2">+</button>
                    </div>

                </form>
            </div>
        </>
    );
}

export default DateandTime;