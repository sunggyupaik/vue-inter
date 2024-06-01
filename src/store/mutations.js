const addOneItem = (state, newTodoItem) => {
    const obj = { completed: false, item: newTodoItem };
    localStorage.setItem(newTodoItem, JSON.stringify(obj));
    state.todoItems.push(obj);
}

const removeOneItem = (state, payload) => {
    localStorage.removeItem(payload.todoItem.item);
    state.todoItems.splice(payload.index, 1);
}

const toggleOneItem = (state, payload) => {
    //todoItem.completed = !todoItem.completed; 안티패턴
    state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
    //localStorage.removeItem(todoItem.item); 불필요
    localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
}

const clearAllItems = (state) => {
    localStorage.clear();
    state.todoItems = [];
}

export { addOneItem, removeOneItem, toggleOneItem, clearAllItems }