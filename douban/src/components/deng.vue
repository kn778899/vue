<template>
    <div>
        <router-link to='/denglu'>
            <div class="tit">
                <div class="left">
                    <img src="../../static/tx.jpg" alt="">
                    <span>请先登录</span>
                </div>
                <div class="right">
                    <img src="../../static/qb.svg" alt="">
                    <img src="../../static/xj.svg" alt="">
                </div>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .tit{
        width: 100%;
        margin: 0 auto;
        height: .6rem;
        font-size: .4rem;
        border-bottom: 1px solid rgb(247, 240, 240);

    }
    .left{
        float: left;
        display: flex;
        margin-left:.2rem; 
    }
    .left img{
        width:.4rem;
        height:.4rem;
        margin-top: .1rem;
        margin-right: .2rem;
    }
    span{
        display: block;
        font-size: .15rem;
        color: #aaaaaa;
        margin-top: .2rem;
    }
    .right{
        float: right;
        margin-right: .15rem;
    }
    .right img{
        width: .24rem;
        height: .24rem;
        margin-right: .2rem
    }
    a:-webkit-any-link{
        font-size: .14rem;
        color:black;
        text-decoration: none
    }
</style>