import axios from 'axios'

const apiBase = 'https://localhost:44336/ToDo'

export const deleteItem = id => axios.delete(`${apiBase}/${id}`)

export const doneItem = id => axios.put(`${apiBase}/${id}`)

export const addItem = item => axios.post(apiBase, item)

export const putItem = newItem => axios.put(apiBase, newItem)

export const getAllItems = () => axios.get(apiBase)