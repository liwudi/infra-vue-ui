### 1、组件介绍
该滑动预览组件仅试用于移动端，点击需要预览的图片，会弹出预览窗口，窗口中会显示该图片在所有待预览图片中的位置，并有关闭预览窗口按钮，同时可以左右滑动切换图片。显示效果如下图所示：

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190823164333462.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L21hcGJhcl9mcm9udA==,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190823164351104.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L21hcGJhcl9mcm9udA==,size_16,color_FFFFFF,t_70)

### 2、引用方式
vue项目在main.js文件中引入滑动预览组件，并注册到全局：
```
import InfraCarouselPreview from 'infra-vue-ui/dist/infra.carouselPreview';
Vue.use(InfraCarouselPreview);
```

### 3、组件使用
```
<button @click="handleClick">点击图片预览<button>

<infra-carousel-preview :list="imgList" :clickImgIndex="clickImgNum" :showPreview="showPreview"></infra-carousel-preview>
<script>
export default {
    data: function () {
        return {
            imgList: [‘图片1url’, '图片2url'],
            showPreview: false,
            clickImgNum: 0
        }
    },
    methods:{
        handleClick （） {//此方法用来控制该预览组件的显示，方法体内修改showPreview属性即可；同时可以在该方法内设置clickImgNum属性，用来控制进入预览页面显示哪张图片
            this.showPreview = true; 
        }
    }
}
</script>
```
### 4、属性说明
| 参数	| 说明| 类型	| 默认值 |
|:----:|:----:|:----:|:----:|
|clickImgIndex|用来控制进入预览页面时要从哪张图片开始展示，此参数值为要显示图片，在图片数组中的下标；如果不设置该值，则进入预览页面时默认从第一张开始预览 | number | 0 |
|showPreview|此参数用来控制预览组件在开始在页面展示，该参数默认值为fasle, 当设定其为true时，预览组件便可展示	| boolean| false
