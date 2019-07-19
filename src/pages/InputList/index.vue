<template>
  <div>
    <tpicker label="来借款申请地时间" name="comeDate" :maxDate="new Date()" :date="true"></tpicker>
    <input-field key="estateAmount" inputWidth="50%" label="购买/建造总价(万元)" placeholder="必填" type="number"></input-field>
    <spicker label="拥有车辆" name="carInfo" v-model="carInfo" :source="carData">
    </spicker>
    <infra-textarea placeholder="请输入包含街道的完整地址" key="address">
    </infra-textarea>
    <input-radio :dataArr="knowData"></input-radio>
    <input-phone ref="inputPhone" label="单位电话" key="phone" v-model="phone" :placeholder="['区号','电话号码','分机号码']" type="number"></input-phone>
  </div>
</template>

<script>
  import Tpicker from '../../../packages/Mobile/Tpicker/index';
  import Spicker from '../../../packages/Mobile/Spicker/index';
  import InputField from '../../../packages/Mobile/InputField/index';
  import InputRadio from '../../../packages/Mobile/InputRadio/index';
  import InfraTextarea from '../../../packages/Mobile/InfraTextarea/index';
  import InputPhone from '../../../packages/Mobile/InputPhone/index';
  export default {
    name: 'input-list',
    data: function () {
      return {
        carInfo:'',
        phone: [,,],
        carData: [{
          text: '无',
          value: 'NONE'
        }, {
          text: '按揭购买',
          value: 'MORTGAGE'
        }, {
          text: '全款购买',
          value: 'FULL_AMOUNT'
        }],
        knowData: [
          {
            id: '0',
            label: '是',
            value: '0'
          },
          {
            id: '1',
            label: '否',
            value: '1'
          }
        ]
      };
    },
    mounted(){
    },
    components: {
      Tpicker,
      Spicker,
      InputField,
      InfraTextarea,
      InputRadio,
      InputPhone
    }
  };
</script>

<style scoped>

</style>
