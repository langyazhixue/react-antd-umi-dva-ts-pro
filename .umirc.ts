// import { IConfig } from 'umi-types';

// ref: https://umijs.org/config/
// import RouteConfig from './config/router.config.js'
const config =  {
  treeShaking: true,
  mountElementId:'app',
  extraBabelPlugins:[
    [
      "@babel/plugin-proposal-decorators",
      {
        "legacy": true
      }
    ]
  ],
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
              component: './myStudy/jsxTest/index',
            },
            {
              path:'/study/myClass',
              name: 'class学习',
              component: './myStudy/classTest/index',
            },
            {
              path: '/study/life',
              name: '生命周期',
              component: './myStudy/lifeCycleTest/index',
            },
            {
              path: '/study/setStateTest',
              name: 'setState特性讨论',
              component: './myStudy/setStateTest/index',
            },
            {
              path: '/study/hooks',
              name: 'hooks',
              component: './myStudy/hooks/index',
            },
            {
              path: '/study/communication',
              name: '组件的几种通信方式',
              component: './myStudy/componentCommunication/index',
            },
            {
              path: '/study/context',
              name: 'Context',
              component: './myStudy/contextTest/index',
            },
            {
              path: '/study/HOC',
              name: '高阶组件-HOC',
              component: './myStudy/HOC/index',
            },
            {
              path: '/study/chainTest',
              name: '链式调用',
              component: './myStudy/ChainTest/index',
            }
          ]
        }
      ]
    }
  ]
}
export default config;


