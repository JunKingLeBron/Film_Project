<template>
  <footer class="mz-footer">
    <router-link to="/film/nowPlaying" active-class="a">
      <i class="iconfont icon-dianying"></i>电影
    </router-link>
    <router-link to="/cinema" active-class="a">
      <i class="iconfont icon-yingyuana"></i>影院
    </router-link>
    <router-link to="/goodsLink" active-class="a">
      <i class="iconfont icon-pintuanzhuanqu"></i>9.9拼团
    </router-link>
    <router-link to="/login" active-class="a">
      <i class="iconfont icon-wode"></i>我的
    </router-link>
  </footer>
</template>
<style lang="less">
  .mz-footer {
    height: 48px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background: #fff;
    a {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: #797d82;
      text-decoration: none;

      i {
        font-size: 21px;
      }

      // 当前被激活的 a
      &.a {
        color: #ff5f16;
      }
    }
}
</style>
