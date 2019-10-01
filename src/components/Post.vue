<template>
  <div id="post">
    <div class="mb-3 mx-auto" style="width: 20rem">
      <b-form>
      <b-form-input class="mb-3" type="text" placeholder="Please enter your title here" v-model="title"/>
      <b-form-textarea 
      class="mb-3"
      id="textarea"
      type="textarea"
      rows="3"
      max-rows="3" 
      placeholder="Enter your text here" 
      v-model="body"> 
      </b-form-textarea>
      <b-button variant="success" v-on:click.prevent="post"> Submit </b-button>
      </b-form>
    </div >
    <b-alert variant="success" class="mx-auto" style="width: 20rem" v-if="submitted" show>
      Thanks for your message!
    </b-alert>
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

</style>
