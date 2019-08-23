### 1、基本语法
```
import InfraVueUi from 'infra-vue-ui';
InfraVueUi.PreviewImage.info('https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1586712349,1235793970&fm=27&gp=0.jpg');
```

效果图如下：

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190823165321782.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L21hcGJhcl9mcm9udA==,size_16,color_FFFFFF,t_70)

### 2、你也可以设置一个预览的背景色，使用以下语法。

InfraVueUi.PreviewImage({
  imageSrc: item,
  backgroundColor: this.previewBgColor
});
其中，imageSrc就是要预览的图片地址，backgroundColor就是设置的背景色。



### 3、也可以使用组件实例的方式，直接使用图片预览组件。
```
this.$previewImage({
  imageSrc: src,
  backgroundColor: this.previewBgColor
});
```
如果没有设置预览背景色的需求，直接使用其info方法。

this.$previewImage.info(src);

### 4、基本APi介绍。
imageSrc，表示预览的图片地址。

backgroundColor，表示预览图的背景色。



