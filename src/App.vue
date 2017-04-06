<!-- as usual, template -->
<template>
  <!-- app -->
  <div id="app">
    <!-- dheader, define below, which just header -->
    <Dheader></Dheader>

    <transition name="fade">
      <keep-alive exclude="moviesDetail">
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'hello vue'
    }
  },
  components: {
    // component
    // dheader
    // it is a func
    // this func, actual require
    // what is resolve as param????????
    'Dheader': (resolve) => {
      // why require an array?????
      // what is resolve for ....????
      require(['./header'], resolve)
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less">

  *{
    margin: 0;
    padding: 0;
    font-family: '微软雅黑';
  }
</style>
