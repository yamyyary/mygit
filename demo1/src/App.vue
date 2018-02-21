<template>
  <div id="app">
    <img src="./assets/logo.png"/>
    <h1>{{aa}}</h1>
    <daohang></daohang>
    <router-view
      class="view"
      keep-alive
      transition
      transition-mode="out-in">
    </router-view>
  </div>
</template>

<script>
import daohang from './components/daohang'
export default {
  data(){
    return{
      aa:'aa'
    }
  },
  components: {daohang}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
