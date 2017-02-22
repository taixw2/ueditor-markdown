<template>
  <div class="layout">
    <div class="ly-left">
      <ul>
        <li>这段文字这段文字这段文字这段这段文字这段文字这段文字文字</li>
      </ul>
    </div>
    <div class="ly-right">
      <Ueditor></Ueditor>
    </div>
  </div>
</template>

<script type="text/javascript">

import Ueditor from '../components/Ueditor.vue'

  export default {
    data () {
      return {
      }
    },
    methods : {
    },
    components: {
      Ueditor
    },
    beforeCreate () {
        //开始创建组件之前
    },
    created () {
      //组件创建后
    },
    beforeMount () {
      //挂载组件前
    },
    mounted () {
      //挂载组件后,此时已经能够调用到文档内的元素
    },
    beforeUpdate () {
      //数据更新前
    },
    updated () {
      //数据更新后
    },
    activated () {
      //组件被激活
    },
    deactivated () {
      //组件停用
    },
    beforeDestroy () {
      //组件被销毁前
    },
    destroyed () {
      //组件被销毁后调用
    }
  }
</script>

<style scoped style="scss">
.layout{
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  width: 1050px;
}
.ly-left{
  width: 300px;
}
.ly-right{
  flex: 1;
  overflow: hidden;
}
</style>
