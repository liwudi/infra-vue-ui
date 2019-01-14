<template>
    <div>
      <single-picker
        label="机关单位"
        :source="source"
        :defaultShow="false"
      ></single-picker>
    </div>
</template>

<script>
import SinglePicker from '../../../packages/single-picker/index'
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
    SinglePicker
  }
}
</script>

<style scoped>

</style>
