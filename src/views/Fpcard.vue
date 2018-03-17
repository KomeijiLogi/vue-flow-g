<template>
    <div id="fpcard">
      <v-main></v-main>
      <v-list></v-list>
      <v-tab></v-tab>
    </div>
</template>

<script>
  import main from '@/components/fpcard/card.vue'
  import list from '@/components/fpcard/list.vue'
  import tab from '@/components/tab.vue'
    export default {
        //name: "fpcard"
      components:{
        'v-tab':tab,
        'v-main':main,
        'v-list':list,
      }
    }
</script>

<style scoped>

</style>
