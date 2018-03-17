<template>
   <div id="list" class="list">
     <mt-button type="primary" size="normal" @click.native="addItem">添加发货明细+</mt-button>
     <mt-popup position="left"  v-model="popupVisible">

     </mt-popup>
     <div id="mxlist">

     </div>
   </div>
</template>

<script>
    export default {
        // name: "list"\
        data(){
          return{
            popupVisible:false,

          }

        },
        methods:{
          //添加明细
          addItem(){
              this.popupVisible=true;
          }
        }
    }
</script>

<style scoped>
  .mint-button{
    margin-top: 5vw;
  }
</style>
