<template>
  <div class="my-modal-bg center">
    <div class="flexBox flexCol my-modal">
      <div class="modal-header">
        <h4 class="modal-title">{{title}}</h4>
      </div>
      <div class="modal-body">
        <p v-if="!dangerouslyUseHTMLString">{{content}}</p>
        <p v-if="dangerouslyUseHTMLString" v-html="content"></p>
      </div>
      <div class="modal-footer">
        <InfraButton v-if="type === 'confirm'" @click="cancelEvent" class="positionLeft" type="default">取消</InfraButton>
        <InfraButton v-if="type === 'confirm'" @click="confirmEvent" class="positionConfirm" type="default">确认</InfraButton>
        <InfraButton v-if="type === 'alert'" @click="closeEvent" class="positionRight" type="default">Close</InfraButton>
      </div>
    </div>
  </div>
</template>

<script>
  import InfraButton from '../../Button/index';
  export default {
    name: 'MessageBox',
    data: function () {
      return {
        title: '提示信息!',
        content: '内容信息',
        type: 'alert',
        dangerouslyUseHTMLString: false
      };
    },
    components: {
      InfraButton
    },
    methods: {
      closeEvent () {
        if (this.onClose && typeof this.onClose === 'function') {
          this.onClose();
        }
        this.close();
      },
      confirmEvent () {
        if (this.onConfirm && typeof this.onConfirm === 'function') {
          this.onConfirm();
        }
        this.close();
      },
      cancelEvent () {
        if (this.onCancel && typeof this.onCancel === 'function') {
          this.onCancel();
        }
        this.close();
      },
      close () {
        this.$destroy();
        this.$el.parentNode.removeChild(this.$el);
      }
    }
  };
</script>

<style scoped>
  .my-modal-bg {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
  }

  .my-modal {
    width: 600px;
    height: auto;
    background-color: #ffffff;
    font-size: 16px;
    color: #333333;
    font-family: 'Source Sans Pro','Helvetica Neue',Helvetica,Arial,sans-serif;
  }
  .modal-header {
    height: 56px;
    font-size: 18px;
    padding: 15px;
    border-bottom: 1px solid #e5e5e5;
    box-sizing: border-box;
  }
  .modal-title {
    padding: 0;
    margin: 0;
    font-family: 'Source Sans Pro',sans-serif;
  }
  .modal-body {
    padding: 15px;
    border-bottom: 1px solid #e5e5e5;
    box-sizing: border-box;
    font-size: 14px;
  }
  .modal-footer {
    padding: 15px;
    box-sizing: border-box;
    font-size: 14px;
    position: relative;
  }

  .flexBox {
    display: flex;
  }

  .flexCol {
    flex-direction: column;
  }

  .center {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .positionRight {
    position: relative;
    left: 500px;
  }
  .positionConfirm {
    position: absolute;
    right: 15px;
  }
</style>
