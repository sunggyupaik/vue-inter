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
	}
});