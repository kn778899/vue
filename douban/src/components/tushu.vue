<template>
    <div>
        <div class="com">
            <img src="../../static/1.jpg" alt />
            <div class="txt">
                <div class="txta">
                    <h3>造物</h3>
                    <span>$68</span>
                </div>
            </div>
            <h6>改变世界的万物宝典</h6>
        </div>
    </div>
</template>

<script>
export default {
    // props:['txt1','txt2','txt3','img']
}
</script>

<style scoped>
.com{
    width: 100%;
    height: 1.34rem;
    margin-bottom: .2rem;
}
.com>img{
    width: 1rem;
    height: 1.3rem;
    display: block;
    float: left;
    margin-right: .2rem;
}
.txta{
    padding-top: .2rem;
}
 h3{
    font-size: .2rem;
    font-weight: 500;
    color: black;
    float: left;
}
span{
    display: block;
    font-size: .16rem;
    color: #e76648;
    float: right;
    margin-right: .25rem;
}
h6{
    font-weight: 400;
    font-size: .13rem;
    color: rgb(221, 205, 205);
    margin-top: .4rem;
}
</style>