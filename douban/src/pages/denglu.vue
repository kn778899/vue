<template>
    <div>
        <db></db>
        <div class="con">
            <input type="text" placeholder="邮箱" v-model="inp1">
            <br>
            <input type="text" placeholder="Token" class="inp" v-model="inp2">
            <button @click='func1()'>登录</button>
        </div>
        <h5>使用其他方式登录&找回密码</h5>
        <div class="com">
            <p @click='func()'>注册豆瓣账号</p>
            <p>下载豆瓣app</p>
        </div>
    </div>
</template>

<script>
import db from '../components/dingbu'
export default {
    components:{
        db
    },
    data(){
        return{
            inp1:'',
            inp2:''
        }
    },
    methods:{
        func(){
           this.$router.push('/zhuce')
        },
        func1(){
            // let param=new URLSearchParams();
            // param.append('email',this.inp1)
            // param.append('pwd',this.inp2)
            // this.axios({
            //     url:'http://localhost:9000/denglu',
            //     method:'post',
            //     data:param
            // }).then((ok)=>{
            //     if(ok.data.linkid==3){
                    this.$router.push('/xiaozu');
            //         console.log(ok.data.token)
            //         window.localStorage.setItem('token',ok.data.token);
            //     }else if(ok.data.linkid==4){
            //         alert('登录失败')
            //     }
                
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

h5{
    font-size: .15rem;
    font-weight: 400;
    color: #ccc;
    text-align: center;
    margin-top: .2rem
}
.com{
    display: flex;
    width: 80%;
    margin: 0 auto;
    margin-left: .7rem
}
p{
    width: 40%;
    font-size: .15rem;
    text-align: center;
    margin-top: .5rem;
    color: #42bd56;
}
</style>