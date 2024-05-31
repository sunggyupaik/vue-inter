import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const storage = {
	fetch() {
		if (localStorage.length > 0) {
			const arr = [];
			for (let i = 0; i < localStorage.length; i ++) {
				if(localStorage.key(i) !== 'loglevel:webpack-dev-server') {
					arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
					//this.todoItems.push(localStorage.key(i));
				}
			}
	
			return arr;
		}
	}
}

export const store = new Vuex.Store({
	state: {
		headerText: "TODO it!",
		todoItems: storage.fetch(),
	},
	getters: {
		storedTodoItems(state) {
			return state.todoItems;
		}
	},
	mutations: {
		addOneItem(state, newTodoItem) {
			const obj = { completed: false, item: newTodoItem };
			localStorage.setItem(newTodoItem, JSON.stringify(obj));
			state.todoItems.push(obj);
		},
		removeOneItem(state, payload) {
			localStorage.removeItem(payload.todoItem.item);
			state.todoItems.splice(payload.index, 1);
		},
		toggleOneItem(state, payload) {
			//todoItem.completed = !todoItem.completed; 안티패턴
			state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
			//localStorage.removeItem(todoItem.item); 불필요
			localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
		},
		clearAllItems(state) {
			localStorage.clear();
			state.todoItems = [];
		},
    },
});