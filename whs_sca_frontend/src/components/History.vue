<template>
  <div class="history">
    <main>
      <h1>History</h1>
      <div class="project-list-wrapper">
        <ul class="project-list">
          <li v-for="project in projects" :key="project.id" @click="goToProjectHistory(project.id)">
            <div class="project-card">
              {{ project.name }} - Last analyzed on {{ project.lastAnalyzed }}
            </div>
          </li>
        </ul>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'History',
  data() {
    return {
      projects: [
        { id: 1, name: 'Project A', lastAnalyzed: '2024-06-15' },
        { id: 2, name: 'Project B', lastAnalyzed: '2024-06-14' },
        { id: 3, name: 'Project C', lastAnalyzed: '2024-06-13' }
      ]
    }
  },
  methods: {
    goToProjectHistory(projectId) {
      this.$router.push(`/project-history/${projectId}`)
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

.history {
  padding: 20px;
  text-align: center;
}

h1 {
  margin-top: 50px;
  color: #538560;
}

.project-list-wrapper {
  border: 2px solid #538560;
  border-radius: 8px;
  padding: 20px;
  background-color: #d5ebd7;
}

.project-list {
  list-style-type: none;
  padding: 0;
}

.project-list li {
  background: #bde2c7;
  padding: 10px;
  margin: 10px 0;
  border: 2px solid #538560;
  border-radius: 4px;
  text-align: left;
  font-size: 1.2em;
  cursor: pointer;
}

.project-list li:hover .project-card {
  background-color: #85b492;
}

.project-card {
  border-radius: 4px;
}
</style>
