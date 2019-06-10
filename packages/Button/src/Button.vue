<template>
  <button
    class="infra-btn infra-btn-warning"
    v-bind:class="{'infra-btn-default': type === 'default', 'infra-btn-danger': type === 'danger', 'infra-btn-success': type === 'success'}"
    @click="handleClick"
    :disabled="disabled"
    :style="{background: disabled ? '#ccc' : ''}"
  >
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: 'infra-button',
    props: {
      disabled: {
        type: Boolean,
        default: false
      },
      type: {
        validator: function (val) {
          return ['default', 'danger', 'success'].indexOf(val) !== -1;
        }
      }
    },
    methods: {
      handleClick: function (evt) {
        this.$emit('click', evt);
      }
    }
  };
</script>

<style scoped>
  .infra-btn {
    padding: 10px 20px;
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    border-radius: 5px;
    outline: none;
  }

  .infra-btn-warning {
    background: #F5A623;
    color: #ffffff;
  }
  .infra-btn-default {
    color: #444;
    background: #e9e9e9;
  }
  .infra-btn-success {
    color: #ffffff;
    background: #67C23A;
  }
  .infra-btn-danger {
    color: #ffffff;
    background: #F56C6C;
  }

  .infra-btn:active {
    opacity: 0.9;
  }
</style>
