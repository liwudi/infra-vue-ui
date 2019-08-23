### 1、组件介绍
该日历组件可以根据当前日期（或传入的日期）显示前后42天的日期，并可点击‘上个月’、‘下个月’按钮进行月份切换，日历中可以显示当月的节假日（红色字体显示，鼠标悬停时浮动显示假日名称），单击和双击日期时均会触发相应的事件，用户可以在事件处理函数中进行业务代码编写。日历样式如下图所示：

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190823163951266.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L21hcGJhcl9mcm9udA==,size_16,color_FFFFFF,t_70)

### 2、引用方式
vue项目在main.js文件中引入日历组件，并注册到全局：

```

import InfraCalendar from 'infra-vue-ui/dist/infra.calendar.js';

Vue.use(InfraCalendar);
```

### 3、组件使用
```vue
    <infra-calendar

          @date-click="handleClick"

          @date-db-click="handleDbClick"

          @get-holidays="getHolidays"

          :holidayList="holidayList"

          :defaultDate="defaultDate"

          :currentBgColor="currentBgColor"

         :selectBgColor="selectBgColor" >

     </infra-calendar>

     <script>

     export default {

          data () {
    
                defaultDate: '2019-07-08',
    
                currentBgColor: 'red',
    
                selectBgColor: 'green',
    
                holidayList: [ ]
    
          },

          methods: {
            getHolidays (year, month) {
                // 此方法，根据年和月来获取相应年、月下的假日，赋值给holidayList
                this.holidayList = [
                { name: '端午节'，date: '2019-06-07'},
                { name: '端午节'，date: '2019-06-08'},
                { name: '端午节'，date: '2019-06-09'}
                ]
            }，
            handleClick (date) {

              //date为选中的日期，格式为：‘2019-08-07’，方法内可以进行单击业务处理

            }，

            handleDbClick (date) {
            
              //date为选中的日期，格式为：‘2019-08-07’，方法内可以进行双击业务处理
            
            }

          }
     }
<script>
```

### 4、属性说明
| 参数        | 说明    |  类型  |  默认值  |
| :----:  | :----  | :----: | :---: |
| defaultDate        | 打开日历，默认淡蓝色背景标注的日子             |   string    | 当前日期 |
| currentBgColor     | 标注默认日期的背景色                        |   string    | #abd9f5 |
| selectBgColor      | 单击某个日期，该单元格显示的背景色             |   string    | #FFDBA0 |
| holidayList        | 该参数维护选中年、月下的所有节假日，在日历当中节假日日期红字显示，当鼠标移动到假日日期时，出现浮层显示假日名称      |   array   | - |
    
   
### 5、事件说明
|事件名 | 说明 | 回调参数|
| :----:  | :----  | :----: |
|date-click | 单击某个日期，触发该事件 | date（格式：2019-07-08）|
|date-db-click | 双击某个日期，触发该事件 | date（格式：2019-07-08）|
|get-holidays | 打开日历，切换月份的时候均会触发该事件，如果想在日历中显示节假日，则在该事件处理函数中维护holidayList数组即可 | (year, month) |


