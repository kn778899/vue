<template>
    <div>
        <sydh></sydh>
        <span>打开APP,浏览更多</span>
        <dk></dk>
        <deng v-if='sty'></deng>

        <rj></rj>
        <rj></rj>
        <rj></rj>
        <p>显示更多广播</p>
        <foot></foot>
    </div>
</template>

<script>
import sydh from '../components/sydh'
import dk from '../components/dakai'
import deng from '../components/deng'
import rj from '../components/riji'
import foot from '../components/footer'
export default {
    components:{
        sydh,
        dk,
        deng,
        rj,
        foot
    },
    data(){
        return{
            sty:'true'
        }
    },
    created() {
        var token=window.localStorage.getItem('token',token);
        if(token){
            this.axios({
                url:'http://localhost:9000/tok',
                method:'get',
                params:{
                    token:token
                }
            }).then((ok)=>{
                 if(ok.data.ook==true){
                    this.sty=''
                }else{
                    this.$router.push('/zhuce')
                }
            })
        }
    }
}
</script>

<style scoped>
    p{
        color: #42bd56;
        font-size: .16rem;
        text-align: center;
        margin-top: .2rem;
    }
    span{
        display: block;
        font-size: .14rem;
        color: #2ca532;
        float: left;
        line-height: .8rem;
        margin-left: .38rem;
    }
</style>