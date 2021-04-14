<template>
  <div>
    <h1>delete method</h1>
    <table border="1px">
      <tr>
        <td>id</td>
        <td>thumbnailUrl</td>
        <td>title</td>
        <td>url</td>
        <td>Action</td>
      </tr>
      <tr v-for="user in users" v-bind:key="user.id">
        <td>{{ user.id }}</td>
        <td>{{ user.thumbnailUrl }}</td>
        <td>{{ user.title }}</td>
        <td>{{ user.url }}</td>
        <td><button @click="deleteUser(user.id)">Delete</button></td>
      </tr>
    </table>
  </div>
</template>


<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);

export default {
  name: "Deleteapi",
  data() {
    return { users: null };
  },
  methods: {
    getUsers() {
      this.axios
        .get("https://jsonplaceholder.typicode.com/photos")
        .then((resp) => {
          this.users = resp.data;
          console.warn(resp);
        });
    },
    deleteUser(id)
    {
        this.axios.delete("https://jsonplaceholder.typicode.com/photos"+id)
        .then((resp)=>{
            console.warn(resp)
            this.getUsers()
        })
    }
  },
  mounted() {
    this.getUsers();
  },
};
</script>
