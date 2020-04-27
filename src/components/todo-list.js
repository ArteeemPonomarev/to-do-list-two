import React from 'react';
import TodoListItem from './todo-list-item.js';

const TodoList = () => {
    return (
      <ul>
        <li><TodoListItem label='Drink Cofee'/></li>
        <li><TodoListItem 
        label='Build Awesome App'
        important/></li>
      </ul>
    );
  };

  export default TodoList;