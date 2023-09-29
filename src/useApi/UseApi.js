import { useState, useEffect } from 'react';
import axios from 'axios';


const UseTodoApi = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
}, []);

  const fetchTodos = async () => {
      const response = await axios.get('http://training.virash.in/todos/prakash');
      setTodos(response.data);
  };

  const addTodo = async (newTodo) => {
     if(newTodo !== ""){
      const response = await axios.post('http://training.virash.in/todos/prakash', {
        id: Date.now(), 
        title: newTodo,
        checked: false,
      });
      console.log(response.data.message);
      fetchTodos(); // Refresh the todo list
     }
  };

  const updateTodoChecked = async (id, checked) => {
      const response = await axios.put('http://training.virash.in/todos/prakash', {
        id,
        checked,
      });
      console.log(response.data.message);
      fetchTodos(); 
  };

  const updateTodoTitle = async (id, title) => {
      const response = await axios.post('http://training.virash.in/updateTodo/prakash', {
        id,
        title,
      });
      console.log(response.data.message);
      fetchTodos(); 
  };

  const deleteTodo = async (id, checked) => {
    if (!checked) {
        const response = await axios.delete('http://training.virash.in/todos/prakash', {
          data: { id },
        });
        console.log(response.data.message);
        fetchTodos(); 
    }
  };

  const clearTodos = async () => {
   
      const response = await axios.get('http://training.virash.in/clear/prakash');
      console.log(response.data.message);
      setTodos([]);
   
  };

  return {
    todos,
    fetchTodos,
    addTodo,
    updateTodoChecked,
    updateTodoTitle,
    deleteTodo,
    clearTodos,
  };
};

export default UseTodoApi;
