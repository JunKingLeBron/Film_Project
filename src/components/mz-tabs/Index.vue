<template>
 <!-- 菜单栏选项 -->
  <section class="film-list">
      <section class="menu_wrapper">
        <section class="menu_top">
          <router-link to="/film/nowPlaying" class="menu-name" active-class="menu-active">正在上映</router-link>
          <router-link to="/film/comingSoon" class="menu-name" active-class="menu-active">即将上映</router-link>
        </section>
      </section>
  </section>
</template>

<style lang="less">
/* 菜单栏选项 */
.film-list{
  background:#ededed;
  height:100%;
}
.menu_wrapper{
  height:100%;
  display:flex;
  flex-direction: column;
  width:100%;
  overflow-x:hidden;
  .menu_top{
    background:#fff;
    height: 50px;
    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid #f6f6f6;
    .menu-name{
      width: 60px;
      font-size: 14px;
      line-height: 50px;
      &.menu-active{
        color: #ff5f16;
        border-bottom: 2px solid #ff5f16;
      }
    }
  }
}
</style>
