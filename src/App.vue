<template>
 <div id="app">
   <Postapi/>,
   <Apicall/>,
   <Deleteapi/>
   
 </div>
</template>

<script>
import Apicall from './components/Apicall.vue'
import Postapi from './components/Postapi.vue'
import Deleteapi from './components/Deleteapi.vue'


export default {
  name: 'App',

  components: {
    Apicall,
    Postapi,
    Deleteapi
  },

  data: () => ({
    //
  }),
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>