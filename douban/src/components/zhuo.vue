<template>
    <div>
        <div class="com">
            <router-link to='/zhuce' tag="li">注册账号</router-link>
            <router-link to='/denglu' tag="li">登录豆瓣</router-link>
            <router-link to='/' tag="li">使用桌面版</router-link>
            <router-link to='/' tag="li">App使用豆瓣App</router-link>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.com{
    width: 100%;
    height: .9rem;
    text-align: center;
    margin-top: 3rem;
    border-top: 1px solid rgb(247, 240, 240);
    border-bottom: 1px solid rgb(247, 240, 240); 
}
li{
    font-size: .15rem;
    color: #42bd56;
    list-style: none;
    width: 49%;
    float: left;
    margin-top: .17rem;
}
li:nth-child(2n-1){
    border-right: 1px solid rgb(247, 240, 240);
}
/* .coma{
    width: 100%;
    height: .45rem;
    /* border-top: 1px solid #999999;
    border-bottom: 1px solid #999999; */
    /* font-size: 0;
    
}
    a{
        width: 50%;
        font-size: .15rem;
        color: #42bd56;
        
    }
    li{
        width: 50%;
        height: .45rem;
        float: left;
        list-style: none;
        text-align: center;
        margin-top: .2rem;
    }  */
</style>