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
        { path: '/', redirect: '/bossAut/menu', authority: ['admin', 'user'] },
        {
          path: '/bossAut',
          name: 'dashboard',
          icon: 'dashboard',
          routes:[
            {
              path: '/bossAut/menu',
              name: '菜单管理',
              component: './bossMenuManage/index',
            },
            {
              path: '/bossAut/data',
              name: '数据权限',
              component: './bossDataManage/index',
            }
          ]
        }
      ]
    }
  ]
}
export default config;


