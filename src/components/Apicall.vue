<template>
  <div>
    <h1>This is API call | axios</h1>
    <table>
      <tr>
        <td>id</td>
        <td>thumbnailUrl</td>
        <td>title</td>
        <td>url</td>
      </tr>
      <tr v-for="item in list" v-bind:key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.thumbnailUrl }}</td>
        <td>{{ item.title }}</td>
        <td>{{ item.url }}</td>
      </tr>
    </table>
    <div v-for="item in list" v-bind:key="item.id">
      <template>
        <v-card class="mx-auto" max-width="344">
          <v-img src="" height="200px"></v-img>

          <v-card-title>  </v-card-title>

          <v-card-subtitle> 1,000 miles of wonder </v-card-subtitle>

          <v-card-actions>
            <v-btn color="orange lighten-2" text> Explore </v-btn>

            <v-spacer></v-spacer>

            <v-btn icon @click="show = !show">
              <v-icon>{{
                show ? "mdi-chevron-up" : "mdi-chevron-down"
              }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>

              <v-card-text>
                I'm a thing. But, like most politicians, he promised more than
                he could deliver. You won't have time for sleeping, soldier, not
                with all the bed making you'll be doing. Then we'll go with that
                data file! Hey, you add a one and two zeros to that or we walk!
                You're going to do his laundry? I've got to find a way to
                escape.
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import VueAxios from "vue-axios";
import axios from "axios";
Vue.use(VueAxios, axios);

export default {
  name: "Apicall",
  data() {
    return {
      list: undefined,
      show: false,
    };
  },
  mounted() {
    Vue.axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((resp) => {
        this.list = resp.data;
        console.log(resp);
      });
  },
};
</script>


<style scoped>
h1 {
  color: tomato;
  border: 2px dotted tomato;
  background: violet;
  width: 100%;
}
</style>
