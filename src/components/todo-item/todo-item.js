import React from 'react';
import { deleteItem, doneItem } from '../../api/api';
import './todo-item.css';
import { MdDeleteForever, MdModeEdit  } from 'react-icons/md';

const TodoItem = ({item,setData,todos, setIsOpenModal, setCurrentItem,setIsOpenDeleteConfirm}) => {

    const setItemDone = id => {
        doneItem(id).then(
            res => {
                let idx=todos.findIndex( el => el.id === res.data);
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

    return (
            <div className ={classNames}>
                <span 
                    className='todo-list-item-label'
                    onClick={()=>setItemDone(item.id)}>
                    { item.value }
                </span>

                <div className='buttons-container'>
                    <button type='button'
                            className='btn btn-outline-primary btn-with-icons'
                            onClick={()=> {
                                setCurrentItem(item)
                                setIsOpenModal(true)}}>
                        <MdModeEdit className="icons"/>
                    </button>
                    <button type='button'
                            className='btn btn-outline-danger btn-with-icons'
                            onClick={()=> {
                                setCurrentItem(item)
                                setIsOpenDeleteConfirm(true)}}>
                       <MdDeleteForever className='icons'/>
                    </button>
            </div>
        </div>
    );
};

export default TodoItem;