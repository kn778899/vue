<!--登录页面的顶部-->
<template>
    <div>
        <div class="top">
            <span @click='func()'>取消</span>
            <h4>登录豆瓣</h4>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        func(){
            this.$router.go(-1)
        }
    }
}
</script>

<style scoped>
    .top{
        height: .46rem;
        text-align: center;
        font-size: .2rem;
        display: flex;
        border-bottom: 1px solid #ccc;
        line-height: .46rem;
        position: relative;
    }
    span{
        margin-left: .1rem;
        position: absolute;
        left: .15rem;
        font-size: .16rem;
        color: #42bd56;
    }
    h4{
        margin: 0 auto
    }
</style>