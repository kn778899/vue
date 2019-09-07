<!-- 首页的导航 -->
<template>

    <div>
        <div class="com">
            <li><router-link to='/'>影院热映</router-link></li> 
            <li><router-link to='/'>欧美新碟榜</router-link></li>
        </div>
        <div class="com">
            <li><router-link to='/zhuce'>立即注册</router-link></li> 
            <li><router-link to='/denglu'>登录豆瓣</router-link></li>
        </div>
    </div>
</template>

<script>
export default {
    

}
</script>

<style scoped>
a:-webkit-any-link {
    text-decoration: none;
    color: black
} 
.com{
    width: 92%;
    margin: 0 auto;
    display: flex;
    margin-top: .1rem;
    margin-left: .28rem
}
li{
    width: 44%;
    background: rgb(247, 240, 240);
    list-style: none;
    height: .44rem;
    margin-right: .2rem;
    text-align: center;
    line-height: .44rem;
    font-size: .16rem
}
</style>