# vue2-Logindemo
vue2使用element-ui中的form组件实现的登录demo 绑定数据以及实现表单验证

## 说明
### elememt-ui

1. 安装element-ui组件库

```js
npm i element-ui -S
```

1. 在main.js中引入element-ui组件库

```js
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';

Vue.use(ElementUI);

new Vue({
  render: h => h(App)
}).$mount('#app')
```



直接复制代码到项目运行

![image](https://user-images.githubusercontent.com/59304678/173772653-d5b8f6dd-a4ee-4ede-aac8-79eef6434cf1.png)

![image](https://user-images.githubusercontent.com/59304678/173772743-9dda21e2-f650-4e21-a602-a38b966fec74.png)



**注意：**

- form组件需要el-form包裹
    - label-width  文本占的宽度
- form表单的每一项使用el-form-item包裹
    - label 每一项文本
        - 每个输入框  el-input
        

**为表单关联数据：**

1. 需要给el-form绑定 `:model属性="data中定义好的对象"`

2. 需要给每一个el-input绑定`v-model`属性

3. 需要给el-form添加rules属性 `:rules="data中定义的规则对象  并在对象中添加规则"`

4. 给el-input所在的form-item 添加`prop`属性，值是校验的字段
