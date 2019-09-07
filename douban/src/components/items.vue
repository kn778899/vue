
<template>
    <div class="com_main">
        <router-link to= "{name:'xiangqing',params:{id:'tId'}}">
            <div class="com_a">
                <div class="com_txt">
                    <h4>{{text1}}</h4>
                    <h6>{{text2}}</h6>
                    <h5>{{text3}}</h5>
                </div>
                <div class="img">
                    <img :src="img" alt="">
                </div>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    props:{
        text1:{
            type:String,
            required:true
        },
        text2:{
            type:String,
            required:true
        },
        text3:{
            type:String,
            required:true
        },
        img:{
            type:String,
            required:true
        },
        tId:{
            type:String,
            required:true
        }
    }
}

</script>

<style scoped>
.com_main{
    width: 100%;
    display: flex;
}
.com_a{
    width: 88%;
    display: flex;
    margin: 0 auto;
    margin-top: .2rem;
    padding-bottom: .2rem;
    border-bottom: 1px solid rgb(247, 240, 240);
}
.com_txt{
    width: 70%;
    margin-right: .15rem
}
img{
    width: .9rem;
    height: .8rem;
}
h4{
    font-size: .17rem;
    font-weight: 400;
    color: #494949;
}
h6{
    margin-top: .17rem;
    font-weight: 400;
    color: #aaaaaa;
    font-size: .12rem;
}
h5{
    margin-top: .19rem;
    font-weight: 400;
    color: #cccccc;
    font-size: .12rem;
}
a:-webkit-any-link {
    text-decoration: none;
}
</style>