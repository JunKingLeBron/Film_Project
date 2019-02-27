module.exports = {
  plugins: {
    // 自动补全cs
    autoprefixer: {},
    'postcss-pxtorem': {
      // html的fontSize 大小
      rootValue: 100,
      // 小数的四舍五入
      unitPrecision: 5,
      // 需要转换的css属性
      propList: ['*'],
      // 设置不需要转换的css选择器
      selectorBlackList: [],
      // 是否替换
      replace: true,
      // 是否对媒体查询的样式做替换
      mediaQuery: false,
      // 设置要进行转换的最小px值
      minPixlValue: 0
    }
  }
}
