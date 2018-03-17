<template>
    <div id="fhcard">
      <v-card></v-card>
      <v-list></v-list>
      <v-tab></v-tab>
    </div>

</template>

<script>
    import card from '@/components/fhcard/card.vue'
    import tab from '@/components/tab.vue'
    import list from '@/components/fhcard/list.vue'
    export default {
        //name: "fhcard"
        components:{
          'v-tab':tab,
          'v-card':card,
          'v-list':list,
        }
    }
</script>

<style scoped>

</style>
