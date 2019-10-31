// import { IConfig } from 'umi-types';

// ref: https://umijs.org/config/
// import RouteConfig from './config/router.config.js'
const config =  {
  treeShaking: true,
  mountElementId:'app',
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport:true,
      title: 'umi-dva-react',
      dll: false,
      routes: {
        exclude: [
          /components\//,
        ],
      },
    }],
  ],
  routes:[
    {
      path: '/login',
      name: 'login',
      component: './login/index',
    },
    {
      path: '/',
      component: '../layouts/index',
      routes:[
        { path: '/', redirect: '/study/jsx', authority: ['admin', 'user'] },
        {
          path: '/study',
          name: 'dashboard',
          icon: 'dashboard',
          routes:[
            {
              path: '/study/jsx',
              name: 'jsx测试',
              component: './jsxTest/index',
            },
            {
              path:'/study/myClass',
              name: 'class学习',
              component: './myClass/index',
            },
            {
              path: '/study/life',
              name: '生命周期',
              component: './lifeStudy/index',
            }
          ]
        }
      ]
    }
  ]
}
export default config;


