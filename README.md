# infra-vue-ui

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# infra-vue-ui 插件开发规范

### 关于infra-vue-ui的目录结构

src/index：项目的插件访问入口。

packages：整个项目的所有UI组件。

### 组件命名规范

参照element-ui。

组件的name一律使用官方推荐的方式进行命名。kebab-case、PascalCase。

```vue
<template>
    <div>test</div>
</template>

<script>
export default {
  name: 'InfraTest'
}
</script>

<style scoped>

</style>
```

文件夹的命名一般使用小写，如果是多个单词，可以使用'-'连接起来。（参考packages/test组件）

.vue文件名，一般使用小写，规则同文件夹的命名。（参考packages/test组件）

## 组件编写规则

每个单独的组件，都在一个单独的文件夹中，这个单独的文件夹中必须有一个index.js和一个src文件夹。

其中，index.js用于该组件模块的导出，src文件夹负责组件的开发工作。

## 改动日志

1，2019-05-19，修改了eslint的配置规则。添加了rules，'semi' :['error' , 'always'], 'indent': 0，修正MultipleSelectionInput组件。
2，2019-05-26，对MultipleSelectionInput进行优化。
3，2019-06-05，实现了上传组件InfraUpload，实现了PreviewImage组件。
4，2019-06-14，实现了分页插件InfraPagination。
5，2019-06-18，对InfraUpload兼容问题进行修复。icon适配小屏幕。




