<template>
    <div>
        <sydh></sydh>
        
       <router-link to='/'>
            <yyry :text2='funa' :text4='dataa[0]'></yyry>
            <yyry :text2='funb' :text4='dataa[1]'></yyry>
            <yyry :text2='func' :text4='dataa[2]'> </yyry>
       </router-link>
        <router-link to='/' tag='li'>发现好电影<span>更多</span></router-link>
        <div class="com">
            <hd v-for="(v,i) in arr" :key='i' :text='v.title' :styleStr='v' :bool='v.line'></hd>
        </div>
        <ll></ll>
        <foot></foot>
    </div>
</template>

<script>
import sydh from '../components/sydh'
import yyry from '../components/yingyuanreying'
import hd from '../components/huadong'
import ll from '../components/liulan'
import foot from '../components/footer'
export default {
    components:{
        sydh,
        yyry,
        hd,
        ll,
        foot
    },
    data(){
        return{
            arr:[],
            arr1:[],
            dataa:['影院热映','免费在线电影','新品速递'],
            id:''
        }
    },
    created() {
        this.axios({
            url:'/a',
            method:'get'
        }).then((ok)=>{
            this.arr=ok.data.faxianhaodianying;
            this.arr1=ok.data.movie;

        })
    },
    computed: {
        funa(){
            var a=this.arr1;
            var b=a.slice(0,10);
            return b;
        },
        funb(){
            var a=this.arr1;
            var b=a.slice(10,20);
            return b;
        },
        func(){
            var a=this.arr1;
            var b=a.slice(20,30);
            return b;
        },
        fund(){
            var a=this.arr;
            var b=a.slice(0,3);
            return b;
        }
    }
    
}
</script>

<style scoped>
div{
    font-size: 0;
}
    .com{
        width: 100%;
        display: flex;
        overflow: auto;
        height: 1.4rem;
    }
    li {
    font-size: .17rem;
    color: #111111;
    list-style:none;
    height: .52rem;
    line-height: .52rem;
    font-size: .17rem;
    color: #111111;
    padding-left: .2rem;
    padding-right: .2rem;
    margin-top: -0.2rem;
}
span{
    float: right;
    font-size: .15rem;
    color: #42bd56;
}
a:-webkit-any-link{
    font-size: .14rem;
    color:black;
    text-decoration: none
}
</style>