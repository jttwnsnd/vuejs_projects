<template lang="html">
  <div class="form-group">
    <label for="">Full Name</label>
    <input type="text"
      class="form-control"
      placeholder="First Name"
      v-model.lazy="fullName.first">
    <input type="text"
      class="form-control"
      placeholder="Last Name"
      v-model.lazy="fullName.last">
  </div>
</template>

<script>
export default {
  props: ['fullName']

}
</script>

<style lang="css">
</style>
