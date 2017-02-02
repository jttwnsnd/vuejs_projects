<template lang="html">
  <ul class="nav nav-pills">
    <router-link to="/" tag="li" active-class="active" exact><a>Home</a></router-link>
    <router-link to="/user" tag="li" active-class="active" exact><a>User</a></router-link>
    <router-link to="/user/1" tag="li" active-class="active" exact><a>User 1</a></router-link>
    <router-link to="/user/2" tag="li" active-class="active" exact><a>User 2</a></router-link>
    <li role='presentation'><a href="http://www.jt-townsend.com/coffeeSite">JT Page</a></li>
  </ul>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
