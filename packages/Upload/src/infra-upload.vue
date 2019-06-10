<template>
  <div ref="dom" class="infra-box">
    <input style="overflow: hidden;" :accept="accept" ref="input" @change="fileChange" type="file" hidden>
    <!--居左展示的部分-->
    <div class="upload-box" v-if="previewPosition === 'left'">
      <div :key="item" v-for="item in perviewList" class="infra-item" v-bind:style="{height: height}">
        <img @click="previewEvent(item)" class="infra-itemImage" :src="item" alt="">
      </div>
      <!--相机上传的图标-->
      <div @click="clickEvent" class="infra-item" v-bind:style="{height: height}">
        <div class="infra-upload infra-center infra-relative">
          <img :src="Image" alt="图片">
          <p class="infra-p">{{fileList.length}}/{{limit}}</p>
        </div>
      </div>
    </div>
    <div class="upload-box" v-if="previewPosition === 'right'">
      <!--相机上传的图标-->
      <div @click="clickEvent" class="infra-item" v-bind:style="{height: height}">
        <div class="infra-upload infra-center infra-relative">
          <img :src="Image" alt="图片">
          <p class="infra-p">{{fileList.length}}/{{limit}}</p>
        </div>
      </div>
      <!--居右展示的部分-->
      <div :key="item" v-for="item in perviewList" class="infra-item" v-bind:style="{height: height}">
        <img @click="previewEvent(item)" class="infra-itemImage" :src="item" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  /**
   * 向上暴露主要的接口，change事件。
   */
  import Image from './Group.png';
  import PreviewImage from '../../PreviewImage/index'; // 用于大图浏览图片的组件
  import DomSize from 'wd-domsize-monitor';
  export default {
    name: 'infra-upload',
    props: {
      accept: {
        type: String,
        default: 'image/*'
      },
      limit: {
        type: Number,
        default: 4
      },
      previewPosition: {
        validator: function (val) {
          return ['left', 'right'].indexOf(val) !== -1;
        },
        default: 'left'
      },
      previewBgColor: String
    },
    data: function () {
      return {
        fileList: [],
        perviewList: [],
        height: null,
        Image
      };
    },
    mounted () {
      this.callback();
      DomSize.bind(this.$refs.dom, this.callback);
    },
    beforeDestroy () {
      DomSize.remove(this.$refs.dom);
    },
    methods: {
      callback () {
        let style = window.getComputedStyle(this.$refs.dom, null);
        this.height = parseInt(style.width) / 3 + 'px';
      },
      previewEvent (item) {
        if (this.previewBgColor) {
          PreviewImage({
            imageSrc: item,
            backgroundColor: this.previewBgColor
          });
        } else {
          PreviewImage.info(item);
        }
      },
      fileChange (e) {
        let files = e.target.files;
        let srcs = [];
        for (let i = 0; i < files.length; i++) {
          let src = URL.createObjectURL(files[i]);
          srcs.push(src);
        }
        this.fileList = [...this.fileList, ...files];
        this.perviewList = [...this.perviewList, ...srcs];
        let emitData = [...this.fileList];
        this.$emit('change', emitData);
      },
      clickEvent () {
        if (this.limit <= this.fileList.length) {
          return;
        }
        this.$refs.input.click();
      }
    }
  };
</script>

<style scoped>
  .infra-box {
    width: 100%;
  }
  .upload-box {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: flex-start;
  }
  .infra-item {
    width: 33.3%;
    height: 100px;
    padding: 3px;
    box-sizing: border-box;
  }
  .infra-itemImage {
    width: 100%;
    height: 100%;
  }
  .infra-upload {
    background-color: #eee;
    height: 100%;
  }
  .infra-relative {
    position: relative;
  }
  .infra-p {
    margin: 0;
    padding: 0;
    position: absolute;
    left: 50%;
    top: 80%;
    transform: translate(-50%, -50%);
    font-size: 12px;
    color: #939DA6;
  }
  .infra-center {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
