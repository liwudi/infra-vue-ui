<template>
  <button
    class="btn btn-warning"
    v-bind:class="{'btn-default': type === 'default'}"
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
          return ['default'].indexOf(val) !== -1;
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
  .btn {
    padding: 10px 20px;
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    border-radius: 5px;
    outline: none;
  }

  .btn-warning {
    background: #F5A623;
    color: #ffffff;
  }
  .btn-default {
    color: #444;
    background: #e9e9e9;
  }

  .btn:active {
    opacity: 0.9;
  }
</style>
