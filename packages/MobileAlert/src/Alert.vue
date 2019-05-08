<template>
  <div class="my-modal-bg center">
    <div class="flexBox flexCol my-modal">
      <div class="flex3 center">{{message || '消息提示文本'}}</div>
      <div @click="click" class="flex1 center btn">关闭</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Alert',
  data: function () {
    return {
      message: null,
      onClose: null
    }
  },
  methods: {
    click: function () {
      if (typeof this.onClose === 'function') {
        this.onClose(this)
      };
      this.$destroy()
      this.$el.parentNode.removeChild(this.$el)
    }
  }
}
</script>

<style scoped>
  .my-modal-bg {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
  }

  .my-modal {
    width: 65%;
    max-width: 400px;
    height: 120px;
    border-radius: 5px;
    box-shadow: 1px 1px 5px #888888;
    background-color: #ffffff;
    font-size: 14px;
  }

  .btn {
    border-top: 1px solid #cccccc;
    color: #009FE8;
    cursor: pointer;
  }
  .flexBox {
    display: flex;
  }
  .flexCol {
    flex-direction: column;
  }
  .flex1 {
    flex: 1;
  }
  .flex2 {
    flex: 2;
  }
  .flex3 {
    flex: 2;
  }
  .center {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
