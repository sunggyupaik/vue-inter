<template lang="ko">
    <div>
        <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
        <button v-on:click="addTodo">add</button>
        <ModalView v-if="showModal" @close="showModal = false">
            <h3 slot="header">경고!
                <span @click="showModal = false">X</span>
            </h3>
            <h3 slot="body">아무것도 입력하지 않았습니다.</h3>
        </ModalView>
    </div>
</template>
<script>
import ModalView from './common/ModalView.vue';

export default {
    data() {
        return {
            newTodoItem: "",
            showModal: false,
        }
    },
    methods: {
        addTodo() {
            if(this.newTodoItem !== "") {
                //this.$emit('addTodoItem', this.newTodoItem); emit 이벤트를 commit으로 mutation이 state를 변화시키도록 개선
                this.$store.commit('addOneItem', this.newTodoItem);
                this.clearInput();
            } else {
                this.showModal = !this.showModal;
            }
        },
        clearInput() {
            this.newTodoItem = "";
        }
    },
    components: {
        ModalView
    }
}
</script>
<style lang="">
    
</style>