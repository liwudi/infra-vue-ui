<template>
    <div>
      <InfraButton type="danger" style="float: left">按钮</InfraButton>
      <InfraInput style="float: left" placeholder="请输入内容"></InfraInput>
      <InfraSelect placeholder="请选择城市"></InfraSelect>
      <InfraButton @click="alertEvent" style="float: left">触发Alert</InfraButton>
      <InfraButton @click="alertMEvent" style="float: left">触发MobileAlert</InfraButton>
      <InfraButton @click="messageBoxEvent" style="float: left">触发MessageBox</InfraButton>
      <div>
        <infra-multiple-selection-input
          style="margin-top: 30px"
          :dataSource="dataSource"
          :checkedList="checkedList"
          @change="changeEvent"
        ></infra-multiple-selection-input>
      </div>
    </div>
</template>

<script>
import InfraButton from '../../../packages/Button/index';
import InfraInput from '../../../packages/Input/index';
import InfraSelect from '../../../packages/Select/index';
import AlertMessage from '../../../packages/Alert/index';
import MobileAlertMessage from '../../../packages/MobileAlert/index';
import MessageBox from '../../../packages/MessageBox/index';
import InfraMultipleSelectionInput from '../../../packages/MultipleSelectionInput/index';
import { dataSource } from './data';
export default {
  name: 'component-list',
  data: function () {
    return {
      dataSource: dataSource.data,
      checkedList: []
    };
  },
  components: {
    InfraButton,
    InfraInput,
    InfraSelect,
    InfraMultipleSelectionInput
  },
  methods: {
    alertEvent: function () {
      AlertMessage.info('我触发alert提示框');
    },
    alertMEvent: function () {
      MobileAlertMessage.info('我触发alert提示框');
    },
    messageBoxEvent: function () {
      // MessageBox.confirm('我是中国人');
      MessageBox({
        title: 'title提示',
        content: '<div>content</div>',
        type: 'confirm',
        dangerouslyUseHTMLString: true,
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
    }
  }
};
</script>

<style scoped>

</style>
