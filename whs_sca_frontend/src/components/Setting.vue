<template>
  <div class="setting">
    <main>
      <h1>Setting</h1>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="username">Username:</label>
          <input type="text" id="username" v-model="username">
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email">
        </div>
        <button type="submit">Save</button>
      </form>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Setting',
  data() {
    return {
      username: '',
      email: ''
    }
  },
  methods: {
    submitForm() {
      console.log('Form submitted:', this.username, this.email);
    }
  }
}
</script>

<style scoped>
body {
  background-color: #bde2c7;
  color: #538560;
  font-family: Arial, sans-serif;
}

.setting {
  padding: 20px;
  text-align: center;
}

h1 {
  margin-top: 50px;
  color: #538560;
}

form {
  display: inline-block;
  text-align: left;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

.form-group input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  border: 2px solid #538560;
  border-radius: 4px;
}

button {
  padding: 10px 20px;
  background-color: #538560;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #43744a;
}
</style>
