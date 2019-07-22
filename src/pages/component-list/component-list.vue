<template>
    <div>
      <div style="display: block;overflow: hidden;">
        <InfraButton disabled type="default" style="float: left">default按钮</InfraButton>
        <InfraButton disabled type="success" style="float: left">success按钮</InfraButton>
        <InfraButton disabled type="danger" style="float: left">danger按钮</InfraButton>
      </div>
      <div style="margin-top: 30px">
        <InfraInput style="float: left" placeholder="请输入内容"></InfraInput>
        <!--<InfraSelect placeholder="请选择城市"></InfraSelect>-->
      </div>
      <div style="margin-top: 30px; overflow: hidden;">
        <InfraButton @click="alertEvent" style="float: left">触发Alert</InfraButton>
        <InfraButton @click="alertMEvent" style="float: left">触发MobileAlert</InfraButton>
        <InfraButton @click="messageBoxEvent" style="float: left">触发MessageBox</InfraButton>
      </div>
      <div style="margin-top: 30px; text-align: left;">
        <infra-multiple-selection-input
          :dataSource="dataSource"
          :checkedList="checkedList"
          @change="changeEvent"
        ></infra-multiple-selection-input>
        <infra-select
          v-model="selectData"
          filterable
          :data-source="['我回来', '感觉看到结果', '就考六级六级了', '斤斤计较斤斤计接口连接花开了家较']"
        ></infra-select>
      </div>
      <div style="margin-top: 100px;">
        <i class="iconfont iconclose"></i>
      </div>
      <div>
        <InfraButton @click="mobileMessageBoxEvent" style="float: left">触发MobileMessageBox</InfraButton>
      </div>
      <div>
        <InfraInput1 v-model="formData.name" />
        <infra-select
          v-model="selectData"
          :filterable="true"
          :data-source="['我回来', '感觉看到结果', '就考六级六级了', '斤斤计较斤斤计接口连接花开了家较']"
        ></infra-select>
        <InfraCheckBox v-model="femaleData">female</InfraCheckBox>
      </div>

      <!--关于form表单的实验-->
      <div style="width: 100%;height: 500px;margin-top: 30px">
        <InfraForm ref="infraForm" v-model="formData" :rules="rules" style="width: 300px">
          <InfraFormItem prop="name">
            <InfraInput1 :disabled="true" v-model="formData.name" style="width: 100%" placeholder="姓名"></InfraInput1>
          </InfraFormItem>
          <InfraFormItem prop="city">
            <infra-select
              style="width: 100%"
              v-model="formData.city"
              filterable
              :data-source="arr"
            ></infra-select>
          </InfraFormItem>
          <InfraFormItem prop="mobile">
            <InfraInput1 v-model="formData.mobile" style="min-width: 150px;width: 60%" placeholder="验证码"></InfraInput1>
            <InfraButton style="width: 40%;">获取验证码</InfraButton>
          </InfraFormItem>
          <InfraFormItem prop="code">
            <InfraInput1 v-model="formData.code" style="width: 100%" placeholder="验证码"></InfraInput1>
          </InfraFormItem>
          <InfraFormItem>
            <InfraButton @click="submitEvent" style="width: 100%">确认</InfraButton>
          </InfraFormItem>
        </InfraForm>
      </div>
      <div>
        <InfraSelect
          :data-source="arr"
          v-model="formData.city"
        ></InfraSelect>
      </div>
      <!-- 日历组件 -->
      <div style="width:200px;height: 500px; margin: 0 auto;">
        <Calendar @date-click="handleClick" @date-db-click="handleDbClick" @get-holidays="getHolidays" :holidayList="holidayList" defaultDate="2019-07-26"></Calendar>
      </div>
      <p>测试</p>
    </div>
</template>

<script>
import InfraButton from '../../../packages/Button/index';
import InfraInput from '../../../packages/Input/index';
import InfraForm from '../../../packages/Form/index';
import InfraFormItem from '../../../packages/FormItem/index';
import InfraInput1 from '../../../packages/Input1/index';
import InfraSelect from '../../../packages/Select1/index';
import InfraCheckBox from '../../../packages/CheckBox/index';
import AlertMessage from '../../../packages/Alert/index';
import MobileAlertMessage from '../../../packages/MobileAlert/index';
import MessageBox from '../../../packages/MessageBox/index';
import MobileMessageBox from '../../../packages/MobileMessageBox/index';
import InfraMultipleSelectionInput from '../../../packages/MultipleSelectionInput/index';
import Tpicker from '../../../packages/Mobile/Tpicker/index';
import Calendar from '../../../packages/Calendar/index';
import { dataSource } from './data';
export default {
  name: 'component-list',
  data: function () {
    return {
      arr: ['我回来', '感觉看到结果', '就考六级六级了', '斤斤计较斤斤计接口连接花开了家较斤斤计较斤斤计接口连接花开了家较', '我回来', '感觉看到结果', '就考六级六级了', '斤斤计较斤斤计接口连接花开了家较','我回来', '感觉看到结果', '就考六级六级了', '斤斤计较斤斤计接口连接花开了家较', '我回来', '感觉看到结果', '就考六级六级了', '斤斤计较斤斤计接口连接花开了家较', '我回来', '感觉看到结果', '就考六级六级了', '斤斤计较斤斤计接口连接花开了家较', '我回来', '感觉看到结果', '就考六级六级了', '斤斤计较斤斤计接口连接花开了家较'],
      dataSource: dataSource.data,
      checkedList: [],
      selectData: '',
      femaleData: false,
      formData: {
        name: '',
        city: '北京',
        mobile: 18910592191,
        code: 3456
      },
      rules: {
        name: [{ required: true, message: '姓名不为空', trigger: 'blur' }],
        city: [{ required: true, message: '城市不为空', trigger: 'change' }],
        mobile: [{ required: true, message: '手机不为空', trigger: 'blur' }],
        code: [{ required: true, message: 'code不为空', trigger: 'blur' }]
      },
      holidayList: []
    };
  },
  components: {
    InfraButton,
    InfraInput,
    InfraSelect,
    InfraInput1,
    InfraMultipleSelectionInput,
    InfraCheckBox,
    InfraForm,
    Tpicker,
    Calendar,
    InfraFormItem
  },
  mounted () {
    setTimeout(() => {
      this.formData.city = '天津';
    }, 2000);
  },
  watch: {
    selectData: function (val) {
      console.log('selectData', this.selectData);
    },
    formData: function () {
      console.log('123456', this.formData.name);
    }
  },
  methods: {
    submitEvent: function () {
      this.$refs.infraForm.validate(res => {
        console.log(res);
      });
    },
    alertEvent: function () {
      AlertMessage.info('我触发alert提示框');
    },
    alertMEvent: function () {
      MobileAlertMessage.info('我触发alert提示框');
    },
    mobileMessageBoxEvent: function () {
      MobileMessageBox({
        content: '我触发alert提示框',
        // type: 'confirm',
        // type: 'alert',
        dangerouslyUseHTMLString: false,
        onConfirm: function () {
          AlertMessage.info('我点击了确认按钮');
        },
        onCancel: function () {
          AlertMessage.info('我点击了取消按钮');
        },
        onClose: function () {
          AlertMessage.info('我点击了colse按钮');
        }
      });
    },
    messageBoxEvent: function () {
      // MessageBox.confirm('我是中国人');

      MessageBox({
        title: 'title提示',
        content: '<div>content</div>',
        type: 'confirm',
        dangerouslyUseHTMLString: false,
        onConfirm: function () {
          AlertMessage.info('我点击了确认按钮');
        },
        onCancel: function () {
          AlertMessage.info('我点击了取消按钮');
        },
        onClose: function () {
          AlertMessage.info('我点击了colse按钮');
        }
        // type: 'alert',
      });
    },
    changeEvent: function (allList, choiceList) {
      console.log(allList, choiceList);
    },
    getHolidays (year, month) {
      // 此方法，根据年和月来获取相应年月下的假日
      switch (month) {
        case 7:
          this.holidayList = [
            { name: '7月测试', date: '2019-07-18' }
          ];
          break;
        case 8:
          this.holidayList = [
            { name: '8月测试', date: '2019-08-10' }
          ];
          break;
        case 9:
          this.holidayList = [
            { name: '9月测试', date: '2019-09-5' }
          ];
          break;
        default:
          this.holidayList = [];
      }
    },
    handleClick (date) {
      // AlertMessage.info('您单击的日期为：' + date);
    },
    handleDbClick (date) {
      AlertMessage.info('您双击的日期为：' + date);
    }
  }
};
</script>

<style scoped>
 .form {
   width: 300px;
   padding: 30px 50px;
   border: 1px solid #ccc;
 }
  .formItem-content {
    display: flex;
  }
  .error {
    height: 20px;
    color: red;
    font-size: 12px;
    display: flex;
    align-items: center;
  }
  .labelStyle {
    width: 50px;
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #555;
  }
</style>
