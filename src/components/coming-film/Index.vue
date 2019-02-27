<template>
  <section class="content-main">
    <section class="film-content" v-for="film in filmList" :key="film.filmId">
      <img :src="film.poster"
        alt="">
      <section class="film-detail">
        <p class="film-title">{{ film.name }}<span>{{film.filmType && film.filmType.name}}</span></p>
        <p class="film-role">主演： {{ film.actors ? film.actors.map(item => item.name).join(' ') : '暂无主演'}}</p>
        <p><span>{{ film.nation }} | {{ film.runtime }}分钟</span></p>
        <p>上映时间：<span>{{ new Date(film.premiereAt * 1000).toLocaleDateString() }}</span></p>
      </section>
      <a href="" class="ticket-purchase">
          预购
      </a>
    </section>
    <p v-if="pageNum >= pages" class="line2" v-show="clickmore">我是有底线的</p>
    <p v-else @click="loadMore" class="line2">点击加载更多</p>
  </section>
</template>
<script>
import axios from 'axios';
export default {
  data () {
    return {
      filmList: [],
      pageNum: 1,
      pageSize: 10,
      total: 0,
      clickmore: false
      // timeAt: []
    }
  },
  computed: {
    pages () {
      return Math.ceil(this.total / this.pageSize);
    }
  },
  methods: {
    getFilmData () {
      axios.get('https://m.maizuo.com/gateway', {
        params: {
          cityId: 110100,
          pageNum: this.pageNum,
          pageSize: this.pageSize,
          type: 2,
          k: 1177285
        },
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"1.0.0","e":"154807887348812303321276"}',
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then((response) => {
        // console.log(res.data);
        let res = response.data;
        if (res.status === 0) {
          this.filmList = this.filmList.concat(res.data.films);
          this.total = res.data.total;
          this.clickmore = true;
        } else {
          alert('网络异常，请稍后重试');
        }
      }).catch(error => {
        alert(error.message);
      })
    },
    loadMore () {
      this.pageNum++;
      // console.log(this.pageNum);
      this.getFilmData();
    }
  },
  created () {
    this.getFilmData();
  }
}
</script>

<style lang="less">
  .content-main{
    flex:1;
    overflow-y:auto;
    background:#fff;
    margin-bottom:58px;
    .line2{
      text-align: center;
      height:20px;
      background: #f6f6f6;
    }
    .film-content{
      height: 124px;
      border-bottom: 1px solid #f6f6f6;
      display:flex;
      justify-content:space-around;
      align-items:center;
      box-sizing:border-box;
      .film-detail {

        width: 230px;
        .film-title{
          color:#333;
        }
        .film-role{
          overflow: hidden;
          text-overflow:ellipsis;
          white-space: nowrap;
          width:100%;
        }
        .film-score{
          span{
            color: #ffb932;
          }
        }
        p{
          font-size: 12px;
          line-height: 23px;
          color:#797d82;
        }
      }
    }
    .ticket-purchase{
      width: 50px;
      height: 26px;
      border: 1px solid #fec2a7;
      border-radius: 1px;
      text-align:center;
      color:#ff5f16;
      font-size: 12px;
      line-height: 26px;
    }
  }
  .film-content{
    img{
      width: 66px;
      height: 92px;
    }
  }
  .film-title span{
    display: inline-block;
    width: 20px;
    line-height: 14px;
    height: 14px;
    background: #d2d6dc;
    border-radius: 2px;
    margin-left: 5px;
    color: #fffffc;
    text-align:center;
  }
</style>
