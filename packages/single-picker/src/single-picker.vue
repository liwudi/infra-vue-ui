<template>
  <div>
    <div class="koala-input-box">
      <label class="koala-label">{{label}}</label>
      <div class="koala-input" v-text="text" @click.prevent="showPicker"></div>
      <input type="hidden" class="v-validate" ref=valBridgeS v-bind="$props"/>
    </div>
    <div class="content-bottom singlepicker" v-if="enable">
      <div class="singlepicker-content">
        <ul>
          <li :key="item[displayField]" v-for="item in source" @click.prevent="onSelect(item)"
              :class="{'selected': item == selectedItem}">
            <div>{{item[displayField]}}</div>
          </li>
        </ul>
      </div>
      <button class="btn next submit cancel" @click.prevent="cancelSelect">取消</button>
    </div>
    <div class="spicker-bg" v-if="enable"></div>
  </div>
</template>

<script>
export default {
  name: 'InfraSinglePicker',
  props: {
    value: [String, Number],
    label: String,
    placeholder: String,
    name: String,
    isDisabled: Boolean,
    displayField: {
      type: String,
      default: 'text'
    },
    maskLayerId: {
      type: String,
      default: 'spicker-mask'
    },
    valueField: {
      type: [String, Number],
      default: 'value'
    },
    source: {
      default: function () {
        return []
      },
      type: Array
    }
  },
  data () {
    return {
      enable: false,
      selectedItem: null,
      text: ''
    }
  },
  mounted () {
    this.setValue(this.value)
  },
  watch: {
    value: function (val) {
      this.setValue(val)
    }
  },
  methods: {
    showPicker (event) {
      if (this.isDisabled) {
        return false
      }
      this.enable = true
    },
    setValue (value) {
      if (value == null || value === '') {
        this.text = ''
      }
      if (this.source == null || this.source.length === 0) {
        this.text = ''
      } else {
        this.selectedItem = this.source.find(item => item[this.valueField] === value)
        if (this.selectedItem == null) {
          this.text = ''
        } else {
          this.text = this.selectedItem[this.displayField] || ''
        }
      }

      let eventObj = document.createEvent('Event')
      eventObj.initEvent('change', true, true)
      this.$refs.valBridgeS.dispatchEvent(eventObj)
    },
    onSelect (selected) {
      this.enable = false
      this.$emit('input', selected[this.valueField])
      this.$emit('changeReset')
    },
    cancelSelect () {
      this.enable = false
    }
  }
}
</script>

<style scoped>
  .singlepicker-content ul {
    padding: 0 !important;
    margin: 0;
  }
  .koala-input-box {
    overflow: hidden;
  }
  .koala-input {
    overflow-x: auto;
    float: right;
    height: 1.12rem;
    line-height: 1.12rem;
    width: calc(70% - 0.3rem);
    margin-right: 0.3rem;
    text-align: right;
    border: 0;
    outline: 0;
    padding-right: 6%;
  }

  .singlepicker {
    display: block;
    font-size: 0.32rem;
    opacity: 1;
    left: 3%;
    bottom: 4px;
    overflow: hidden;
    position: fixed;
    width: 94%;
    max-width: 750px;
    color: rgba(70, 85, 130, 1);
    background-color: #999999;
    -webkit-animation-duration: .2s !important;
    -moz-animation-duration: .2s !important;
    animation-duration: .2s !important;
    z-index: 9;
  }

  .singlepicker-content {
    max-height: 60vh;
    overflow: auto;
    border-radius: 8px;
  }

  .singlepicker ul li {
    border-bottom: 1px solid #E0E0E0;
    list-style: none;
    position: static;
  }

  .singlepicker ul li div {
    line-height: 1rem;
    text-align: center;
    margin: 0px auto;
    background: #FFFFFF;
  }

  .singlepicker button.next.submit {
    margin-top: 5px;
    position: static;
    border-width: 0px;
    line-height: 1rem;
    background: rgba(255, 255, 255, 1);
    color: rgba(99, 146, 254, 1);
    font-size: 0.32rem;
    width: 100%;
    text-align: center;
    letter-spacing: 1px;
    border-radius: 8px;
  }

  .spicker-bg {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: #000000;
    opacity: 0.4;
    z-index: 8;
  }
</style>
