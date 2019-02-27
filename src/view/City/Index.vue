<template>
  <div class="mz-city">
    <MzHeader :title="'当前城市-' + curCityName"></MzHeader>
    <div class="search-city-input">
      <div class="input-wrap onFocus">
        <i class="search-icon iconfont icon-sousuo" style="font-size: 20px;"></i>
        <input type="text" placeholder="输入城市名或拼音" class="search-input" :value="searchCityVal" @keyup="updateCityNameVal">
        <div class="clean-icon">
          <i class="iconfont icon-chongzhi-qingchu" v-show="delInput" style="font-size: 20px; display: block;"></i>
        </div>
      </div>
      <div class="cancel-btn" @click="showSearchPage">取消</div>
    </div>
    <div class="lv-indexlist">
      <ul class="lv-indexlist__content" id="lv-indexlist__content">
        <div class="recommend-city">
          <div class="gprs-city">
            <div class="city-index-title">GPS定位你所在城市</div>
            <ul class="city-index-detail">
              <li class="city-item-detail city-item-detail-gprs">
                <div class="city-item-text">{{ localCityName }}</div>
              </li>
            </ul>
          </div>
          <div class="hot-city">
            <div class="city-index-title">热门城市</div>
            <ul class="city-index-detail">
              <li
                class="city-item-detail"
                v-for="city in filterGetHotCity"
                :key="city.cityId"
                @click="changeCity(city)"
              >
                <div class="city-item-text">{{ city.name }}</div>
              </li>
            </ul>
          </div>
        </div>
        <li
          class="lv-indexsection"
          v-for="(item, index) in filterCityData"
          :key="index"
          :id="item.py"
        >
          <p class="lv-indexsection__index">{{item.py}}</p>
          <ul>
            <li
              v-for="city in item.list"
              :key="city.cityId"
              @click="changeCity(city)"
            >{{ city.name}}</li>
          </ul>
        </li>
      </ul>
      <div class="lv-indexlist__nav">
        <ul>
          <li
            v-for="(item,index) in filterLetters"
            :key="index"
            @click="scrollLocation(item)"
          >{{item}}</li>
        </ul>
      </div>
    </div>
    <div class="city-search-result" v-show="isShow" style="display:none">
      <div class="city-search-result-list">
        <ul>
          <li v-for="(city, index) in filterSearchCity" :key="index" @click="changeCity(city)">{{ city.name }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import MzHeader from '@/components/MzHeader/Index';
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
export default {
  components: {
    MzHeader
  },
  data () {
    return {
      // 城市数据列表
      // curCityName: ''  自身不要，而是用仓库中的curCityName
      // cityData: []
      isShow: false,
      delInput: false
    };
  },
  computed: {
    // 对象展开运算符
    ...mapState(['cityData', 'curCityName', 'localCityName', 'hotCity', 'searchCityVal']),
    ...mapGetters(['filterCityData', 'filterLetters', 'filterGetHotCity', 'filterSearchCity'])
    // cityData () {
    //   return this.$store.state.cityData;
    // }
  },
  methods: {
    /**
     * 获取城市列表数据
     */
    ...mapMutations(['chgCityData', 'chgLocalCityName', 'chgCityId']),
    ...mapActions(['getCityData']),
    /**
     * 右侧的拼音首字母点击
     * py 点击的首字母
     */
    scrollLocation (py) {
      // 1.得到左侧距离顶部的距离
      let el = document.getElementById(py);
      // console.log(el.offsetTop);
      // 2.操作滚轮条进行滚动
      document.getElementById('lv-indexlist__content').scrollTop = el.offsetTop;
    },
    /**
     * 切换城市
     * city 城市对象
     */
    changeCity (city) {
      this.$store.commit('chgCityId', city.cityId);
      this.$store.commit('chgCityName', city.name);
      this.$router.push('/flim/nowPlaying');
      this.$store.commit('updateCityNameVal', '');
    },
    /**
     * 提交搜索框的值的变化
     */
    updateCityNameVal (e) {
      this.isShow = true;
      this.delInput = true;
      this.$store.commit('updateCityNameVal', e.target.value)
    },
    showSearchPage () {
      // console.log('222');
      this.isShow = false;
    }
    // changeSearchCityName(city) {
    //   this.$store.commit('chgSearchCityName', city)
    // }
  },
  created () {
    this.getCityData();
  }
};
</script>
<style lang="less">
@import "./index.less";
</style>
