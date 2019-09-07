<!--电影二级也面的滑动 -->
<template>
    <div>
        <div class="com_main">
            <span :style='styleStr'>{{text}}</span>
            <br/>
        </div>
    </div>
</template>

<script>
export default {
  
    props:['text','styleStr','bool'],
}
</script>

<style scoped>
   .com_main{
        width: 100%;
   }
    span{
        display:block;
        height: .45rem;
        font-size: .16rem;
        line-height: .45rem;
        padding-left: .1rem;
        padding-right: .1rem;
        border: 1px solid rgb(255, 172, 45);
        border-radius: .03rem;
        margin-left: .2rem;
        white-space: nowrap; 
    }
  
</style>