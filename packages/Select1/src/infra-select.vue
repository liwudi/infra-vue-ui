<template>
  <div
    class="infra-select"
    :style="{
      height: form.height
    }"
  >
    <input
      type="text"
      :placeholder="placeholderStr || placeholder"
      class="infra-input"
      :class="{'infra-active-input': isShow}"
      :style="{
        height: form.height
      }"
      v-model="currentValue"
      :disabled="!filterable"
      @focus="focusEvent"
      ref="input"
    >
    <ul ref="ul" :style="{top: form.height}" v-show="isShow" class="infra-ul">
      <li
        :class="{'infra-active-li': index === currentIndex}"
        class="infra-li infra-one-line"
        v-for="(o,index) of optionlist"
        :key="o"
        @click="itemClick(o, index)"
      >{{o}}</li>
    </ul>
  </div>
</template>

<script>
  import { form } from '../../packages.config';
  export default {
    name: 'infra-select1',
    data: function () {
      return {
        optionlist: this.dataSource,
        currentValue: this.value,
        currentIndex: '',
        isShow: false,
        placeholderStr: '',
        form: { ...form }
      };
    },
    props: {
      value: String,
      filterable: {
        default: false
      },
      placeholder: String,
      dataSource: Array
    },
    watch: {
      currentValue: function (val) {
        if (this.filterable) {
          this.optionlist = this.dataSource.filter(item => item.indexOf(val) !== -1);
        }
      },
      filterable: function (val) {
        if (!val) {
          this.optionlist = this.dataSource;
        }
      }
    },
    mounted () {
      document.onclick = this.isShowFun;
    },
    beforeDestroy () {
      document.onclick = '';
    },
    methods: {
      isShowFun (evt) {
        if (evt.target === this.$refs.input) {
          this.isShow = !this.isShow;
          if (!this.isShow && this.placeholderStr) {
            this.currentValue = this.placeholderStr;
          }
        } else if (evt.target.parentNode === this.$refs.ul) {
          this.isShow = false;
        } else {
          this.isShow = false;
          if (!this.isShow && this.placeholderStr) {
            this.currentValue = this.placeholderStr;
          }
        }
      },
      focusEvent: function () {
        if (this.currentValue) {
          this.placeholderStr = this.currentValue;
        }
        this.currentValue = '';
      },
      itemClick: function (item, index) {
        this.currentIndex = index;
        this.placeholderStr = item;
        this.$emit('input', item);
        this.currentValue = item;
      }
    }
  };
</script>

<style scoped>
  .infra-ul {
    background-color: #fff;
    text-align: left;
    width: 100%;
    max-height: 250px;
    position: absolute;
    left: 0;
    top: 35px;
    z-index: 100;
    font-size: 14px;
    box-sizing: border-box;
    border: 1px solid #d2d6de;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .infra-li {
    padding: 6px;
    cursor: pointer;
  }
  .infra-one-line {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .infra-li:hover {
    background-color: #e0e0e0;
  }

  .infra-select {
    width: 200px;
    height: 40px;
    position: relative;
    display: inline-block;
    background-color: red;
  }

  .infra-input {
    width: 100%;
    display: inline-block;
    height: 35px;
    outline: none;
    border: 1px solid #d2d6de;
    margin: 0;
    padding: 0 5px;
    font-size: 14px;
    box-sizing: border-box;
  }
  .infra-input:focus {
    border: 1px solid #6392fe;
  }
  .infra-active-input {
    border: 1px solid #6392fe;
  }
  .infra-active-li {
    color: #337ab7;
    background-color: #e0e0e0;
  }
</style>
