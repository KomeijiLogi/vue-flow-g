<template>
     <div class="top" @click.stop="gotoRouter">
       <mt-tabbar v-model="selected">
         <mt-tab-item id="Index">
           主要信息
         </mt-tab-item>
         <mt-tab-item id="Fhcard">
           发货信息
         </mt-tab-item>
         <mt-tab-item id="Fpcard">
           发票信息
         </mt-tab-item>
         <mt-tab-item id="Ftotal">
           总计信息
         </mt-tab-item>
       </mt-tabbar>
     </div>

</template>

<script>
    export default {
      data(){
        return{
          selected:''
        }
      },
      methods:{
        gotoRouter(){
          this.$router.push({
            name:this.selected
          })
        }
      },
      mounted(){
        let Rname =this.$route.name;
        switch (Rname){
          case 'Index':
            this.selected='Index';
            break;
          case 'Ftotal':
            this.selected='Ftotal';
            break;
          case 'Fpcard':
            this.selected='Fpcard';
            break;
          case 'Fhcard':
            this.selected='Fhcard';
            break;
          default:
            break;

        }
      }
    }
</script>

<style  scoped>
    .mint-tabbar{
      top: 0;
      height: 10vw;
    }
</style>
