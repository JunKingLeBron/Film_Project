<template>
  <div class="mz-cinemas">
    <header class="mz-location">
      <routerLink tag="div" to="/city" class="location">
        <span>{{ curCityName }}</span>
        <span class="jiantou iconfont icon-xiajiantou"></span>
      </routerLink>
      <span class="header-ci">影院</span>
      <routerLink tag="span" to="/cinema/search" class="search iconfont icon-sousuo"></routerLink>
    </header>
    <section class="cinemas-list">
      <section class="menu-list">
        <section>
          <span>全城</span>
          <span class="jiantou iconfont icon-xiajiantou"></span>
        </section>
        <section>
          <span>最近去过</span>
          <span class="jiantou iconfont icon-xiajiantou"></span>
        </section>
      </section>
    </section>
    <section class="cinemas-content-main">
      <section class="cinemas-main-list">
        <section class="content-list" v-for="item in cinemaList" :key="item._id">
          <section class= "cinema-left">
            <p class="cinema-name">{{ item.name}}</p>
            <p class="cinema-location">{{item.address}}</p>
          </section>
          <section>
            <span class="price">{{ item.lowPrice ? '￥'+item.lowPrice/100 +'起': ''}}</span><br />
            <span class="distance">距离未知</span>
          </section>
        </section>
      </section>
    </section>
  </div>
</template>

<script>
import axios from 'axios';
import { mapState } from 'vuex';
export default {
  data () {
    return {
      cinemaList: []
      // cityId: 110100
    }
  },
  computed: {
    ...mapState([
      'curCityName', 'curCityId'
    ])
  },
  watch: {
    curCityId: {
      handler (newVal, oldVal) {
        if (newVal && newVal !== oldVal) {
          this.getCinemasData();
        }
      },
      immediate: true
    }
  },
  methods: {
    getCinemasData () {
      axios.get('https://m.maizuo.com/gateway', {
        params: {
          cityId: this.$store.state.curCityId,
          k: 4529035
        },
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"1.0.0","e":"154807887348812303321276"}',
          'X-Host': 'mall.film-ticket.cinema.list'
        }
      }).then((response) => {
        console.log(response.data);
        let res = response.data;
        if (res.status === 0) {
          this.cinemaList = res.data.cinemas;
        } else {
          alert('网络错误，请重新尝试');
        }
      })
    }
  }
  // created () {
  //   this.getCinemasData();
  // }
}
</script>

<style lang="less">
  .mz-cinemas{
    height:100%;
    overflow-x:hidden;
    display:flex;
    flex-direction:column;
    padding-bottom:50px;
  }
  .mz-location{
    display:flex;
    height:44px;
    justify-content: space-between;
    align-items: center;
    border-bottom:1px solid #f6f6f6;
    background:#fff;
    position: fixed;
    top:0;
    width:100%;
  }
  .location{
    margin-left:15px;
  }
  .jiantou{
    font-size:12px;
  }
  .location span:first-child{
    font-size:14px;
  }
  .search{
    font-size:20px;
    margin-right:15px;
  }
  .menu-list{
    width:100%;
    position: fixed;
    top:45px;
    background:#fff;
    height: 50px;
    display: flex;
    justify-content:space-around;
    align-items:center;
    border-bottom:.01rem solid #f6f6f6;
  }
  .cinemas-content-main{
    padding-top:96px;
    flex:1;
    height:100%;
  }
  .cinemas-main-list{
    background: #fff;
    overflow-y: auto;
    flex:1;
    .content-list{
      height: 75px;
      line-height: 26px;
      display:flex;
      justify-content:space-around;
      align-items: center;
      border-bottom: 1px solid #f6f6f6;
      .cinema-left{
        width:280px;
        text-align:left;
        margin-left:10px;
         .cinema-name{
          color:#191a1b;
        }
        .cinema-location{
          width:280px;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          color:#797d82;
          font-size: 14px;
        }
      }
    }
  }

  .price{
    color:#ff8216;
  }
  .distance{
    color: #797d82;
  }
</style>
