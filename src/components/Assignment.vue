<template>
    <div>
        <h1>Computed varaibles</h1>
        <h2>{{getResult}}</h2>
        <h3>{{getResultMethod()}}</h3>
        <hr/>
        <!-- Watchers -->
        <h1>{{count}}</h1>
        <button v-on:click="count=count+1">+</button>
        <button v-on:click="count=count-1">-</button>
    </div>
</template>

<script>
import Mixins from './Mixins/Mixins.js';
export default {
    name: 'Assignment',
    data(){
      return{
        dollars:100,
        rupeeVal:70,
        discount:10,
        count:0
      }
    },
    watch:{
        count(val,prev)
        {
            if(val>5 && val>prev)
            {
                alert("stop counting")
            }
        }
    },
    methods:
    {
        getResultMethod()
        {
             return (this.dollars*this.rupeeVal)-this.discount;
        }
    },
    computed:{
      
    },
    mixins:[Mixins]
}
</script>
