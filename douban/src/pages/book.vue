<template>
  <div>
      <sydh></sydh>
      <router-link to="/">
        <yyry :text4="dataa[1]" :text2="arr"></yyry>
        <yyry :text4="dataa[0]" :text2="arr"></yyry>
        <yyry :text4="dataa[0]" :text2="arr"></yyry>
      </router-link>
      <router-link to="/" tag="li">
        发现好书
        <span>更多</span>
      </router-link>

      <div class="com">
        <hd v-for="(v,i) in arr1" :key="i" :text="v.title" :styleStr="v" :bool="v.line"></hd>
      </div>
      <ll></ll>
      <foot></foot>
    </div>
</template>

<script>
import sydh from "../components/sydh";
import yyry from "../components/yingyuanreying";
import hd from "../components/huadong";
import ll from "../components/liulan";
import foot from "../components/footer";
export default {
  components: {
    sydh,
    yyry,
    hd,
    ll,
    foot
  },
  data() {
    return {
      dataa: ["最受关注图书 | 虚构类", "豆瓣纸书"],
      arr: [],
      arr1: []
    };
  },
  created() {
    this.axios({
      url: "/a",
      method: "get"
    }).then(ok => {
      this.arr = ok.data.books;
      this.arr1 = ok.data.goodBook;
    });
  }
};
</script>

<style scoped>
div{
  font-size: 0;
}
.com {
  width: 100%;
  display: flex;
  overflow: auto;
  height: 1.4rem;
  font-size: 0px;
}
li {
  font-size: 0.17rem;
  color: #111111;
  list-style: none;
  height: 0.52rem;
  line-height: 0.52rem;
  font-size: 0.17rem;
  color: #111111;
  padding-left: 0.2rem;
  padding-right: 0.2rem;
  margin-top: -0.2rem;
}
span {
  float: right;
  font-size: 0.15rem;
  color: #42bd56;
}
a:-webkit-any-link {
  font-size: 0.14rem;
  color: black;
  text-decoration: none;
}
</style>