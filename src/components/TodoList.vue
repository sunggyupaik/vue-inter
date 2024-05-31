<template lang="ko">
    <div>
        <ul>
            <transition-group name="list" tag="p">
            <li v-for="(todoItem, index) in this.storedTodoItems" v-bind:key="todoItem.item">
                <span v-on:click="toggleComplete({todoItem, index})">[V] </span>
                <span v-bind:class="{textCompleted: todoItem.completed}">{{ todoItem.item }}</span>
                <span v-on:click="removeTodo({todoItem, index})">
                    X
                </span>
            </li>
            </transition-group>
        </ul>
    </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
    computed: {
        ...mapGetters(['storedTodoItems'])
    },
    methods: {
        ...mapMutations({
            removeTodo: 'removeOneItem',
            toggleComplete: 'toggleOneItem'
        }),
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