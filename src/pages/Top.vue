<template>
  <div id="top_page">
    <div id="new_list">
      <ol>
        <new-item v-for="item in new_list" v-bind:todo="item"></new-item>
      </ol>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios';

export default {
  name: 'top_page',
  components: {
    'new-item' : {
      // todo-item コンポーネントはカスタム属性のような "プロパティ" で受け取ります。
      // このプロパティは todo と呼ばれます。
      props: ['todo'],
      template: '<li>{{ todo.id }}, <a href="{{ todo.link }}">{{ todo.title["rendered"] }}</a></li>'
    }
  },
  data: function() {
    return {
      "new_list" : []
    }
  },
  mounted: function() {
    console.log("Top.vue ready()");
    axios.get('api/wp-json/wp/v2/posts/').then((response) => {
      // 成功
      console.log("success");
      console.log(response);
      //this.data["new_list"] = response.data;
      //commit("new_ist", null, reponse.data);
      this.new_list = response.data;

    }, (response) => {
      console.log("error");
      console.log(response);

    });
  },
  created: function() {
    console.log("Top.vue created()");
  }
}

</script>

/*
import Greeting from '@/components/Greeting.vue'
import Stores from '@/stores/Stores'
export default {
  components: {
*/
    Greeting

