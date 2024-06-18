<template>
  <div id="app">
    <header>
      <NavBar />
    </header>
    <div class="content">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    Footer
  }
};
</script>

<style>
body, html, #app {
  height: 100%;
  margin: 0;
}

header {
  position: fixed;
  width: 250px; /* Sidebar width */
  height: 100%;
}

.content {
  margin-left: 250px; /* Sidebar width */
  padding: 20px;
  background-color: #f2f5f7;
  min-height: calc(100vh - 40px); /* Adjust for footer height */
  display: flex;
  flex-direction: column;
}

main {
  flex-grow: 1;
}

</style>
