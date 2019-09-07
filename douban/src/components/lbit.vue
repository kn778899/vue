<template>
    <div>
        <div class="com">
            <div>
                <h3 :style="str">电影</h3>
                <h6>影院热映</h6>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['str']
}
</script>

<style scoped>
    .com{
        width: 96%;
        margin: 0 auto;
    }
    .com>div{
        width: 33%;
        text-align: center;
        margin-top: .3rem;
        float: left;
    }
    h3{
        font-size: .24rem;
        font-weight: 400;
    }
    h6{
        font-size: .12rem;
        font-weight: 400;
        color: #999999;
    }
</style>