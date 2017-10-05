<template>
    <div>Sidebar - {{ you }}</div>
</template>

<script>
export default {

    data(){
        return {
            you: 'not loaded'
        }
    },

    mounted(){
        this.you = 'loaded';
    }

}
</script>