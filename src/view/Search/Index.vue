<template>
  <div class="search-page">
    <div class="cinemas-search-input">
      <div class="search-input">
        <input type="text" class="input-left" placeholder="输入影城名称"/>
        <span class="iconfont icon-sousuo"></span>
        <div class="cancel-btn" @click="cancel">取消</div>
      </div>
      <div class="cinemas-list">
        <div class="cinemas-index-title">离你最近</div>
        <ul class="cinemas-list-name">
          <li class="cinema-item-detail">
              英皇电影城（东海缤纷店）
          </li>
          <li class="cinema-item-detail">
              中影国际影城（深圳深国投店）
          </li>
          <li class="cinema-item-detail">
              星美影商城（深圳京基IMAX店）
          </li>
          <li class="cinema-item-detail">
              深圳中影今典电影城
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    cancel () {
      this.$router.back()
    }
  }
}
</script>

<style lang="less">
  body,html{
    background: #fff;
  }
  .search-page{
    height:100%;
  }
  .cinemas-search-input{
    z-index: 3005;
    height: 49px;
    padding: 9.5px 15px;
    background-color: #fff;
    position: fixed;
    width:100%;
    .search-input{
      width:100%;
      border-bottom: 1px #f4f4f4 solid;
      .input-left{
        outline:none;
        border:0;
        width: 280px;
        background-color: #f4f4f4;
        position: relative;
        display: inline-block;
        border-radius: 2px;
        height: 30px;
        padding-left:30px;
        border-radius:2px;
        margin-bottom:15px;
      }
      .icon-sousuo{
        position: absolute;
        left: 20px;
        top: 10px;
        line-height: 30px;
        font-size: 21px;
        color: #797d82;
      }
      .cancel-btn{
        width: 43px;
        position: absolute;
        display: inline-block;
        text-align: right;
        font-size: 14px;
        line-height: 30px;
      }
    }
  }
  .cinemas-list{
    padding: 0 15px 8px 0;
    margin-left: 15px;
    position: relative;
    .cinemas-index-title{
      font-size: 13px;
      line-height: 13px;
      color: #bdc0c5;
      margin: 18px 0;
    }
    .cinemas-list-name{
      display: flex;
      -webkit-justify-content: flex-start;
      -ms-flex-pack: start;
      justify-content: flex-start;
      -webkit-align-content: center;
      -ms-flex-line-pack: center;
      align-content: center;
      -webkit-flex-wrap: wrap;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
      .cinema-item-detail{
        height:28px;
        line-height: 28px;
        // background:#797d82;
        color:#191a1b;
        font-size: 16px;
        text-align:center;
        text-align: center;
        padding-bottom: 10px;
        padding-right: 10px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        float: left;
        font: 14px/1.5 Tahoma,Helvetica,Arial,sans-serif;
        font-family: Microsoft YaHei,Tahoma,Helvetica,Arial,sans-serif;
      }
    }
  }
</style>
