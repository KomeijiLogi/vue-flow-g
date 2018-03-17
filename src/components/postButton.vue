<template>
     <div class="postButton">
        <mt-button type="primary" size="large">{{buttonText}}</mt-button>
     </div>
</template>

<script>
    export default {
        // name: "post-button"
        data(){
           return {
              buttonText:'提交'
           }
        }
    }
</script>

<style scoped>
  .postButton{
      bottom: 0;
       z-index: 99999;
      margin-top: 20vw;

  }
</style>
