<template>
    <div>
        <div class="txt">
            <span @click='func()'>关闭</span>
            <input type="text">
        </div>
        <div v-for='(v,i) in arr' :key='i'>
            <lbit :str='v'></lbit>
        </div>
        <zh></zh>
    </div>
</template>

<script>
import lbit from '../components/lbit'
import zh from '../components/zhuo'
export default {
    components:{
        lbit,
        zh
    },
    data(){
        return{
            arr:[]
        }
    },
    created() {
        this.axios({
            url:'/a',
            method:'get'
        }).then((ok)=>{
            this.arr=ok.data.faxianhaodianying
        })
    },
    methods:{
        func(){
            this.$router.go(-1)
        }
    }
}
</script>

<style scoped>
   .txt{
       width: 100%;
       padding-right:.2rem;
       padding-left: .2rem;
       font-size: 0; 
       height: .49rem;
       background:white;
       border-bottom: 1px solid rgb(247, 240, 240);
   }
   span{
       font-size: .16rem;
       color: #42bd56;
       margin-right: .2rem;
   }
   input{
       height: .32rem;
       width: 75%;
       border-radius:.05rem; 
       margin-top: .07rem; 
       border: 1px solid #f3f3f3;
       background: #f3f3f3;
       outline: none
   }
</style>