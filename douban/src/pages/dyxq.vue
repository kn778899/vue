<template>
    <div>
        <sydh></sydh>
        <span>聊聊你的观影感受</span>
        <dk></dk>
    <div class="com">
      {{this.$route.query.id}}
        <h1></h1>
        <img src="" alt="">
        <h3>评语</h3>
        <p></p>
    </div>
       
    </div>
</template>

<script>
import sydh from '../components/sydh'
import dk from '../components/dakai'
export default {
    components:{
        sydh,
        dk
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
           console.log(ok.data.movie),
            this.arr = ok.data.movie.filter((v,i)=>{
                if(v.id==this.$route.query.id){
                    return ok.data.movie[i]
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
        margin-left: .38rem;
    }
    h1{
        font-size: .2rem;
    }
    h3{
        font-size: .16rem;
    }
    p{
        font-size: .14rem;
        line-height: .2rem
    }
    .com{
        width: 95%;
        margin: .2rem auto;
    }
    img{
        width: 2.2rem;
        height: 1.3rem;
        display: block;
        margin: .2rem auto
    }
</style>