<template lang="ko">
    <div>
        <span v-on:click="clearAll">clear all</span>
    </div>
</template>
<script>
export default {
    methods: {
        clearAll() {
            this.$emit('clearAll');
        }
    }
}
</script>
<style lang="">
    
</style>