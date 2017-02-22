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
    window.um = UE.getEditor(this.$el, {
        toolbars: toolbars,
        /* 传入配置参数,可配参数列表看umeditor.config.js */
        elementPathEnabled: false,
        autoHeight: false,
        wordCount:false,
        maximumWords: Infinity,
        serverUrl: '',
    });
  }
}
</script>

<style lang="css">
#container{
  border: none;
}
</style>
