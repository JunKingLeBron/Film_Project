//这是一个一级路由，他包裹着 film cinema wode 这些二级路由
<template>
  <div class="mz-home">
    <!-- 这里得要有个坑，去显示 film cinema wode -->
    <transition appear mode="out-in" enter-active-class="animated bounceInUp" leave-active-class="animated bounceOutDown">
      <router-view></router-view>
    </transition>
    <!-- 底部导航按钮组件 -->
    <MzFooter></MzFooter>
  </div>
</template>

<script>
import MzFooter from '@/components/mz-footer/Index.vue';
export default {
  components: {
    MzFooter
  }
}
</script>
