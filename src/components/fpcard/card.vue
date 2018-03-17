<template>
   <div id="card" class="card">
       <mt-field label="发票类别" v-model="ffplb" placeholder="请选择发票类别" readonly></mt-field>
       <mt-field label="收件人" v-model="fsjr" placeholder="请填写收件人" ></mt-field>
       <mt-field label="收件人电话" v-model="fsjrtel" type="tel" placeholder="请填写收件人电话"></mt-field>
       <mt-field label="邮寄地址" v-model="fyjdz" placeholder="请填写邮寄地址"></mt-field>
       <mt-field label="快递公司" v-model="fkdgs" readonly ></mt-field>
       <mt-field label="快递单号" v-model="fkddh" readonly></mt-field>
       <mt-field label="发票号" v-model="ffph" readonly></mt-field>
       <mt-field label="发货开始日期" v-model="fhrqks" type="date" ></mt-field>
       <mt-field label="发货日期截止" v-model="fhrqjs" type="date"></mt-field>
     <mt-field label="备注" v-model="ffp_bz" type="textarea" rows="3" placeholder="请填写备注"></mt-field>
   </div>
</template>

<script>
    export default {
        // name: "card"
        data(){
           return{
             ffplb:'',
             fsjr:'',
             fsjrtel:'',
             fyjdz:'',
             fkdgs:'',
             fkddh:'',
             ffph:'',
             fhrqks:'',
             fhrqjs:'',
             ffp_bz:'',
           }
        }
    }
</script>

<style scoped>
  .card{
    box-shadow: 5px 5px 5px #a7a7a7;
  }
</style>
