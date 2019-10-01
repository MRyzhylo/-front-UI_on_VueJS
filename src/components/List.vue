<template>
  <div id="list" class="mx-auto" style="max-width: 20rem;">
    <h3 class="text-center" >You can get or refresh list with all your posts, just click on a button below! </h3>
    <b-button variant="success" class="mb-3" v-on:click="get"> Get All Posts </b-button>
    <b-card 
    tag="article"
    style="max-width: 20rem;"
    class="mb-2" 
    v-for="post in posts" v-bind:key="post.id">
      <h2> Title: {{post.title}} </h2>
      <p> Body: {{post.body}} </p>
    </b-card>
  </div>
</template>

<script>

export default {
  name: 'List',
  data: function () {
    return{
      posts: []
    }
  },
  methods: {
    get() {
        this.$http.get('https://cors-anywhere.herokuapp.com/https://sbd4l7u6w1.execute-api.eu-central-1.amazonaws.com/dev/posts', {mode: 'cors'})
        .then(responce => {
          this.posts = responce.body;
        }).catch(err => {
          console.log('Request failed', err);
      })
    }   
  }
}

</script>

<style>
  
</style>
