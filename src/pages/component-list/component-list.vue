<template>
    <div>
      <InfraButton style="float: left">按钮</InfraButton>
      <InfraInput style="float: left" placeholder="请输入内容"></InfraInput>
      <InfraSelect placeholder="请选择城市"></InfraSelect>
      <InfraButton @click="alertEvent" style="float: left">触发Alert</InfraButton>
      <single-picker
        label="机关单位"
        :source="source"
        :defaultShow="true"
      ></single-picker>
    </div>
</template>

<script>
import SinglePicker from '../../../packages/single-picker/index'
import InfraButton from '../../../packages/Button/index'
import InfraInput from '../../../packages/Input/index'
import InfraSelect from '../../../packages/Select/index'
import AlertMessage from '../../../packages/Alert/index'
export default {
  name: 'component-list',
  data: function () {
    return {
      source: [
        {
          value: 'AGENCY',
          text: '政府机关'
        }, {
          value: 'INSTITUTION',
          text: '事业单位'
        }, {
          value: 'STATE',
          text: '国企'
        },
        {
          value: 'FUNDED',
          text: '合资'
        },
        {
          value: 'STOCK',
          text: '民营'
        },
        {
          value: 'PRIVATE',
          text: '私营'
        },
        {
          value: 'INDIVIDUAL',
          text: '个体'
        },
        {
          value: 'FOREIGNCOMPANY',
          text: '外企'
        }
      ]
    }
  },
  components: {
    SinglePicker,
    InfraButton,
    InfraInput,
    InfraSelect
  },
  methods: {
    alertEvent: function () {
      AlertMessage.info('我触发alert提示框')
    }
  }
}
</script>

<style scoped>

</style>
