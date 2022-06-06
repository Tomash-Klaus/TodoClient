import React, {useState} from 'react';
import TodoItem from '../todo-item/todo-item';
import './todo-list.css';
import PopUp from '../popUp/popUp';
import ConfirmDeleteDialog from '../confirm-delete-dialog/confirm-delete-dialog';

const TodoList = ({ todos, setData, filter }) => {

    const [isOpenModal, setIsOpenModal] = useState(false)
    const [isOpenDeleteConfirm, setIsOpenDeleteConfirm] = useState(false)

    const [currentItem, setCurrentItem] = useState({})

    const filterAllItems = (todos, filter) => {
        switch (filter){
            case 'all':
                return todos;
            case 'active':
                return todos.filter( item => !item.isDone);
            case 'done':
                return todos.filter( item => item.isDone);
            default:
                return todos;
        }
    };

    const elements = filterAllItems(todos, filter).map(item => {
        return (
            <li key={item.id} className="list-group-item">
                <TodoItem 
                    item={item} 
                    setData={setData} 
                    todos={todos} 
                    setIsOpenModal={setIsOpenModal} 
                    setCurrentItem={setCurrentItem}
                    setIsOpenDeleteConfirm={setIsOpenDeleteConfirm}/>
            </li>
        );
    });

    return (
        <>
            <ul className="list-group todo-list">
                {elements}
            </ul>
            {isOpenModal && (
                <PopUp 
                    item = {currentItem}
                    todos={todos}
                    setTodos={setData} 
                    setIsOpenModal={setIsOpenModal} />
            )}
            {isOpenDeleteConfirm && (
                <ConfirmDeleteDialog 
                    id = {currentItem.id}
                    todos={todos}
                    setTodos={setData} 
                    setIsOpenDeleteConfirm={setIsOpenDeleteConfirm} />
            )}
        </>
    )
};

export default TodoList;