<template>
<!-- 放置一个坑。后面页面切换（路由切换）就会按照路由对照表的配置去渲染这个坑的内容 -->
  <transition appear mode="out-in" enter-active-class="animated bounceInUp" leave-active-class="animated bounceOutDown">
      <router-view></router-view>
  </transition>
</template>

<script>
export default {
  // 引入全局的获取本地城市得到actions ,vuex.dispatch实例方法，分发action,允许在命名空间模块(唯一的模块模块，内部的 action、mutation 和 getter)里分发action ，在全局可拿到这个action
  created () {
    Promise.all([this.$store.dispatch('getCityData'), this.$store.dispatch('getLocalCityName')]).then(result => {
      this.$store.dispatch('getCityId');
    })
  }
}
</script>
