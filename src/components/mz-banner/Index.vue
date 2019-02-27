<template>
  <div class="swiper-container mz-banner">
    <router-link  tag="div" to="/city" class="location">
      <span>{{ curCityName }}</span>
      <span class="iconfont icon-xiajiantou"></span>
    </router-link>
    <div class="swiper-wrapper">
      <div class="swiper-slide"
        v-for="item in bannerList"
        :key="item.bannerId">
        <img :src="item.imgUrl" alt="" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
// 使用axios调用后台的接口

// 1.引入它 axios
import axios from 'axios';
import { mapState } from 'vuex';
// 2.调用后台接口 axios.get('http://localhost:3000/banner/search')
export default {
  data () {
    return {
      // banner 的数据
      bannerList: [],
      // swipper的实例对象
      mySwiper: null
    }
  },
  computed: {
    // curCityName () {
    //   return this.$store.state.curCityName;
    // }
    ...mapState([
      'curCityName'
    ])
  },
  methods: {
    initSwiper () {
      // 对某个代码不校验 eslint 的规则
      /* eslint-disable */
      this.mySwiper = new Swiper
      (".swiper-container",{
        direction: 'horizontal', // 垂直切换选项
        loop: true, // 循环模式选项
        mousewheel: true,
        // 如果需要分页器
        pagination: {// 圆点分页
          el: '.swiper-pagination',
          clickable: false// 点击事件可用
        },
        autoplay: {
          delay: 1000,// 1秒切换一次
          disableOnInteraction: false
        }
      });
      /* eslint-enable */
    }
  },
  created () {
    axios.get('https://m.maizuo.com/gateway?type=2&cityId=440300&k=4850005', {
      headers: {
        // 配置请求头
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"1.0.0","e":"154807887348812303321276"}',
        'X-Host': 'mall.cfg.common-banner'
      }
      // params才是 get的参数
    }).then((response) => {
      // !!! res不是后台返回给你的数据 ，真正后台给你返回的数据在res.data 上面.
      let res = response.data;
      if (res.status === 0) {
        this.bannerList = res.data;
        // 1. 数据更新之后，对轮播图做个更新
        // 2.数据更新之后，再做 new Swiper (ps:数据的更新到页面真实Dom 的更新还需要一点点时间) $nextTick() 这个函数能确保真实的dom的更新
        this.$nextTick(() => {
          this.initSwiper();
        })
      } else {
        alert('网络异常，请稍后重试');
      }
    }).catch(error => {
      alert(error.message);
    })
  }
};
</script>

<style lang ="less">
  .mz-banner {
    height: 210px;
    width:100%;
    position: relative;
    .location{
      position: absolute;
      width: 70px;
      height: 30px;
      border-radius: 15px;
      background: rgba(0,0,0,.2);
      color:#fff;
      left: 12px;
      top: 15px;
      z-index:100;
      line-height: 30px;
      text-align:center;
    }
    img {
      width: 100%;
      height: 100%;
    }
    .swiper-pagination-bullet {
      opacity: .3;
    }
  }
</style>
