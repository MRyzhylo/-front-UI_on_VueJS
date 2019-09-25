<template>
  <div id="list">
    <h3>You can get all your posts, just click on a button below! </h3>
    <button > Get All Posts </button>
  </div>
</template>

<script>

export default {
  name: 'List',
}


</script>

<style>
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
