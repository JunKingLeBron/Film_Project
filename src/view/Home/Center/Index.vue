<template>
  <div>
    <!-- 头部，登录 -->
    <header class="mz-center">
      <section class="header-login">
        <span class="touxiang iconfont icon-weidenglu-touxiang"></span>
        <router-link tag="span" to="/nowlogin" class="login-now" v-html="nickname">{{ nickname }}</router-link>
      </section>
    </header>
    <!-- 顶部菜单 -->
    <section>
      <section class="menu-top">
        <router-link tag="div" to="/order" class="menu-top-list">
          <span class="film-order iconfont icon-dingdan"></span>
          <section>电影订单</section>
        </router-link>
        <router-link tag="div" to="/grouporder" class="menu-top-list">
          <span class="tuan-order iconfont icon-ziyuan"></span>
          <section>拼团订单</section>
        </router-link>
      </section>
    </section>
    <!-- 主体选项栏 -->
    <section class="menu-main">
      <router-link tag="div" to="/card" class="menu-main-list">
        <section class="menu-left">
          <span class="icon-card iconfont icon-qiaquan"></span>
          <section class="menu-word">卖座卡</section>
        </section>
        <section class="menu-right">
          <span class="youjiantou">></span>
        </section>
      </router-link>
      <router-link tag="div" to="/money" class="menu-main-list">
        <section class="menu-left">
          <span class="iconfont icon-yue"></span>
          <section class="menu-word">余额</section>
        </section>
        <section class="menu-right">
          <span class="yue-num">￥0</span>
          <span class="youjiantou">></span>
        </section>
      </router-link>
      <router-link tag="div" to="/setting" class="menu-main-list">
        <section class="menu-left">
          <span class="shezhi iconfont icon-shezhi"></span>
          <section class="menu-word">设置</section>
        </section>
        <section class="menu-right">
          <span class="youjiantou">></span>
        </section>
      </router-link>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      nickname: sessionStorage.getItem('nickname') || '立即登录'
    }
  }
}
</script>

<style lang="less">
  .mz-center{
    height:156px;
    background:url(https://assets.maizuo.com/h5/v5/public/app/img/bg.6837f67.png) no-repeat;
    background-size: cover;
  }
  .header-login{
    height:156px;
    display:flex;
    justify-content:flex-start;
    align-items:center;
    align-content:center;
    margin-left:22px;
  }
  .touxiang{
    font-size: 66px;
    color:#fff;
  }
  .login-now{
    color: #fff;
    margin-left: 20px;
  }
  .menu-top{
    height: 80px;
    background:#fff;
    display:flex;
    justify-content:space-around;
    align-content: space-around;
    margin-bottom: 10px;
  }
  .menu-top-list{
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    section:last-child{
      color:#797d82;
      margin-top: 10px;
      font-size: 12px;
    }
    .film-order{
      font-size: 22px;
      color:#ffc82f;
    }
    .tuan-order{
      font-size: 22px;
      color:#c6da5c;
    }
  }
  .menu-main{
    background:#fff;
    display:flex;
    flex-direction:column;
    .menu-main-list{
      line-height: 48px;
      height: 48px;
      margin-left: 15px;
      border-bottom: 1px solid #f6f6f6;
      .menu-left{
        float: left;
        .menu-word{
          display:inline-block;
          color:#191a1b;
          font-size: 14px;
          margin-left: 5px;
        }
        .icon-yue{
          font-size: 22px;
          color: #ffb232;
        }
         .icon-card{
          font-size: 22px;
          color:#ff8866;
         }
        .shezhi{
          padding-top: 5px;
          font-size: 24px;
          color:#bbcd57;
        }
      }
      .menu-right{
        float:right;
        .youjiantou{
          font-weight: 800;
          color:#c7c9cd;
          margin-right: 16px;
        }
        .yue-num{
          color:#797d85;
          margin-right: 10px;
        }
      }
    }
  }
</style>
