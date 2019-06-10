<template>
  <div class="infra-my-modal-bg infra-center" v-bind:style="{backgroundColor: backgroundColor}">
    <img @click="click" class="infra-previewImage" :src="imageSrc" alt="背景图">
  </div>
</template>

<script>
  export default {
    name: 'PreviewImage',
    data: function () {
      return {
        imageSrc: null,
        backgroundColor: 'rgba(255, 255, 255, 0.9)'
      };
    },
    methods: {
      click: function () {
        this.$destroy();
        this.$el.parentNode.removeChild(this.$el);
      }
    }
  };
</script>

<style scoped>
  .infra-my-modal-bg {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.9);
  }

  .infra-center {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .infra-previewImage {
    max-width: 100%;
    max-height: 100%;
  }
</style>
