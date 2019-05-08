<template>
    <div>
      <InfraButton style="float: left">按钮</InfraButton>
      <InfraInput style="float: left" placeholder="请输入内容"></InfraInput>
      <InfraSelect placeholder="请选择城市"></InfraSelect>
      <InfraButton @click="alertEvent" style="float: left">触发Alert</InfraButton>
      <InfraButton @click="alertMEvent" style="float: left">触发MobileAlert</InfraButton>
    </div>
</template>

<script>
import InfraButton from '../../../packages/Button/index'
import InfraInput from '../../../packages/Input/index'
import InfraSelect from '../../../packages/Select/index'
import AlertMessage from '../../../packages/Alert/index'
import MobileAlertMessage from '../../../packages/MobileAlert/index'
export default {
  name: 'component-list',
  components: {
    InfraButton,
    InfraInput,
    InfraSelect
  },
  methods: {
    alertEvent: function () {
      AlertMessage.info('我触发alert提示框')
    },
    alertMEvent: function () {
      MobileAlertMessage.info('我触发alert提示框')
    }
  }
}
</script>

<style scoped>

</style>
