<template>
  <div id="app">
    <header>
      <div class="mb-3 mx-auto" style="width: 20rem">
        <b-nav tabs align="center">
          <b-nav-item> <router-link to="/post"> Create post </router-link> </b-nav-item>
          <b-nav-item> <router-link to="/list"> View list </router-link> </b-nav-item>
        </b-nav>
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
      List
    }
}
</script>

<style>
  
</style>
