<template>
  <div>
     <div class="filmInfo">
        <div class="film-header">
          <div class="goBack" @click="goBack">
            <!-- <div class="title">{{ filmDetailList.name }}</div> -->
            <img src="@/assets/zuojiantou.png" alt />
          </div>
        </div>
        <div class="film-img">
          <img :src="filmDetailList.poster" alt>
        </div>
        <div class="film-detail">
          <div class="col">
            <div class="film-name">
              <span class="name">{{ filmDetailList.name }}</span>
              <span class="item">{{ filmType.name }}</span>
            </div>
            <div class="film-grade">
              <span class="grade">{{ filmDetailList.grade }}</span>
              <span class="grade-text">分</span>
            </div>
          </div>
          <div class="film-category grey-text">{{ filmDetailList.category }}</div>
          <div class="film-premiere-time grey-text">2019-02-05上映</div>
          <div class="film-nation-runtime grey-text"> {{filmDetailList.nation}} | {{filmDetailList.runtime}}分钟</div>
          <div class="test grey-text">{{filmDetailList.synopsis}}</div>
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
              <li v-for="(actor,index) in actors" :key="index">
                <img :src="actor.avatarAddress" alt="">
                <span class="actors-name">{{ actor.name }}</span>
                <span class="actors-role">{{ actor.role }}</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="photos" >
          <div class="photos-title-bar">
            <span class="photos-title-text">剧照</span>
            <span class="photos-to-all" v-if="phones ? true : false">全部({{ phones.length }})
              <span style="font-size: 13px;font-weight:800;">></span>
            </span>
          </div>
          <div class="row-scroll-wrapper photos-list" v-if="phones ? true : false">
            <ul>
              <li v-for="(phone,index) in phones" :key="index">
                <div class="lazy-img-wrap">
                  <img :src="phone" alt=""/>
                </div>
              </li>
            </ul>
          </div>
          <div class="phoneword" v-else>暂无剧照</div>
        </div>
        <a href="#" class="" style="height: 49px; position: fixed; bottom: 0px; width: 100%;">
          <div class="goSchedule">
            选座购票
          </div>
        </a>
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
      filmDetailList: [],
      actors: [],
      phones: [],
      filmType: ''
    }
  },
  methods: {
    getFilmDetail () {
      axios.get('https://m.maizuo.com/gateway', {
        params: {
          filmId: this.id,
          k: 9678203
        },
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"1.0.0","e":"154807887348812303321276"}',
          'X-Host': 'mall.film-ticket.film.info'
        }
      }).then(response => {
        let res = response.data;
        // console.log(response.data);
        if (res.status === 0) {
          this.filmDetailList = res.data.film;
          this.actors = res.data.film.actors;
          this.phones = res.data.film.photos;
          this.filmType = res.data.film.filmType;
        } else {
          alert('网络错误，请重新尝试');
        }
      })
    },
    goBack () {
      this.$router.replace('/detail');
    }
  },
  created () {
    this.getFilmDetail();
  }
}
</script>

<style lang="less">
  .filmInfo{
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    padding-bottom: 30px;
    a{
      height: 49px;
      position: fixed;
      bottom: 0px;
      width: 100%;
      .goSchedule {
        position: fixed;
        bottom: 0;
        left: 0;
        height: 49px;
        width: 100%;
        text-align: center;
        background-color: #ff5f16;
        color: #fff;
        font-size: 16px;
        line-height: 49px;
      }
    }
    .film-header{
      position: fixed;
      background-color: hsla(0,0%,100%,0);
      color: transparent;
      -webkit-transition: all .3s ease;
      -o-transition: all .3s ease;
      transition: all .3s ease;
      width: 100vw;
      height: 44px;
      z-index: 1;
      .goBack{
        height: 30px;
        position: absolute;
        top: 5px;
        left: 5px;
        .title {
          font-size: 17px;
          line-height: 44px;
          width: 100vw;
          text-align: center;
        }
        img{
          width: 30px;
        }
      }
    }
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
      overflow-x: auto;
      overflow-y:hidden;
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
          margin-right:10px;
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
  .photos {
    margin-top: 10px;
    margin-bottom: 40px;
    background-color: #fff;
    .phoneword{
      text-align: center;
      font-size: 14px;
      color: #bdc0c5;
      margin: auto;
      height:115px;
      line-height:58px;
    }
    .photos-title-bar {
      height: 62px;
      width: 100%;
      padding: 15px;
      box-sizing: border-box;
      .photos-title-text {
        font-size: 16px;
        text-align: left;
        color: #191a1b;
      }
      .photos-to-all{
        font-size: 13px;
        color: #797d82;
        float: right;
      }
    }
    .row-scroll-wrapper {
      height: 115px;
      background: rgb(255, 255, 255);
      ul {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        position: relative;
        width: 100%;
        height: 100px;
        padding-left: 15px;
        overflow-x: auto;
        box-sizing: border-box;
        li {
          margin-right: 10px;
          width: 150px;
          height: 100px;
          .lazy-img-wrap{
            width: 150px;
            height: 100px;
            background: rgb(249, 249, 249);
            opacity: 1;
            display: block;
            position: relative;
            img {
              width: 100%;
              height: 100px;
            }
          }
        }
      }
    }
  }

</style>
