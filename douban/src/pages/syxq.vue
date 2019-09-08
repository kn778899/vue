<template>
    <div>
        <sydh></sydh>
        <span>每天看点好内容</span>
        <dk></dk>
        <div v-for='(v,i) in arr' :key='i'>
             <h4>{{v.title}}</h4>
            <img src="v.image_lmobile" alt="">
            <h3>活动详情</h3>
            <p v-html='v.content'>{{v.content}}</p>
        </div>
       
        <foot></foot>
    </div>
</template>

<script>
import sydh from '../components/sydh'
import dk from '../components/dakai'
import foot from '../components/footer'
export default {
    components:{
        sydh,
        dk,
        foot
    },
    data(){
        return{
            arr:[]
        }
    },
    created(){
        console.log(this.$route.params.id)
        this.axios({
            url:'/a',
            method:'get'
        }).then((ok)=>{
            console.log(ok.data.shouye),
            this.arr = ok.data.shouye.filter((v,i)=>{
                if(v.id==this.$route.params.id){
                    return ok.data.shouye[i]
                }
            })
        console.log(this.arr)
        })
    }
}
</script>

<style scoped>
      span{
        display: block;
        font-size: .14rem;
        color: #2ca532;
        float: left;
        line-height: .8rem;
        margin-left: .35rem;
    }
    h4{
        font-size: .17rem;
        margin-top: .2rem;
        margin-left: .2rem;
    }
    img{
        width: 2.2rem;
        height: 1.37rem;
        display: block;
        margin: .2rem auto;
    }
    h3{
        font-size: .17rem;
        color: #007722;
        margin-left: .12rem;
    }
    p{
        font-size: .14rem;
        line-height: .2rem;
        width: 95%;
        margin: 0 auto 1rem auto;
    }
</style>