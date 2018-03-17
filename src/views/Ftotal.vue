<template>
    <div id="ftotal">
       <v-total></v-total>
       <v-tab></v-tab>
    </div>

</template>

<script>
    import total from '@/components/ftotal/main.vue'
    import tab from '@/components/tab.vue'
    export default {
        //name: "ftotal"
      components:{
        'v-tab':tab,
        'v-total':total,
      }
    }
</script>

<style scoped>

</style>
