<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> 
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Welcome />
  </div>
</template>

<script>
// @ is an alias to /src
import Welcome from '@/components/Welcome.vue'

export default {
  name: 'Home',
  components: {
    Welcome
  }
}
</script>
