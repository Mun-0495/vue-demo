<template>
  <div class="setting">
    <main>
      <h1>Setting Page</h1>
      <p>Configure your settings</p>
      <!-- Add your setting specific content here -->
    </main>
  </div>
</template>

<script>
export default {
  name: 'Setting'
}
</script>

<style scoped>
body {
  color: #2c3e50;
  font-family: Arial, sans-serif;
}

.setting {
  padding: 20px;
  text-align: center;
}

h1 {
  margin-top: 50px;
  color: #2c3e50;
  position: relative;
  padding-bottom: 10px;
}

h1:after {
  content: "";
  display: block;
  width: 50px;
  height: 2px;
  background: #2c3e50;
  margin: 10px auto 0;
}

p {
  font-size: 1.2em;
  color: #2c3e50;
  background: #ffffff;
  padding: 20px;
  margin: 20px auto;
  border: 2px solid #2c3e50;
  border-radius: 4px;
  max-width: 800px;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

p:hover {
  transform: none;
  background-color: #ffffff;
}
</style>
