<template>
    <div id="main" class="main">
        <mt-field label="申请人" readonly v-model="fname"></mt-field>
        <mt-field label="所属区域" readonly v-model="fqy" placeholder="请选择所属区域" @click.native="showPicker1"></mt-field>
        <mt-field label="申请日期"  v-model="fsqrq" placeholder="请选择申请日期" type="date"></mt-field>
        <mt-field label="申请类型" v-model="fsqlx" placeholder="请选择申请类型" readonly @click.native="showPicker2"></mt-field>
        <mt-field label="客户名称" v-model="fkhmc" placeholder="请选择客户名称" readonly></mt-field>

        <vue-pickers :show="pickerShow1"  :selectData="fqyArray"
                     v-on:confirm="confirmFn"
                     v-on:cancel="close" >

        </vue-pickers>
        <vue-pickers :show="pickerShow2"  :selectData="fsqlxArray"
                   v-on:confirm="confirmFn2"
                   v-on:cancel="close" >

        </vue-pickers>
    </div>

</template>

<script>
    import VuePickers from 'vue-pickers'
    export default {
        // name: "main"
        data(){
          return {

            fname:'',
            fqy:'',
            fsqrq:'',
            fsqlx:'',
            fkhmc:'',
            pickerShow1:false,
            pickerShow2:false,
            fqyArray:
              {
                columns: 1, // picker的列数
                pData1:[
                  {
                    text:'营销一区_内镜洗消专线',
                    value:'营销一区_内镜洗消专线'
                  },
                  {
                    text:'营销一区_消毒产品专线',
                    value:'营销一区_消毒产品专线'
                  },
                  {
                    text:'营销一区_肾科产品专线',
                    value:'营销一区_肾科产品专线'
                  },
                  {
                    text:'营销一区_药品专线',
                    value:'营销一区_药品专线'
                  },
                  {
                    text:'营销二区_黑龙江',
                     value:'营销二区_黑龙江'
                  },
                  {
                     text:'营销二区_吉林',
                     value:'营销二区_吉林'
                  },
                  {
                    text:'营销二区_辽宁',
                    value:'营销二区_辽宁'
                  },
                  {
                    text:'营销二区_内蒙',
                    value:'营销二区_内蒙'
                  },
                  {
                    text:'营销三区_四川',
                    value:'营销三区_四川'
                  },
                  {
                    text:'营销三区_重庆',
                    value:'营销三区_重庆'
                  },
                  {
                    text:'营销三区_云贵',
                    value:'营销三区_云贵'
                  },
                  {
                    text:'营销四区_湖北',
                    value:'营销四区_湖北'
                  },
                  {
                    text:'营销四区_湖南江西',
                    value:'营销四区_湖南江西'
                  },
                  {
                    text:'营销四区_两广海南',
                    value:'营销四区_两广海南'
                  },
                  {
                    value:'营销五区_上海',
                    text:'营销五区_上海'
                  },
                  {
                    value:'营销五区_江苏',
                    text:'营销五区_江苏'
                  },
                  {
                    value:'营销五区_浙江',
                    text:'营销五区_浙江'
                  },
                  {
                    value:'营销五区_福建',
                    text:'营销五区_福建'
                  },
                  {
                    value:'营销六区_陕甘宁青新',
                    text:'营销六区_陕甘宁青新'
                  },
                  {
                    value:'营销六区_山西',
                    text:'营销六区_山西'
                  },
                  {
                    value:'营销七区_京津',
                    text:'营销七区_京津'
                  },
                  {
                    value:'营销七区_河北',
                    text:'营销七区_河北'
                  },
                  {
                    value:'营销八区_安徽',
                    text:'营销八区_安徽'
                  },
                  {
                    value:'营销八区_河南',
                    text:'营销八区_河南'
                  }

                ]

              },
            fsqlxArray:{
              columns: 1, // picker的列数
              pData1:[
                {
                  value:'发货申请',
                  text:'发货申请'
                },
                {
                  value:'发票申请',
                  text:'发票申请'
                },
                {
                  value:'发货/发票申请',
                  text:'发货/发票申请'
                }
              ]
            }


          }
        },
       components: {
          VuePickers
       },
        methods:{
            //获取基础信息
            getBaseInfo(){
              var  version ='1.0';
               let path='\\05药业集团\\01跨子公司\\13_市场营销',name='药业集团发货、发票开具申请';
               console.log(this);
               var me=this;
               var promise=new Promise(function (resolve,reject) {

                 me.$jquery.ajax({
                    type: 'get',
                    url: "/api/bpm/GetProcessDefine",
                    data: { 'path': path, 'name': name },
                    beforeSend: function (XHR) {
                      XHR.setRequestHeader('Authorization', 'Basic ' + localStorage.getItem('ticket'));
                    }
                  }).done((data)=>{
                     version = data.Version;
                  }).fail((e)=>{
                     console.log(e);
                     reject(e);
                  })
               }) ;

                //利用promise对象解决ajax嵌套，并通过之前ajax获取的版本信息作为参数获取流程的基本信息
                promise.then((data)=>{
                  var xml=`<?xml version= "1.0" ?>
                      <Requests>
                      <Params>
                      <Method>GetFormPostData</Method>
                      <ProcessName>药业集团发货、发票开具申请</ProcessName>
                      <ProcessVersion>${version}</ProcessVersion>
                      <Owner></Owner>
                      </Params>
                      </Requests>
                     `;
                  me.$jquery.ajax({
                    type: "POST",
                    url: "/api/bpm/DataProvider",
                    data: { '': xml },
                    beforeSend: function (XHR) {
                      XHR.setRequestHeader('Authorization', 'Basic ' + localStorage.getItem('ticket'));
                    }
                  }).done((data)=>{
                    var provideData = JSON.parse(unescape(data.replace(/\\(u[0-9a-fA-F]{4})/gm, '%$1')));
                    console.log(provideData);
                    var item = provideData.Tables[0].Rows[0];
                    this.fname=item.fname;

                  }).fail((e)=>{
                    console.log(e);
                  }).then(()=>{

                  });
                })

            },
            getUserInfo(){
              this.$jquery.ajax({
                type: 'get',
                url: "/api/bpm/GetBPMParam",
                data: {},
                beforeSend: function (XHR) {
                  XHR.setRequestHeader('Authorization', 'Basic ' + localStorage.getItem('ticket'));
                }
              }).done( (data)=> {
                BPMOU = data.Position[0].FullName;
                accountBPM = data.BPMUser.Account;
                localStorage.setItem('accountBPM',accountBPM);
              }).fail((e)=>{

              });
            },
            //关闭弹出层
            close(){
               this.pickerShow1=false;
               this.pickerShow2=false;
            },
          //显示picker1
          showPicker1(){
            this.pickerShow1=true;
          },
          //显示picker2
          showPicker2(){
              this.pickerShow2=true;
          },

          confirmFn(data){
            this.fqy = data.select1.text;
            this.pickerShow1=false;
          },
          confirmFn2(data){
            this.fsqlx = data.select1.text;
            this.pickerShow2=false;
          }

        },
        created(){
           //this.getBaseInfo();
           //this.getUserInfo();
           var date=new Date();
           let year= date.getFullYear();
           let month=date.getMonth()+1<10?'0'+(date.getMonth()+1):(date.getMonth()+1);
           let day=date.getDate()<10?'0'+date.getDate():date.getDate();
           console.log(year+'/'+month+'/'+day);
           this.fsqrq=year+'-'+month+'-'+day;
        }

    }
</script>

<style scoped>
.main{
  box-shadow: 5px 5px 5px #a7a7a7;
}
</style>
