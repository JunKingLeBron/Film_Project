<template>
  <section class="goods-page">
    <section>
      <section class="goods">
        <section class="goods-img">
          <a href="">
              <img src="https://mall.s.maizuo.com/80cbd991d88943f055197761a99e9c8f.jpg?x-oss-process=image/quality,Q_70"
              alt="">
          </a>
        </section>
        <section class="goods-detail">
          <span>熊猫系列抽纸 100抽*6包</span>
          <span>100%天然竹浆纸 不漂白 无添加 柔韧舒适</span>
          <section class="goods-xiadan">
            <span class="goods-price">￥9.9</span>
            <span class="pindan">去拼单</span>
          </section>
        </section>
      </section>
    </section>
    <section>
      <section class="goods">
        <section class="goods-img">
          <img src="https://mall.s.maizuo.com/4ce94e2d8ade10d990ee15995a2dd49b.jpg?x-oss-process=image/quality,Q_70"
            alt="">
        </section>
        <section class="goods-detail">
          <span>【湖南】万达影院电影通兑券</span>
          <span>限湖南地区万达影院门店或万达电影APP兑换</span>
          <section class="goods-xiadan">
            <span class="goods-price">￥23.99</span>
            <span class="pindan">去拼单</span>
          </section>
        </section>
      </section>
    </section>
    <section>
      <section class="goods">
        <section class="goods-img">
          <img src="  https://mall.s.maizuo.com/05a29eb4dada9efd75c53d11561fdffd.jpg?x-oss-process=image/quality,Q_70"
            alt="">
        </section>
        <section class="goods-detail">
          <span>古田鲜银耳 6朵装</span>
          <span>新鲜采摘 无需泡发 口感软滑爽口</span>
          <section class="goods-xiadan">
            <span class="goods-price">￥28</span>
            <span class="pindan">去拼单</span>
          </section>
        </section>
      </section>
    </section>
    <section>
      <section class="goods">
        <section class="goods-img">
          <img src="  https://mall.s.maizuo.com/4db643f494873cf1df6702358f508efa.jpg?x-oss-process=image/quality,Q_70"
            alt="">
        </section>
        <section class="goods-detail">
          <span>雅诗兰黛 净颜透澈卸妆乳 </span>
          <span>【香港直邮】 3*30ml/支 深层清洁卸妆 温和不刺激 净莹清爽</span>
          <section class="goods-xiadan">
            <span class="goods-price">￥68</span>
            <span class="pindan">去拼单</span>
          </section>
        </section>
      </section>
    </section>
    <section>
      <section class="goods">
        <section class="goods-img">
          <img src="  https://mall.s.maizuo.com/2c21ff467db328e35b6d005bfde66f16.jpg?x-oss-process=image/quality,Q_70"
            alt="">
        </section>
        <section class="goods-detail">
          <span>一亩塘 玫瑰花蕾茶 50g </span>
          <span>手工严选原材料 馥郁自然香气 淡雅清甜回甘</span>
          <section class="goods-xiadan">
            <span class="goods-price">￥24</span>
            <span class="pindan">去拼单</span>
          </section>
        </section>
      </section>
    </section>
  </section>
</template>

<style lang="less">
.goods-page{
  display: flex;
  flex-direction: column;
}
.goods-img img{
  width:100%;
  height:100%;
}
.goods-detail{
  background:#fff;
  padding-top:.12rem;
  padding-left:.16rem;
  display:flex;
  flex-direction:column;
  margin-bottom:.10rem;
  span{
    line-height:.25rem;
    &:first-child{
      color:#2e2f30;
    }
    &::nth-child(2){
      color:#797d82;
      font-size:.12rem;
    }
  }
  .goods-xiadan{
    margin-top:.15rem;
    .goods-price{
      float: left;
      height:.33rem;
      line-height:.33rem;
      color:#c03131;
      font-weight:800;
    }
    .pindan{
      float: right;
      width:.9rem;
      height:.33rem;
      text-align:center;
      line-height:.33rem;
      border-radius:.02rem;
      background:#c03131;
      color: #fff;
      margin-right:.15rem;
    }
  }
}
</style>
