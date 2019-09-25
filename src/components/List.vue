<template>
  <div id="list">
    <h3>You can get or refresh list with all your posts, just click on a button below! </h3>
    <button v-on:click="get"> Get All Posts </button>
    <div v-for="post in posts" v-bind:key="post.id" class="single-block">
      <h2> Title: {{post.title}} </h2>
      <p> Body: {{post.body}} </p>
    </div>
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
  #list p {
    margin: 5px auto;
    display: block;
    width: 400px;
    text-align: center;
    font-size: 1.2em;
  }

  #list h2 {
    margin: 10px auto;
    display: block;
    width: 400px;
    text-align: center;
    background: linear-gradient(to bottom right, #b7ff57ab, #ffff00d1);
    border-radius: 30px;
  }

  #list h3 {
    margin: 20px auto;
    display: block;
    width: 400px;
    text-align: center;
  }

  #list button {
      width: 150px;
      display: block;
      border: none;
      border-radius: 30px;
      padding: 10px 20px;
      background: linear-gradient(to bottom right, #b7ff57ab, #ffff00d1);
      margin: 0 auto;
      outline: none;
  }
</style>
