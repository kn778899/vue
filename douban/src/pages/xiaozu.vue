<template>
    <div>
        <sydh></sydh>
        <deng v-if='sty'></deng>
        <div>
            <h4>成都租房</h4>
            <xz v-for='(v,i) in arra' :key='i' :img='v.images.small' :txt1='v.title' :txt2='v.group_member' :txt3='v.group_topic.time' :txt4='v.group_topic.title'></xz>
            <p>更多相关小组</p>
        </div>

        <div>
            <h4>来聊5块钱</h4>
            <xz  v-for='(v,i) in arrb' :key='i' :img='v.images.small' :txt1='v.title' :txt2='v.group_member' :txt3='v.group_topic.time' :txt4='v.group_topic.title'></xz>
            <p>来聊5块钱</p>
        </div>

        <div>
            <h4>买买买</h4>
            <xz  v-for='(v,i) in arrc' :key='i' :img='v.images.small' :txt1='v.title' :txt2='v.group_member' :txt3='v.group_topic.time' :txt4='v.group_topic.title'></xz>
            <p>更多相关小组</p>
        </div>
        <foot></foot>
    </div>
</template>

<script>
import sydh from '../components/sydh'
import deng from '../components/deng'
import xz from '../components/xzitem'
import foot from '../components/footer'
export default {
    components:{
        sydh,
        deng,
        xz,
        foot
    },
    data(){
        return{
            arra:[],
            arrb:[],
            arrc:[],
            sty:'true'
        }
    },
    created() {
        this.axios({
            url:'/a',
            method:'get'
        }).then((ok)=>{
          
            this.arra=ok.data.xiaozua;
            this.arrb=ok.data.xiaozub;
            this.arrc=ok.data.xiaozuc;
            console.log( this.arra);
        })
    }
    // ,
    // created() {
    //     var token= window.localStorage.getItem('token',token);
    //         if(token){
    //             this.axios({
    //             url:'http://localhost:9000/tok',
    //             method:'get',
    //             params:{
    //                 token:token
    //             }
    //         }).then((ok)=>{
    //             console.log(ok.data)
    //             if(ok.data.ook==true){
    //                 this.sty=''
    //             }else{
    //                 this.$router.push('/zhuce')
    //             }
    //         })
    //     }
    // },
}
</script>

<style scoped>
    h4{
        font-size: .18rem;
        color: #111111;
        line-height: .4rem;
        font-weight: 400;
        margin-left: .2rem;
        margin-top: .2rem;
    }
    p{
        color: #42bd56;
        font-size: .16rem;
        text-align: center;
        margin-top: .2rem;
    }

</style>