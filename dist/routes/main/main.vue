<template>
    <div>
        <h1>Hello World</h1>
        {{ title2 }}
        <sidebar></sidebar>
    </div>
</template>

<script>
import Sidebar from './main/components/Sidebar.vue'

export default {
    components: { Sidebar },

    data: function(){
        return {}
    }
}
</script>