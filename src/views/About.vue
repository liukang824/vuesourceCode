<template>
  <div>
      <span>About Page</span><br>
      <router-link to="/about/a">hello A</router-link> | 
      <router-link to="/about/b">hello B</router-link>
      <hr>
      <router-view></router-view>
    </div>
</template>

<script>
export default {

}

</script>
<style>
</style>