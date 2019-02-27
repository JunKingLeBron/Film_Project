// 仓库文件
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

// 创建仓库实例对象
let store = new Vuex.Store({
  // 选项对象
  // 状态- 项目中需要用的数据（需要在多个组件中使用到的数据）
  state: {
    // 当前定位or切换的城市名字
    curCityName: '',
    localCityName: '',
    // 城市列表数据
    cityData: [],
    searchCityVal: '',
    curCityId: ''
  },
  getters: {
    /**
     * 处理后的城市数据
     */
    /**
     * 对 state 中的cityData 做二次处理。并返回数据
     * @param {object} state 仓库的state
     */
    filterCityData (state) {
      let hash = {};
      let i = 0;
      let res = [];

      state.cityData.forEach(item => {
        // 1.得到当前城市的首字母
        let firstLetter = item.pinyin.substr(0, 1).toUpperCase();
        // 2. 判断当前城市的首字母 是循环过程中第一次出现，还是多次出现。
        if (hash[firstLetter]) {
          // 存在
          let index = hash[firstLetter] - 1;// res对象中从下标0开始存入
          res[index].list.push(item);// index指的是res中字母在对象中是第几组，直接存入当前城市的数据对象
        } else {
          // 不存在
          hash[firstLetter] = ++i;// 首字母存入hash对象,并存入是记录是hash中的第几个值
          let obj = {};
          obj.py = firstLetter;
          obj.list = [item];
          res.push(obj);
        }
      })
      console.log(hash);
      let temp = res.sort((a, b) => {
        return a.py.charCodeAt() - b.py.charCodeAt();
      })
      return temp;
    },
    /**
     * 右侧的字母
     * @param {*} state state 仓库 的state
     * @param {*} getters仓库的 getters
     */
    filterLetters (state, getters) {
      return getters.filterCityData.map(item => {
        return item.py;
      })
    },
    /**
     * 热门城市的数据
     * @param {*} state 仓库的state
     */
    filterGetHotCity (state) {
      let cityHot = [];
      state.cityData.forEach(item => {
        if (item.isHot === 1) {
          cityHot.push(item);
        }
      })
      return cityHot;
    },
    /**
     * 搜索输入框的实时数据
     * @param {*} state 仓库中的 state
     */
    filterSearchCity (state) {
      var temp = state.cityData.filter(item => {
        return item.name.indexOf(state.searchCityVal) > -1 || item.pinyin.indexOf(state.searchCityVal) > -1;
      })
      return temp;
    }
  },
  // key: value
  mutations: {
    /**
     * @param {object} payload 提交的载荷（参数）
     */
    chgCityName (state, payload) {
      state.curCityName = payload;
    },
    chgCityData (state, payload) {
      state.cityData = payload
    },
    chgLocalCityName (state, payload) {
      state.localCityName = payload;
    },
    updateCityNameVal (state, searchCityVal) {
      state.searchCityVal = searchCityVal;
    },
    chgCityId (state, payload) {
      state.curCityId = payload;
    }
  },
  actions: {
    /**
     *  获取城市列表数据
     */
    getCityData ({ commit, state, getters }) {
      return new Promise((resolve, reject) => {
        axios.get('./json/city.json').then(response => {
          let res = response.data;
          if (res.status === 0) {
            // this.$store.commit('chgCityData', res.data.cities);
            // store.chgCityData(res.data.cities);

            commit('chgCityData', res.data.cities);
            resolve();
          } else {
            reject(new Error(res.msg));
          }
        })
      })
    },
    /**
     *调用百度API ,获取定位当前城市的名称
     */
    getLocalCityName ({ commit }) {
      /* eslint-disable */
      var myCity = new BMap.LocalCity();
      return new Promise((resolve, reject) => {
        myCity.get((result) => {
          // console.log(1111);
          console.log(result);
          commit('chgCityName',
            result.name.substr(0, result.name.length -1)
          );
          // commit('chgCityId',)
          commit('chgLocalCityName',result.name.substr(0, result.name.length -1));
          resolve();
        })
      })
      /* eslint-enable */
    },
    /***
     * 得到定位城市的cityId
     */
    getCityId ({ commit, state, filter }) {
      state.cityData.forEach(item => {
        if (state.localCityName === item.name) {
          console.log('成功');
          commit('chgCityId', item.cityId);
        }
      })
    }
  }
})
export default store;
