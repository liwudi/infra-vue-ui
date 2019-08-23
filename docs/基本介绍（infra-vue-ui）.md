### 一、组件项目gitlab地址

https://github.com/liwudi/infra-vue-ui.git



### 二、基本使用



第一步：在 package.json 文件中，dependencies中指定包地址，如下所示：

```
"dependencies": {
  "axios": "^0.18.0",
  "element-ui": "^2.1.0",
  "moment": "^2.23.0",
  "vue": "^2.5.2",
  "vue-router": "^3.0.1",
  "infra-vue-ui": "git+ssh://git@gitlab.youxin.com:liwudi/infra-vue-ui.git#f12c99684e99ae0ffbb9aab9fe94a12747b785c8"
}
```
其中，infra-vue-ui的地址，就是我们的组件项目地址，“#”后面跟的就是git的版本地址。



第二步：在终端执行命令：npm install

这时候，你就会在node_modules中，发现一个叫‘infra-vue-ui’的包。



第三步：在vue的入口文件中，引入infra-vue-ui，并且使用它。
```
import InfraVueUi from 'infra-vue-ui';
Vue.use(InfraVueUi);
```
