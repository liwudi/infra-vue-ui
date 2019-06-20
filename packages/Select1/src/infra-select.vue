<template>
  <div class="infra-select">
    <input
      type="text"
      placeholder="输入内容搜索"
      class="infra-input"
    >
    <ul class="infra-ul">
      <li class="infra-li" v-for="(o,index) of optionlist" :key="index" >{{o}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'infra-select',
    data: function () {
      return {
        optionlist: [1, 2, 3, 4]
      };
    }
  };
</script>

<style scoped>
  .infra-ul {
    background-color: #ccc;
    list-style: none;
    padding: 0;
    margin: 0;
    text-align: left;
    width: 100%;
    position: absolute;
    left: 0;
    top: 35px;
  }

  .infra-li {
    padding-left: 6px;
  }

  .infra-select {
    width: 150px;
    height: 35px;
    position: relative;
    display: inline-block;
    background-color: red;
  }

  .infra-input {
    width: 100%;
    display: inline-block;
    height: 35px;
    outline: none;
    margin: 0;
    padding: 0 5px;
    font-size: 14px;
  }

  .sel-list-wrap {
    /* width: 100%; */
    max-height:130px;
    overflow-y:auto;
    position: absolute;
    left:0px;
    top: 21px;
    border: 1px solid #d9d9d9;
    z-index: 999;
    /* border-radius: 2px; */
  }

  .sel-list {
    padding-top: 4px;
    padding-bottom: 4px;
    border-bottom: 1px solid #cdcdcd;
    background-color: #fff;
    z-index: 9;
  }

  .sel-list:last-child {
    border-bottom: none;
  }
</style>
