<template>
  <div id="post">
    <div>
      <input type="text" placeholder="Please enter your title here" v-model="title"/>
      <textarea type="textarea" placeholder="Enter your text here" v-model="body"> </textarea>
      <button v-on:click.prevent="post"> Submit </button>
    </div>
    <div v-if="submitted">
      <p> Thanks for your message! </p>
    </div>
  </div>
</template>

<script>


export default {
  name: 'Post',
  data: function () {
    return{
    title: '',
    body: '',
    submitted: false
    }
  },
  methods: {
    post() {
      this.$http.post('https://cors-anywhere.herokuapp.com/https://sbd4l7u6w1.execute-api.eu-central-1.amazonaws.com/dev/post', {
        type: "No Auth",
        title: this.title,
        body: this.body
      })
      .then(responce => {
        this.submitted = true;
      })
      .catch(err => {
          console.log('Request failed', err);
      })
    }
  }
}
 
  
</script>

<style>
  #post {
    display: flex;
    flex-direction: column;
  }

  #post div {
      margin: 0 auto;
  }

  #post input {
    display: block;
    width: 250px;
    height: 20px;
    margin-bottom: 10px;
    border-radius: 30px;
    border: 1px solid #b7ff57ab;
    outline: none;
    text-align: center;
  }

  #post textarea {
    display: block;
    width: 250px;
    height: 250px;
    margin-bottom: 10px;
    border-radius: 30px;
    border: 1px solid #b7ff57ab;
    outline: none;
    text-align: center;
  }

  #post button {
    width: 100px;
    display: block;
    border: none;
    border-radius: 30px;
    padding: 10px 20px;
    background: linear-gradient(to bottom right, #b7ff57ab, #ffff00d1);
    margin: 0 auto;
    outline: none;
  }

  ::placeholder {
      text-align: center;
      opacity: 0.8;
  }

  #post p {
    display: block;
    width: 300px;
    background: linear-gradient(to bottom right, #fff257cc, #ff5722c9);
    padding: 5px 10px;
    text-align: center;
    font-size: 1.2em;
    border-radius: 30px;
  }
</style>
