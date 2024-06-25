<template>
  <div class="repo-dashboard">
    <header>
      <NavBar />
    </header>
    <div class="content">
      <main>
        <h1>{{ repoName }} Dashboard</h1>
        <div class="dashboard-info">
          <div class="info-item" v-for="item in infoItems" :key="item.label">
            <h2>{{ item.label }}</h2>
            <p>{{ item.value }}</p>
          </div>
        </div>
      </main>
    </div>
    <footer>
      <p>Projectname v0.1</p>
    </footer>
  </div>
</template>

<script>
import NavBar from './NavBar.vue'; // Adjust the import path if needed

export default {
  name: 'RepoDashboard',
  components: {
    NavBar
  },
  props: {
    repoName: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      infoItems: [
        { label: 'Critical', value: '0 (0%)' },
        { label: 'High', value: '0 (0%)' },
        { label: 'Medium', value: '0 (0%)' },
        { label: 'Low', value: '0 (0%)' },
        { label: 'Unassigned', value: '0 (0%)' }
      ]
    };
  }
};
</script>

<style scoped>
.repo-dashboard {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

header {
  position: fixed;
  width: 250px; /* Sidebar width */
  height: 100%;
}

.content {
  margin-left: 250px; /* Sidebar width */
  padding: 20px;
  background-color: #ecf0f1; /* 배경색 설정 */
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

main {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

footer {
  text-align: right;
  color: #2c3e50;
  padding: 5px 20px 5px 0; /* Add right padding */
  position: fixed;
  bottom: 0;
  width: calc(100% - 250px); /* Adjust for sidebar width */
  left: 250px; /* Sidebar width */
  background-color: transparent;
}

h1 {
  color: #2c3e50;
  padding-bottom: 10px;
  margin-bottom: 30px;
}

h1:after {
  content: "";
  display: block;
  width: 50px;
  height: 2px;
  background: #2c3e50;
  margin: 10px auto 0;
}

.dashboard-info {
  display: flex;
  justify-content: space-around;
  background-color: #2c3e50;
  border-radius: 5px;
  padding: 20px;
  color: #ffffff;
}

.info-item {
  text-align: center;
  flex: 1;
  margin: 0 10px;
}

.info-item h2 {
  font-size: 1.5em;
}

.info-item p {
  font-size: 1.2em;
}
</style>
