// router.js就是vue-router的配置文件
// 1.引入vue
// 2. 引入 vue-router
// 3. 使用vue.use(vue-router)
// 1. VueRouter  为什么要使用 Vue.use(), 为了去触发 VueRouter 的install 方法
/*
  {
    install: function(Vue) {
      Vue.component('router-view', {});

      Vue.component('router-link', {});
    }
  }
*/

// 4.路由配置
// new VueRouter({
//   routes:[

//   ]
// })
// 5.暴露这个配置
import Vue from 'vue';
import VueRouter from 'vue-router';
import NProgress from 'nprogress';
NProgress.configure({ showSpinner: false });
// import Home from './view/Home.vue';
// import Film from './view/Film.vue';
// import Cinema from './view/Cinema.vue';
// import Login from './view/Login.vue';

Vue.use(VueRouter);

let router = new VueRouter({
  // 配置路由对照表 url -> 视图组件
  // localhost:8080/#/film -> Film.vue
  mode: 'hash',
  // 设置当前页面滚轮行为
  scrollBehavior (to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  },
  routes: [
    {
      path: '/',
      component: () => import('./view/Home/Index.vue'),
      children: [
        // PS: 不是一级的路由的话，path路径前面不要加 /
        // 二级或二级以上的路由，他们的url地址，是从一级路由开始一直被追加
        {
          path: 'film',
          component: () => import('./view/Home/Film/Index.vue'),
          children: [
            {
              path: 'nowPlaying',
              component: () => import('./components/film-list/Index.vue')
            },
            {
              path: 'comingSoon',
              component: () => import('./components/coming-film/Index.vue')
            }
          ]
        },
        {
          path: 'cinema',
          component: () => import('./view/Home/Cinema/Index.vue')
        },
        {
          path: 'login',
          component: () => import('./view/Home/Center/Index.vue')
        },
        {
          path: '',
          redirect: 'film/nowPlaying'
        }
      ]
    },
    // 设置一个通配符的一级路由，当url地址无法与上面的规则匹配时，就会跟我匹配
    {
      path: '/nowlogin',
      component: () => import('./view/Login/Index.vue')
    },
    {
      path: '/search',
      // 别名，用户访问时替换url地址名称
      alias: '/cinema/search',
      component: () => import('./view/Search/Index.vue')
    },
    {
      name: 'selectCity',
      path: '/city',
      component: () => import('./view/City/Index.vue')
    },
    {
      path: '/order',
      component: () => import('./view/Order/Index.vue')
    },
    {
      path: '/grouporder',
      component: () => import('./view/GroupOrder/Index.vue')
    },
    {
      path: '/card',
      component: () => import('./view/Card/Index.vue')
    },
    {
      path: '/setting',
      component: () => import('./view/Setting/Index.vue')
    },
    {
      path: '/money',
      component: () => import('./view/Money/Index.vue')
    },
    {
      path: '/detail/:id',
      component: () => import('./view/Detail/Index.vue'),
      props: true
      // 路由组件传参
      // props: {
      //   name: 'xixi',
      //   age: 19
      // }
    },
    {
      path: '/goodsLink',
      component: () => import('./view/pintuan/Index.vue')
    },
    {
      path: '*',
      redirect: 'film/nowPlaying'
    }
  ]
})

// 全局前置守卫
router.beforeEach((to, from, next) => {
  // 调用NProgress.start()
  NProgress.start();
  let nickname = sessionStorage.getItem('nickname');
  let list = ['/order', '/grouporder', '/card', '/money', '/setting'];

  if (list.indexOf(to.path) > -1 && !nickname) {
    // console.log(4444)
    // 阻止
    // next(false);
    // next('/nowlogin')；字符串的模式
    next({
      path: '/nowlogin',
      // 传递当前页面的完全路径到路由对象中
      query: {
        redirect: to.fullPath
      }
    })
  } else if (to.path === '/nowlogin' && nickname) {
    next(false);
    NProgress.done();
  } else {
    next();
  }
})

// 全局后置守卫
router.afterEach((to, from) => {
  // 完成
  NProgress.done();
})
export default router;
