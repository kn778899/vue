<template>
  <div>
    <h1>欢迎加入豆瓣</h1>
     <div class="con">
            <input type="text" placeholder="邮箱" v-model="inp1">
            <br>
            <input type="text" placeholder="密码" class="inp" v-model="inp2">
            <br>
            <input type='text' placeholder='用户名' class="inp1" v-model='inp3'>
            <button @click='func()'>立即注册</button>
        </div>
    <p>点击[注册]代表你已同意用户使用协议</p>
    <span>下载豆瓣App</span>
  </div>
</template>


<script>
export default {
  data(){
    return{
      inp1:'',
      inp2:'',
      inp3:''
    }
  },
  methods: {
    func(){    
      // this.axios({
      //         url:'http://localhost:9000/zhuce',
      //         method:'get',
      //         params:{
      //           email:this.inp1,
      //           pwd:this.inp2,
      //           user:this.inp3
      //         }
      //       }).then((ok)=>{
      //           if(ok.data.linkid==1){
                    this.$router.push('/denglu')
                // }else if(ok.data.linkid==0){
                //     alert('注册失败')
                // }
          // })
      }
  }
}
</script> 
<style scoped>
.con{
    text-align: center;
    font-size: 0;
    margin-top: .6rem;
}
.con>input:first-child{
    border-top-left-radius: 0.03rem;
    border-top-right-radius: 0.03rem;
}
input{
    width: 90%;
    height: .44rem;
    border: 1px solid #ccc;
    text-indent: .1rem;
    font-size: .16rem;
}
input::-webkit-input-placeholder{
        color: #ccc;
}
.inp,.inp1{
    /* border-bottom: none; */
    border-top:none 
}
button{
    width: 90%;
    height: .44rem;
    background: #17aa52;
    margin-top: .1rem;
    border: 1px solid #17aa52;
    color: white;
    font-size: .18rem;
}
input:focus {
     outline:none; 
     } 
h1 {
  font-size: 0.4rem;
  font-weight: 300;
  color: #42bd56;
  margin-top: 0.4rem;
  text-align: center;
}
p{
    font-size: .14rem;
    color: rgb(196, 196, 207);
    text-align: center;
    width: 100%;
    margin-top: .2rem;
}
span{
    display: block;
    width: 100%;
    font-size: .16rem;
    color: #42bd56;
    text-align: center;
    margin-top: .5rem
}

</style>