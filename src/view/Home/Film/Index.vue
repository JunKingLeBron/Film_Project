<template>
  <div class="mz-film">
    <MzBanner></MzBanner>
    <MzTabs></MzTabs>
    <router-view></router-view>
  </div>
</template>

<script>
import MzBanner from '@/components/mz-banner/Index';
import MzTabs from '@/components/mz-tabs/Index';
export default {
  // 局部注册组件
  components: {
    MzBanner,
    MzTabs
  }
}
</script>
<style lang="less">
  .mz-film{
    display:flex;
    flex-direction: column;
    overflow-x:hidden;
    background:#ededed;
    height:100%;
  }
</style>
