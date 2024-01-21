import classes from './MyInput.module.css'
import React from 'react';

export const MyInput = ({field, form, ...props}) => {
    const hasError = form.touched[field.name] && form.errors[field.name]
    return (
        <div className={`${classes.formControl} ${hasError && classes.error}`} >
            <input {...field} {...props}></input>
            { hasError && <label>{form.errors[field.name]}</label> }
        </div>
    )
}