<template lang="ko">
    <div>
        <ul>
            <transition-group name="list" tag="p">
            <li v-for="(todoItem, index) in this.$store.state.todoItems" v-bind:key="todoItem.item">
                <span v-on:click="toggleComplete(todoItem, index)">[V] </span>
                <span v-bind:class="{textCompleted: todoItem.completed}">{{ todoItem.item }}</span>
                <span v-on:click="removeTodo(todoItem, index)">
                    X
                </span>
            </li>
            </transition-group>
        </ul>
    </div>
</template>
<script>
export default {
    methods: {
        removeTodo(todoItem, index) {
            //this.$emit('removeTodoItem', todoItem, index);
            const obj = { todoItem, index };
            this.$store.commit('removeOneItem', obj);
        },
        toggleComplete(todoItem, index) {
            //this.$emit('toggleTodoItem', todoItem, index);
            const obj = { todoItem, index };
            this.$store.commit('toggleOneItem', obj);
        }
    }
}
</script>
<style scoped>
    .textCompleted {
        text-decoration: line-through;
        color: #b3adad;
    }

    .list-enter-active, .list-leave-active {
        transition: all 1s;
    }

    .list-enter, .list-leave-to {
        opacity: 0;
        transform: translateY(30px);
    }
</style>