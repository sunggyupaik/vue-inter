<template lang="ko">
    <div>
        <span v-on:click="clearAll">clear all</span>
    </div>
</template>
<script>
import { mapMutations } from 'vuex';

export default {
    methods: {
        ...mapMutations({clearAll: 'clearAllItems'})
    }
}
</script>
<style lang="">
    
</style>