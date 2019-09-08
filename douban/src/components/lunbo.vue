<template>
    <div>
        <router-link :to= "{name:'dyxq',params:{id:zid}}">
            <div class="com">
                <img :src="img">
                <br>
                <span>{{text1}}</span>
                <div class="xx">
                    <el-rate 
                        v-model="value"
                        disabled 
                        show-score:true
                        text-color="#ff9900" 
                        show-text:flase
                    >
                    </el-rate>
                    <span>{{texts}}</span>
                </div>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    props:['text1','img','txt1','zid'],
    data() {
      return {
        value: this.txt1/2,
        texts:this.txt1
      }
    }
}
</script>

<style scoped>
.com{
        font-size: 0;

}
   .com>img{
        width: 1rem;
        height: 1.2rem;
        margin-right: 10px;
    }
    span{
        width: 1rem;
        display: block;
        margin-top: .2rem;
        font-size: .14rem;
        text-align: center;
        margin-bottom: .1rem;
    }
    span:last-child{
        width: .1rem;
        font-size: .1rem;
        color: #F7BA2A;
        display: block;
        float: right;
        margin-left: .1rem;
        line-height: .24rem;
        margin-top: -.08rem;
    }
    .xx{
        display: flex;
        font-size: 0;
    }
    a:-webkit-any-link {
    text-decoration: none;
    color: black
} 
</style>
<style>
    .el-rate__icon {
        font-size: 12px;
        margin-right: 0px;
        color: #C0C4CC;
    }
    
</style>