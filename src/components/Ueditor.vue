<template lang="html">
    <textarea id="container" name="content" type="text/plain" :style="style"></textarea>
</template>

<script>
import ueditorUserConfig from '../ueditor-user-config'
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
    window.um = UM.getEditor("container", ueditorUserConfig);
  }
}
</script>

<style lang="css">
#container{
  border: none;
}
</style>
