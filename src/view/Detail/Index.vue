<template>
  <div class="filmInfo">
    <div class="film-img">
      <div class="film-header">
        <div class="goBack">
          <img src="@/assets/zuojiantou.png" alt />
        </div>
      </div>
      <img :src="filmDetailList.poster" alt>
    </div>
    <div class="film-detail">
      <div class="col">
        <div class="film-name">
          <span class="name">阿丽塔</span>
          <span class="item">3D</span>
        </div>
        <div class="film-grade">
          <span class="grade">8.7</span>
          <span class="grade-text">分</span>
        </div>
      </div>
      <div class="film-category grey-text">2D</div>
      <div class="film-premiere-time grey-text">2019-02-05上映</div>
      <div class="film-nation-runtime grey-text"> 美国 | 111分钟</div>
      <div class="test grey-text">11111</div>
      <!-- <div class="toggle">
        <img src="">
      </div> -->
    </div>
    <div class="actors">
      <div class="actors-title-bar">
        <span class="actors-title-text">演职人员</span>
      </div>
      <div class="row-scroll-wrapper actors-list">
        <ul class="row-scroll-items-nav">
          <li>
            <img src="https://pic.maizuo.com/usr/movie/d74bdbb492c3bb2076f93efde2eb70f7.jpg" alt="">
            <span class="actors-name">罗伯特·罗德里格兹</span>
            <span class="actors-role">导演</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  // # 路由组件传参

  // 1. 路由配置文件中，将 props 选项设置为 true
  // 2. 在具体的组件中，定义上 props 。就能直接拿到对应的 路由参数
  // 3. 组件中 就可以使用使用 id 这个 prop。 他的值就是 路由参数传递过来的值。
  props: {
    id: String
  },
  data () {
    return {
      filmDetailList: []
    }
  },
  methods: {
    getFilmDetail () {
      axios.get('https://m.maizuo.com/gateway?filmId=4533&k=9678203', {
        params: {
          filmId: 4533,
          k: 9678203
        },
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"1.0.0","e":"154807887348812303321276"}',
          'X-Host': 'mall.film-ticket.film.info'
        }
      }).then(response => {
        let res = response.data;
        console.log(response.data);
        if (res.status === 0) {
          this.filmDetailList = res.data.film;
        } else {
          alert('网络错误，请重新尝试');
        }
      })
    }
  },
  created () {
    this.getFilmDetail();
  }
}
</script>

<style lang="less">
  .filmInfo{
    .film-img{
      height: 210px;
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
  .film-detail{
    padding: 15px;
    padding-top: 12px;
    background-color: #fff;
    .col{
      display: flex;
      justify-content: flex-start;
      align-items: center;
      .film-name{
        width: 256px;
        .name{
          color: #191a1b;
          font-size: 18px;
          height: 24px;
          line-height: 24px;
          margin-right: 7px;
        }
        .item{
          font-size: 9px;
          color: #fff;
          background-color: #d2d6dc;
          height: 14px;
          line-height: 14px;
          padding: 0 2px;
          border-radius: 2px;
          display: inline-block;
        }
      }
      .film-grade{
        width: calc(100% - 250px);
        text-align: right;
        color: #ffb232;
        .grade{
          font-size: 18px;
          font-style: italic;
        }
        .grade-text{
          font-size: 10px;
        }
      }
    }
    .film-category{
      font-size: 13px;
      color: #797d82;
      margin-top: 4px;
    }
    .film-premiere-time{
      font-size: 13px;
      color: #797d82;
      margin-top: 4px;
    }
    .film-nation-runtime{
      font-size: 13px;
      color: #797d82;
      margin-top: 4px;
    }
    .test{
      font-size: 13px;
      color: #797d82;
      margin-top: 4px;
    }
  }
  .actors{
    margin-top: 10px;
    background-color: #fff;
    .actors-title-bar{
      width: 100%;
      padding: 15px;
      .actors-title-text{
        font-size: 16px;
        text-align: left;
        color: #191a1b;
      }
    }
    .row-scroll-wrapper{
      height: 140px;
      background: rgb(255, 255, 255);
      .row-scroll-items-nav{
        display: flex;;
        justify-content: flex-start;
        align-items: center;
        position: relative;
        width: 100%;
        padding-left: 15px;
        li{
          width: 85px;
          min-width: 85px;
          text-align: center;
          img{
            width: 100%;
            height: 85px;
          }
          .actors-name{
            padding-top: 10px;
            font-size: 12px;
            color: #191a1b;
            width: 85px;
            height: 18px;
            display: block;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .actors-role{
            font-size: 10px;
            color: #797d82;
          }
        }
      }
    }
  }

</style>
