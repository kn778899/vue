<template>
    <div>
        <sydh></sydh>
        <daohang></daohang>
        <img src="../../static/gt.gif" v-if='arr.length<=0'>
    <div v-else>
        <item v-for="(v,i) in arr" :key='i' :text1='v.title' :text2='v.tags' :text3='v.category_name' :img='v.image_lmobile' :tId='v.uid'></item>
    </div>
    </div>
</template>

<script>
import daohang from '../components/daohang'
import sydh from '../components/sydh'
import item from '../components/items'
export default {
    components:{
        sydh,
        daohang,
        item
    },
    data(){
        return{
            arr:[]
        }
    },
    created() {
       
        setTimeout(()=>{
                this.axios({
                url:'/a',
                method:'get'
            }).then((ok)=>{
                this.arr=ok.data.shouye
            })
        },3000)
    }
}
</script>


<style scoped>
    div{
        font-size: .2rem
    }
    img{
        display: block;
        margin: 0 auto
    }
</style>