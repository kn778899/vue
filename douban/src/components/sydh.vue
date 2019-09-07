<template>
    <div>
        <div class="com">
            <router-link to='/shouye' tag="h3">豆瓣</router-link>
            <ul>
                <router-link to="/dianying" tag="li">电影</router-link>
                <router-link to='/book' tag="li">图书</router-link>
                <router-link to='/xiaozu' tag="li">小组</router-link>
                <router-link to='/guangbo' tag="li">广播</router-link>
                <router-link to='/liebiao'><img src="../../static/xiangqing.png"></router-link> 
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.com{
    height: .49rem;
    width: 100%;
    /* margin-bottom: .3rem; */
    border-bottom: 1px solid rgb(247, 240, 240)
}
h3{
    width: 30%;
    line-height: .49rem;
    margin-left: .2rem;
    font-weight: 600;
    float: left;
    color: #00b600;
    font-size: .24rem
}
ul{
    width: 60%;
    float: right;
}
li{
    list-style: none;
    float: left;
    line-height: .49rem;
    margin-left: .05rem;
    margin-right: .05rem;
    font-size: .16rem;
}
li:first-child{
    color: rgb(35, 132, 232);
}
li:nth-child(2){
    color:rgb(159, 120, 96);
}
li:nth-child(3){
   color: rgb(228, 168, 19)
}
li:nth-child(4){
    color: rgb(42, 184, 204);
    margin-right: .15rem;
}
img{
    width: .24rem;
    height: .18rem;
    line-height: .49rem;
    margin-top: .19rem;
    margin-left: .05rem;
    display: block
}
</style>