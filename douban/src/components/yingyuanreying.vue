<template>
    <div>
        <div class="com">
            <router-link to='/' tag='li'>{{text4}}<span>更多</span></router-link>
            <div class="com1" >
                <lb v-for='(v,i) in text2' :key='i' :text1='v.title' :img='v.images.small' :zid='v.casts[0].id' :txt1='v.rating.average'></lb>
            </div>
        </div>
    </div>
</template>

<script>
import lb from './lunbo'
export default {
    components:{
        lb
    },
    data(){
        return{
            tex:''
        }
    },
    props:['text2','text4'],
   methods: {
       func(val){
           this.tex=val;
           console.log(this.tex)
       }
   },
    
}
</script>

<style scoped>
.com{
    width: 90%;
    margin: -.3rem auto;
    margin-bottom: 0;
    margin-top: .05rem;
}
li {
    font-size: .17rem;
    color: #111111;
    list-style:none;
    height: .52rem;
    line-height: .52rem;
    font-size: .17rem;
    color: #111111;
}
span{
    float: right;
    font-size: .15rem;
    color: #42bd56;
}
.com1{
    display: flex;
    overflow: auto;
}
</style> 