<template>
    <div id="index" class="index">
       <v-tab ></v-tab>
       <v-main></v-main>
       <v-button></v-button>
    </div>
</template>

<script>
    import Main from '@/components/main/main.vue'
    import tab from '@/components/tab.vue'
    import Button from '@/components/postButton.vue'
    export default {
        //name: "index"
       components:{
         'v-tab':tab,
         'v-main':Main,
         'v-button':Button
       }
    }
</script>

<style scoped>

</style>
