<template>
  <div id="app">
    <NavBar />
    <main class="content">
      <router-view />
    </main>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';

export default {
  name: 'App',
  components: {
    NavBar
  }
};
</script>

<style>
/* 전역 스타일 */
body {
  background-color: #f2f5f7;
  color: #2c3e50;
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

#app {
  display: flex;
}

.content {
  flex-grow: 1;
  padding: 20px;
}
</style>
