import React, { useState } from "react";
import { putItem } from '../../api/api'
import "./popUp.css";

const PopUp = ({ item, setIsOpenModal, todos, setTodos }) => {

    const {id,value,isDone} = item

    const [text, setText] = useState(value)

    const inputFunc = (e) => {
        setText(e.target.value)
    }

    const changeItem = (e) => {
        e.preventDefault()
        putItem({
            id,
            value: text,
            isDone})
        .then(
            () => {
                let idx = todos.findIndex( el => el.id === id);
                const newArray = [
                    ...todos.slice(0, idx),
                    {
                        ...todos[idx],
                        value: text
                    },
                    ...todos.slice(idx + 1)
                    ];
                    setTodos(newArray);
                }
            )
            setText('')
            setIsOpenModal(false)
    };

    return(
        <form onSubmit={changeItem}>
        <div className={`pop-up`}>
            <div className={'formContainer'}>
                <label className="pop-up-label" htmlFor="name"> Rewrite your task </label>
                <div className="new-todo-input">
                    <input 
                        id="name" 
                        className='form-control' 
                        type="text" 
                        value={text} 
                        onChange={inputFunc} 
                        required/>
                </div>
                <button type="submit" className="btn btn-primary btn-update"> Update </button>  
            </div>
            <div className="close-btn" onClick={() => setIsOpenModal(false)}>X</div>
        </div>
        </form>
    )
};

export default PopUp