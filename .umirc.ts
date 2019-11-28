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
              path: '/study/dom',
              name: 'Dom元素测试',
              component: './myStudy/DomTest/index',
            },
            {
              path:'/study/myClass',
              name: 'class学习',
              component: './myStudy/classTest/index',
            },
            {
              path:'/study/props',
              name: 'props类型检查',
              component: './myStudy/PropTypeTest/index',
            },
            {
              path:'/study/formControlled',
              name: '表单受控组件',
              component: './myStudy/FormTest/index',
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
              path: '/study/getChildContext',
              name: 'getChildContext and withContext',
              component: './myStudy/GetChildContext/index',
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
            },
            {
              path: '/study/decorator',
              name: '装饰器',
              component: './myStudy/DecoratorTest/index',
            },
            {
              path: '/study/composition',
              name: '组件复合',
              component: './myStudy/Composition/index',
            },
            {
              path: '/study/KForm',
              name: '一个表单组件',
              component: './myStudy/KForm/index',
            },
            {
              path: '/study/KDialog',
              name: '一个弹窗组件',
              component: './myStudy/KDialog/index',
            },
            {
              path: '/study/ref',
              name: 'ref学习',
              component: './myStudy/RefTest/index',
            },

            {
              path: '/study/lazy',
              name: '组件懒加载',
              component: './myStudy/lazyTest/index',
            },
            {
              path: '/study/ErrorBoundaries',
              name: 'React错误边界',
              component: './myStudy/ErrorBoundaries/index',
            },
            {
              path: '/study/portals',
              name: 'portals测试',
              component: './myStudy/PortalsTest/index',
            },
            {
              path: '/study/api',
              name: 'ReactAPI测试',
              component: './myStudy/APITest/index',
            },
            {
              path: '/study/ReactDomAPI',
              name: 'ReactDomAPI测试',
              component: './myStudy/ReactDomAPITest/index',
            },
            {
              path: '/study/Ktree',
              name: '树形组件',
              component: './myStudy/KTree/index',
            },
            {
              path: '/study/ComponentOptimizin',
              name: '常见的组件优化技术',
              component: './myStudy/ComponentOptimizin/index',
            }
          ]
        }
      ]
    }
  ]
}
export default config;


