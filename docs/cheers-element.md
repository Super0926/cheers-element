### 安装cheers-element
```js
npm install cheers-element --save
```
```js
cnpm install cheers-element --save
```
### 按需引入
借助 babel-plugin-component，我们可以只引入需要的组件，以达到减小项目体积的目的。

首先，安装 babel-plugin-component：
```js
npm install babel-plugin-component -D
```
babel.config.js中使用
```js
module.exports = {
        presets: [
                '@vue/app', [
                        '@babel/preset-env', {
                                modules: false
                        }
                ]
        ],
        plugins: [
                [
                        'component',
                        {
                                'libraryName': 'element-ui',
                                'styleLibraryName': 'theme-chalk'
                        }
                ],
                [
                        "import",
                        {
                                "libraryName": "cheers-element", //组件库名称
                                "camel2DashComponentName": false, //关闭驼峰自动转链式
                                "camel2UnderlineComponentName": false //关闭蛇形自动转链式
                        }
                ],

        ]
};
```
在main.js中引入
```js
import Vue from 'vue';
import App from './App.vue';
import {
        cheersTable,
        cheersCard,
        cheersFormTitle,
        cheersForm,
        cheersSearchBar,
        cheersPaginations,
        cheersUploadImage,
} from 'cheers-element'
import "cheers-element/lib/style/index.css";
Vue.use(cheersTable).use(cheersCard).
use(cheersFormTitle).use(cheersForm).
use(cheersSearchBar).use(cheersPaginations)
.use(cheersUploadImage)

new Vue({
  el: '#app',
  render: h => h(App)
});
```