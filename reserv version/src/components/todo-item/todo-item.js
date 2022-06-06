import React from 'react';
import { deleteItem, doneItem } from '../../api/api';
import './todo-item.css';

const TodoItem = ({item,setData,todos, setIsOpenModal, setCurrentItem}) => {

    const deleteFunc = id => {
        deleteItem(id).then(
            res => {
                let idx = todos.findIndex( el => el.id === res.data);
                const newArray = [
                    ...todos.slice(0, idx),
                    ...todos.slice(idx + 1)
                ];
                setData(newArray);
            }
        )
    }

    const doneFunc = id => {
        const item = todos.find(item=>item.id == id)
            
        doneItem(id).then(
            res => {
                console.log(res);
                let idx=todos.findIndex( el => el.id == res.data);
                const oldItem = todos[idx]
                const newItem = {...oldItem, isDone: !oldItem.isDone }
                const newArray =[
                    ...todos.slice(0,idx),
                    newItem,
                    ...todos.slice(idx+1)
                ];
                setData(newArray);
            }
        )
    }
    
    let classNames = 'todo-list-item'
    if(item.isDone){
        classNames +=' done'
    }
    console.log(item)
    return (
        
            <div className ={classNames}>
            <span 
                className='todo-list-item-label'
                onClick={()=>doneFunc(item.id)}>
                { item.value }
            </span>
            <div className='buttons-container'>
                <button type='button'
                    className='btn btn-outline-danger'
                    onClick={()=> {
                        setCurrentItem(item)
                        setIsOpenModal(true)
                    }}>
                    edit
                </button>
                <button type='button'
                    className='btn btn-outline-danger'
                    onClick={()=> deleteFunc(item.id)}>
                    <i className="fa-solid fa-trash-can"/>
                </button>
            </div>
        </div>
       
    );
};

export default TodoItem;