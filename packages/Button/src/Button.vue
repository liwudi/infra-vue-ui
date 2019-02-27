<template>
  <button
    class="btn btn-warning"
    @click="handleClick"
    :disabled="disabled"
    :style="{background: disabled ? '#ccc' : ''}"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick: function (evt) {
      this.$emit('click', evt)
    }
  }
}
</script>

<style scoped>
  .btn {
    padding: 10px 20px;
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    border-radius: 5px;
  }

  .btn-warning {
    background: #F5A623;
    color: #ffffff;
  }

  .btn-warning:active {
    opacity: 0.9;
  }
</style>
