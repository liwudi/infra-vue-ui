<template>
  <div class="multipleSelectionContainer">
    <div class="inputBox">
      <input
        class="inputStyle"
        v-model="value"
        ref="input"
        @input="inputEvent"
        @blur="blurEvent"
        @click="clickEvent"
        type="text"
        placeholder="请选择（支持多选）"
      >
      <div @click="panelEvent" class="sourceList" v-show="isShowList" style="z-index:9;">
        <!--全选功能-->
        <div class="selectItem">
          <input :checked="isAllChoice" type="checkbox" @change="allChoiceChange"/>
          <span>全部选择</span>
        </div>
        <div class="selectItem" v-for="source in filterList" :key="source.id">
          <input :checked="source.isChoice" type="checkbox" @change="changeItem(source.id)"/>
          <span>{{source.name}}</span>
        </div>
      </div>
    </div>
    <div class="resultContainer">
      <div :key="result.id" class="result" v-for="result in choicedList">{{result.name}}<span @click="deleteEvent(result)" class="delete-style"><span class="deleteSpan1"></span><span class="deleteSpan2"></span></span></div>
    </div>
  </div>
</template>

<script>
  /**
   * @author：mapbar_front
   * @info: 向上层暴露两个接口，一个是要展示的数据域dataSource，一个是checkedList，里面携带dataSource数据项的id数组，一个是上层的change事件，得到的结果是处理后的数据。
   */
  export default {
    name: 'infra-multiple-selection-input',
    data: function () {
      return {
        isClickChoice: false, // 为了在业务上分清楚点击事件还有失焦事件。
        value: '',
        isShowList: false,
        sourceList: [],
        isAllChoice: false
      };
    },
    props: {
      dataSource: {
        type: Array,
        default: function () { return []; }
      },
      checkedList: {
        type: Array,
        default: function () { return []; }
      }
    },
    computed: {
      /**
       * 说明：这一块代码逻辑写复杂了，无论有没有this.value，结果还是返回一个filterList的过滤。
       * @returns {*}
       */
      choicedList: function () {
        return this.sourceList.filter(item => {
          return item.isChoice;
        });
      },
      /**
       * 说明：在使用this.filterList进行赋值的时候，出现的问题。
       */
      filterList: {
        get () {
          let arr = this.sourceList.filter(item => {
            return item.name.indexOf(this.value) !== -1;
          });
          return arr;
        },
        set (val) {
          this.sourceList = this.sourceList.map(item => {
            let me = val.find(valItem => {
              return valItem.id === item.id;
            });
            if (me) {
              item.isChoice = me.isChoice;
            }
            return item;
          });
        }
      }
    },
    watch: {
      // @todo: 这一块有待优化。最后进行this.sourceList进行赋值。
      dataSource: function (val, old) {
        if (val !== old) {
          let myArr = JSON.parse(JSON.stringify(val));
          let arr = this.checkedList;
          for (let i = 0; i < arr.length; i++) {
            let item = myArr.find(item => item.id === arr[i]);
            if (item) {
              item.isChoice = true;
            } else {
              item.isChoice = true;
            }
          }
          this.sourceList = myArr;
        }
      },
      checkedList: function (val) {
        let arr = JSON.parse(JSON.stringify(val));
        for (let i = 0; i < arr.length; i++) {
          let item = this.sourceList.find(item => item.id === arr[i]);
          if (item) {
            item.isChoice = true;
          }
        }
      }
    },
    created () {
      if (this.dataSource && this.checkedList) {
        this.sourceList = JSON.parse(JSON.stringify(this.dataSource));
        let arr = this.checkedList;
        for (let i = 0; i < arr.length; i++) {
          let item = this.sourceList.find(item => item.id === arr[i]);
          if (item) {
            item.isChoice = true;
          } else {
            item.isChoice = false;
          }
        }
      }
    },
    methods: {
      // todo:优化3，关于sourceList的更新操作，必须使用赋值操作赋，返回一个新的数组。
      deleteEvent (item) {
        this.sourceList = this.sourceList.map(source => {
          if (source.id === item.id) {
            source.isChoice = false;
          }
          return source;
        });
        this.$emit('change', this.sourceList, this.choicedList);
      },
      showList: function () {
        this.isShowList = !this.isShowList;
      },
      panelEvent () {
        this.isClickChoice = true;
        this.$refs.input.focus();
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          this.isClickChoice = false;
        }, 400);
      },
      changeItem: function (id) {
        // @todo: 优化部分，把sourceList的数据修正使用map的方式进行。
        // this.sourceList[index].isChoice = !this.sourceList[index].isChoice;
        this.sourceList = this.sourceList.map((item, idx) => {
          if (item.id === id) {
            item.isChoice = !item.isChoice;
          }
          return item;
        });
        this.$emit('change', this.sourceList, this.choicedList);
        this.isAllChoice = this.sourceList.every(item => item.isChoice === true);
      },
      /**
       * @说明：这一块的优化，同上面的this.value的逻辑是一样的。
       * @todo:优化2在computed赋值的时候应该用get和set的方式。
       */
      allChoiceChange () {
        this.isAllChoice = !this.isAllChoice;
        this.filterList = this.filterList.map(item => {
          item.isChoice = this.isAllChoice;
          return item;
        });
        this.$emit('change', this.filterList, this.choicedList);
      },
      inputEvent (e) {
        this.value = e.target.value;
        this.isShowList = true;
      },
      blurEvent () {
        clearTimeout(this.blurTimer);
        this.blurTimer = setTimeout(() => {
          if (!this.isClickChoice) {
            this.isClickChoice = false;
            this.isShowList = false;
          }
        }, 250);
      },
      clickEvent () {
        this.isShowList = !this.isShowList;
      }
    }
  };
</script>

<style scoped>
  .multipleSelectionContainer {
    width: 250px;
    height: auto;
    display: inline-block;
    text-align: left;
  }
  .inputBox {
    width: 100%;
    height: 35px;
    position: relative;
  }
  .sourceList {
    position: absolute;
    left: 0;
    top: 35px;
    z-index: 1;
    background: #f2f2f2;
    width: 100%;
    max-height: 200px;
    overflow: auto;
    border: 1px solid #d2d6de;
    box-sizing: border-box;
  }
  .selectItem {
    border-bottom: 1px solid #d2d6de;
    padding-left: 5px;
  }
  .inputStyle {
    width: 100%;
    height: 35px;
    border: 1px solid #d2d6de;
    display: flex;
    align-items: center;
    padding: 0 10px;
    box-sizing: border-box;
    outline: none;
    background: #f2f2f2;
  }
  .inputStyle:focus {
    border: 1px solid #6392fe;
  }
  .resultContainer {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: flex-start;
  }
  .result {
    border: 1px solid #d2d6de;
    padding: 2px;
    font-size: 14px;
    margin-right: 20px;
    margin-top: 10px;
    background: #f2f2f2;
    display: flex;
    align-items: center;
  }
  .delete-style {
    display: inline-block;
    margin-left: 5px;
    width: 18px;
    height: 18px;
    background-color: #dddddd;
    cursor: pointer;
    border-radius: 50%;
    position: relative;
  }
  .deleteSpan1 {
    display: inline-block;
    width: 10px;
    height: 2px;
    background-color: #999999;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
  }
  .deleteSpan2 {
    display: inline-block;
    width: 10px;
    height: 2px;
    background-color: #999999;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) rotate(135deg);
  }
</style>
