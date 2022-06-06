import React , { useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './components/app-header/app-header';
import TodoList from './components/todo-list/todo-list';
import AddForm from './components/add-panel/add-panel';
import FilterButtons from './components/filter-buttons/filter-buttons';
import { getAllItems } from './api/api';
import './index.css'

const App = () => {

  const [filter, setFilter] = useState('all');

  const [data, setData] = useState([]);

  console.log(data, "MainData")

  const onFilterChange = filterValue => {
    setData({ ...data, filter: filterValue });
  };

  useEffect( async () => {
    const result = await getAllItems()
    setData(result.data)
  }, [])
  
  return(
    <div className='todo-app'>
        <AppHeader/>
        <div className='top-panel d-flex'>
          <FilterButtons setFilter={setFilter} filter={filter} onFilterChange={onFilterChange} />
        </div>
        <TodoList filter={filter} todos ={data} setData={setData} />
        <div>
          <AddForm todos = {data} setData={setData} />
        </div>
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('root'));