<template>
    <div>
        <router-link to='/'>
             <div class="com">
                <div class="txt">
                    <img :src="img">
                    <h5>{{txt1}}</h5>
                    <span>{{txt2}}</span>
                    <p><label>{{txt3}}</label>{{txt4}}</p>
                </div>
            </div>
        </router-link>
       
    </div>
</template>

<script>
export default {
    props:['img','txt1','txt2','txt3','txt4']
}
</script>


<style scoped>
.com{
    border-bottom: 1px solid rgb(247, 240, 240);
}
.txt{
    margin-left: .2rem;
    margin-right: .3rem;
    margin-top: .1rem;
    font-size: 0;
}
    img{
        width: .4rem;
        height: .4rem;
        float: left;
        margin-right: .1rem;
    }
    h5{
        display: block;
        font-size: .18rem;
        color: #111111;
        line-height: .4rem;
        font-weight: 400;
        margin-left: .2rem;
    }
   
    span{
        /* margin-left: 1.4rem; */
        font-size: .15rem;
        color: #cccccc;
        float: right;
        display: block;
        margin-top: -.27rem;
    }
    p{
        font-size: .15rem;
        color: #cccccc;
        margin-top: .15rem;
        text-align: left;
        margin-bottom: .1rem;
    }
    p>span{
        display: block;
    }
    a:-webkit-any-link{
        color:black;
        text-decoration: none
    }
</style>