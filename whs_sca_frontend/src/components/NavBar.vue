<template>
    <header>
      <div class="logo">
        <router-link to="/" class="logo-link">
          <img src="@/assets/logo.png" alt="ProjectName Logo" />
          <span class="site-name">ProjectName</span>
        </router-link>
      </div>
      <nav>
        <ul>
          <li><router-link to="/dashboard">Dashboard</router-link></li>
          <li><router-link to="/history">History</router-link></li>
          <li><router-link to="/setting">Setting</router-link></li>
        </ul>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: 'NavBar'
  }
  </script>
  
  <style scoped>
  header {
    background: #bde2c7;
    padding: 10px 0;
    border-bottom: 3px solid #538560;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  .logo {
    display: flex;
    align-items: center;
    margin-left: 20px; /* 로고와 바 사이의 마진 추가 */
  }
  
  .logo-link {
    display: flex;
    align-items: center;
    text-decoration: none;
  }
  
  .logo img {
    height: 40px;
    margin-right: 10px;
  }
  
  .site-name {
    font-size: 1.8em;
    color: #538560;
    font-weight: bold;
    text-decoration: none;
  }
  
  nav ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  
  nav ul li {
    display: inline;
    margin-right: 10px;
  }
  
  nav ul li a {
    color: #538560;
    text-decoration: none;
    font-size: 1.2em;
    padding: 10px 20px;
    border: 2px solid #538560;
    border-radius: 8px;
  }
  
  nav ul li a:hover {
    background-color: #538560;
    color: #fff;
  }
  </style>
  