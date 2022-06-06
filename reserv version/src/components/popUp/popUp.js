import React, { useState } from "react";
import { putItem } from '../../api/api'
import "./popUp.css";

const PopUp = ({ item, setIsOpenModal, todos, setTodos }) => {

    const {id,value,isDone} = item

    const [text, setText] = useState(value)

    const inputFunc = text => {
        setText(text)
    }

    const changeItem = async() => {
        console.log(id)
        console.log(isDone)

        await putItem({
            id,
            value: text,
            isDone
        }).then(
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
        <div className={`pop-up`}>
            <div className={'formContainer'}>
                <label className="pop-up-label" htmlFor="name"> Rewrite your task </label>
                <input id="name" type="text" value={text} onChange={e => inputFunc(e.target.value)}/>
                <button className="btn" onClick={changeItem}> Update </button>
            </div>
            <div className="close-btn" onClick={() => setIsOpenModal(false)}>X</div>
        </div>
    )
};

export default PopUp