<template>
    <div id="card" class="card" >
       <div class="card">
         <mt-field label="直接上级" readonly v-model="fzjsj" placeholder="请选择直接上级" @click.native="showPicker1"></mt-field>
         <mt-field label="收货地址" v-model="fshdz" placeholder="请填写收货地址" type="textarea" rows="2"></mt-field>
         <mt-field label="收货人" v-model="fshr" placeholder="请填写收货人"></mt-field>
         <mt-field label="收货电话" v-model="fshtel" placeholder="请填写收货电话" type="tel"></mt-field>
         <mt-field label="到货日期" v-model="fdhrq" placeholder="请填写到货日期" type="date"></mt-field>
         <mt-field label="客户类型" v-model="fkhlx" placeholder="请选择客户类型" type="text" readonly @click.native="showPicker2"></mt-field>
          <mt-field label="超授信期" v-model="fcsxq" readonly><mt-switch v-model="fcsxq"></mt-switch></mt-field>
         <mt-field label="当前欠款" v-model="fdqqk" placeholder="请填写当前欠款" type="number"></mt-field>
         <mt-field label="EAS出库单" v-model="fckdh" readonly></mt-field>
         <mt-field label="备注" v-model="ffh_bz" type="textarea" rows="3" placeholder="请填写备注"></mt-field>
         <vue-pickers :show="pickerShow1"  :selectData="fzjsjArray"
                      v-on:confirm="confirmFn"
                      v-on:cancel="close" >
         </vue-pickers>
         <vue-pickers :show="pickerShow2"  :selectData="fkhlxArray"
                      v-on:confirm="confirmFn2"
                      v-on:cancel="close" >
         </vue-pickers>

       </div>


    </div>
</template>

<script>
  import VuePickers from 'vue-pickers'
    export default {
        // name: "card"
        data(){
           return{
             fzjsj:'',
             fzjsjno:'',
             fshdz:'',
             fshr:'',
             fshtel:'',
             fdhrq:'',
             fkhlx:'',
             fdqqk:'',
             fcsxq:false,
             fckdh:'',
             ffh_bz:'',
             pickerShow1:false,
             pickerShow2:false,
             fzjsjArray:{
               columns: 1, // picker的列数
               pData1:[
                 {
                   value: '00011086',
                   text: '崔杰'
                 },
                 {
                   value: '00011082',
                   text: '张尔超'
                 },
                 {
                   value: '00035099',
                   text: '潘成'
                 },
                 {
                   value: '00011136',
                   text: '徐宁宁'
                 },
                 {
                   value: '00011138',
                   text: '李泽南'
                 },
                 {
                   value: '00011128',
                   text: '刘虎'
                 },
                 {
                   value: '00011130',
                   text: '罗海峰'
                 },
                 {
                   value: '00046139',
                   text: '黄春晓'
                 },
                 {
                   value: '00044537',
                   text: '张钧泉'
                 },
                 {
                   value: '00011157',
                   text: '李春阳'
                 },
                 {
                   value: '00039784',
                   text: '石军伟'
                 },
                 {
                   value: '00011120',
                   text: '王华强'
                 },
                 {
                   value: '00010191',
                   text: '迟殿玉'
                 },
                 {
                   value: '00034866',
                   text: '吴宪'
                 },
                 {
                   value: '00010843',
                   text: '张中雨'
                 },
                 {
                   value: '00044538',
                   text: '钱明强'
                 },
                 {
                   value: '00011152',
                   text: '刘善喜'
                 },
                 {
                   value: '00043530',
                   text: '丛少涛'
                 },
                 {
                   value: '00011111',
                   text: '庄严'
                 },
                 {
                   value: '00011135',
                   text: '刘海涛'
                 },
                 {
                   value: '00011127',
                   text: '祝天泽'
                 },
                 {
                   value: '00011139',
                   text: '段镇勇'
                 },
                 {
                   value: '00011777',
                   text: '刘克华'
                 },
                 {
                   value: '00011114',
                   text: '张文辉'
                 },
                 {
                   value: '00011117',
                   text: '张勇'
                 },
                 {
                   value: '00011104',
                   text: '于洋'
                 },
                 {
                   value: '00011113',
                   text: '于杰'
                 },
                 {
                   value: '00011155',
                   text: '韩书斌'
                 },
                 {
                   value: '00011149',
                   text: '庄寿高'
                 },
                 {
                   value: '00011102',
                   text: '黄国选'
                 },
                 {
                   value: '00011106',
                   text: '于李国'
                 },
                 {
                   value: '00051789',
                   text: '曾太平'
                 },
                 {
                   value: '00027522',
                   text: '王开宾'
                 },
                 {
                   value: '00047678',
                   text: '盛锐'
                 },
                 {
                   value: '00011124',
                   text: '刘国昌'
                 },
                 {
                   value: '00027521',
                   text: '陈辉'
                 },
                 {
                   value: '00011156',
                   text: '林海微'
                 },
                 {
                   value: '00043539',
                   text: '常齐'
                 },
                 {
                   value: '00011060',
                   text: '刘华超'
                 },
                 {
                   value: '00011105',
                   text: '李伟'
                 },
                 {
                   value: '00058559',
                   text: '郑晓亮'
                 },
                 {
                   value: '00011789',
                   text: '徐国锋'
                 }
               ]
             },
             fkhlxArray:{
                columns:1,
                pData1:[
                  {
                    value: '授信期客户',
                    text:'授信期客户'
                  },
                  {
                    value: '款到发货客户',
                    text:'款到发货客户'
                  }
                ]
             }
           }
        },
        components: {
          VuePickers
        },
      methods:{
        //确认
        confirmFn(data){
            this.fzjsj=data.select1.text;
            this.fzjsjno=data.select1.value;
          this.pickerShow1=false;
        },
        confirmFn2(data){
            this.fkhlx=data.select1.text;
            this.pickerShow2=false;
        },
        //取消or关闭
        close(){
           this.pickerShow1=false;
           this.pickerShow2=false;
        },
        //显示
        showPicker1(){
           this.pickerShow1=true;
        },
        showPicker2(){
           this.pickerShow2=true;
        },

      }
    }
</script>

<style scoped>
  .card{
     box-shadow: 5px 5px 5px #a7a7a7;
  }

</style>
