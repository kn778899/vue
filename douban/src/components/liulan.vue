<template>
    <div>
        <div class="com">
            <router-link to='/' tag="li">经典<span>&gt;</span></router-link>
            <router-link to='/' tag="li">冷门佳片<span>&gt;</span></router-link>
            <router-link to='/' tag="li">豆瓣高分<span>&gt;</span></router-link>
            <router-link to='/' tag="li">经典<span>&gt;</span></router-link>
            <router-link to='/' tag="li">经典<span>&gt;</span></router-link>
            <router-link to='/' tag="li">经典<span>&gt;</span></router-link>
            <router-link to='/' tag="li">经典<span>&gt;</span></router-link>
            <router-link to='/' tag="li">经典<span>&gt;</span></router-link>
            <router-link to='/' tag="li">经典<span>&gt;</span></router-link>
            <router-link to='/' tag="li">经典<span>&gt;</span></router-link>
            <router-link to='/' tag="li">经典<span>&gt;</span></router-link>
            <router-link to='/' tag="li">经典<span>&gt;</span></router-link>
            <router-link to='/' tag="li">经典<span>&gt;</span></router-link>
            <router-link to='/' tag="li">经典<span>&gt;</span></router-link>
            <router-link to='/' tag="li">经典<span>&gt;</span></router-link>
            <router-link to='/' tag="li">经典<span>&gt;</span></router-link>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>

<style scoped>
.com{
    margin-left: .2rem;
    margin-right: .1rem;
    margin-bottom: .42rem;
    margin-top: -.4rem;
}
   li{
       width: 49%;
       list-style: none;
       font-size: .16rem;
       color: #42bd56;
       float: left;
       border: 1px solid #cccccc;
       border-left: none;
       height: .42rem;
       line-height: .42rem;
       border-bottom:none; 
   }
   li:last-child,li:nth-last-child(2){
       border-bottom: 1px solid #cccccc;
   }
   li:last-child{
       margin-bottom: .5rem;
   }
   li:nth-child(2n){
       text-indent: .2rem;
   }
   span{
       float: right;
       margin-right: .2rem;
   }
</style>