<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ switchName() }}</p>
        <button @click="resetName">Reset Name</button>
    </div>
</template>

<script>
  export default{
    props: {
      name: {
        type: String
      }
    },
    methods: {
      switchName() {
        return this.name.split('').reverse().join('');
      },
      resetName() {
        this.name = 'Max';
        this.$emit('nameWasReset', this.name);
      }
    }
  }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
