<template>
  <div id="post">
    <div>
      <input type="text" placeholder="Please enter your title here" />
      <textarea type="textarea" placeholder="Enter your text here"> </textarea>
      <button> Submit </button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Post',
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
</style>
