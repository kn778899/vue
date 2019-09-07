<!--每个页面的底部-->

<template>
    <div>
            <div class="coma">
                <div class="img">
                    <img src="../../static/dou.png" alt="">
                </div>
                <div class="txt">
                    <h2>豆瓣</h2>
                    <h4>我们的精神角落</h4>
                    <span>去App Store 免费下载 IOS 客户端</span>
                </div>
                
            </div>
        </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.coma{
    height: 1.3rem;
    margin-top: .4rem;
}

   img{
       width: .48rem;
       height: .48rem;
       float: left;
       margin-left:1.2rem;
       text-align: center;
       margin-right: .05rem;
   }
   .txt{
       float: left;
       /* margin-bottom: .2rem; */
   }
   h2{
       font-size: .24rem;
       font-weight: 500;
       color: black    
   }
   h4{
       font-size: .14rem;
       font-weight: 400;
       color: black
   }
   span{
        display: block;
        font-size: .13rem;
        color: #42bd56;
        margin-left: -.8rem;
        margin-bottom: .7rem;
        margin-top: .3rem;
   }
</style>