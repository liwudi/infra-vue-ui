<template>
  <div>
    <InfraUpload
      @change="changeEvent"
      preview-position="right"
      :limit="5"
    ></InfraUpload>
    <InfraButton @click="clickEvent">点击预览</InfraButton>
  </div>
</template>

<script>
  import InfraUpload from '../../../packages/Upload/index';
  import InfraButton from '../../../packages/Button/index';
  import PreviewImage from '../../../packages/PreviewImage/index';
  export default {
    name: 'Upload',
    components: {
      InfraUpload,
      InfraButton
    },
    methods: {
      changeEvent (data) {
        console.log('fileList', data);
      },
      clickEvent () {
        PreviewImage.info('https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1586712349,1235793970&fm=27&gp=0.jpg');
      }
    }
  };
</script>

<style scoped>

</style>
