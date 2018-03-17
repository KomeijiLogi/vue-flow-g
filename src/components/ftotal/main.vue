<template>
    <div id="ftotal" class="total">
       <div class="card">
         <label>发货合计</label>
         <mt-field label="申请数量" v-model="fhj_fhsl" readonly type="number"></mt-field>
         <mt-field label="实际发货数量" v-model="fsjfhsltotal" readonly type="number"></mt-field>
         <mt-field label="含税金额" v-model="fhj_fhje" readonly type="number"></mt-field>
         <mt-field label="件数" v-model="fhj_fhjs" readonly type="number"></mt-field>
       </div>
       <div class="card">
         <label>发票合计</label>
          <mt-field label="数量" v-model="fhj_fpsl" readonly type="number"></mt-field>
          <mt-field label="含税金额" v-model="fhj_fpje" readonly type="number"></mt-field>
       </div>
    </div>
</template>

<script>
    export default {
        // name: "main"
       data(){
          return{
            fhj_fhsl:'',
            fsjfhsltotal:'',
            fhj_fhje:'',
            fhj_fhjs:'',
            fhj_fpsl:'',
            fhj_fpje:'',
          }
       }
    }
</script>

<style scoped>
 .card{
    box-shadow: 5px 5px 5px #a7a7a7 ;
    margin: 2vw;
 }
</style>
