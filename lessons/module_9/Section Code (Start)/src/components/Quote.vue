<template lang="html">
  <div class="">
    <div class="">
      <slot name="title"></slot>
    </div>
    <hr>
    <div class="">
      <slot name="quote">
    </div>
  </div>
</template>

<script>
export default {
  props: []
  data: {}

}
</script>

<style lang="css" scoped>
  div {
    border: 1px solid #ccc;
    box-shadow: 1px 1px 2px black;
    padding: 30px;
    margin: 30px auto;
    text-align: center;
  }

  h1 {
    color: red;
  }

</style>
