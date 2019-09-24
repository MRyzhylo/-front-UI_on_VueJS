<template>
  <div id="app">
    <header>
      <div class="header-block">
        <nav>
          <router-link to="/post"> Create post </router-link>
          <router-link to="/list"> View list </router-link>
        </nav>
      </div>
    </header>
    
    <router-view></router-view>

  </div>
</template>

<script>
import Post from './components/Post';
import List from './components/List';

export default {
  name: 'app',
    components: {
      Post,
      List,
    }
}
</script>

<style>
  .header-block nav{
    width: 400px;
    margin: 10px auto;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background: linear-gradient(to bottom right, #b7ff57ab, #ffff00d1);
    border-radius: 30px;
  }

  .header-block nav a {
    display: block;
    padding: 20px 35px;
    border-bottom: 2px solid orangered;
    color: brown;
    font-size: 1.2em;   
    text-decoration: none; 
  }
</style>
