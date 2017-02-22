<template lang="html">
    <textarea id="container" name="content" type="text/plain" :style="style"></textarea>
</template>

<script>
export default {
  data() {
    return {
      style: {
        width: 650 + 'px',
        height: window.innerHeight -100 + 'px',
      }
    }
  },
  mounted() {
    console.log(123123)
    window.um = UM.getEditor("container", {
        toolbars: toolbars,
        /* 传入配置参数,可配参数列表看umeditor.config.js */
        elementPathEnabled: false,
        autoHeight: false,
        wordCount:false,
        maximumWords: Infinity,
        serverUrl: '',
        initialFrameHeight:window.innerHeight -100
    });
  }
}
</script>

<style lang="css">
#container{
  border: none;
}
</style>
