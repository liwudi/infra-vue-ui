1、组件基本功能

全选功能、模糊查询过滤功能、自定义change事件。

2、基本使用
```
<infra-multiple-selection-input
 :dataSource="dataSource"
 :checkedList="checkedList"
 @change="changeEvent"
></infra-multiple-selection-input>
```
效果图：

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190823164739799.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L21hcGJhcl9mcm9udA==,size_16,color_FFFFFF,t_70)

3、基本Api介绍

(1)，dataSource，（Array，required）

表示父组件，向子组件传递的可选数据。

dataSource中的每一项，必须包含一个name属性，一个id的属性。其中，name表示每个选项的名字展示，id代表每个选项的唯一标志。

(2)，checkedList，（Array，required）

表示父组件，向子组件传递的已选数据的id的列表。

(3)，change，（Function，required）

表示当选择的数据发生变化时，触发的change事件。

其实change事件不是必须的，但是如果不给这样的一个change事件，这个组件本身就没有存在的意义，因为你不知道到底选择了哪些项。
